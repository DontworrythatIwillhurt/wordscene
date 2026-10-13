/* Real-world contexts, complete original CET reading tasks and local writing drafts. */
let CONTEXT_INDEX=new Map();
let EXAM_INDEX=new Map();
let MICRO_INDEX=new Map();
const TRAINING_TABS=[['home','训练总览'],['context','换场景'],['cloze','选词填空'],['reading','仔细阅读'],['matching','信息匹配'],['micro','写译微练']];
const INITIAL_TRAINING_ROUTE=location.hash.slice(1).split('/');
let contextSession=null,examSession=null,microId='',microKind=['translation','writing'].includes(INITIAL_TRAINING_ROUTE[3])?INITIAL_TRAINING_ROUTE[3]:'translation',trainingClock=null,microSaveTimer=null;
function buildTrainingIndexes(){
  CONTEXT_INDEX=new Map((typeof CONTEXT_PRACTICE!=='undefined'&&CONTEXT_PRACTICE||[]).map(w=>[w.id,w]));
  EXAM_INDEX=new Map((typeof EXAM_PRACTICE!=='undefined'&&EXAM_PRACTICE||[]).map(set=>[set.id,set]));
  MICRO_INDEX=new Map((typeof MICRO_PRACTICE!=='undefined'&&MICRO_PRACTICE||[]).map(unit=>[unit.id,unit]));
  if(MICRO_INDEX.has(INITIAL_TRAINING_ROUTE[2]))microId=INITIAL_TRAINING_ROUTE[2];
  else if(!MICRO_INDEX.has(microId)){
    const list=typeof MICRO_PRACTICE!=='undefined'&&MICRO_PRACTICE||[];
    microId=list.length?list[Math.floor(Date.parse(today()+'T00:00:00Z')/86400000)%list.length].id:'';
  }
}
buildTrainingIndexes();
const CLOZE_INSTRUCTION='In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on Answer Sheet 2 with a single line through the centre. You may not use any of the words in the bank more than once.';
const MATCHING_INSTRUCTION='In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on Answer Sheet 2.';
function validTrainingKey(key){
  if(key.startsWith('context:'))return !CONTEXT_INDEX.size||CONTEXT_INDEX.has(key.slice(8));
  return key.startsWith('exam:')&&(!EXAM_INDEX.size||EXAM_INDEX.has(key.slice(5)));
}
function cleanTrainingRecords(raw){
  const result=Object.create(null);if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  for(const [key,p] of Object.entries(raw))if(validTrainingKey(key)&&p&&Number.isInteger(p.correct)&&Number.isInteger(p.total)&&p.total>0&&p.total<=12&&p.correct>=0&&p.correct<=p.total)result[key]={correct:p.correct,total:p.total,attempts:Math.max(1,Math.floor(Number(p.attempts)||1)),last:/^\d{4}-\d{2}-\d{2}$/.test(p.last||'')?p.last:'',updatedAt:Number.isFinite(p.updatedAt)?Math.max(0,p.updatedAt):0};
  return result;
}
function cleanMicroWork(raw){
  const result=Object.create(null);if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  for(const [id,tasks] of Object.entries(raw))if((!MICRO_INDEX.size||MICRO_INDEX.has(id))&&tasks){result[id]={};for(const kind of ['translation','writing']){const task=tasks[kind];if(task&&typeof task.text==='string')result[id][kind]={text:task.text.slice(0,7000),submitted:Boolean(task.submitted),checks:Array.from({length:3},(_,i)=>Boolean(task.checks?.[i])),updatedAt:Number.isFinite(task.updatedAt)?Math.max(0,task.updatedAt):0};}}
  return result;
}
function mergeTrainingRecords(current,incoming){const result={...current};for(const [key,p] of Object.entries(incoming||{}))if(!result[key]||p.updatedAt>result[key].updatedAt||p.updatedAt===result[key].updatedAt&&p.attempts>result[key].attempts)result[key]={...p};return result;}
function mergeMicroWork(current,incoming){const result={...current};for(const [id,tasks] of Object.entries(incoming||{})){result[id]={...(current[id]||{})};for(const [kind,p] of Object.entries(tasks))if(!result[id][kind]||p.updatedAt>result[id][kind].updatedAt)result[id][kind]={...p,checks:p.checks.slice()};}return result;}
const cleanBeforeTraining=cleanState;
cleanState=function(raw){const s=cleanBeforeTraining(raw);s.training=cleanTrainingRecords(raw?.training);s.microWork=cleanMicroWork(raw?.microWork);return s;};
try{state=cleanState(JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('wordscene-v1'))||state);}catch{state=cleanState(state);}
function storeTraining(key,correct,total){const old=state.training[key];state.training[key]={correct,total,last:today(),attempts:(old?.attempts||0)+1,updatedAt:Date.now()};save();}
function scrollTrainingStart(){const element=document.scrollingElement||document.documentElement,previous=element.style.scrollBehavior;element.style.scrollBehavior='auto';window.scrollTo(0,0);element.style.scrollBehavior=previous;}
function trainingHeader(section){return `<div class="page-heading"><div class="eyebrow">WORDSCENE · TRANSFER & PRACTICE</div><h1>把故事里的词，用到新题里。</h1><p>换个语境辨词义，再练阅读与表达。</p></div><nav class="training-tabs" aria-label="训练类型">${TRAINING_TABS.map(([key,label])=>`<a href="#practice/${key}" class="${section===key?'active':''}" ${section===key?'aria-current="page"':''}>${label}</a>`).join('')}</nav>`;}
function trainingHome(){
  const context=typeof CONTEXT_PRACTICE!=='undefined'&&CONTEXT_PRACTICE||[];
  const exam=typeof EXAM_PRACTICE!=='undefined'&&EXAM_PRACTICE||[];
  const micro=typeof MICRO_PRACTICE!=='undefined'&&MICRO_PRACTICE||[];
  return `<section class="training-grid">${[['context','换场景复习',`${context.length} 个精选词 · 每词两个现实语境`],['cloze','15 选 10',`${exam.filter(s=>s.type==='cloze').length} 组原创 · 词性、搭配与逻辑`],['reading','双篇仔细阅读',`${exam.filter(s=>s.type==='reading').length} 组原创 · 每组两篇、10题`],['matching','长篇信息匹配',`${exam.filter(s=>s.type==='matching').length} 组原创 · 15段、10条信息`],['micro','每日写译微练',`${micro.length} 个主题 · 先写再对照参考`]].map(([key,title,description])=>`<a class="training-card" href="#practice/${key}"><small>原创 CET-style 仿真模拟训练</small><h2>${title}</h2><p>${description}</p><span>开始练习 →</span></a>`).join('')}</section><p class="practice-label">跨场景练习首批覆盖 ${context.length} 个词；完整内置词库仍由故事覆盖。题型成绩单独记录，写译练习按清单自评。</p>`;
}
function startContext(weakOnly){
  const known=new Set([...Object.keys(state.words),...state.favorites]);
  const context=typeof CONTEXT_PRACTICE!=='undefined'&&CONTEXT_PRACTICE||[];
  let pool=context.filter(w=>weakOnly?state.training['context:'+w.id]?.correct<state.training['context:'+w.id]?.total:known.has(w.id));
  if(!pool.length&&weakOnly){toast('目前没有已记录的跨场景错词。');return;}
  if(!pool.length)pool=context;
  const selected=shuffle(pool).slice(0,5),items=selected.map(row=>row.scenes.map((scene,index)=>({id:row.id,index,scene}))).reduce((all,list)=>all.concat(list),[]);
  contextSession={items:shuffle(items),choices:items.map(()=>null),orders:items.map(item=>shuffle(item.scene.options.map((_,i)=>i))),checked:false,assisted:false};
  practicePage('context');scrollTrainingStart();
}
function contextSentence(scene){return scene.sentence.split(/(\[\[.*?\]\])/g).map(part=>part.startsWith('[[')?`<strong lang="en">${esc(part.slice(2,-2).split('|')[1])}</strong>`:esc(part)).join('');}
function contextPanel(){
  const s=contextSession;
  if(!s)return `<section class="training-paper"><h2>在新场景里认出熟悉的词</h2><p>优先抽取你学过或收藏的词；没有记录时，从首批精选词开始。每轮最多5词、10个新语境。</p><div class="training-actions"><button class="button" data-training="context-start">练已学词的新语境 →</button><button class="button secondary" data-training="context-weak">重练跨场景错词</button></div></section>`;
  const correct=s.items.filter((item,i)=>s.choices[i]===item.scene.answer).length;
  return `<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><h2>同一个词，换个场景再理解</h2><p>根据英文上下文选本句词义，选完后统一提交。刷新会结束未提交的选择。</p>${s.checked?`<div class="cloze-summary"><strong>${s.assisted?'参考已展开':`答对 ${correct} / ${s.items.length} 题`}</strong><p>${s.assisted?'本轮查看答案，不记词汇掌握。':'结果已写入“看懂”复习；同一词的两个语境都答对才记为正确。'}</p></div>`:''}${s.items.map((item,i)=>`<article class="context-question"><small>${i+1}. ${esc(item.scene.label)}</small><p class="training-paragraph" lang="en">${contextSentence(item.scene)}</p><div class="comprehension-options">${s.orders[i].map((choice,index)=>`<button data-context-choice="${i}:${choice}" class="${s.choices[i]===choice?'selected ':''}${s.checked?(choice===item.scene.answer?'correct':choice===s.choices[i]?'wrong':''):''}" aria-pressed="${s.choices[i]===choice}" ${s.checked?'disabled':''}><b>${'ABCD'[index]}</b><span>${esc(item.scene.options[choice])}</span></button>`).join('')}</div>${s.checked?`<div class="comprehension-feedback"><strong>本句词义：${esc(item.scene.meaning)}</strong><p>${esc(item.scene.explanation)}</p><button class="text-link" data-word="${esc(item.id)}">回到 ${esc(item.id)} 词卡与故事 ↗</button></div>`:''}</article>`).join('')}<div class="training-actions">${s.checked?'<button class="button" data-training="context-start">再练一组 →</button><button class="button secondary" data-training="context-weak">重练跨场景错词</button>':'<button class="button" data-training="context-submit">提交新语境练习 →</button><button class="button secondary" data-training="context-reveal">查看参考</button>'}</div></section>`;
}
function flatExamQuestions(set){return set.type==='reading'?set.passages.reduce((all,p,passage)=>all.concat(p.questions.map(q=>({...q,passage}))),[]):set.type==='cloze'?set.questions.map(q=>({...q,wordId:q.wordId||getWord(set.bank[q.answer].toLowerCase())?.id})):set.questions;}
function examMenu(type){const exam=typeof EXAM_PRACTICE!=='undefined'&&EXAM_PRACTICE||[];return `<section class="training-paper"><h2>${type==='cloze'?'15选10 · 选词填空':type==='reading'?'双篇 · 仔细阅读':'15段 · 信息匹配'}</h2><label class="training-timed"><input id="training-timed" type="checkbox" checked> 限时练习</label><p class="practice-label">开始后连续计时；到时未填计错。刷新结束本轮，已提交成绩保留。也可以取消限时，按自己的节奏练。</p><div class="training-pack-list">${exam.filter(set=>set.type===type).map(set=>{const result=state.training['exam:'+set.id];return `<article><div><h3>${esc(set.title)}</h3><p>${esc(set.theme)} · 建议 ${set.minutes} 分钟${result?' · 上次 '+result.correct+'/'+result.total:''}</p></div><button class="button secondary" data-exam-start="${esc(set.id)}">开始练习 →</button></article>`;}).join('')}</div></section>`;}
function startExam(id,timed){const set=EXAM_INDEX.get(id),questions=flatExamQuestions(set);examSession={id,questions,choices:questions.map(()=>null),orders:questions.map(q=>q.options?shuffle(q.options.map((_,i)=>i)):null),checked:false,assisted:false,timed,deadline:Date.now()+set.minutes*60000,elapsed:false};practicePage(set.type);scrollTrainingStart();}
function bankedParagraph(text){return esc(text).replace(/\{\{(\d+)\}\}/g,(_,number)=>{const s=examSession,set=EXAM_INDEX.get(s.id),index=s.questions.findIndex(q=>q.number===Number(number));return `<span class="exam-slot"><label for="exam-blank-${index}">${number}.</label><select id="exam-blank-${index}" data-exam-select="${index}" aria-label="第 ${number} 空" ${s.checked?'disabled':''}><option value="">选择</option>${set.bank.map((word,i)=>`<option value="${i}" ${s.choices[index]===i?'selected':''} ${s.choices.some((value,other)=>other!==index&&value===i)?'disabled':''}>${'ABCDEFGHIJKLMNO'[i]} · ${esc(word)}</option>`).join('')}</select></span>`;});}
function examFeedback(q,index){
  const s=examSession,set=EXAM_INDEX.get(s.id);if(!s.checked)return '';
  const correct=s.choices[index]===q.answer;
  const answer=set.type==='cloze'?`${'ABCDEFGHIJKLMNO'[q.answer]} · ${set.bank[q.answer]}`:set.type==='matching'?'['+'ABCDEFGHIJKLMNO'[q.answer]+']':`${'ABCD'[s.orders[index].indexOf(q.answer)]} · ${q.options[q.answer]}`;
  return `<div class="exam-feedback ${correct?'good':'bad'}"><strong>${s.assisted?'参考':correct?'✓ 正确':s.choices[index]===null?'未作答':'需再比较'} · ${esc(answer)}</strong>${q.evidence?`<blockquote lang="en">${esc(typeof q.evidence==='string'?q.evidence:q.evidence.quote)}</blockquote>`:''}<p>${esc(q.explanation)}</p>${q.errorType?`<small>辨析重点：${esc(q.errorType)}</small>`:''}${q.wordId?`<button class="text-link" data-word="${esc(q.wordId)}">回到词卡 ↗</button>`:''}</div>`;
}
function examPanel(){
  const s=examSession,set=EXAM_INDEX.get(s.id),correct=s.questions.filter((q,i)=>s.choices[i]===q.answer).length;
  let material='',questions='';
  if(set.type==='cloze'){
    material=`<details class="exam-instruction"><summary>题型说明</summary><p lang="en">${CLOZE_INSTRUCTION}</p></details><div class="exam-bank" aria-label="A至O词表">${set.bank.map((word,i)=>`<span><b>${'ABCDEFGHIJKLMNO'[i]}</b> ${esc(word)}</span>`).join('')}</div>${set.paragraphs.map(p=>`<p class="training-paragraph" lang="en">${bankedParagraph(p)}</p>`).join('')}`;
    if(s.checked)questions=s.questions.map((q,i)=>`<article class="exam-question"><h3>第 ${q.number} 空</h3>${examFeedback(q,i)}</article>`).join('');
  }else if(set.type==='reading'){
    material='<p class="practice-label">阅读两篇文章，完成46–55题。每题选择一个最佳答案。</p>'+set.passages.map((passage,p)=>`<section class="exam-passage" id="exam-passage-${p}"><h3>${p===0?'Passage One':'Passage Two'}${s.checked?' · '+esc(passage.title):''}</h3>${passage.paragraphs.map(text=>`<p class="training-paragraph" lang="en">${esc(text)}</p>`).join('')}${passage.questions.map((q,i)=>{const index=p*5+i;return `<article class="exam-question"><h4 lang="en">${q.number}. ${esc(q.prompt)}</h4><div class="comprehension-options">${s.orders[index].map((choice,position)=>`<button data-exam-choice="${index}:${choice}" class="${s.choices[index]===choice?'selected ':''}${s.checked?(choice===q.answer?'correct':s.choices[index]===choice?'wrong':''):''}" aria-pressed="${s.choices[index]===choice}" ${s.checked?'disabled':''}><b>${'ABCD'[position]}</b><span lang="en">${esc(q.options[choice])}</span></button>`).join('')}</div>${examFeedback(q,index)}</article>`;}).join('')}</section>`).join('');
  }else{
    material=`<details class="exam-instruction"><summary>题型说明</summary><p lang="en">${MATCHING_INSTRUCTION}</p></details><p class="practice-label">36–45题选择对应段落，同一段可重复使用。</p>${set.paragraphs.map((p,i)=>`<section class="matching-paragraph" id="matching-${i}"><h3>[${'ABCDEFGHIJKLMNO'[i]}]</h3><p class="training-paragraph" lang="en">${esc(p)}</p></section>`).join('')}`;
    questions=s.questions.map((q,i)=>`<article class="exam-question"><label for="matching-answer-${i}" lang="en">${q.number}. ${esc(q.statement)}</label><select id="matching-answer-${i}" data-exam-select="${i}" ${s.checked?'disabled':''}><option value="">选择对应段落</option>${set.paragraphs.map((_,letter)=>`<option value="${letter}" ${s.choices[i]===letter?'selected':''}>[${'ABCDEFGHIJKLMNO'[letter]}]</option>`).join('')}</select>${examFeedback(q,i)}</article>`).join('');
  }
  return `<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><h2>${esc(set.title)}</h2><div class="exam-toolbar"><span id="training-timer" role="status">${s.timed?'正在计时':'不限时练习'}</span><span>已选 ${s.choices.filter(value=>value!==null).length} / ${s.questions.length} 题</span><button class="text-link" data-training="exam-menu">返回题组</button></div>${s.checked?`<div class="cloze-summary"><strong>${s.assisted?'参考答案已展开':`答对 ${correct} / ${s.questions.length} 题`}</strong><p>${s.assisted?'本轮不记录成绩或词汇掌握。':s.elapsed?'时间到，未答题计错。成绩已保存。':'成绩已保存。阅读理解与信息匹配不自动标记整篇词汇掌握。'}</p></div>`:''}${material}${questions}<div class="training-actions">${s.checked?'<button class="button" data-training="exam-restart">重新练这一组</button><button class="button secondary" data-training="exam-menu">选择其他题组</button>':'<button class="button" data-training="exam-submit">提交核对 →</button><button class="button secondary" data-training="exam-reveal">查看参考答案</button>'}</div></section>`;
}
function gradeExam(reveal=false,timeout=false){
  const s=examSession;if(!s||s.checked)return;
  if(!reveal&&!timeout&&s.choices.some(value=>value===null)){
    const index=s.choices.findIndex(value=>value===null),first=document.getElementById('exam-blank-'+index)||document.getElementById('matching-answer-'+index)||document.querySelector(`[data-exam-choice^="${index}:"]`);
    toast('还有题目未选择。可以继续作答，或查看参考答案。');first?.scrollIntoView({block:'center'});first?.focus();return;
  }
  const set=EXAM_INDEX.get(s.id);
  if(set.type==='cloze'&&!reveal&&!timeout&&new Set(s.choices).size!==s.choices.length){toast('15选10中，每个词只能使用一次。');return;}
  s.checked=true;s.assisted=reveal;s.elapsed=timeout;clearInterval(trainingClock);
  if(!reveal){storeTraining('exam:'+s.id,s.questions.filter((q,i)=>s.choices[i]===q.answer).length,s.questions.length);if(set.type==='cloze'){const marked=s.questions.filter(q=>q.wordId);[...new Set(marked.map(q=>q.wordId))].forEach(id=>recordInSkills(id,s.questions.every((q,i)=>q.wordId!==id||s.choices[i]===q.answer),['read']));}}
  if(location.hash.startsWith('#practice')){practicePage(set.type);scrollTrainingStart();}
}
function refreshTrainingClock(){
  const s=examSession,element=document.getElementById('training-timer');if(!s||!element)return;
  if(s.checked){element.textContent=s.elapsed?'限时已结束':'本轮已结束';return;}
  if(!s.timed){element.textContent='不限时练习';return;}
  const seconds=Math.max(0,Math.ceil((s.deadline-Date.now())/1000));element.textContent=`剩余 ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
  if(seconds===0)gradeExam(false,true);
}
function getMicroDraft(){const entry=state.microWork[microId]||(state.microWork[microId]={});return entry[microKind]||(entry[microKind]={text:'',submitted:false,checks:[false,false,false],updatedAt:Date.now()});}
function microWords(text){return (text.match(/[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*/g)||[]).length;}
function microPanel(){
  const unit=MICRO_INDEX.get(microId);if(!unit)return '<p>写译内容尚未载入。</p>';
  const task=unit[microKind],draft=getMicroDraft();
  return `<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。这里是短篇写译微练习，按清单自评。</p><h2>每日写译 · ${esc(unit.title)}</h2><div class="micro-topics">${(typeof MICRO_PRACTICE!=='undefined'&&MICRO_PRACTICE||[]).map(u=>`<button data-micro-id="${esc(u.id)}" class="${u.id===microId?'active':''}" aria-pressed="${u.id===microId}">${esc(u.title)}</button>`).join('')}</div><div class="listening-modes"><button data-micro-kind="translation" class="${microKind==='translation'?'active':''}" aria-pressed="${microKind==='translation'}">汉译英短段</button><button data-micro-kind="writing" class="${microKind==='writing'?'active':''}" aria-pressed="${microKind==='writing'}">英文短写作</button></div><div class="micro-prompt"><h3>${microKind==='translation'?'将这段中文译成自然的英文':'用一个英文短段回应题目'}</h3><p lang="${microKind==='translation'?'zh-CN':'en'}">${esc(task.prompt)}</p>${microKind==='writing'?`<p class="practice-label">建议 ${task.minWords}–${task.maxWords} 词。</p>`:''}</div><p class="practice-label">可练习使用：${task.targets.map(id=>`<button class="text-link" data-word="${esc(id)}">${esc(id)}</button>`).join(' · ')}</p><form id="micro-form"><label for="micro-input">先自己写，再对照参考</label><textarea id="micro-input" lang="en" maxlength="7000" spellcheck="false" autocapitalize="off" placeholder="草稿会保存在当前浏览器">${esc(draft.text)}</textarea><p class="practice-label" id="micro-word-count">当前 ${microWords(draft.text)} 词 · 草稿自动保存</p><button class="button" type="submit">保存并对照参考 →</button>${draft.submitted?'<button type="button" class="button secondary" data-training="micro-hide">收起参考，继续修改</button>':''}</form>${draft.submitted?`<section class="micro-reference"><h3>参考表达与自评</h3><p class="training-paragraph" lang="en">${esc(task.reference)}</p><p class="practice-label">参考表达可以有多种。这里不自动评估语义、语法或六级分数，也不会自动将目标词记为掌握。</p>${task.checklist.map((point,i)=>`<label><input type="checkbox" data-micro-check="${i}" ${draft.checks[i]?'checked':''}> ${esc(point)}</label>`).join('')}</section>`:''}</section>`;
}
function practicePage(section='home'){
  clearInterval(trainingClock);if(!TRAINING_TABS.some(([key])=>key===section))section='home';
  const body=section==='home'?trainingHome():section==='context'?contextPanel():section==='micro'?microPanel():examSession&&EXAM_INDEX.get(examSession.id)?.type===section?examPanel():examMenu(section);
  main.innerHTML=trainingHeader(section)+body;applyPreferences();
  if(document.getElementById('training-timer')){refreshTrainingClock();if(!examSession.checked)trainingClock=setInterval(refreshTrainingClock,1000);}
}
const renderBeforeTraining=render;
render=function(){const parts=location.hash.slice(1).split('/'),[route,section]=parts;if(route==='practice'){if(section==='micro'){if(MICRO_INDEX.has(parts[2]))microId=parts[2];if(['translation','writing'].includes(parts[3]))microKind=parts[3];}if('speechSynthesis'in window)speechSynthesis.cancel();wordDialog.close();utilityDialog.close();document.body.classList.remove('focus-mode');practicePage(section);updateNav();}else{clearInterval(trainingClock);renderBeforeTraining();}};
const reviewBeforeTraining=review;
review=function(){reviewBeforeTraining();if(!skillQuiz)main.querySelector('.skill-dashboard')?.insertAdjacentHTML('afterend','<div class="training-entry"><h2>把熟词用到新题里</h2><p>换场景辨词义、六级阅读题型、每日写译微练习。</p><a class="button" href="#practice">进入实战练习 →</a></div>');};
const progressBeforeTraining=progress;
progress=function(){progressBeforeTraining();const scored=Object.values(state.training),written=Object.values(state.microWork).reduce((n,tasks)=>n+Object.values(tasks).filter(task=>task.submitted).length,0);main.querySelector('.progress-grid')?.insertAdjacentHTML('afterend',`<section class="progress-card"><h2>新语境与实战练习</h2><p>已有 ${scored.length} 项有效记录；各项最近成绩合计 ${scored.reduce((n,p)=>n+p.correct,0)} / ${scored.reduce((n,p)=>n+p.total,0)} 题。写译已对照 ${written} 项。</p><a class="text-link" href="#practice">继续练习 →</a></section>`);};
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-training],[data-context-choice],[data-exam-start],[data-exam-choice],[data-micro-id],[data-micro-kind]');if(!b)return;event.preventDefault();event.stopImmediatePropagation();
  if(b.dataset.contextChoice){const [i,value]=b.dataset.contextChoice.split(':').map(Number);if(!contextSession.checked)contextSession.choices[i]=value;practicePage('context');return;}
  if(b.dataset.examStart){startExam(b.dataset.examStart,Boolean(document.getElementById('training-timed')?.checked));return;}
  if(b.dataset.examChoice){const [i,value]=b.dataset.examChoice.split(':').map(Number);if(!examSession.checked)examSession.choices[i]=value;practicePage(EXAM_INDEX.get(examSession.id).type);return;}
  if(b.dataset.microId||b.dataset.microKind){clearTimeout(microSaveTimer);save();if(b.dataset.microId)microId=b.dataset.microId;if(b.dataset.microKind)microKind=b.dataset.microKind;const route='#practice/micro/'+microId+'/'+microKind;if(location.hash===route)practicePage('micro');else location.hash=route;return;}
  const action=b.dataset.training;
  if(action==='context-start')startContext(false);else if(action==='context-weak')startContext(true);
  else if(action==='context-submit'||action==='context-reveal'){
    const s=contextSession;if(!s||s.checked)return;if(action==='context-submit'&&s.choices.some(value=>value===null)){toast('还有新语境题未选择。');return;}s.checked=true;s.assisted=action==='context-reveal';
    if(!s.assisted){for(const id of new Set(s.items.map(item=>item.id))){const indices=s.items.map((item,i)=>item.id===id?i:-1).filter(i=>i>=0),correct=indices.filter(i=>s.choices[i]===s.items[i].scene.answer).length;storeTraining('context:'+id,correct,indices.length);recordInSkills(id,correct===indices.length,['read']);}}practicePage('context');scrollTrainingStart();
  }else if(action==='exam-submit')gradeExam();else if(action==='exam-reveal')gradeExam(true);
  else if(action==='exam-restart'){const id=examSession.id,timed=examSession.timed;startExam(id,timed);}
  else if(action==='exam-menu'){const type=EXAM_INDEX.get(examSession.id).type;examSession=null;clearInterval(trainingClock);practicePage(type);scrollTrainingStart();}
  else if(action==='micro-hide'){const draft=getMicroDraft();draft.submitted=false;draft.updatedAt=Date.now();save();practicePage('micro');}
},true);
document.addEventListener('change',event=>{
  if(event.target.dataset.examSelect!==undefined){const s=examSession;if(!s||s.checked)return;const index=Number(event.target.dataset.examSelect),value=event.target.value===''?null:Number(event.target.value);if(EXAM_INDEX.get(s.id).type==='cloze'&&value!==null&&s.choices.some((choice,i)=>i!==index&&choice===value)){toast('这个词已经用过，请选另一个。');event.target.value=s.choices[index]===null?'':s.choices[index];return;}s.choices[index]=value;const y=scrollY;practicePage(EXAM_INDEX.get(s.id).type);scrollTo(0,y);}
  else if(event.target.dataset.microCheck!==undefined){const draft=getMicroDraft();draft.checks[Number(event.target.dataset.microCheck)]=event.target.checked;draft.updatedAt=Date.now();save();}
});
document.addEventListener('input',event=>{if(event.target.id!=='micro-input')return;const draft=getMicroDraft();draft.text=event.target.value.slice(0,7000);draft.updatedAt=Date.now();document.getElementById('micro-word-count').textContent=`当前 ${microWords(draft.text)} 词 · 草稿自动保存`;clearTimeout(microSaveTimer);microSaveTimer=setTimeout(save,450);});
document.addEventListener('submit',event=>{if(event.target.id!=='micro-form')return;event.preventDefault();event.stopImmediatePropagation();const draft=getMicroDraft();if(!draft.text.trim()||!/[A-Za-z]/.test(draft.text)){toast('先写下自己的英文，再对照参考。');document.getElementById('micro-input').focus();return;}clearTimeout(microSaveTimer);draft.submitted=true;draft.updatedAt=Date.now();save();practicePage('micro');document.querySelector('.micro-reference').scrollIntoView({block:'start'});},true);
window.addEventListener('pagehide',()=>{if(microSaveTimer){clearTimeout(microSaveTimer);save();}});
render();
