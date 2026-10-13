/* Read the scene, then recall exactly the same words in the same scene. */
let clozeView='read',clozeSession=null;
function storySlots(story){
  if(!story||!Array.isArray(story.cn))return [];
  return [].concat(...story.cn.map(paragraph=>wordsceneMatches(paragraph,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).map(match=>({id:match[1],meaning:match[2]}))));
}
function ensureCloze(story){
  if(!clozeSession||clozeSession.id!==story.id){
    const slots=storySlots(story);
    clozeSession={id:story.id,slots,answers:slots.map(()=>''),results:null,checked:false,revealed:false,hints:true,active:slots.map((_,i)=>i)};
    clozeView='read';
  }
  return clozeSession;
}
function normalizeCloze(value){return String(value).trim().toLowerCase().replace(/[‘’]/g,"'").replace(/[‐‑–—]/g,'-').replace(/\s+/g,' ');}
const clozeSpellingGroups=[['color','colour'],['colored','coloured'],['favorite','favourite'],['behavior','behaviour'],['neighbor','neighbour'],['neighboring','neighbouring'],['neighborhood','neighbourhood'],['honor','honour'],['honorable','honourable'],['labor','labour'],['center','centre'],['theater','theatre'],['gray','grey'],['organize','organise'],['realize','realise'],['recognize','recognise'],['analyze','analyse'],['defense','defence'],['offense','offence'],['catalog','catalogue'],['dialog','dialogue'],['jewelry','jewellery'],['aluminum','aluminium'],['analog','analogue']];
// Retain the source-list identifier while teaching the standard spelling.
function clozeExpected(id){return id==='reservior'?'reservoir':id==='uptodate'?'up-to-date':id;}
function isClozeCorrect(value,id){
  const answer=normalizeCloze(value);
  if(id==='reservior'||id==='uptodate')return answer===clozeExpected(id);
  return answer===id||clozeSpellingGroups.some(group=>group.includes(id)&&group.includes(answer));
}
function clozeParagraph(paragraph,exercise){
  return paragraph.split(/(\[\[.*?\]\])/g).map(part=>{
    if(!part.startsWith('[['))return esc(part);
    const [id,meaning]=part.slice(2,-2).split('|');
    if(!exercise)return `<span class="story-term"><button class="story-word" data-word="${esc(id)}" lang="en">${esc(clozeExpected(id))}</button><span class="story-gloss">（${esc(meaning)}）</span></span>`;
    const index=clozeParagraph.index++,session=clozeSession,result=session.results?.[index];
    const locked=session.checked||!session.active.includes(index);
    const hint=session.hints?id.charAt(0)+'______':'________';
    const feedback=result?(result==='correct'?'✓':result==='wrong'?`→ ${esc(clozeExpected(id))}（${esc(meaning)}）`:`${esc(clozeExpected(id))}（${esc(meaning)}）`):'';
    return `<span class="cloze-slot ${result||''}"><label for="cloze-${index}" class="cloze-number">${index+1}.</label><input id="cloze-${index}" class="cloze-input" data-cloze-index="${index}" aria-label="第 ${index+1} 空${session.hints?'，首字母 '+esc(id.charAt(0)):''}" ${result==='wrong'?'aria-invalid="true"':''} style="--blank-width:${Math.min(15,Math.max(8,id.length+2))}ch" value="${esc(session.answers[index])}" placeholder="${esc(hint)}" maxlength="80" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="next" ${locked?'disabled':''}><span class="cloze-feedback" ${feedback?'':'hidden'}>${feedback}</span></span>`;
  }).join('');
}
function updateClozeCounter(){
  const counter=document.getElementById('cloze-counter');
  if(counter)counter.textContent=`已填 ${clozeSession.active.filter(i=>normalizeCloze(clozeSession.answers[i])).length} / ${clozeSession.active.length} 空`;
}
function clozeResultSummary(){
  const session=clozeSession;
  if(!session.checked)return '';
  if(session.revealed)return '<div class="cloze-summary" role="status"><strong>参考答案已展开</strong><p>这次查看答案不计入已学词汇。准备好了，可以重新填一遍。</p></div>';
  const correct=session.results.filter(result=>result==='correct').length;
  return `<div class="cloze-summary" role="status"><strong>答对 ${correct} / ${session.slots.length} 空</strong><p>${correct===session.slots.length?'这一段剧情里的词，你都想起来了。已安排后续复习。':'错词已经加入复习。先看看词在这句话里的意思，再重练错词。'}</p></div>`;
}
const priorStoryReader=reader;
function storyStudySteps(view){
  return `<div class="cloze-steps" aria-label="学习模式">${[['read','01','① 故事阅读'],['exercise','02','② 剧情填空'],['listen','03','③ 故事听力']].map(([key,number,label])=>`<button data-cloze-view="${key}" aria-pressed="${view===key}" class="${view===key?'active':''}"><small>STEP ${number}</small>${label}</button>`).join('')}</div>`;
}
reader=function(id){
  const story=getStory(id);
  if(!story||!storySlots(story).length){priorStoryReader(id);return;}
  const session=ensureCloze(story),exercise=clozeView==='exercise';
  if(clozeView==='listen'){listeningReader(story);return;}
  state.lastStory=id;save();
  const sequence=STORIES.filter(s=>s.category===story.category),at=sequence.indexOf(story),previous=sequence[at-1],next=sequence[at+1];
  clozeParagraph.index=0;
  const paragraphs=story.cn.map(p=>`<p class="webnovel-paragraph">${clozeParagraph(p,exercise)}</p>`).join('');
  main.innerHTML=`<div class="reader-top"><a class="back-link" href="#library">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="bookmark" data-id="${esc(id)}">${state.bookmarks.includes(id)?'★ 已加书签':'☆ 加书签'}</button><button class="button secondary compact" data-action="focus">${document.body.classList.contains('focus-mode')?'退出专注':'专注阅读'}</button></div></div>${storyStudySteps(clozeView)}${readerTools()}<article class="reader-paper webnovel-paper"><div class="eyebrow">${esc(story.category)} · CHAPTER ${String(story.number).padStart(2,'0')}</div><h1>${esc(story.title)}</h1><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="cloze-step-heading"><h2>${exercise?'第二步：剧情挖空主动回填':'第一步：故事情境沉浸阅读'}</h2><p>${exercise?'沿着剧情回填英文原形，不区分大小写，常见英美拼写均可。先自己回忆，再提交核对。':'粗体是本章词汇。先看人物做了什么，再把英文和这段画面连起来。点击英文可以查看词卡。'}</p></div>${exercise?`<div class="cloze-toolbar"><label><input id="cloze-hints" type="checkbox" ${session.hints?'checked':''}> 首字母提示</label><span id="cloze-counter" role="status" aria-live="polite"></span></div>${clozeResultSummary()}<form id="cloze-form" novalidate>${session.slots.some(slot=>slot.id==='reservior')?'<p class="practice-label">本篇提到原资料中的错拼。对应空格请填写标准拼写 reservoir，不需要记住错误形式。</p>':''}<div class="webnovel-text">${paragraphs}</div><div class="cloze-actions">${session.checked?`<button type="button" class="button" data-cloze-action="restart">重新填一遍</button>${!session.revealed&&session.results.includes('wrong')?'<button type="button" class="button secondary" data-cloze-action="retry">只重练错词</button>':''}`:'<button type="submit" class="button">提交核对 →</button><button type="button" class="button secondary" data-cloze-action="reveal">查看参考答案</button>'}<button type="button" class="text-link" data-cloze-view="read">回到故事，找找线索</button></div><p class="practice-label">已提交的结果会保存；刷新页面后，本轮未提交的填写需要重填。</p></form>`:`<div class="webnovel-text">${paragraphs}</div><div class="cloze-actions"><button class="button" data-cloze-view="exercise">读完了，去填空 →</button><button class="text-link" data-action="complete-story" data-story="${esc(id)}">${state.completed.includes(id)?'✓ 已读':'标记读完'}</button></div><details class="story-original"><summary>展开英文参考段落</summary><div>${story.en.map(p=>`<p class="translation english-second" lang="en">${formatEnglish(p)}</p>`).join('')}</div><button class="button secondary compact" data-action="read-aloud">▷ 朗读英文 / 停止</button></details>`}<div class="chapter-nav">${previous?`<a href="#story/${previous.id}">← ${esc(previous.title)}</a>`:'<span></span>'}${next?`<a href="#story/${next.id}">${esc(next.title)} →</a>`:'<a href="#library">回到书架 →</a>'}</div></article>`;
  updateClozeCounter();applyPreferences();
};
document.addEventListener('input',event=>{
  if(!event.target.matches('.cloze-input')||!clozeSession||clozeSession.checked)return;
  clozeSession.answers[Number(event.target.dataset.clozeIndex)]=event.target.value;
  updateClozeCounter();
});
document.addEventListener('change',event=>{
  if(event.target.id!=='cloze-hints')return;
  clozeSession.hints=event.target.checked;reader(clozeSession.id);
});
document.addEventListener('keydown',event=>{
  if(event.key!=='Enter'||!event.target.matches('.cloze-input'))return;
  event.preventDefault();
  const current=Number(event.target.dataset.clozeIndex),next=clozeSession.active.find(index=>index>current);
  if(next!==undefined)document.getElementById('cloze-'+next).focus();
  else document.querySelector('#cloze-form button[type="submit"]')?.click();
});
document.addEventListener('submit',event=>{
  if(event.target.id!=='cloze-form')return;
  event.preventDefault();event.stopImmediatePropagation();
  const session=clozeSession;
  if(!session||session.checked)return;
  const empty=session.active.find(i=>!normalizeCloze(session.answers[i]));
  if(empty!==undefined){toast(`第 ${empty+1} 空还没填写。可以先猜一猜，或查看参考答案。`);document.getElementById('cloze-'+empty).focus();return;}
  const results=session.results?session.results.slice():session.slots.map(()=>null);
  for(const index of session.active){
    const correct=isClozeCorrect(session.answers[index],session.slots[index].id);
    results[index]=correct?'correct':'wrong';recordInSkills(session.slots[index].id,correct,['spell']);
  }
  session.results=results;session.checked=true;session.revealed=false;
  reader(session.id);
  document.querySelector('.cloze-summary')?.scrollIntoView({block:'center'});
},true);
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-cloze-view],[data-cloze-action]');
  if(!button)return;
  event.preventDefault();event.stopImmediatePropagation();
  const session=clozeSession;
  if(button.dataset.clozeView){clozeView=button.dataset.clozeView;reader(session.id);document.querySelector('.cloze-steps')?.scrollIntoView({block:'start'});return;}
  if(button.dataset.clozeAction==='reveal'){
    session.revealed=true;session.checked=true;session.results=session.slots.map(()=> 'revealed');
  }else if(button.dataset.clozeAction==='restart'){
    session.answers=session.slots.map(()=> '');session.active=session.slots.map((_,i)=>i);session.results=null;session.checked=false;session.revealed=false;
  }else if(button.dataset.clozeAction==='retry'){
    session.active=session.results.map((value,index)=>value==='wrong'?index:-1).filter(i=>i>=0);
    session.active.forEach(index=>{session.answers[index]='';session.results[index]=null;});session.checked=false;
  }
  reader(session.id);
  document.querySelector('.cloze-step-heading')?.scrollIntoView({block:'start'});
},true);
const previousClozeLibrary=library;
library=function(){
  previousClozeLibrary();
  if(!main)return;
  const hero=main.querySelector('.hero');
  if(!hero)return;
  const title=hero.querySelector('h1'),copy=hero.querySelector('p'),shelfCopy=main.querySelector('.section-title p'),note=main.querySelector('.reading-note div');
  if(title)title.innerHTML='跟着剧情走，<br>把单词<em>填回来。</em>';
  if(copy)copy.innerHTML='修仙篇，看人物如何争取资源、承担代价。<br>悬疑篇，跟同伴进入旧地，沿着线索追出真相。';
  if(shelfCopy)shelfCopy.textContent='故事里读词 · 同剧情填空 · 听故事练听力';
  if(note)note.innerHTML='<strong>先读故事，再关掉答案，把英文填回来。</strong><br>粗体词和中文释义一起出现；填空时保留剧情，首字母提示可以关闭。';
};
const clozeAbout=document.getElementById('about-button');
if(clozeAbout){clozeAbout.replaceWith(clozeAbout.cloneNode(true));document.getElementById('about-button').addEventListener('click',()=>utility('故事与学习说明',`<p>${STORIES.length} 篇原创修仙与悬疑故事，以中文剧情中的英文词和语境义帮助记忆。读完后，同一段剧情变成填空练习。</p><p>本次收录 ${COVERAGE.total} 个内置词，每个词都有故事语境。查看答案和阅读不会自动计为学会；提交填空、词卡确认和其他测验会安排复习。</p><p>词表来源与许可见 <a href="SOURCES.md" target="_blank" rel="noopener">SOURCES.md ↗</a>。学习记录保存在当前浏览器，请定期导出备份。</p>`));}
