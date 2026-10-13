/* Independent abilities extend the existing wordscene-v2 progress and backup. */
const SKILL_LABELS={read:'看懂',listen:'听出',spell:'拼对'};
let skillRecordContext=null,skillQuiz=null;
function cleanSkillRecords(raw,s){
  const result=Object.create(null);if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  for(const [id,values] of Object.entries(raw)){
    if(!getWordSafe(id,s)||!values||typeof values!=='object')continue;
    const entry={};
    for(const kind of Object.keys(SKILL_LABELS)){
      const p=values[kind];if(!p||!Number.isInteger(p.stage)||p.stage<0||p.stage>4||!/^\d{4}-\d{2}-\d{2}$/.test(p.due||''))continue;
      entry[kind]={stage:p.stage,due:p.due,last:/^\d{4}-\d{2}-\d{2}$/.test(p.last||'')?p.last:'',attempts:Math.max(0,Math.floor(Number(p.attempts)||0)),mistakes:Math.max(0,Math.floor(Number(p.mistakes)||0)),updatedAt:Math.max(0,Number(p.updatedAt)||0)};
    }
    if(Object.keys(entry).length)result[id]=entry;
  }return result;
}
function cleanListeningChecks(raw){
  const result={};if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;
  for(const [id,p] of Object.entries(raw))if(getStory(id)&&p&&Number.isInteger(p.correct)&&Number.isInteger(p.total)&&p.total>=1&&p.total<=5&&p.correct>=0&&p.correct<=p.total)result[id]={correct:p.correct,total:p.total,last:/^\d{4}-\d{2}-\d{2}$/.test(p.last||'')?p.last:'',attempts:Math.max(1,Math.floor(Number(p.attempts)||1)),updatedAt:Math.max(0,Number(p.updatedAt)||0)};
  return result;
}
function mergeSkillRecords(current,incoming){
  const merged={...current};for(const [id,kinds] of Object.entries(incoming||{})){merged[id]={...(current[id]||{})};for(const [kind,p] of Object.entries(kinds)){const old=merged[id][kind];if(!old||p.updatedAt>old.updatedAt||p.updatedAt===old.updatedAt&&p.attempts>old.attempts)merged[id][kind]={...p};}}return merged;
}
function mergeListeningChecks(current,incoming){const merged={...current};for(const [id,p] of Object.entries(incoming||{}))if(!merged[id]||p.updatedAt>merged[id].updatedAt||p.updatedAt===merged[id].updatedAt&&p.attempts>merged[id].attempts)merged[id]={...p};return merged;}
function readWordsceneBackupFile(file){
  if(typeof file.text==='function')return file.text();
  return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(Error('备份文件读取失败'));reader.readAsText(file,'utf-8');});
}
const cleanBeforeSkills=cleanState;
cleanState=function(raw){const s=cleanBeforeSkills(raw);s.skills=cleanSkillRecords(raw?.skills,s);s.listeningChecks=cleanListeningChecks(raw?.listeningChecks);return s;};
try{state=cleanState(JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('wordscene-v1'))||state);}catch{state=cleanState(state);}
function noteSkill(id,correct,kind){
  if(!getWord(id)||!SKILL_LABELS[kind])return;
  const entry=state.skills[id]||(state.skills[id]={}),old=entry[kind];
  const stage=correct?(old?.last===today()&&old.stage>0?old.stage:Math.min((old?.stage||0)+1,4)):0;
  entry[kind]={stage,due:afterDays([0,1,3,7,14][stage]),last:today(),attempts:(old?.attempts||0)+1,mistakes:(old?.mistakes||0)+(correct?0:1),updatedAt:Date.now()};
}
const recordBeforeSkills=record;
record=function(id,correct){if(!getWord(id))return;const kinds=skillRecordContext||(location.hash==='#quiz'&&quiz?quiz.mode==='listening'?['listen','spell']:quiz.mode==='spelling'?['spell']:['read']:['read']);[...new Set(kinds)].forEach(kind=>noteSkill(id,correct,kind));recordBeforeSkills(id,correct);};
function recordInSkills(id,correct,kinds){const old=skillRecordContext;skillRecordContext=kinds;try{record(id,correct);}finally{skillRecordContext=old;}}
const dueBeforeSkills=dueWords;
dueWords=function(){const ids=new Set(dueBeforeSkills().map(w=>w.id));for(const [id,kinds] of Object.entries(state.skills))if(Object.values(kinds).some(p=>p.due<=today()))ids.add(id);return allWords().filter(w=>ids.has(w.id));};
function skillSummary(kind){const values=Object.values(state.skills).map(p=>p[kind]).filter(Boolean);return {tested:values.length,due:values.filter(p=>p.due<=today()).length,weak:values.filter(p=>p.stage===0).length};}
function skillDashboard(){return `<section class="skill-dashboard" aria-labelledby="skill-heading"><div class="section-title"><h2 id="skill-heading">按薄弱项复习</h2></div><p class="practice-label">三项单独安排复习。旧版记录保留，新版从实际答题建立分项记录；听写成绩同时记录听辨和拼写，可在这里分别检验。</p><div class="skill-grid">${Object.entries(SKILL_LABELS).map(([kind,label])=>{const s=skillSummary(kind);return `<article class="skill-card"><small>${kind==='read'?'英文 → 中文意思':kind==='listen'?'听发音 → 中文意思':'中文意思 → 英文拼写'}</small><h3>${label}</h3><strong>${s.due}<span> 词待复习</span></strong><p>已测 ${s.tested} 词 · 当前薄弱 ${s.weak} 词</p><button class="button secondary" data-skill-start="${kind}">练${label} →</button><button class="text-link" data-skill-weak="${kind}" ${s.weak?'':'disabled'}>只练薄弱词</button></article>`;}).join('')}</div></section>`;}
function skillQueue(kind,weakOnly){
  const words=allWords(),urgent=words.filter(w=>{const p=state.skills[w.id]?.[kind];return weakOnly?p?.stage===0:p?.due<=today();});
  if(urgent.length)return shuffle(urgent).slice(0,12);if(weakOnly)return [];
  const familiar=new Set([...Object.keys(state.words),...state.favorites,...(getStory(state.lastStory)?.words||[]).map(w=>w.id)]),candidates=words.filter(w=>familiar.has(w.id)&&!state.skills[w.id]?.[kind]);
  return shuffle(candidates.length?candidates:words.filter(w=>!state.skills[w.id]?.[kind])).slice(0,12);
}
function skillMeaningOptions(word){
  const seen=new Set([word.meaning]),choices=[word];
  const usefulChars=text=>(text.match(/[\u3400-\u9fff]/g)||[]).filter(char=>!'的地得人事物使与及和性'.includes(char)),targetChars=new Set(usefulChars(word.meaning));
  const suitable=candidate=>candidate.meaning&&!seen.has(candidate.meaning)&&!usefulChars(candidate.meaning).some(char=>targetChars.has(char));
  for(const candidate of shuffle(allWords()))if(candidate.pos===word.pos&&suitable(candidate)){choices.push(candidate);seen.add(candidate.meaning);if(choices.length===4)break;}
  if(choices.length<4)for(const candidate of shuffle(allWords()))if(suitable(candidate)){choices.push(candidate);seen.add(candidate.meaning);if(choices.length===4)break;}
  return shuffle(choices);
}
function skillReviewPage(){
  const s=skillQuiz;if(!s)return;
  if(s.finished){main.innerHTML=`<div class="page-heading"><h1>${SKILL_LABELS[s.kind]}复习完成</h1></div><section class="review-card"><div class="result-number">${s.correct}<small> / ${s.words.length}</small></div><p>本轮结果已保存到${SKILL_LABELS[s.kind]}记录，答错的词已安排重练。</p><div class="hero-actions"><button class="button" data-skill-action="retry" ${s.wrong.length?'':'hidden'}>重练本轮错词</button><button class="button secondary" data-skill-action="exit">回到复习</button></div></section>`;return;}
  const w=s.words[s.index];if(!s.options.length)s.options=skillMeaningOptions(w);const audio=s.kind==='listen',spelling=s.kind==='spell';
  main.innerHTML=`<div class="reader-top"><button class="text-link" data-skill-action="exit">← 回到复习</button><span>${SKILL_LABELS[s.kind]}专项</span></div><section class="review-card skill-quiz"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="quiz-top"><strong>${audio?'听发音，选择意思':spelling?'看意思，写出英文':'看英文，选择意思'}</strong><span>${s.index+1} / ${s.words.length}</span></div>${audio?'<div class="skill-audio"><button class="button" data-skill-action="audio">▷ 听单词 / 停止</button><p class="practice-label">可以重听，提交前不显示拼写。设备英语语音不可用时，请更换支持朗读的浏览器。</p></div>':`<div class="quiz-cn" lang="${spelling?'zh-CN':'en'}">${esc(spelling?w.meaning:clozeExpected(w.id))}</div>`}${spelling?`<form id="skill-spelling-form"><label for="skill-spelling-input">输入英文原形</label><input class="spelling-input" id="skill-spelling-input" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(s.choice)}" ${s.answered?'disabled':''}><button class="button" type="submit" ${s.answered?'disabled':''}>核对拼写</button></form>`:`<div class="answer-grid">${s.options.map((o,i)=>`<button class="answer ${s.answered?(o.id===w.id?'correct':o.id===s.choice?'wrong':''):''}" data-skill-answer="${esc(o.id)}" ${s.answered?'disabled':''}><b>${'ABCD'[i]}</b><span>${esc(o.meaning)}</span></button>`).join('')}</div>`}${s.answered?`<div class="answer-feedback ${s.wasCorrect?'good':'bad'}"><strong>${s.wasCorrect?'回答正确':'已加入本项复习'}</strong><span>${esc(clozeExpected(w.id))} · ${esc(w.meaning)}</span>${w.example?`<span lang="en">${esc(w.example)}</span>`:''}</div><button class="button" data-skill-action="next">${s.index+1===s.words.length?'查看结果':'下一词 →'}</button><button class="text-link" data-word="${esc(w.id)}">查看词卡</button>`:''}</section>`;applyPreferences();
}
function submitSkillAnswer(value){const s=skillQuiz;if(!s||s.answered)return;const w=s.words[s.index],answer=normalizeCloze(value);if(!answer){toast('先输入或选择答案。');return;}const correct=s.kind==='spell'?isClozeCorrect(answer,w.id):answer===w.id;s.choice=value;s.answered=true;s.wasCorrect=correct;if(correct)s.correct++;else s.wrong.push(w);recordInSkills(w.id,correct,[s.kind]);review();}
const reviewBeforeSkills=review;
review=function(){if(skillQuiz){skillReviewPage();return;}reviewBeforeSkills();main.querySelector('.stats-strip')?.insertAdjacentHTML('afterend',skillDashboard());};
const progressBeforeSkills=progress;
progress=function(){progressBeforeSkills();const checks=Object.values(state.listeningChecks);main.querySelector('.progress-grid')?.insertAdjacentHTML('afterend',`<section class="progress-card"><h2>听力与分项记录</h2><p>已完成 ${checks.length} 篇故事理解题；最近各篇成绩合计 ${checks.reduce((n,p)=>n+p.correct,0)} / ${checks.reduce((n,p)=>n+p.total,0)} 题。看过原文的练习不计入这里。</p><div class="skill-progress">${Object.entries(SKILL_LABELS).map(([kind,label])=>{const s=skillSummary(kind);return `<span><strong>${label}</strong> 已测 ${s.tested} · 待复习 ${s.due}</span>`;}).join('')}</div></section>`);};
const wordModalBeforeSkills=wordModal;
wordModal=function(id){wordModalBeforeSkills(id);document.querySelector('#word-content .word-meaning')?.insertAdjacentHTML('afterend',`<div class="word-skill-status">${Object.entries(SKILL_LABELS).map(([kind,label])=>{const p=state.skills[id]?.[kind];return `<span>${label}：${!p?'未测':p.stage===0?'待重练':p.due<=today()?'到期复习':'下次 '+esc(p.due)}</span>`;}).join('')}</div>`);};
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-skill-start],[data-skill-weak],[data-skill-action],[data-skill-answer]');if(!b)return;event.preventDefault();event.stopImmediatePropagation();
  if(b.dataset.skillStart||b.dataset.skillWeak){const kind=b.dataset.skillStart||b.dataset.skillWeak,words=skillQueue(kind,Boolean(b.dataset.skillWeak));if(!words.length){toast('这个分项暂时没有待练词。');return;}skillQuiz={kind,words,index:0,correct:0,wrong:[],options:[],answered:false,choice:'',finished:false};if(location.hash!=='#review')location.hash='review';else review();return;}
  if(!skillQuiz)return;if(b.dataset.skillAnswer){submitSkillAnswer(b.dataset.skillAnswer);return;}const action=b.dataset.skillAction;
  if(action==='exit'){if('speechSynthesis' in window)speechSynthesis.cancel();skillQuiz=null;review();}
  else if(action==='audio')speak(clozeExpected(skillQuiz.words[skillQuiz.index].id));
  else if(action==='next'){if('speechSynthesis' in window)speechSynthesis.cancel();skillQuiz.index++;skillQuiz.finished=skillQuiz.index>=skillQuiz.words.length;skillQuiz.options=[];skillQuiz.answered=false;skillQuiz.choice='';review();}
  else if(action==='retry'){skillQuiz={kind:skillQuiz.kind,words:shuffle(skillQuiz.wrong),index:0,correct:0,wrong:[],options:[],answered:false,choice:'',finished:false};review();}
},true);
document.addEventListener('submit',event=>{if(event.target.id!=='skill-spelling-form')return;event.preventDefault();event.stopImmediatePropagation();submitSkillAnswer(document.getElementById('skill-spelling-input').value);},true);
window.addEventListener('hashchange',()=>{if(location.hash!=='#review')skillQuiz=null;});
