/* Lazy-load dictionary, novels, stories and practice packs via classic script tags. */
(function(){
  var assetVersions=window.WORDSCENE_ASSET_VERSIONS||{};
  var pending={};
  var bootFinished=false;

  function versioned(path){
    var file=path.split('/').pop();
    var version=assetVersions[path]||assetVersions[file]||'';
    if(path.indexOf('serial-chapters/')===0)version=assetVersions['serial-chapters']||version;
    return version?path+(path.indexOf('?')>=0?'&':'?')+'v='+version:path;
  }

  function loadScript(path){
    var src=versioned(path);
    if(pending[src])return pending[src];
    pending[src]=new Promise(function(resolve,reject){
      var existing=document.querySelector('script[data-wordscene-src="'+src+'"]');
      if(existing){resolve();return;}
      var script=document.createElement('script');
      var done=false;
      script.src=src;
      script.async=false;
      script.charset='utf-8';
      script.dataset.wordsceneSrc=src;
      var timer=setTimeout(function(){
        if(done)return;
        done=true;
        pending[src]=null;
        if(script.parentNode)script.parentNode.removeChild(script);
        reject(new Error('加载超时：'+path));
      },20000);
      script.onload=function(){if(done)return;done=true;clearTimeout(timer);resolve();};
      script.onerror=function(){
        if(done)return;
        done=true;
        clearTimeout(timer);
        pending[src]=null;
        if(script.parentNode)script.parentNode.removeChild(script);
        reject(new Error('无法加载 '+path));
      };
      document.head.appendChild(script);
    });
    return pending[src];
  }

  function loadScriptRetry(path){
    return loadScript(path).catch(function(){
      pending[versioned(path)]=null;
      return loadScript(path);
    });
  }

  function showDataLoading(message){
    var main=document.getElementById('main');
    if(!main)return;
    var panel=document.getElementById('data-loading-panel');
    if(!panel){
      panel=document.createElement('div');
      panel.id='data-loading-panel';
      panel.className='startup-panel data-loading-panel';
      panel.setAttribute('aria-live','polite');
      panel.innerHTML='<h1></h1><p></p>';
    }
    panel.querySelector('h1').textContent=message||'正在加载内容…';
    panel.querySelector('p').textContent='首次打开会下载词库或故事正文，完成后即可继续。学习记录不会丢失。';
    if(!panel.parentNode)main.insertAdjacentElement('afterbegin',panel);
    panel.hidden=false;
  }

  function hideDataLoading(){
    var panel=document.getElementById('data-loading-panel');
    if(panel)panel.hidden=true;
  }

  function refreshIndexes(){
    if(typeof refreshWordIndex==='function')refreshWordIndex();
  }

  function rebuildAfterChunks(){
    var dict=globalThis.DICTIONARY_WORDS||[];
    var expanded=globalThis.EXPANDED_STORIES||[];
    var cloze=globalThis.CLOZE_STORIES||[];
    if(!expanded.length||!cloze.length)return false;
    assembleWordsceneData(expanded,cloze,dict);
    refreshIndexes();
    return true;
  }

  function markReady(){
    bootFinished=true;
    var panel=document.getElementById('startup-panel');
    if(panel&&panel.parentNode)panel.remove();
    if(typeof wordsceneMarkReady==='function')wordsceneMarkReady();
  }

  function prefetch(path){
    var link=document.createElement('link');
    link.rel='prefetch';
    link.as='script';
    link.href=versioned(path);
    document.head.appendChild(link);
  }

  window.ensureCatalogData=function(){
    if(typeof WORDSCENE_CATALOG!=='undefined'&&WORDSCENE_CATALOG&&WORDSCENE_CATALOG.stories&&WORDSCENE_CATALOG.stories.length){
      if(!(STORIES&&STORIES.length)&&typeof assembleFromCatalog==='function')assembleFromCatalog();
      return Promise.resolve();
    }
    showDataLoading('正在打开拓展语境…');
    return loadScriptRetry('catalog.js').then(function(){
      if(typeof assembleFromCatalog==='function')assembleFromCatalog();
      refreshIndexes();
      hideDataLoading();
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'目录加载失败');
      throw error;
    });
  };

  window.ensureSerialIndex=function(){
    if(typeof SERIAL_INDEX!=='undefined'&&SERIAL_INDEX&&SERIAL_INDEX.length){
      if(typeof buildSerialIndexes==='function')buildSerialIndexes();
      return Promise.resolve();
    }
    showDataLoading('正在打开故事书架…');
    return loadScriptRetry('serial-index.js').then(function(){
      if(typeof buildSerialIndexes==='function')buildSerialIndexes();
      hideDataLoading();
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'书架加载失败');
      throw error;
    });
  };

  window.ensureSerialChapter=function(id){
    var chapter=typeof SERIAL_CHAPTER_INDEX!=='undefined'?SERIAL_CHAPTER_INDEX.get(id):null;
    if(chapter&&Array.isArray(chapter.cn)&&chapter.cn.length)return Promise.resolve(chapter);
    if(!id)return Promise.resolve(chapter);
    showDataLoading('正在打开本章正文…');
    return loadScriptRetry('serial-chapters/'+id+'.js').then(function(){
      hideDataLoading();
      var loaded=typeof SERIAL_CHAPTER_INDEX!=='undefined'?SERIAL_CHAPTER_INDEX.get(id):null;
      if(!loaded||!Array.isArray(loaded.cn)||!loaded.cn.length)throw new Error('本章正文还没准备好');
      prefetchNextChapter(id);
      return loaded;
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'本章正文加载失败');
      throw error;
    });
  };

  function prefetchNextChapter(id){
    var chapter=typeof SERIAL_CHAPTER_INDEX!=='undefined'?SERIAL_CHAPTER_INDEX.get(id):null;
    var next=chapter&&chapter.book&&chapter.book.chapters&&chapter.book.chapters[chapter.index+1];
    if(next)prefetch('serial-chapters/'+next.id+'.js');
  }

  window.ensureSerialFullData=function(id){
    var parts=location.hash.slice(1).split('/');
    var chapterId=id||(parts[0]==='serial'?parts[2]:(parts[0]==='practice'&&parts[1]==='journey'?parts[2]:''));
    if(chapterId)return ensureSerialChapter(chapterId);
    return ensureSerialIndex();
  };

  window.ensureTrainingData=function(){
    if(typeof CONTEXT_PRACTICE!=='undefined'&&CONTEXT_PRACTICE&&CONTEXT_PRACTICE.length){
      if(typeof buildTrainingIndexes==='function')buildTrainingIndexes();
      return Promise.resolve();
    }
    showDataLoading('正在加载实战练习…');
    return loadScriptRetry('training-data.js').then(function(){
      if(typeof buildTrainingIndexes==='function')buildTrainingIndexes();
      hideDataLoading();
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'练习内容加载失败');
      throw error;
    });
  };

  window.ensureListeningQuestions=function(){
    if(typeof LISTENING_QUESTIONS!=='undefined'&&LISTENING_QUESTIONS&&LISTENING_QUESTIONS.length){
      if(typeof buildListeningQuestionIndex==='function')buildListeningQuestionIndex();
      return Promise.resolve();
    }
    showDataLoading('正在加载听力题…');
    return loadScriptRetry('listening-questions.js').then(function(){
      if(typeof buildListeningQuestionIndex==='function')buildListeningQuestionIndex();
      hideDataLoading();
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'听力题加载失败');
      throw error;
    });
  };

  window.ensureStoryData=function(storyId){
    var story=typeof getStory==='function'?getStory(storyId):STORY_INDEX.get(storyId);
    var category=story&&story.category;
    if(!category&&typeof WORDSCENE_CATALOG!=='undefined'&&WORDSCENE_CATALOG){
      var entry=WORDSCENE_CATALOG.stories.find(function(s){return s.id===storyId;});
      category=entry&&entry.category;
    }
    var key=category==='修仙志'?'cultivation':category==='悬疑案'?'mystery':null;
    var tasks=[];
    if(key&&!WORDSCENE_DATA_STATE[key]){
      tasks.push(loadScriptRetry('data/stories-'+key+'.js').then(function(){
        mergeStoryChunk(globalThis['WORDSCENE_CHUNK_'+key]);
        WORDSCENE_DATA_STATE[key]=true;
      }));
    }
    if(!tasks.length&&story&&story._shell&&key){
      tasks.push(loadScriptRetry('data/stories-'+key+'.js').then(function(){
        mergeStoryChunk(globalThis['WORDSCENE_CHUNK_'+key]);
        WORDSCENE_DATA_STATE[key]=true;
      }));
    }
    if(!tasks.length&&story&&!story._shell)return Promise.resolve(story);
    if(!tasks.length)return Promise.resolve(story);
    showDataLoading('正在打开故事…');
    return Promise.all(tasks).then(function(){
      rebuildAfterChunks();
      hideDataLoading();
      return STORY_INDEX.get(storyId);
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'故事加载失败');
      throw error;
    });
  };

  window.ensureDictionaryData=function(){
    if(WORDSCENE_DATA_STATE.dictionary&&globalThis.DICTIONARY_WORDS&&globalThis.DICTIONARY_WORDS.length){
      return Promise.resolve();
    }
    showDataLoading('正在加载完整词库…');
    return loadScriptRetry('dictionary.js').then(function(){
      WORDSCENE_DATA_STATE.dictionary=true;
      var expanded=globalThis.EXPANDED_STORIES||[];
      var cloze=globalThis.CLOZE_STORIES||[];
      if(expanded.length&&cloze.length){
        assembleWordsceneData(expanded,cloze,globalThis.DICTIONARY_WORDS);
      }else if(WORDSCENE_DATA_STATE.shell){
        var merged=new Map((globalThis.DICTIONARY_WORDS||[]).map(function(w){return [w.id,Object.assign({},w)];}));
        EXTRA_WORDS.forEach(function(w){if(!merged.has(w.id))merged.set(w.id,w);});
        STORY_WORDS.forEach(function(w){
          var old=merged.get(w.id)||{};
          merged.set(w.id,Object.assign({},old,w,{
            dictionaryMeaning:old.dictionaryMeaning||old.meaning||w.meaning,
            storyIds:[].concat(old.storyIds||[],w.storyId?[w.storyId]:[]).filter(function(v,i,a){return a.indexOf(v)===i;})
          }));
        });
        BUILTIN_WORDS=[...merged.values()];
        BUILTIN_INDEX=new Map(BUILTIN_WORDS.map(function(w){return [w.id,w];}));
        COVERAGE.reference=(globalThis.DICTIONARY_WORDS||[]).length;
        COVERAGE.total=BUILTIN_WORDS.length;
        COVERAGE.contextual=(globalThis.DICTIONARY_WORDS||[]).filter(function(w){return CONTEXTUAL_IDS.has(w.id);}).length;
        COVERAGE.coveredTotal=BUILTIN_WORDS.filter(function(w){return CONTEXTUAL_IDS.has(w.id);}).length;
      }
      refreshIndexes();
      hideDataLoading();
    }).catch(function(error){
      hideDataLoading();
      if(typeof toast==='function')toast(error.message||'词库加载失败');
      throw error;
    });
  };

  window.ensureAllStoryData=function(){
    return ensureCatalogData().then(function(){
      var tasks=[];
      if(!WORDSCENE_DATA_STATE.cultivation){
        tasks.push(loadScriptRetry('data/stories-cultivation.js').then(function(){
          mergeStoryChunk(globalThis.WORDSCENE_CHUNK_cultivation);
          WORDSCENE_DATA_STATE.cultivation=true;
        }));
      }
      if(!WORDSCENE_DATA_STATE.mystery){
        tasks.push(loadScriptRetry('data/stories-mystery.js').then(function(){
          mergeStoryChunk(globalThis.WORDSCENE_CHUNK_mystery);
          WORDSCENE_DATA_STATE.mystery=true;
        }));
      }
      if(!tasks.length){
        if(WORDSCENE_DATA_STATE.shell)rebuildAfterChunks();
        return;
      }
      showDataLoading('正在加载全部故事…');
      return Promise.all(tasks).then(function(){
        rebuildAfterChunks();
        hideDataLoading();
      });
    });
  };

  function wrapAsyncRoute(){
    var originalRender=window.render;
    window.render=function(){
      var hash=location.hash.slice(1);
      var parts=hash.split('/');
      var route=parts[0]||'library';
      var section=parts[1];
      var id=parts[2]||parts[1];
      var hasIndex=typeof SERIAL_INDEX!=='undefined'&&SERIAL_INDEX&&SERIAL_INDEX.length;
      var chain=Promise.resolve();
      if(route==='serial'&&parts[2]){
        chain=ensureSerialChapter(parts[2]);
      }else if((route==='serial'||route==='library'||route==='')&&!hasIndex){
        chain=ensureSerialIndex();
      }else if(route==='practice'&&section==='journey'&&parts[2]){
        chain=ensureSerialChapter(parts[2]);
      }else if(route==='practice'&&section==='journey'&&!hasIndex){
        chain=ensureSerialIndex();
      }else if(route==='practice'&&section&&section!=='home'){
        chain=ensureTrainingData();
      }else if(route==='practice'&&!hasIndex){
        chain=ensureSerialIndex();
      }else if(route==='archive'){
        chain=ensureCatalogData();
      }else if(route==='story'&&id){
        chain=ensureCatalogData().then(function(){return ensureStoryData(id);});
      }else if(route==='notebook'||route==='units'||route==='review'||route==='quiz'||route==='progress'){
        chain=ensureDictionaryData().then(function(){
          if(route==='progress'||route==='review')return ensureAllStoryData();
        });
      }
      return chain.then(function(){
        try{originalRender();}catch(error){console.error(error);throw error;}
        markReady();
      }).catch(function(error){
        showDataLoading('内容加载失败');
        var el=document.getElementById('data-loading-panel');
        if(el)el.querySelector('p').textContent=(error&&error.message)||'请检查网络后重试，或点击顶部重新加载。';
      });
    };

    var originalReader=window.reader;
    window.reader=function(id){
      if(typeof SERIAL_CHAPTER_INDEX!=='undefined'&&SERIAL_CHAPTER_INDEX.has(id)){
        return ensureSerialChapter(id).then(function(){originalReader(id);});
      }
      return ensureCatalogData().then(function(){return ensureStoryData(id);}).then(function(){originalReader(id);});
    };

    var originalWordModal=window.wordModal;
    window.wordModal=function(id){
      ensureDictionaryData().then(function(){originalWordModal(id);}).catch(function(){originalWordModal(id);});
    };
  }

  function boot(){
    if(!document.getElementById('main')){
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
      else setTimeout(boot,0);
      return;
    }
    try{
      wrapAsyncRoute();
      window.render();
    }catch(error){
      console.error(error);
      showDataLoading('内容加载失败');
      var el=document.getElementById('data-loading-panel');
      if(el)el.querySelector('p').textContent=(error&&error.message)||'请检查网络后重试，或点击顶部重新加载。';
    }
    setTimeout(function(){
      prefetch('catalog.js');
    },2500);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
