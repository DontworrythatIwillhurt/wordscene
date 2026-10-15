/* Cache only this site's public, versioned files. No learner or AI requests. */
var cacheName='wordscene-public-'+WORDSCENE_OFFLINE.revision;
var siteBase=self.registration.scope;
var indexKey=new URL('./',siteBase).href;
function safePut(cache,key,response){
  if(!response||response.status!==200||response.type==='opaque')return Promise.resolve();
  return cache.put(key,response.clone()).catch(function(){});
}
self.addEventListener('install',function(event){
  event.waitUntil(caches.open(cacheName).then(function(cache){
    return Promise.all(WORDSCENE_OFFLINE.core.map(function(path){
      var url=new URL(path,siteBase).href;
      return fetch(url,{cache:'reload'}).then(function(response){
        if(!response.ok)throw Error('Offline files incomplete');
        return cache.put(url,response);
      });
    }));
  }).catch(function(error){return caches.delete(cacheName).then(function(){throw error;});}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(event){
  event.waitUntil(caches.keys().then(function(keys){
    // Retain one previous generation for tabs that were already open.
    var old=keys.filter(function(key){return key.indexOf('wordscene-public-')===0&&key!==cacheName;});
    return Promise.all(old.slice(0,-1).map(function(key){return caches.delete(key);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(event){
  var request=event.request,url=new URL(request.url),scope=new URL(siteBase);
  if(request.method!=='GET'||url.origin!==scope.origin||url.href.indexOf(siteBase)!==0)return;
  var path=url.pathname.slice(scope.pathname.length);
  if(request.mode==='navigate'&&(path===''||path==='index.html')){
    event.respondWith(caches.open(cacheName).then(function(cache){
      var network=fetch(request).then(function(response){
        if(!response.ok)throw Error('Page unavailable');
        return safePut(cache,indexKey,response).then(function(){return response;});
      });
      event.waitUntil(network.then(function(){},function(){}));
      var cached=cache.match(indexKey);
      return new Promise(function(resolve,reject){
        var settled=false,timer=setTimeout(function(){
          cached.then(function(response){if(response&&!settled){settled=true;resolve(response);}});
        },3000);
        network.then(function(response){clearTimeout(timer);if(!settled){settled=true;resolve(response);}},function(error){
          clearTimeout(timer);cached.then(function(response){if(!settled){settled=true;response?resolve(response):reject(error);}});
        });
      });
    }).catch(function(){return fetch(request);}));
    return;
  }
  var version=WORDSCENE_OFFLINE.versions[path]||WORDSCENE_OFFLINE.versions[path.split('/').pop()];
  if(path.indexOf('serial-chapters/')===0)version=WORDSCENE_OFFLINE.versions['serial-chapters'];
  if(path.indexOf('dictionary-parts/')===0)version=WORDSCENE_OFFLINE.versions['dictionary-parts'];
  if(!version||url.searchParams.get('v')!==version)return;
  var refresh=url.searchParams.has('attempt');
  url.searchParams.delete('attempt');
  var key=url.href;
  event.respondWith(caches.open(cacheName).then(function(cache){
    // A retry can mean a cached file failed the app's version/content checks.
    return (refresh?cache.delete(key).then(function(){return null;}):cache.match(key)).then(function(cached){
      if(cached)return cached;
      return fetch(request).then(function(response){return safePut(cache,key,response).then(function(){return response;});});
    });
  }).catch(function(){return fetch(request);}));
});
