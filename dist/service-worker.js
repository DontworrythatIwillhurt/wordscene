var WORDSCENE_OFFLINE={"revision":"c4df835583f9","versions":{"wordscene.compat.js":"033e25332866","serial-index.js":"3f2cc71da7fc","serial-data.js":"cfec498a5900","catalog.js":"314981300905","dictionary.js":"0b0d87dbc12b","startup.js":"85e151372536","app.css":"5407b501f6bd","listening-questions.js":"38cf771025c3","training-data.js":"f0783524839e","phrase-data.js":"5b184ae2c0f8","vocabulary-meanings.js":"d4e66493e871","reading-shell.js":"574313eb8779","expanded-stories.js":"a4b2e3d53925","cloze-stories.js":"0c1c9aef2a1c","stories-cultivation.js":"ba6f9cc8eb53","stories-mystery.js":"e01be325356a","serial-chapters":"0a6b940755c1","dictionary-parts":"0b0d87dbc12b","vocabulary-meanings":"92942aebc73b"},"core":["./","reading-shell.js?v=574313eb8779"]};
/* Cache only this site's public, versioned files. No learner or AI requests. */
var cacheName='wordscene-public-'+WORDSCENE_OFFLINE.revision;
var siteBase=self.registration.scope;
var indexKey=new URL('./',siteBase).href;
self.addEventListener('message',function(event){
  if(event.data&&event.data.type==='wordscene-cache-version'&&event.ports&&event.ports[0])event.ports[0].postMessage({revision:WORDSCENE_OFFLINE.revision,cache:cacheName});
});
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
      // Finish reading the saved page before starting a competing cache write.
      return cache.match(indexKey).then(function(cached){
      if(cached&&self.navigator.onLine===false)return cached;
      var controller=typeof AbortController==='function'?new AbortController():null;
      var network=fetch(request,controller?{signal:controller.signal}:{}).then(function(response){
        if(!response.ok)throw Error('Page unavailable');
        return safePut(cache,indexKey,response).then(function(){return response;});
      });
      return new Promise(function(resolve,reject){
        var settled=false,timer=setTimeout(function(){
          if(cached&&!settled){settled=true;resolve(cached);if(controller)controller.abort();}
        },3000);
        network.then(function(response){clearTimeout(timer);if(!settled){settled=true;resolve(response);}},function(error){
          clearTimeout(timer);if(!settled){settled=true;cached?resolve(cached):reject(error);}
        });
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
