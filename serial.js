/* Two continuous novels and low-pressure recall tied to their actual scenes. */
let SERIAL_BOOK_INDEX=new Map();
let SERIAL_CHAPTER_INDEX=new Map();
let SERIAL_TOTAL_CHAPTERS=0;
let SERIAL_WORD_CHAPTERS=new Map();
let SERIAL_COVERED_IDS=new Set();
function serialBooks(){
  if(typeof SERIAL_NOVELS!=='undefined'&&SERIAL_NOVELS&&SERIAL_NOVELS.length)return SERIAL_NOVELS;
  if(typeof SERIAL_INDEX!=='undefined'&&SERIAL_INDEX&&SERIAL_INDEX.length)return SERIAL_INDEX;
  return [];
}
function serialTerms(chapter){
  if(Array.isArray(chapter.cn)&&chapter.cn.some(p=>String(p).includes('[[')))return storySlots(chapter);
  return (chapter.wordIds||[]).map(id=>({id,meaning:(chapter.wordMeanings&&chapter.wordMeanings[id])||''}));
}
function buildSerialIndexes(){
  const books=serialBooks();
  SERIAL_BOOK_INDEX=new Map(books.map(b=>[b.id,b]));
  SERIAL_CHAPTER_INDEX=new Map();
  books.forEach(book=>book.chapters.forEach((chapter,index)=>SERIAL_CHAPTER_INDEX.set(chapter.id,{...chapter,book,index,number:index+1,category:book.category})));
  SERIAL_TOTAL_CHAPTERS=SERIAL_CHAPTER_INDEX.size;
  SERIAL_WORD_CHAPTERS=new Map();
  SERIAL_CHAPTER_INDEX.forEach(chapter=>{
    serialTerms(chapter).forEach(term=>{
      if(!SERIAL_WORD_CHAPTERS.has(term.id))SERIAL_WORD_CHAPTERS.set(term.id,[]);
      const paragraph=Array.isArray(chapter.cn)?chapter.cn.findIndex(p=>p.includes('[['+term.id+'|')):-1;
      SERIAL_WORD_CHAPTERS.get(term.id).push({id:chapter.id,book:chapter.book.id,title:chapter.title,bookTitle:chapter.book.title,number:chapter.number,paragraph,meaning:term.meaning});
    });
  });
  SERIAL_COVERED_IDS=new Set(SERIAL_WORD_CHAPTERS.keys());
}
function applySerialChapterPayload(payload){
  if(!payload||!payload.id)return false;
  const chapter=SERIAL_CHAPTER_INDEX.get(payload.id);
  if(!chapter||payload.book!==chapter.book.id)return false;
  const revision=window.WORDSCENE_ASSET_VERSIONS?.['serial-chapters'];
  if(revision&&payload.version!==revision)return false;
  if(!Array.isArray(payload.cn)||!payload.cn.length||!Array.isArray(payload.en)||payload.cn.length!==payload.en.length)return false;
  const ids=[];
  for(let i=0;i<payload.cn.length;i++){
    if(typeof payload.cn[i]!=='string'||typeof payload.en[i]!=='string')return false;
    const markers=text=>wordsceneMatches(text,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).map(m=>m[1]).sort();
    const cn=markers(payload.cn[i]),en=markers(payload.en[i]);
    if(JSON.stringify(cn)!==JSON.stringify(en))return false;ids.push(...cn);
  }
  if(JSON.stringify([...new Set(ids)].sort())!==JSON.stringify((chapter.wordIds||ids).slice().sort())||new Set(ids).size!==ids.length)return false;
  chapter.cn=payload.cn;
  chapter.en=payload.en;
  const source=chapter.book&&chapter.book.chapters&&chapter.book.chapters[chapter.index];
  if(source){source.cn=chapter.cn;source.en=chapter.en;}
  for(const term of serialTerms(chapter)){
    const reference=(SERIAL_WORD_CHAPTERS.get(term.id)||[]).find(ref=>ref.id===chapter.id);
    if(reference){reference.paragraph=chapter.cn.findIndex(p=>p.includes('[['+term.id+'|'));reference.meaning=term.meaning;}
  }
  return true;
}
buildSerialIndexes();
if(Array.isArray(window.SERIAL_CHAPTER_QUEUE)){
  window.SERIAL_CHAPTER_QUEUE.forEach(applySerialChapterPayload);
  window.SERIAL_CHAPTER_QUEUE.length=0;
}
const serialFlatten=(rows,fn)=>rows.reduce((all,row,index)=>all.concat(fn(row,index)),[]);
function serialFormatEnglish(text){return text.split(/(\[\[.*?\]\])/g).map(part=>{if(!part.startsWith('[['))return esc(part);const [id,surface]=part.slice(2,-2).split('|');return `<button class="word-inline" data-word="${esc(id)}" lang="en">${esc(surface||id)}</button>`;}).join('');}
let serialGame=null,serialSpeechGeneration=0,serialAudioActive=false,serialUtterance=null;
function cleanSerial(raw){
  const base={lastChapter:'',completed:[],bookmarks:[],runs:{}};
  if(!raw||typeof raw!=='object')return base;
  base.lastChapter=SERIAL_CHAPTER_INDEX.has(raw.lastChapter)?raw.lastChapter:'';
  for(const key of ['completed','bookmarks'])base[key]=Array.isArray(raw[key])?[...new Set(raw[key].filter(id=>SERIAL_CHAPTER_INDEX.has(id)))]:[];
  if(raw.runs&&typeof raw.runs==='object')for(const [key,r] of Object.entries(raw.runs)){
    const [id,mode]=key.split(':');
    if(SERIAL_CHAPTER_INDEX.has(id)&&['choice','spell','listen'].includes(mode)&&r&&Number.isInteger(r.correct)&&Number.isInteger(r.total)&&r.total>0&&r.total<=12&&r.correct>=0&&r.correct<=r.total)base.runs[key]={correct:r.correct,total:r.total,attempts:Math.max(1,Math.floor(Number(r.attempts)||1)),updatedAt:Math.max(0,Number(r.updatedAt)||0)};
  }
  return base;
}
function mergeSerial(current,incoming){
  const result=cleanSerial(current),other=cleanSerial(incoming);
  result.completed=[...new Set([...result.completed,...other.completed])];result.bookmarks=[...new Set([...result.bookmarks,...other.bookmarks])];
  if(!result.lastChapter)result.lastChapter=other.lastChapter;
  for(const [key,r] of Object.entries(other.runs))if(!result.runs[key]||r.updatedAt>result.runs[key].updatedAt)result.runs[key]=r;
  return result;
}
const cleanBeforeSerial=cleanState;
cleanState=function(raw){const s=cleanBeforeSerial(raw);s.serial=cleanSerial(raw?.serial);return s;};
try{state=cleanState(JSON.parse(localStorage.getItem(KEY)||'null')||state);}catch{state=cleanState(state);}
function serialContinue(book){const remembered=book.chapters.findIndex(c=>c.id===state.serial.lastChapter);if(remembered>=0){const chapter=book.chapters[remembered];if(!state.serial.completed.includes(chapter.id))return chapter;const next=book.chapters.slice(remembered+1).find(c=>!state.serial.completed.includes(c.id));if(next)return next;}return book.chapters.find(c=>!state.serial.completed.includes(c.id))||book.chapters[Math.max(remembered,0)]||book.chapters[0];}
function serialVolumes(book){
  const groups=[];
  book.chapters.forEach((chapter,index)=>{const number=chapter.volume||1;let group=groups.find(v=>v.number===number);if(!group){group={number,title:book.volumes?.find(v=>v.number===number)?.title||book.title,chapters:[]};groups.push(group);}group.chapters.push({...chapter,number:index+1});});
  return groups;
}
function serialVolumeTitle(chapter){return chapter.book.volumes?.find(v=>v.number===(chapter.volume||1))?.title||chapter.book.title;}
function serialChapterRows(book,chapters,journey=false){return chapters.map(c=>{
  const records=['choice','spell','listen'].map(m=>state.serial.runs[c.id+':'+m]).filter(Boolean);
  return `<a class="serial-chapter-row" href="${journey?'#practice/journey/'+c.id:'#serial/'+book.id+'/'+c.id}"><span class="serial-chapter-number">${String(c.number).padStart(2,'0')}</span><div><h3>${esc(c.title)} ${state.serial.bookmarks.includes(c.id)?'<span aria-label="已加书签">☆</span>':''}</h3>${journey?'':`<p>${esc(c.summary)}</p>`}<small>${journey?(records.length?'已走过 '+records.length+' 种回忆方式':'等待第一次回忆'):serialTerms(c).length+' 个语境词 · '+(state.serial.completed.includes(c.id)?'✓ 已读':'未读')}</small></div><span aria-hidden="true">→</span></a>`;
}).join('');}
function serialVolumeDirectory(book,journey=false){
  const current=serialContinue(book);
  return serialVolumes(book).map(volume=>`<details class="serial-volume" data-volume="${volume.number}" ${(current.volume||1)===volume.number?'open':''}><summary><span>第 ${volume.number} 卷 · ${esc(volume.title)}</span><small>${volume.chapters[0].number}—${volume.chapters[volume.chapters.length-1].number} 章 · ${volume.chapters.filter(c=>state.serial.completed.includes(c.id)).length}/${volume.chapters.length} 已读</small></summary><div class="serial-volume-chapters">${serialChapterRows(book,volume.chapters,journey)}</div></details>`).join('');
}
function serialBookCard(book,index){
  const completed=book.chapters.filter(c=>state.serial.completed.includes(c.id)).length,chapter=serialContinue(book);
  return `<article class="serial-book"><a class="serial-book-cover" href="#serial/${book.id}"><div class="serial-book-no">NOVEL ${String(index+1).padStart(2,'0')} · ${esc(book.category)}</div><h2>${esc(book.title)}</h2><p>${esc(book.subtitle)}</p><span class="serial-seal" aria-hidden="true">${index?'谜':'契'}</span><span class="serial-spine">WORDSCENE ORIGINAL</span></a><div class="serial-book-body"><div class="serial-book-meta"><span>${serialVolumes(book).length} 卷 · ${book.chapters.length} 章</span><span>已读 ${completed} / ${book.chapters.length}</span></div><p>${esc(book.synopsis)}</p><div class="serial-route-progress" role="img" aria-label="已读 ${completed} 章，共${book.chapters.length}章"><i style="width:${completed/book.chapters.length*100}%"></i></div><div class="hero-actions"><a class="button" href="#serial/${book.id}/${chapter.id}">${completed?'继续阅读':'翻开第一章'} ↗</a><a class="text-link" href="#serial/${book.id}">分卷目录 →</a></div></div></article>`;
}
const libraryBeforeSerial=library;
library=function(){
  if(!main)return;
  const books=serialBooks();
  if(!books.length){main.dataset.view='serial';main.innerHTML='<section class="startup-panel"><h1>正在打开故事书架…</h1><p>目录还在加载，请稍候。</p></section>';applyPreferences();return;}
  const chapter=SERIAL_CHAPTER_INDEX.get(state.serial.lastChapter)||SERIAL_CHAPTER_INDEX.get(books[0].chapters[0].id);
  const coreWords=new Set(serialFlatten(books,b=>serialFlatten(b.chapters,c=>serialTerms(c).map(t=>t.id))));
  const totalWords=(typeof SERIAL_INDEX_META!=='undefined'&&SERIAL_INDEX_META.words)||COVERAGE.total||BUILTIN_WORDS.length||coreWords.size;
  main.dataset.view='serial';
  main.innerHTML=`<section class="serial-hero"><div><div class="serial-kicker">WORDSCENE · A STORY TO REMEMBER</div><h1>读到下一章，<br>也记住<em>下一个词。</em></h1><p>一纸山契，牵出被藏起的旧账。<br>一张船票，带你走进第七码头的雨夜。<br>让人物、线索和转折，成为单词的记忆。</p><div class="hero-actions"><a class="button" href="#serial/${chapter.book.id}/${chapter.id}">${state.serial.lastChapter?'接着上次的剧情':'开始我的故事'} <span>↗</span></a><a class="text-link" href="#practice">去剧情闯关 →</a></div></div><div class="serial-art" aria-hidden="true"><small>THE WORDSCENE COLLECTION</small><strong>山契<br><span>第七码头</span></strong><div class="serial-seal">词间</div><p>故事有下一章<br>记忆有回响</p><span class="serial-spine">READ · RECALL · RETURN</span></div></section><section class="serial-rewards" aria-label="学习概览"><div><strong>02</strong><span>原创连续小说</span></div><div><strong>${SERIAL_TOTAL_CHAPTERS}</strong><span>剧情章节</span></div><div><strong>${state.serial.completed.length}</strong><span>已经读完的章节</span></div></section><div class="serial-section-title"><div class="serial-kicker">CHOOSE YOUR STORY</div><h2>今夜，翻开哪一本？</h2><p>同一组人物，同一条主线。按顺序读，伏笔才有回声。</p></div><section class="serial-shelf">${books.map(serialBookCard).join('')}</section><section class="serial-entry"><div><div class="serial-kicker">RECALL IN THE SCENE</div><h2>记住线索，再往前走。</h2><p>认出关键词、填回关键动作，或听英文找线索。每次八个词，不设倒计时。</p></div><a class="button secondary" href="#practice">进入剧情闯关 →</a></section><section class="serial-archive-note"><h2>跟着长篇，走过完整词库。</h2><p>长篇正文覆盖 ${coreWords.size} / ${totalWords} 词（${totalWords?(coreWords.size / totalWords * 100).toFixed(1):'0'}%）。${coreWords.size===totalWords?'所有内置词都能在主线剧情及对应英文里找到。':'尚有词汇正在写入后续剧情。'}旧笔记、书签和学习记录继续保留；原短篇可作为额外语境阅读。</p><a class="text-link" href="#archive">打开拓展语境 →</a> <a class="text-link" href="#notebook">查看完整词库 →</a></section>`;
  applyPreferences();
};
function serialBookPage(id){
  const book=SERIAL_BOOK_INDEX.get(id);if(!book){serialNotFound();return;}
  const chapter=serialContinue(book);main.dataset.view='serial';
  main.innerHTML=`<div class="reader-top"><a class="back-link" href="#library">← 回到两本故事</a><a class="button secondary compact" href="#serial/${book.id}/${chapter.id}">继续阅读 →</a></div><section class="page-heading"><div class="serial-kicker">${esc(book.category)} · ${serialVolumes(book).length} 卷 / ${book.chapters.length} 章</div><h1>${esc(book.title)}</h1><p>${esc(book.synopsis)}</p></section><details class="serial-character-list"><summary>同行的人 · 人物介绍</summary><section class="serial-map">${book.characters.map(c=>`<p><b>${esc(c.name)}</b> ${esc(c.description)}</p>`).join('')}</section></details><div class="serial-section-title"><h2>分卷目录</h2><p>各卷承接前面的剧情；展开一卷，按章节顺序阅读。</p></div><section class="serial-chapters">${serialVolumeDirectory(book)}</section>`;applyPreferences();
}
function serialNotFound(){main.innerHTML='<section class="empty-state"><h2>这一章还没找到</h2><a class="button" href="#library">回到书架</a></section>';}
let serialReadView='read',serialReadId='';
function serialRead(id,view){
  const chapter=SERIAL_CHAPTER_INDEX.get(id);if(!chapter){serialNotFound();return;}
  if(!Array.isArray(chapter.cn)||!chapter.cn.length){
    const load=typeof ensureSerialChapter==='function'?ensureSerialChapter:ensureSerialFullData;
    if(typeof load==='function'){load(id).then(()=>serialRead(id,view)).catch(()=>serialNotFound());return;}
    serialNotFound();return;
  }
  if(serialReadId!==id){serialReadId=id;serialReadView='read';}if(view)serialReadView=view;
  const session=ensureCloze(chapter);clozeView=serialReadView;const exercise=serialReadView==='exercise';
  state.serial.lastChapter=id;save();main.dataset.view='serial';clozeParagraph.index=0;
  const prev=chapter.book.chapters[chapter.index-1],next=chapter.book.chapters[chapter.index+1];
  main.innerHTML=`<div class="reader-top"><a class="back-link" href="#serial/${chapter.book.id}">← ${esc(chapter.book.title)} · 目录</a><div class="reader-controls"><button class="button secondary compact" data-serial-action="bookmark" data-serial-id="${id}">${state.serial.bookmarks.includes(id)?'★ 已加书签':'☆ 留个书签'}</button><button class="button secondary compact" data-serial-action="focus">${document.body.classList.contains('focus-mode')?'退出专注':'专注阅读'}</button></div></div><div class="cloze-steps serial-reading-steps"><button data-serial-view="read" class="${exercise?'':'active'}" aria-pressed="${!exercise}"><small>01 · READ</small>沉浸阅读</button><button data-serial-view="exercise" class="${exercise?'active':''}" aria-pressed="${exercise}"><small>02 · RECALL</small>剧情填空</button><a href="#practice/journey/${id}"><small>03 · EXPLORE</small>线索闯关 ↗</a></div>${readerTools()}<article class="reader-paper webnovel-paper"><div class="serial-kicker">${esc(chapter.book.title)} · 卷 ${chapter.volume||1} · CHAPTER ${String(chapter.number).padStart(2,'0')} / ${chapter.book.chapters.length}</div><h1>${esc(chapter.title)}</h1><aside class="serial-recap"><b>${chapter.index?'前情回顾':'故事开始之前'}</b><p>${esc(chapter.recap)}</p></aside><p class="practice-label">原创故事 · ${serialTerms(chapter).length} 个语境词 · 阅读进度与词汇掌握分别记录</p>${exercise?`<div class="cloze-toolbar"><label><input id="cloze-hints" type="checkbox" ${session.hints?'checked':''}> 首字母提示</label><span id="cloze-counter" role="status" aria-live="polite"></span></div>${clozeResultSummary()}<form id="cloze-form" novalidate><div class="webnovel-text">${chapter.cn.map(p=>`<p class="webnovel-paragraph">${clozeParagraph(p,true)}</p>`).join('')}</div><div class="cloze-actions">${session.checked?`<button type="button" class="button" data-cloze-action="restart">重新填一遍</button>${!session.revealed&&session.results.includes('wrong')?'<button type="button" class="button secondary" data-cloze-action="retry">重练错词</button>':''}`:'<button type="submit" class="button">核对本章回忆 →</button><button type="button" class="button secondary" data-cloze-action="reveal">查看参考答案</button>'}</div></form>`:`<div class="webnovel-text">${chapter.cn.map(p=>`<p class="webnovel-paragraph">${clozeParagraph(p,false)}</p>`).join('')}</div><div class="cloze-actions"><button class="button" data-serial-view="exercise">把剧情里的词填回来 →</button><button class="text-link" data-serial-action="complete" data-serial-id="${id}">${state.serial.completed.includes(id)?'✓ 本章已读':'标记本章已读'}</button></div><details class="story-original"><summary>读一遍对应英文</summary>${chapter.en.map((p,i)=>`<section><p class="translation english-second" lang="en">${serialFormatEnglish(p)}</p><button class="text-link" data-serial-speak="${i}" data-serial-id="${id}">▷ 听这一段英文</button></section>`).join('')}<p id="serial-speech-status" role="status">朗读使用设备英语语音。</p><button class="text-link" data-serial-action="stop">停止朗读</button></details>`}<div class="serial-entry"><div><h2>这章的线索，记住了吗？</h2><p>八个词的小旅程，回到人物刚刚做出的决定。</p></div><a class="button secondary" href="#practice/journey/${id}">去线索闯关 →</a></div><div class="chapter-nav">${prev?`<a href="#serial/${chapter.book.id}/${prev.id}">← ${esc(prev.title)}</a>`:'<a href="#serial/'+chapter.book.id+'">回到目录</a>'}${next?`<a href="#serial/${chapter.book.id}/${next.id}">${esc(next.title)} →</a>`:'<a href="#serial/'+chapter.book.id+'">全书读完，回到目录 →</a>'}</div></article>`;
  updateClozeCounter();applyPreferences();
}
// Existing cloze checking keeps all spelling variants and duplicate-submit guards.
const readerBeforeSerial=reader;
reader=function(id){if(SERIAL_CHAPTER_INDEX.has(id)){serialReadView=clozeView==='exercise'?'exercise':'read';serialRead(id,serialReadView);}else{delete main.dataset.view;readerBeforeSerial(id);}};
const trainingHomeBeforeSerial=trainingHome;
trainingHome=function(){return serialJourneyMenu()+`<details class="serial-exam-fold"><summary>选修：六级题型与写译练习</summary><p>准备考前训练时，再展开这里。</p>${trainingHomeBeforeSerial()}</details>`;};
const trainingHeaderBeforeSerial=trainingHeader;
trainingHeader=function(section){if(section==='home')return '<div class="page-heading"><div class="serial-kicker">WORDSCENE · RECALL THE STORY</div><h1>沿着线索，把词想起来。</h1><p>故事读过了，记忆也可以有一段旅程。</p></div>';return trainingHeaderBeforeSerial(section);};
function serialJourneyMenu(){
  const books=serialBooks();
  if(!books.length)return '<section class="startup-panel"><h1>正在打开剧情闯关…</h1><p>目录还在加载，请稍候。</p></section>';
  const last=SERIAL_CHAPTER_INDEX.get(state.serial.lastChapter)||SERIAL_CHAPTER_INDEX.get(books[0].chapters[0].id);
  return `<section class="serial-entry"><div><div class="serial-kicker">YOUR NEXT SCENE</div><h2>${esc(last.book.title)} · ${esc(last.title)}</h2><p>认出线索 → 拼回动作 → 听出关键词。每轮八个词，答错可以再试，没有倒计时。</p></div><a class="button" href="#practice/journey/${last.id}">进入这一章 →</a></section><div class="serial-section-title"><h2>想回到哪段剧情？</h2><p>先读章节，再闯关，画面会帮你想起英文。</p></div><section class="serial-shelf">${books.map(book=>`<section class="serial-map"><h2>${esc(book.title)}</h2><div class="serial-journey-links">${serialVolumeDirectory(book,true)}</div></section>`).join('')}</section>`;
}
function serialGameSlots(chapter){return serialFlatten(chapter.cn,(p,paragraph)=>wordsceneMatches(p,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).map(m=>({id:m[1],meaning:m[2],paragraph})));}
function serialGameStart(id,mode='choice',retry=false){
  const chapter=SERIAL_CHAPTER_INDEX.get(id);if(!chapter){serialNotFound();return;}
  if(!Array.isArray(chapter.cn)||!chapter.cn.length){
    const load=typeof ensureSerialChapter==='function'?ensureSerialChapter:ensureSerialFullData;
    if(typeof load==='function'){load(id).then(()=>serialGameStart(id,mode,retry)).catch(()=>serialNotFound());return;}
    serialNotFound();return;
  }
  const allowed=['choice','spell','listen'];if(!allowed.includes(mode))mode='choice';serialStopAudio();
  let items=retry&&serialGame?.id===id&&serialGame.wrong.length?serialGame.wrong.map(item=>({...item})):shuffle(serialGameSlots(chapter)).slice(0,8);
  serialGame={id,mode,items,index:0,correct:0,wrong:[],answer:'',answered:false,revealed:false,heard:false,options:[],finished:false,committed:false};serialGamePage(id);scrollTrainingStart();
}
function serialMaskedScene(chapter,item){
  const paragraph=chapter.cn[item.paragraph],sentences=paragraph.match(/[^。！？]+[。！？]?/g)||[paragraph],at=sentences.findIndex(p=>p.includes('[['+item.id+'|'));
  const current=sentences[at]||paragraph,previous=at>0?sentences[at-1]:'';
  const text=(previous+current).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,'$2').length<=140?previous+current:current;
  return text.split(/(\[\[.*?\]\])/g).map(p=>{if(!p.startsWith('[['))return esc(p);const [id,meaning]=p.slice(2,-2).split('|');return id===item.id?`<span class="serial-gap">〔${esc(meaning)}〕</span>`:esc(meaning);}).join('');
}
function serialChoiceOptions(word,item){
  const result=[...new Map(skillMeaningOptions({...word,meaning:item.meaning}).filter(w=>w.id===item.id||!isClozeCorrect(clozeExpected(w.id),item.id)).map(w=>[w.id,w])).values()];
  const used=new Set(result.map(w=>w.id));
  for(const candidate of shuffle(BUILTIN_WORDS))if(result.length<4&&!used.has(candidate.id)&&!isClozeCorrect(clozeExpected(candidate.id),item.id)){result.push(candidate);used.add(candidate.id);}
  return shuffle(result);
}
function serialGamePage(id){
  const chapter=SERIAL_CHAPTER_INDEX.get(id);if(!chapter){serialNotFound();return;}main.dataset.view='serial';
  if(!serialGame||serialGame.id!==id){
    main.innerHTML=`<div class="reader-top"><a class="back-link" href="#practice">← 回到剧情闯关</a><a class="text-link" href="#serial/${chapter.book.id}/${id}">先读本章 →</a></div><section class="serial-session"><div class="serial-kicker">${esc(chapter.book.title)} · CHAPTER ${chapter.number}</div><h1>${esc(chapter.title)}</h1><p>${esc(chapter.summary)}</p><div class="serial-recap"><b>让画面帮你记忆</b><p>每轮从本章抽八个词。你可以认出英文、自己拼写，或听英文片段找词；答错会给出剧情里的依据。</p></div><div class="serial-game-modes"><button class="button" data-serial-start="choice" data-serial-id="${id}">找出线索 →</button><button class="button secondary" data-serial-start="spell" data-serial-id="${id}">拼回关键动作</button><button class="button secondary" data-serial-start="listen" data-serial-id="${id}">听音寻词</button></div><p class="practice-label">听音使用设备英语语音；不支持时可以选择另外两种方式。</p></section>`;applyPreferences();return;
  }
  const s=serialGame;
  if(s.finished){serialGameResult(chapter);return;}
  const item=s.items[s.index],word=getWord(item.id);
  if(!s.options.length)s.options=serialChoiceOptions(word,item);
  const modeLabel={choice:'找出线索',spell:'拼回动作',listen:'听音寻词'}[s.mode];
  main.innerHTML=`<div class="reader-top"><a class="back-link" href="#practice">← 暂别这段剧情</a><a class="text-link" href="#serial/${chapter.book.id}/${id}">翻回本章 →</a></div><section class="serial-session"><div class="serial-kicker">${esc(chapter.book.title)} · ${modeLabel}</div><h1>${esc(chapter.title)}</h1><div class="quiz-top"><span>线索 ${s.index+1} / ${s.items.length}</span><span>${s.correct} 个词已想起来</span></div><div class="serial-route-progress"><i style="width:${s.index/s.items.length*100}%"></i></div>${s.mode==='listen'?`<div class="serial-dialogue"><p>听这一段英文，找出表示「${esc(item.meaning)}」的词，填写它的原形。</p><button class="button secondary" data-serial-action="game-speak">▷ 听剧情英文</button><p id="serial-speech-status" role="status">先听完整段落，再试着回忆。</p></div>`:`<div class="serial-scene">${serialMaskedScene(chapter,item)}</div><p class="practice-label">${s.mode==='choice'?'这段剧情中的动作或线索，对应哪个英文词？':'把方括号里这个意思对应的英文原形拼回来。'}</p>`}${s.mode==='choice'?`<div class="serial-game-options">${s.options.map((w,i)=>`<button data-serial-answer="${esc(w.id)}" ${s.answered?'disabled':''} class="${s.answered?(w.id===item.id?'correct':s.answer===w.id?'wrong':''):''}"><b>${'ABCD'[i]}</b><span lang="en">${esc(clozeExpected(w.id))}</span></button>`).join('')}</div>`:`<form id="serial-spell-form"><label for="serial-spell-input">英文单词原形</label><input id="serial-spell-input" class="spelling-input" value="${esc(s.answer)}" maxlength="80" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" ${s.answered?'disabled':''}><button class="button" type="submit" ${s.answered?'disabled':''}>找回这个词 →</button></form>`}${s.mode==='listen'?`<div class="serial-game-modes"><button class="text-link" data-serial-start="choice" data-serial-id="${id}">改为找出线索</button><button class="text-link" data-serial-start="spell" data-serial-id="${id}">改为拼回动作</button></div>`:''}${s.answered?`<div class="serial-game-feedback ${isClozeCorrect(s.answer,item.id)&&!s.revealed?'good':'bad'}" role="status"><strong>${s.revealed?'线索已展开，本题不计掌握':isClozeCorrect(s.answer,item.id)?'线索找到了':'先记住这幅画面，下次再试'}</strong><p><b lang="en">${esc(clozeExpected(item.id))}</b> · ${esc(item.meaning)}</p><p>${esc(chapter.cn[item.paragraph].replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,(_,id,meaning)=>id===item.id?clozeExpected(id)+'（'+meaning+'）':meaning))}</p><button class="text-link" data-word="${esc(item.id)}">留下联想笔记 ↗</button></div><button class="button" data-serial-action="game-next">${s.index+1===s.items.length?'看看这次记住了什么':'继续找线索'} →</button>`:`<button class="text-link" data-serial-action="game-reveal">暂时想不起，看看这条线索</button>`}</section>`;applyPreferences();
}
function serialGameAnswer(value,reveal=false){
  const s=serialGame;if(!s||s.answered||s.finished)return;
  if(!reveal&&s.mode==='listen'&&!s.heard){toast('先听完这段英文，再回忆单词。');return;}
  if(!reveal&&!String(value).trim()){toast('先试着填写一个词，或者展开线索。');return;}
  if(!reveal&&s.mode==='choice'&&!s.options.some(w=>w.id===value))return;
  const item=s.items[s.index],correct=!reveal&&isClozeCorrect(value,item.id);s.answer=String(value||'');s.answered=true;s.revealed=reveal;
  if(correct)s.correct++;else s.wrong.push(item);
  if(!reveal)recordInSkills(item.id,correct,[s.mode==='choice'?'read':s.mode==='listen'?'listen':'spell']);
  serialStopAudio();serialGamePage(s.id);
}
function serialGameResult(chapter){
  const s=serialGame,next=chapter.book.chapters[chapter.index+1];
  if(!s.committed){const key=s.id+':'+s.mode,previous=state.serial.runs[key];state.serial.runs[key]={correct:s.correct,total:s.items.length,attempts:(previous?.attempts||0)+1,updatedAt:Date.now()};s.committed=true;save();}
  main.innerHTML=`<section class="serial-session"><div class="serial-kicker">A SCENE TO REMEMBER</div><h1>你找回了 ${s.correct} 个词。</h1><p>${esc(chapter.book.title)} · ${esc(chapter.title)} · 本轮 ${s.correct} / ${s.items.length}</p><div class="serial-recap"><b>故事会继续，词也会再见面。</b><p>${s.wrong.length?'尚未想起的词留在这里，答错的词也已经进入相应复习队列。展开过的线索不增加词汇掌握。':'这一轮词汇已写入对应复习队列，过几天再来，让记忆更牢。'}</p></div>${s.wrong.length?`<div class="serial-chips">${s.wrong.map(w=>`<button class="serial-chip" data-word="${esc(w.id)}">${esc(clozeExpected(w.id))} · ${esc(w.meaning)}</button>`).join('')}</div>`:''}<div class="hero-actions">${s.wrong.length?`<button class="button" data-serial-action="game-retry">再走一遍这些线索 →</button>`:''}<button class="button secondary" data-serial-start="${s.mode}" data-serial-id="${s.id}">换八个词再练</button><a class="text-link" href="${next?'#serial/'+chapter.book.id+'/'+next.id:'#serial/'+chapter.book.id}">${next?'读下一章':'回到全书目录'} →</a></div><div class="serial-game-modes"><button class="text-link" data-serial-start="choice" data-serial-id="${s.id}">找出线索</button><button class="text-link" data-serial-start="spell" data-serial-id="${s.id}">拼回动作</button><button class="text-link" data-serial-start="listen" data-serial-id="${s.id}">听音寻词</button></div></section>`;applyPreferences();
}
function serialStopAudio(){serialSpeechGeneration++;serialAudioActive=false;serialUtterance=null;if('speechSynthesis'in window)speechSynthesis.cancel();}
function serialAudioStatus(message){const el=document.getElementById('serial-speech-status');if(el)el.textContent=message;}
function serialSpeak(text,heard){
  serialStopAudio();if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){serialAudioStatus('这个浏览器暂不支持朗读。可切换“找出线索”或“拼回动作”。');return;}
  const chunks=listeningChunks(listeningPlain(text));if(!chunks.length)return;
  const generation=serialSpeechGeneration;serialAudioActive=true;
  const voices=speechSynthesis.getVoices(),voice=voices.find(v=>/^en[-_]/i.test(v.lang));
  const play=index=>{
    if(generation!==serialSpeechGeneration)return;
    if(index>=chunks.length){serialAudioActive=false;serialAudioStatus('本段已听完，可以回忆关键词了。');if(heard)heard();return;}
    const utterance=new SpeechSynthesisUtterance(chunks[index]);serialUtterance=utterance;utterance.lang=voice?.lang||'en-US';if(voice)utterance.voice=voice;utterance.rate=state.preferences.rate||.85;
    utterance.onend=()=>play(index+1);utterance.onerror=()=>{if(generation!==serialSpeechGeneration)return;serialAudioActive=false;serialAudioStatus('朗读未能完成，请重试，或切换到阅读回忆。');};
    serialAudioStatus(`正在听英文片段 ${index+1} / ${chunks.length}…`);speechSynthesis.speak(utterance);
  };play(0);
}
const updateNavBeforeSerial=updateNav;
updateNav=function(){updateNavBeforeSerial();const route=location.hash.split('/')[0].slice(1);if(['serial','archive'].includes(route)){document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav==='library'));}};
const renderBeforeSerial=render;
render=function(){
  if(!main)return;
  const [route,book,id]=location.hash.slice(1).split('/');serialStopAudio();delete main.dataset.view;
  if(!route||route==='library'||route==='serial'||route==='archive'||route==='practice'&&book==='journey'){
    clearInterval(trainingClock);if(typeof listeningStop==='function')listeningStop();if(wordDialog&&wordDialog.close)wordDialog.close();if(utilityDialog&&utilityDialog.close)utilityDialog.close();document.body.classList.remove('focus-mode');
    if(!route||route==='library')library();
    else if(route==='serial'){const c=SERIAL_CHAPTER_INDEX.get(id);if(id){if(c?.book.id===book)serialRead(id);else serialNotFound();}else serialBookPage(book);}
    else if(route==='archive'){libraryBeforeSerial();const heroTitle=main.querySelector('.hero h1'),heroCopy=main.querySelector('.hero p'),shelf=main.querySelector('#shelf-heading');if(heroTitle)heroTitle.innerHTML='熟悉的词，<br>再遇见<em>新语境。</em>';if(heroCopy)heroCopy.innerHTML='这里保留完整词汇覆盖的短篇语境。<br>连续主线小说在故事书架，旧学习记录可以继续使用。';if(shelf)shelf.textContent='拓展语境';}
    else serialGamePage(id);
    updateNav();return;
  }renderBeforeSerial();if(route==='units')serialEnhanceVocabularyLinks();
};
const progressBeforeSerial=progress;
progress=function(){progressBeforeSerial();main.insertAdjacentHTML('afterbegin',`<section class="serial-entry"><div><div class="serial-kicker">YOUR STORY JOURNEY</div><h2>已经走过 ${state.serial.completed.length} / ${SERIAL_TOTAL_CHAPTERS} 章</h2><p>${Object.keys(state.serial.runs).length} 项剧情回忆记录 · ${state.serial.bookmarks.length} 个主线书签</p>${state.serial.bookmarks.map(id=>{const c=SERIAL_CHAPTER_INDEX.get(id);return `<a class="text-link" href="#serial/${c.book.id}/${id}">${esc(c.book.title)} · ${esc(c.title)} ↗</a>`;}).join('')}</div><a class="button secondary" href="#library">继续故事 →</a></section>`);};
const reviewBeforeSerial=review;
review=function(){reviewBeforeSerial();const entry=main.querySelector('.training-entry');if(entry){entry.querySelector('h2').textContent='回到小说里，再遇见这些词';entry.querySelector('p').textContent='从刚读过的章节开始，找出线索、拼回动作、听音寻词。';entry.querySelector('a').textContent='进入剧情闯关 →';}};
const wordModalBeforeSerial=wordModal;
wordModal=function(id){
  wordModalBeforeSerial(id);
  const refs=SERIAL_WORD_CHAPTERS.get(id)||[],current=SERIAL_CHAPTER_INDEX.get(location.hash.slice(1).split('/')[2]);
  const reference=refs.find(r=>r.id===current?.id)||refs[0],chapter=reference&&SERIAL_CHAPTER_INDEX.get(reference.id);
  if(!reference||!chapter)return;
  wordDialog.querySelector('.context-box')?.remove();
  if(Array.isArray(chapter.cn)&&reference.paragraph>=0&&chapter.cn[reference.paragraph]){
    wordDialog.querySelector('.word-meaning')?.insertAdjacentHTML('beforebegin',`<div class="context-box"><small>${esc(chapter.book.title)} · 第 ${chapter.number} 章 · ${esc(chapter.title)}</small><p>${esc(chapter.cn[reference.paragraph].replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,(_,key,meaning)=>key===id?clozeExpected(key)+'（'+meaning+'）':meaning))}</p></div>`);
    const meaning=wordDialog.querySelector('.word-meaning');if(meaning&&reference.meaning)meaning.textContent=reference.meaning;
    let example=wordDialog.querySelector('.word-example');
    if(!example){example=document.createElement('div');example.className='word-example';example.lang='en';wordDialog.querySelector('.word-meaning')?.insertAdjacentElement('afterend',example);}
    if(example&&Array.isArray(chapter.en))example.textContent=listeningPlain(chapter.en[reference.paragraph]||'');
  }
  if(clozeExpected(id)!==id){const title=wordDialog.querySelector('.english-title');if(title)title.textContent=clozeExpected(id);wordDialog.querySelector('.word-meaning')?.insertAdjacentHTML('afterend',`<p class="practice-label">请记标准拼写 ${esc(clozeExpected(id))}。</p>`);}
  wordDialog.querySelector('.word-source')?.insertAdjacentHTML('beforebegin',`<details class="serial-word-sources" open><summary>在连续长篇里遇见这个词 · ${refs.length} 章</summary><div class="related-story-links">${refs.slice(0,12).map(r=>`<a href="#serial/${r.book}/${r.id}">《${esc(r.bookTitle)}》· 第 ${r.number} 章 · ${esc(r.title)} ↗</a>`).join('')}</div></details>`);
};
function serialEnhanceVocabularyLinks(){
  main.querySelectorAll('.word-table tbody tr,.progress-card').forEach(row=>{
    const word=row.querySelector('.table-word[data-word]'),reference=word&&SERIAL_WORD_CHAPTERS.get(word.dataset.word)?.[0];if(!reference)return;if(clozeExpected(word.dataset.word)!==word.dataset.word)word.textContent=clozeExpected(word.dataset.word);
    const link=row.querySelector('a[href^="#story/"]');if(link){link.href='#serial/'+reference.book+'/'+reference.id;link.textContent='《'+reference.bookTitle+'》· 第 '+reference.number+' 章 ↗';link.title=reference.title;}
  });
}
const renderWordListBeforeSerial=renderWordList;
renderWordList=function(){const query=notebookSearch;if(query.trim().toLowerCase()==='up-to-date')notebookSearch='uptodate';try{renderWordListBeforeSerial();}finally{notebookSearch=query;}serialEnhanceVocabularyLinks();};
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-serial-action],[data-serial-view],[data-serial-start],[data-serial-answer],[data-serial-speak]');if(!b)return;
  event.preventDefault();event.stopImmediatePropagation();
  if(b.dataset.serialView){serialStopAudio();serialRead(serialReadId,b.dataset.serialView);scrollTrainingStart();return;}
  if(b.dataset.serialStart){serialGameStart(b.dataset.serialId,b.dataset.serialStart);return;}
  if(b.dataset.serialAnswer){serialGameAnswer(b.dataset.serialAnswer);return;}
  if(b.dataset.serialSpeak!==undefined){const chapter=SERIAL_CHAPTER_INDEX.get(b.dataset.serialId);serialSpeak(chapter.en[Number(b.dataset.serialSpeak)]);return;}
  const action=b.dataset.serialAction,id=b.dataset.serialId,s=serialGame;
  if(action==='focus'){document.body.classList.toggle('focus-mode');b.textContent=document.body.classList.contains('focus-mode')?'退出专注':'专注阅读';}
  else if(action==='bookmark'){state.serial.bookmarks=state.serial.bookmarks.includes(id)?state.serial.bookmarks.filter(x=>x!==id):[...state.serial.bookmarks,id];save();serialRead(id);}
  else if(action==='complete'){if(!state.serial.completed.includes(id))state.serial.completed.push(id);save();serialRead(id);toast('本章已读，词汇掌握单独记录。');}
  else if(action==='stop'){serialStopAudio();serialAudioStatus('朗读已停止。');}
  else if(action==='game-reveal')serialGameAnswer('',true);
  else if(action==='game-next'&&s?.answered&&!s.finished){serialStopAudio();s.index++;s.answered=false;s.answer='';s.revealed=false;s.heard=false;s.options=[];s.finished=s.index>=s.items.length;serialGamePage(s.id);scrollTrainingStart();}
  else if(action==='game-retry'&&s?.finished)serialGameStart(s.id,s.mode,true);
  else if(action==='game-speak'&&s&&!s.answered&&!s.finished){const chapter=SERIAL_CHAPTER_INDEX.get(s.id),item=s.items[s.index];s.heard=false;serialSpeak(chapter.en[item.paragraph],()=>{if(serialGame===s&&!s.answered)s.heard=true;});}
},true);
document.addEventListener('input',event=>{if(event.target.id==='serial-spell-input'&&serialGame&&!serialGame.answered)serialGame.answer=event.target.value;});
document.addEventListener('submit',event=>{if(event.target.id==='serial-spell-form'){event.preventDefault();event.stopImmediatePropagation();serialGameAnswer(document.getElementById('serial-spell-input').value);}},true);
window.addEventListener('pagehide',serialStopAudio);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&serialAudioActive){serialStopAudio();serialAudioStatus('播放已暂停，回到页面后可重新听。');}});
const serialAboutButton=document.getElementById('about-button');
if(serialAboutButton){serialAboutButton.replaceWith(serialAboutButton.cloneNode(true));document.getElementById('about-button').addEventListener('click',()=>utility('词间 · 让故事留下记忆',`<p>两部长篇连续小说，共${SERIAL_TOTAL_CHAPTERS}章，按分卷顺序阅读。先读懂人物、动作和线索，再通过剧情填空与八词闯关回忆英文。展开答案与标记读完不增加词汇掌握。</p><p>长篇正文中已有${SERIAL_COVERED_IDS.size}/${BUILTIN_WORDS.length}个词的中英语境；每个词可从完整词库跳回所在章节。原300篇只作为额外拓展保留。原来的词汇记录、收藏、笔记和短篇书签都保留；小说进度单独保存。</p><p>听力使用设备英语语音。进度保存在当前浏览器，可在完整词库页导出备份。词表来源与许可见 <a href="SOURCES.md" target="_blank" rel="noopener">内容来源 ↗</a>。</p>`));}
