/* Lazy-load dictionary and story bodies via classic script tags (works on file://). */
(function(){
  var assetVersions=window.WORDSCENE_ASSET_VERSIONS||{};
  var pending={};
  var bootFinished=false;

  function versioned(path){
    var file=path.split('/').pop();
    var version=assetVersions[file]||assetVersions[path]||'';
    return version?path+(path.indexOf('?')>=0?'&':'?')+'v='+version:path;
  }

  function loadScript(path){
    var src=versioned(path);
    if(pending[src])return pending[src];
    pending[src]=new Promise(function(resolve,reject){
      var existing=document.querySelector('script[data-wordscene-src="'+src+'"]');
      if(existing){resolve();return;}
      var script=document.createElement('script');
      script.src=src;
      script.async=false;
      script.dataset.wordsceneSrc=src;
      script.onload=function(){resolve();};
      script.onerror=function(){pending[src]=null;reject(new Error('无法加载 '+path));};
      document.head.appendChild(script);
    });
    return pending[src];
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

  window.ensureStoryData=function(storyId){
    var story=typeof getStory==='function'?getStory(storyId):STORY_INDEX.get(storyId);
    var category=story&&story.category;
    if(!category&&WORDSCENE_CATALOG){
      var entry=WORDSCENE_CATALOG.stories.find(function(s){return s.id===storyId;});
      category=entry&&entry.category;
    }
    var key=category==='修仙志'?'cultivation':category==='悬疑案'?'mystery':null;
    var tasks=[];
    if(key&&!WORDSCENE_DATA_STATE[key]){
      tasks.push(loadScript('data/stories-'+key+'.js').then(function(){
        mergeStoryChunk(globalThis['WORDSCENE_CHUNK_'+key]);
        WORDSCENE_DATA_STATE[key]=true;
      }));
    }
    // Core STORY_DATA / CHAPTERS stories still need cloze text from the matching theme chunk.
    // If both themes not loaded and story is shell, load its theme.
    if(!tasks.length&&story&&story._shell&&key){
      tasks.push(loadScript('data/stories-'+key+'.js').then(function(){
        mergeStoryChunk(globalThis['WORDSCENE_CHUNK_'+key]);
        WORDSCENE_DATA_STATE[key]=true;
      }));
    }
    if(!tasks.length&&story&&!story._shell)return Promise.resolve(story);
    if(!tasks.length)return Promise.resolve(story);
    showDataLoading('正在打开故事…');
    return Promise.all(tasks).then(function(){
      // Load cloze for originals: theme chunks include cloze for that category.
      // Also ensure we have expanded+cloze merged then reassemble.
      // If dictionary already present, keep it.
      if(typeof CLOZE_STORIES==='undefined'||!(globalThis.CLOZE_STORIES||[]).length){
        // Theme chunk should have populated CLOZE_STORIES via mergeStoryChunk
      }
      rebuildAfterChunks();
      // If only one theme loaded, assemble still uses all EXPANDED so far + STORY_DATA + chapters.
      // Cloze revisions for unloaded theme stay as original cn until that chunk loads — ok.
      hideDataLoading();
      return STORY_INDEX.get(storyId);
    }).catch(function(error){
      hideDataLoading();
      toast&&toast(error.message||'故事加载失败');
      throw error;
    });
  };

  window.ensureDictionaryData=function(){
    if(WORDSCENE_DATA_STATE.dictionary&&globalThis.DICTIONARY_WORDS&&globalThis.DICTIONARY_WORDS.length){
      return Promise.resolve();
    }
    showDataLoading('正在加载完整词库…');
    return loadScript('dictionary.js').then(function(){
      WORDSCENE_DATA_STATE.dictionary=true;
      var expanded=globalThis.EXPANDED_STORIES||[];
      var cloze=globalThis.CLOZE_STORIES||[];
      if(expanded.length&&cloze.length){
        assembleWordsceneData(expanded,cloze,globalThis.DICTIONARY_WORDS);
      }else if(WORDSCENE_DATA_STATE.shell){
        // Enrich catalog words later when stories load; for now merge dictionary into BUILTIN
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
      toast&&toast(error.message||'词库加载失败');
      throw error;
    });
  };

  window.ensureAllStoryData=function(){
    var tasks=[];
    if(!WORDSCENE_DATA_STATE.cultivation){
      tasks.push(loadScript('data/stories-cultivation.js').then(function(){
        mergeStoryChunk(globalThis.WORDSCENE_CHUNK_cultivation);
        WORDSCENE_DATA_STATE.cultivation=true;
      }));
    }
    if(!WORDSCENE_DATA_STATE.mystery){
      tasks.push(loadScript('data/stories-mystery.js').then(function(){
        mergeStoryChunk(globalThis.WORDSCENE_CHUNK_mystery);
        WORDSCENE_DATA_STATE.mystery=true;
      }));
    }
    if(!tasks.length){
      if(WORDSCENE_DATA_STATE.shell)rebuildAfterChunks();
      return Promise.resolve();
    }
    showDataLoading('正在加载全部故事…');
    return Promise.all(tasks).then(function(){
      rebuildAfterChunks();
      hideDataLoading();
    });
  };

  function wrapAsyncRoute(){
    var originalRender=window.render;
    window.render=function(){
      var hash=location.hash.slice(1);
      var parts=hash.split('/');
      var route=parts[0]||'library';
      var id=parts[1];
      var chain=Promise.resolve();
      if(route==='story'&&id){
        chain=ensureStoryData(id);
      }else if(route==='notebook'||route==='units'||route==='review'||route==='quiz'||route==='progress'){
        chain=ensureDictionaryData().then(function(){
          // progress/review work better with full story word meanings
          if(route==='progress'||route==='review')return ensureAllStoryData();
        });
      }
      return chain.then(function(){
        originalRender();
        var panel=document.getElementById('startup-panel');
        if(panel&&panel.parentNode)panel.remove();
        bootFinished=true;
      }).catch(function(error){
        var panel=document.getElementById('startup-panel')||document.getElementById('main');
        if(panel){
          showDataLoading('内容加载失败');
          var el=document.getElementById('data-loading-panel');
          if(el)el.querySelector('p').textContent=(error&&error.message)||'请检查文件是否完整，或点击顶部重试。';
        }
      });
    };

    var originalReader=window.reader;
    window.reader=function(id){
      return ensureStoryData(id).then(function(){originalReader(id);});
    };

    var originalWordModal=window.wordModal;
    window.wordModal=function(id){
      ensureDictionaryData().then(function(){originalWordModal(id);}).catch(function(){originalWordModal(id);});
    };
  }

  function boot(){
    wrapAsyncRoute();
    // Replace sync render() already invoked by learning/cloze with a data-aware pass.
    window.render();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
