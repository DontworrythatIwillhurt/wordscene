/* Small reading app. Full learning code is requested only when it is needed. */
(function(){
  var books=WORDSCENE_READING_INDEX,design=window.WordsceneDesign,main=document.getElementById('main'),generation=0;
  var chapters=Object.create(null),payloads=Object.create(null),pending=Object.create(null),fullPromise=null,wordFocus=null;
  var assetVersions=window.WORDSCENE_ASSET_VERSIONS||{},key='wordscene-v2',closed=false;
  books.forEach(function(book){book.chapters.forEach(function(chapter,index){chapters[chapter.id]={chapter:chapter,book:book,index:index};});});
  function esc(value){return design.escape(value);}
  function rawState(){try{var s=JSON.parse(localStorage.getItem(key)||localStorage.getItem('wordscene-v1')||'{}');return s&&typeof s==='object'&&!Array.isArray(s)?s:{};}catch(e){return {};}}
  function serialState(s){var row=s.serial;return row&&typeof row==='object'&&!Array.isArray(row)?row:{completed:[],bookmarks:[],runs:{}};}
  function stateSerial(s){var row=serialState(s);return {lastChapter:typeof row.lastChapter==='string'?row.lastChapter:'',completed:Array.isArray(row.completed)?row.completed:[]};}
  function writeSerial(id,complete){
    var s=rawState(),serial=serialState(s);serial.lastChapter=id;
    if(complete){var done=Array.isArray(serial.completed)?serial.completed.slice():[];if(done.indexOf(id)<0)done.push(id);serial.completed=done;}
    s.serial=serial;if(!s.version)s.version=2;
    try{localStorage.setItem(key,JSON.stringify(s));return true;}catch(e){return false;}
  }
  function sync(){
    var s=rawState();document.body.classList.toggle('night',!!(s.preferences&&s.preferences.night));
    var theme=document.querySelector('meta[name="theme-color"]');if(theme)theme.setAttribute('content',s.preferences&&s.preferences.night?'#161618':'#f2f9ff');
    var route=location.hash.split('/')[0].slice(1)||'library';
    document.body.dataset.view=route;main.dataset.view=route==='serial'?'serial':route;
    document.querySelectorAll('[data-nav]').forEach(function(a){var active=a.dataset.nav===(route==='serial'?'library':route);a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    var due=document.getElementById('nav-due');if(due)due.hidden=true;
    var size=s.preferences&&s.preferences.size;if([18,20,22,24].indexOf(size)>=0)document.documentElement.style.setProperty('--reading-size',size+'px');
  }
  function panel(message,retry){
    var el=document.getElementById('shell-status');if(!el){el=document.createElement('section');el.id='shell-status';el.className='shell-panel';el.setAttribute('aria-live','polite');main.insertBefore(el,main.firstChild);}
    el.innerHTML='<p>'+esc(message)+'</p>'+(retry?'<button class="button secondary" data-shell-retry>重试加载</button> <a class="text-link" href="#library">回到藏书室 →</a>':'');
  }
  function version(path){var v=assetVersions[path]||(path.indexOf('serial-chapters/')===0?assetVersions['serial-chapters']:'');return path+(v?'?v='+v:'');}
  function script(path,verify){
    function attempt(n){return new Promise(function(resolve,reject){
      var el=document.createElement('script'),done=false,timer;
      function finish(error){if(done)return;done=true;clearTimeout(timer);el.onload=el.onerror=null;if(error){el.remove();reject(error);}else resolve();}
      el.async=true;el.charset='utf-8';el.src=version(path)+(n?(version(path).indexOf('?')<0?'?':'&')+'attempt='+n+'-'+Date.now():'');
      timer=setTimeout(function(){finish(Error('下载超时，请检查网络后重试。'));},25000);
      el.onload=function(){finish(verify&&!verify()?Error('文件未下载完整，请重试。'):null);};el.onerror=function(){finish(Error('暂时无法连接，请稍后重试。'));};
      document.head.appendChild(el);
    }).catch(function(error){if(n>=2)throw error;return new Promise(function(resolve){setTimeout(resolve,n?800:250);}).then(function(){return attempt(n+1);});});}
    return attempt(0);
  }
  window.applySerialChapterPayload=function(payload){
    var ref=payload&&chapters[payload.id];if(!ref||payload.book!==ref.book.id||payload.version!==assetVersions['serial-chapters']||!Array.isArray(payload.cn)||!payload.cn.length||!Array.isArray(payload.en)||payload.cn.length!==payload.en.length)return false;
    function marks(text){var found=[],re=/\[\[([^|\]]+)\|([^\]]+)\]\]/g,m;while((m=re.exec(text)))found.push(m[1]);return found.sort().join('|');}
    for(var i=0;i<payload.cn.length;i++)if(typeof payload.cn[i]!=='string'||typeof payload.en[i]!=='string'||marks(payload.cn[i])!==marks(payload.en[i]))return false;
    payloads[payload.id]=payload;return true;
  };
  function chapterData(id){
    if(payloads[id])return Promise.resolve(payloads[id]);if(pending[id])return pending[id];
    var cache=window.wordsceneChapterCache;
    pending[id]=(cache?cache.get(id):Promise.resolve(null)).then(function(saved){
      if(saved&&window.applySerialChapterPayload(saved))return;
      return script('serial-chapters/'+id+'.js',function(){return !!payloads[id]||window.WORDSCENE_FULL_READY===true;});
    }).then(function(){var value=payloads[id];if(cache&&value)cache.put(value);return value;}).catch(function(error){delete pending[id];throw error;});
    return pending[id];
  }
  function directory(book){
    var serial=stateSerial(rawState()),completed=serial.completed;
    main.innerHTML='<div class="reader-top"><a class="back-link" href="#library">← 藏书室</a><a class="text-link" href="#serial/'+book.id+'/'+(chapters[serial.lastChapter]&&chapters[serial.lastChapter].book.id===book.id?serial.lastChapter:book.chapters[0].id)+'">接着读 →</a></div><section class="page-heading"><span class="serial-kicker">WORDSCENE COLLECTION / '+esc(book.category)+'</span><h1>'+esc(book.title)+'</h1><p>'+esc(book.synopsis)+'</p></section><section class="shell-directory">'+book.volumes.map(function(v,index){
      var number=v.number||v.volume||index+1,list=book.chapters.filter(function(c){return c.volume===number;});if(!list.length)return '';
      return '<details '+(index===0?'open':'')+'><summary>卷 '+number+' · '+esc(v.title||v.name||'故事继续')+'</summary><ol>'+list.map(function(c){return '<li><a href="#serial/'+book.id+'/'+c.id+'">'+esc(c.title)+' <span style="color:var(--gold)">'+(completed.indexOf(c.id)>=0?'· 已读':'')+'</span></a></li>';}).join('')+'</ol></details>';
    }).join('')+'</section>';
  }
  function markerHtml(text,paragraph){return esc(text).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,function(_,id,meaning){return '<button class="story-word" type="button" data-shell-word="'+id+'" data-shell-paragraph="'+paragraph+'">'+(id==='reservior'?'reservoir':id==='uptodate'?'up-to-date':id)+'<span>（'+meaning+'）</span></button>';});}
  function plain(text){return String(text||'').replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,function(_,id,label){return label;});}
  function reader(ref,payload){
    var chapter=ref.chapter,book=ref.book,next=book.chapters[ref.index+1],prev=book.chapters[ref.index-1];
    main.innerHTML='<div class="reader-top"><a class="back-link" href="#serial/'+book.id+'">← '+esc(book.title)+' · 目录</a><a class="text-link" href="#practice/journey/'+chapter.id+'">线索闯关 ↗</a></div><nav class="shell-tabs" aria-label="章节学习"><a class="active" href="#serial/'+book.id+'/'+chapter.id+'">沉浸阅读</a><a href="#serial/'+book.id+'/'+chapter.id+'/exercise">剧情填空</a><a href="#serial/'+book.id+'/'+chapter.id+'/listen">故事听力</a><a href="#serial/'+book.id+'/'+chapter.id+'/points">六级考点</a></nav><div class="shell-reading-tools"><button data-shell-bookmark="'+chapter.id+'">'+((Array.isArray(serialState(rawState()).bookmarks)?serialState(rawState()).bookmarks:[]).indexOf(chapter.id)>=0?'★ 已留书签':'☆ 留个书签')+'</button><button data-shell-size="-1" aria-label="缩小字号">A−</button><button data-shell-size="1" aria-label="增大字号">A＋</button><button data-shell-night>纸页 / 夜读</button></div><article class="reader-paper webnovel-paper"><div class="serial-kicker">'+esc(book.title)+' / CHAPTER '+String(ref.index+1).padStart(2,'0')+' · '+book.chapters.length+'</div><h1>'+esc(chapter.title)+'</h1><p class="practice-label">点击划线词，查看本段英文与语境释义。</p>'+payload.cn.map(function(p,index){return '<p class="shell-paragraph">'+markerHtml(p,index)+'</p>';}).join('')+'<details><summary>对照本章英文</summary>'+payload.en.map(function(p){return '<p class="shell-paragraph" lang="en">'+esc(plain(p))+'</p>';}).join('')+'</details><div class="hero-actions"><button class="button" data-shell-complete="'+chapter.id+'">'+(stateSerial(rawState()).completed.indexOf(chapter.id)>=0?'✓ 这一章已读':'这一章读完了')+'</button><a class="text-link" href="#serial/'+book.id+'/'+chapter.id+'/exercise">把关键词填回来 →</a></div><p class="practice-label" id="shell-save-note">阅读完成只记录章节进度，不增加单词掌握。</p></article><div class="shell-pagination">'+(prev?'<a class="button secondary" href="#serial/'+book.id+'/'+prev.id+'">← 上一章</a>':'<a class="button secondary" href="#serial/'+book.id+'">全书目录</a>')+(next?'<a class="button secondary" href="#serial/'+book.id+'/'+next.id+'">下一章 →</a>':'<a class="button secondary" href="#practice">去练一练 →</a>')+'</div>';
    writeSerial(chapter.id,false);sync();
  }
  function closeWord(){var modal=document.getElementById('shell-word');if(modal)modal.remove();document.body.classList.remove('dialog-open');if(wordFocus&&wordFocus.element&&document.contains(wordFocus.element))wordFocus.element.focus();}
  function showWord(button){
    var id=button.dataset.shellWord,ref=chapters[location.hash.split('/')[2]],paragraph=Number(button.dataset.shellParagraph),payload=ref&&payloads[ref.chapter.id];if(!payload)return;
    var re=/\[\[([^|\]]+)\|([^\]]+)\]\]/g,m,meaning='',surface=id;
    while((m=re.exec(payload.cn[paragraph])))if(m[1]===id)meaning=m[2];re.lastIndex=0;while((m=re.exec(payload.en[paragraph])))if(m[1]===id)surface=m[2];
    closeWord();wordFocus={id:id,hash:location.hash,element:button};var modal=document.createElement('div');modal.id='shell-word';modal.className='shell-word-backdrop';
    modal.innerHTML='<section class="shell-word-card" role="dialog" aria-modal="true" aria-labelledby="shell-word-title"><button data-shell-close aria-label="关闭词卡">×</button><small class="serial-kicker">'+esc(ref.book.title)+' / 本段语境</small><h2 id="shell-word-title" lang="en">'+esc(id==='reservior'?'reservoir':id==='uptodate'?'up-to-date':id)+'</h2><p>'+esc(meaning)+'</p><p lang="en">'+esc(plain(payload.en[paragraph]))+'</p><p style="color:var(--muted);font-size:12px">'+esc(surface!==id?'原句词形：'+surface:'点击下方打开完整词卡、收藏与联想笔记。')+'</p><button class="button secondary" data-shell-full-word="'+esc(id)+'">完整词卡与笔记 ↗</button></section>';
    document.body.appendChild(modal);document.body.classList.add('dialog-open');modal.querySelector('button').focus();
  }
  function learning(){
    if(window.WORDSCENE_FULL_READY===true)return Promise.resolve();if(fullPromise)return fullPromise;
    var hash=location.hash,y=window.scrollY;window.WORDSCENE_READING_HANDOFF={hash:hash,y:(!hash||hash==='#library'||(/^#serial\/[^/]+\/[^/]+(?:\/read)?$/.test(hash)))?y:0};
    panel('正在打开练习与学习记录，当前故事仍可阅读。');
    if(!document.querySelector('link[data-learning-style]')){
      var link=document.createElement('link');link.rel='stylesheet';link.href=version('app.css');link.dataset.learningStyle='true';document.head.appendChild(link);
    }
    fullPromise=script('wordscene.compat.js',function(){return window.WORDSCENE_FULL_READY===true;}).then(function(){closed=true;closeWord();var status=document.getElementById('shell-status');if(status)status.remove();}).catch(function(error){fullPromise=null;panel(error.message,true);throw error;});
    return fullPromise;
  }
  window.wordsceneOpenLearning=learning;
  function route(){
    if(closed||window.WORDSCENE_FULL_READY===true)return;
    closeWord();var current=++generation,hash=location.hash,parts=hash.slice(1).split('/'),name=parts[0]||'library';sync();
    if(name==='library'){main.innerHTML=design.home(books,stateSerial(rawState()));main.dataset.shellRoute=hash;return;}
    if(name==='serial'){
      var book=books.filter(function(b){return b.id===parts[1];})[0],ref=chapters[parts[2]];
      if(book&&!parts[2]){directory(book);main.dataset.shellRoute=hash;return;}
      if(ref&&ref.book===book&&(!parts[3]||parts[3]==='read')){
        panel('正在取出这一章…');chapterData(ref.chapter.id).then(function(payload){
          if(current!==generation||hash!==location.hash||closed||window.WORDSCENE_FULL_READY===true)return;
          reader(ref,payload);main.dataset.shellRoute=hash;window.scrollTo(0,0);
        }).catch(function(error){if(current===generation&&hash===location.hash&&!closed)panel(error.message,true);});return;
      }
    }
    learning().catch(function(){});
  }
  document.addEventListener('click',function(event){
    if(closed||window.WORDSCENE_FULL_READY===true)return;
    var target=event.target,button=target.closest('button'),word=target.closest('[data-shell-word]');
    if(word){event.preventDefault();showWord(word);return;}
    if(target.id==='shell-word'||target.closest('[data-shell-close]')){event.preventDefault();closeWord();return;}
    if(!button)return;
    if(button.hasAttribute('data-shell-retry')){if(location.hash.split('/')[3]||location.hash.indexOf('#serial/')!==0)learning().catch(function(){});else route();return;}
    if(button.hasAttribute('data-shell-full-word')){var id=button.dataset.shellFullWord,hash=location.hash;closeWord();learning().then(function(){if(location.hash===hash&&typeof window.wordModal==='function')window.wordModal(id);}).catch(function(){});return;}
    if(button.hasAttribute('data-shell-complete')){var ok=writeSerial(button.dataset.shellComplete,true);button.textContent='✓ 这一章已读';document.getElementById('shell-save-note').textContent=ok?'已保存阅读进度。词汇掌握由独立答题记录。':'本机暂时无法保存，请打开学习备份导出记录。';return;}
    if(button.hasAttribute('data-shell-bookmark')){var saved=rawState(),ser=serialState(saved),sid=button.dataset.shellBookmark,marks=Array.isArray(ser.bookmarks)?ser.bookmarks:[];ser.bookmarks=marks.indexOf(sid)>=0?marks.filter(function(id){return id!==sid;}):marks.concat(sid);saved.serial=ser;try{localStorage.setItem(key,JSON.stringify(saved));button.textContent=ser.bookmarks.indexOf(sid)>=0?'★ 已留书签':'☆ 留个书签';}catch(e){panel('暂时无法保存书签，请打开学习备份导出记录。');}return;}
    if(button.hasAttribute('data-shell-night')||button.hasAttribute('data-shell-size')){
      var s=rawState();s.preferences=s.preferences&&typeof s.preferences==='object'?s.preferences:{};
      if(button.hasAttribute('data-shell-night'))s.preferences.night=!s.preferences.night;
      else s.preferences.size=Math.max(18,Math.min(24,(Number(s.preferences.size)||20)+Number(button.dataset.shellSize)*2));
      try{localStorage.setItem(key,JSON.stringify(s));}catch(e){panel('本机暂时无法保存设置；当前页面仍可阅读。');}sync();return;
    }
    if(button.id==='goal-button'||button.id==='about-button'){var bid=button.id;learning().then(function(){document.getElementById(bid).click();}).catch(function(){});}
  },true);
  document.addEventListener('keydown',function(event){
    if(closed)return;
    if(event.key==='Escape'){closeWord();return;}
    var modal=document.getElementById('shell-word');if(event.key!=='Tab'||!modal)return;
    var buttons=modal.querySelectorAll('button'),first=buttons[0],last=buttons[buttons.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  window.addEventListener('hashchange',route);
  window.addEventListener('storage',function(event){if(event.key===key&&!closed)route();});
  function boot(){
    route();if(typeof window.wordsceneMarkReady==='function')window.wordsceneMarkReady();
    var ready=document.createEvent('Event');ready.initEvent('wordscene:shelf-ready',false,false);window.dispatchEvent(ready);
    setTimeout(function(){try{if('serviceWorker' in navigator)navigator.serviceWorker.register('service-worker.js').catch(function(){});}catch(e){}},1500);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
