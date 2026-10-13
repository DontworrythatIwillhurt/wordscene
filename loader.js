/* Lazy-load dictionary, novels, stories and practice packs via classic script tags. */
(function(){
  var assetVersions=window.WORDSCENE_ASSET_VERSIONS||{};
  var pending={};
  var loadedScripts={};
  var routeGeneration=0;
  var bootFinished=false;

  function versioned(path){
    var file=path.split('/').pop();
    var version=assetVersions[path]||assetVersions[file]||'';
    if(path.indexOf('serial-chapters/')===0)version=assetVersions['serial-chapters']||version;
    if(path.indexOf('dictionary-parts/')===0)version=assetVersions['dictionary-parts']||version;
    return version?path+(path.indexOf('?')>=0?'&':'?')+'v='+version:path;
  }

  function loadScript(path,attempt){
    var src=versioned(path);
    if(pending[src])return pending[src];
    if(loadedScripts[src])return Promise.resolve();
    pending[src]=new Promise(function(resolve,reject){
      var script=document.createElement('script');
      var done=false;
      script.src=src+(attempt?(src.indexOf('?')<0?'?':'&')+'attempt='+attempt+'-'+Date.now():'');
      script.async=true;
      script.charset='utf-8';
      script.dataset.wordsceneSrc=src;
      var timer=setTimeout(function(){
        if(done)return;
        done=true;
        pending[src]=null;
        if(script.parentNode)script.parentNode.removeChild(script);
        reject(new Error('加载超时：'+path));
      },25000);
      script.onload=function(){if(done)return;done=true;clearTimeout(timer);loadedScripts[src]=true;resolve();};
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

  function loadScriptRetry(path,verify){
    function attempt(number){return loadScript(path,number).then(function(){if(verify&&!verify())throw new Error('内容不完整，请重新加载');}).catch(function(error){
      var src=versioned(path);delete pending[src];delete loadedScripts[src];
      if(number>=2)throw error;
      return new Promise(function(resolve){setTimeout(resolve,number?800:250);}).then(function(){return attempt(number+1);});
    });}
    return attempt(0);
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
      panel.innerHTML='<h1></h1><p></p><button class="button" type="button" data-retry-content hidden>重新加载本页</button> <a class="text-link" href="#library">返回书架</a>';
    }
    panel.querySelector('h1').textContent=message||'正在加载内容…';
    panel.querySelector('p').textContent='首次打开会下载词库或故事正文，完成后即可继续。学习记录不会丢失。';
    panel.querySelector('button').hidden=true;
    if(!panel.parentNode)main.insertAdjacentElement('afterbegin',panel);
    panel.hidden=false;
  }

  function hideDataLoading(){
    var panel=document.getElementById('data-loading-panel');
    if(panel)panel.hidden=true;
  }

  function refreshIndexes(){
    if(typeof WORDSCENE_DICTIONARY_PARTS!=='undefined')WORDSCENE_DICTIONARY_PARTS.forEach(function(words,bucket){applyWordsceneDictionaryPayload({bucket:bucket,words:words});});
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
    if(!chapter)return Promise.reject(new Error('目录里没有找到这一章'));
    var revision=assetVersions['serial-chapters'];
    var cache=window.wordsceneChapterCache;
    return (cache?cache.get(id):Promise.resolve(null)).then(function(payload){
      if(payload&&payload.version===revision&&applySerialChapterPayload(payload))return;
      return loadScriptRetry('serial-chapters/'+id+'.js',function(){var row=SERIAL_CHAPTER_INDEX.get(id);return row&&row.cn&&row.cn.length;});
    }).then(function(){
      var row=SERIAL_CHAPTER_INDEX.get(id);
      if(cache)cache.put({id:id,book:row.book.id,cn:row.cn,en:row.en,version:revision});
      return row;
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
      var generation=++routeGeneration;
      var requestedHash=location.hash;
      if(typeof serialStopAudio==='function')serialStopAudio();
      if(typeof wordDialog!=='undefined'&&wordDialog.open)wordDialog.close();
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
      }else if(route==='practice'&&section){
        if(section!=='journey')chain=ensureTrainingData();
      }else if(route==='practice'&&!hasIndex){
        chain=ensureSerialIndex();
      }else if(route==='archive'){
        chain=ensureCatalogData();
      }else if(route==='story'&&id){
        chain=ensureCatalogData().then(function(){return ensureStoryData(id);});
      }else if(route==='notebook'||route==='units'||route==='review'||route==='quiz'||route==='progress'){
        chain=ensureCatalogData();
      }
      return chain.then(function(){
        if(generation!==routeGeneration||location.hash!==requestedHash)return;
        try{originalRender();}catch(error){console.error(error);throw error;}
        document.getElementById('main').dataset.loadedRoute=requestedHash;
        markReady();
      }).catch(function(error){
        if(generation!==routeGeneration||location.hash!==requestedHash)return;
        showDataLoading('内容加载失败');
        var el=document.getElementById('data-loading-panel');
        if(el){el.querySelector('p').textContent='这次没有加载完整，请检查网络后重试。已读章节和学习记录仍保留。';el.querySelector('button').hidden=false;}
        window.WORDSCENE_LAST_LOAD_ERROR=error&&error.message;
        markReady();
      });
    };

    var originalReader=window.reader;
    window.reader=function(id){
      var requestedHash=location.hash;
      if(typeof SERIAL_CHAPTER_INDEX!=='undefined'&&SERIAL_CHAPTER_INDEX.has(id)){
        return ensureSerialChapter(id).then(function(){if(location.hash===requestedHash)originalReader(id);});
      }
      return ensureCatalogData().then(function(){return ensureStoryData(id);}).then(function(){if(location.hash===requestedHash)originalReader(id);});
    };

    var originalWordModal=window.wordModal;
    var originalListeningReader=window.listeningReader;
    window.listeningReader=function(story){
      originalListeningReader(story);
      if(listeningSession.mode!=='questions'||LISTENING_QUESTION_INDEX.has(story.id))return;
      var session=listeningSession,hash=location.hash;
      ensureListeningQuestions().then(function(){
        if(location.hash===hash&&listeningSession===session&&clozeView==='listen'){
          session.comprehension=null;originalListeningReader(story);
        }
      }).catch(function(){
        if(location.hash===hash&&listeningSession===session){var panel=document.querySelector('.comprehension-panel');if(panel)panel.insertAdjacentHTML('beforeend','<button class="button secondary" data-retry-listening>重试加载理解题</button>');}
      });
    };
    window.wordModal=function(id){
      originalWordModal(id);
      var dialog=document.getElementById('word-dialog');
      if(dialog&&dialog.open&&WORDSCENE_CORE_INDEX.get(id)?.hasDictionary&&!WORDSCENE_DETAIL_IDS.has(id)){
        dialog.querySelector('.word-source').insertAdjacentHTML('beforebegin','<button type="button" class="text-link" data-dictionary-detail>查看完整释义与音标</button>');
      }
    };
    document.addEventListener('click',function(event){
      if(event.target.closest('[data-retry-content]')){window.render();return;}
      if(event.target.closest('[data-retry-listening]')){window.listeningReader(getStory(listeningSession.id));return;}
      var button=event.target.closest('[data-dictionary-detail]');if(!button)return;
      var id=selectedWord,hash=location.hash,hashValue=0;
      for(var i=0;i<id.length;i++)hashValue=(hashValue*31+id.charCodeAt(i))>>>0;
      var bucket=hashValue%64;button.disabled=true;button.textContent='正在读取释义…';
      loadScriptRetry('dictionary-parts/'+bucket+'.js',function(){return WORDSCENE_DICTIONARY_PARTS.has(bucket)&&WORDSCENE_DETAIL_IDS.has(id);}).then(function(){
        if(selectedWord===id&&wordDialog.open&&location.hash===hash)originalWordModal(id);
      }).catch(function(){if(button.isConnected){button.disabled=false;button.textContent='释义没能加载，点击重试';}});
    });
  }

  function boot(){
    if(!document.getElementById('main')){
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
      else setTimeout(boot,0);
      return;
    }
    try{
      wrapAsyncRoute();
      markReady();
      window.render();
    }catch(error){
      console.error(error);
      showDataLoading('内容加载失败');
      var el=document.getElementById('data-loading-panel');
      if(el)el.querySelector('p').textContent=(error&&error.message)||'请检查网络后重试，或点击顶部重新加载。';
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
