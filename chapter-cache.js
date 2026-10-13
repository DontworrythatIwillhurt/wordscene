/* Optional offline chapter copies; learning progress stays in its existing store. */
(function(){
  var connection=null;
  function open(){
    if(connection)return connection;
    connection=new Promise(function(resolve){
      if(!window.indexedDB){resolve(null);return;}
      var settled=false,request,timer=setTimeout(function(){finish(null);},600);
      function finish(db){if(settled){if(db)db.close();return;}settled=true;clearTimeout(timer);resolve(db);}
      try{
        request=indexedDB.open('wordscene-chapters-v1',1);
        request.onupgradeneeded=function(){if(!request.result.objectStoreNames.contains('chapters'))request.result.createObjectStore('chapters',{keyPath:'id'});};
        request.onsuccess=function(){finish(request.result);};request.onerror=function(){finish(null);};request.onblocked=function(){finish(null);};
      }catch(error){finish(null);}
    });
    return connection;
  }
  function transact(mode,payload){return open().then(function(db){return new Promise(function(resolve){
    if(!db){resolve(null);return;}
    var done=false,timer=setTimeout(function(){finish(null);},600);
    function finish(value){if(done)return;done=true;clearTimeout(timer);resolve(value);}
    try{
      var transaction=db.transaction('chapters',mode),store=transaction.objectStore('chapters'),request=mode==='readonly'?store.get(payload):store.put(payload);
      request.onsuccess=function(){if(mode==='readonly')finish(request.result||null);};
      transaction.oncomplete=function(){if(mode!=='readonly')finish(payload);};transaction.onerror=transaction.onabort=function(){finish(null);};
    }catch(error){finish(null);}
  });});}
  window.wordsceneChapterCache={get:function(id){return transact('readonly',id);},put:function(payload){return transact('readwrite',payload);}};
})();
