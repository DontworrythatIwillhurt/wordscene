/* Original comprehension, sentence listening and feedback share the same player. */
let LISTENING_QUESTION_INDEX=new Map();
function buildListeningQuestionIndex(){
  LISTENING_QUESTION_INDEX=new Map((typeof LISTENING_QUESTIONS!=='undefined'&&LISTENING_QUESTIONS||[]).map(item=>[item.id,item.questions]));
}
buildListeningQuestionIndex();
function storySentences(text){
  const result=[],boundaries=wordsceneMatches(text,/[.!?]+["'”’)]*(?:\s+|$)/g);let start=0;
  for(const match of boundaries){
    const end=match.index+match[0].length,prefix=text.slice(start,match.index+1).trim();
    if(/\b(?:Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|vs|e\.g|i\.e)\.$/i.test(prefix)||/(?:^|\s)[A-Z]\.$/.test(prefix))continue;
    if(/\b(?:etc|p\.m|a\.m)\.$/i.test(prefix)&&text.slice(end)&&!/[A-Z]/.test(text.charAt(end)))continue;
    const leading=text.slice(start,end).search(/\S/);if(leading>=0)result.push({text:text.slice(start+leading,end).trim(),start:start+leading,end:end-text.slice(start,end).match(/\s*$/)[0].length});start=end;
  }
  if(text.slice(start).trim()){const leading=text.slice(start).search(/\S/);result.push({text:text.slice(start+leading).trim(),start:start+leading,end:text.replace(/\s+$/,'').length});}
  return result;
}
function ensureListeningPractice(story){
  const s=ensureListening(story);
  if(!s.sentences){s.sentences=story.en.map(p=>storySentences(listeningPlain(p)));s.sentenceIndex=0;s.precisionDrafts=s.sentences.map(sentences=>sentences.map(()=>({text:'',assisted:false,revealed:false,result:null,marked:[]})));}
  if(!s.comprehension){const questions=LISTENING_QUESTION_INDEX.get(story.id)||[];s.comprehension={choices:questions.map(()=>null),orders:questions.map(q=>shuffle(q.options.map((_,i)=>i))),checked:false,assisted:false};}
  s.scope=s.mode==='precision'?'sentence':'paragraph';s.sentenceIndex=Math.max(0,Math.min(s.sentenceIndex,s.sentences[s.paragraph].length-1));
  return s;
}
function listeningPlaybackChunks(session,story){
  const text=listeningPlain(story.en[session.paragraph]);
  return listeningChunks(session.scope==='sentence'?storySentences(text)[session.sentenceIndex].text:text);
}
function sentenceWordSlots(story,paragraph,sentence){
  let plain='',slots=[];
  story.en[paragraph].split(/(\[\[.*?\]\])/g).forEach(part=>{
    if(!part.startsWith('[[')){plain+=part;return;}
    const [id,surface]=part.slice(2,-2).split('|'),answer=id==='reservior'?'reservoir':surface||id,start=plain.length;plain+=answer;slots.push({id,answer,start,end:plain.length});
  });
  return slots.filter(slot=>slot.start>=sentence.start&&slot.end<=sentence.end).map(slot=>({...slot,start:slot.start-sentence.start,end:slot.end-sentence.start}));
}
function listeningTokens(text){
  const normalized=String(text).toLowerCase().replace(/[‘’]/g,"'").replace(/[‐‑–—]/g,'-');
  return wordsceneMatches(normalized,/[a-z0-9]+(?:['-][a-z0-9]+)*/g).map(match=>({text:match[0],start:match.index,end:match.index+match[0].length}));
}
function canonicalListeningToken(token){const group=clozeSpellingGroups.find(group=>group.includes(token));return group?group[0]:token;}
function compareListeningSentence(expected,answer){
  const source=listeningTokens(expected),typed=listeningTokens(answer),rows=source.length+1,cols=typed.length+1,dp=Array.from({length:rows},()=>Array(cols).fill(0));
  for(let i=0;i<rows;i++)dp[i][0]=i;for(let j=0;j<cols;j++)dp[0][j]=j;
  for(let i=1;i<rows;i++)for(let j=1;j<cols;j++){const same=canonicalListeningToken(source[i-1].text)===canonicalListeningToken(typed[j-1].text);dp[i][j]=Math.min(dp[i-1][j-1]+(same?0:1),dp[i-1][j]+1,dp[i][j-1]+1);}
  const operations=[];let i=source.length,j=typed.length;
  while(i||j){
    const same=i&&j&&canonicalListeningToken(source[i-1].text)===canonicalListeningToken(typed[j-1].text);
    if(i&&j&&dp[i][j]===dp[i-1][j-1]+(same?0:1)){operations.unshift({kind:same?'equal':'changed',source:i-1,expected:source[i-1].text,typed:typed[j-1].text});i--;j--;}
    else if(i&&dp[i][j]===dp[i-1][j]+1){operations.unshift({kind:'missing',source:i-1,expected:source[i-1].text});i--;}
    else {operations.unshift({kind:'extra',typed:typed[j-1].text});j--;}
  }
  return {source,operations,correct:operations.filter(op=>op.kind==='equal').length,extra:operations.filter(op=>op.kind==='extra').length,total:source.length};
}
function sentenceHints(text){
  const words=[...new Set((text.toLowerCase().match(/\b(?:a|an|the|to|of|and|for|at|as|can|was|were)\b/g)||[]))].slice(0,6);
  return `<ul>${words.length?`<li>留意功能词：${esc(words.join(' / '))}。先听清它们是否出现，再练习自然弱读。</li>`:''}<li>先听完一句再跟读，按人物、动作和结果划分意群，避免每个单词都停顿。</li><li>设备合成语音的节奏可能与真人不同；这些提示用于练习，不是自动发音评分。</li></ul>`;
}
function precisionPanel(story){
  const s=listeningSession,sentences=s.sentences[s.paragraph],sentence=sentences[s.sentenceIndex],draft=s.precisionDrafts[s.paragraph][s.sentenceIndex],slots=sentenceWordSlots(story,s.paragraph,sentence),result=draft.result;
  return `<section class="precision-panel"><h3>单句精听与跟读</h3><p class="precision-hint">选一句，点上方播放；可循环本句。先听写，再核对漏词和错词。不区分大小写、忽略句读标点，接受常见英美拼写。</p><div class="precision-sentences" aria-label="选择句子">${sentences.map((_,i)=>`<button data-precision-sentence="${i}" aria-pressed="${i===s.sentenceIndex}" class="${i===s.sentenceIndex?'active':''}">第 ${i+1} 句</button>`).join('')}</div><form id="precision-form"><label for="precision-input">写下刚才听到的这一句</label><textarea id="precision-input" lang="en" maxlength="1500" spellcheck="false" autocapitalize="off" autocomplete="off" ${result?'disabled':''} placeholder="先听，再输入；也可以只写下听清的部分">${esc(draft.text)}</textarea><div class="precision-actions">${result?'<button type="button" class="button" data-precision-action="restart">重新听写本句</button>':'<button type="submit" class="button">核对这一句 →</button><button type="button" class="button secondary" data-precision-action="restart">重新开始本句</button>'}<button type="button" class="button secondary" data-precision-action="reveal">${draft.revealed?'隐藏本句原文':'显示本句原文'}</button></div></form>${result?`<div class="cloze-summary" role="status"><strong>对上 ${result.correct} / ${result.total} 个原文词${result.extra?' · 多写 '+result.extra+' 词':''}</strong><p>${draft.assisted?'本轮看过原文，仅核对，不计入词汇掌握。':'本句重点词已记录听辨和拼写结果；漏词、错词可以再听一遍。'}</p><div class="precision-feedback">${result.operations.map(op=>op.kind==='equal'?esc(op.expected):op.kind==='extra'?`<span class="extra" title="多写的词">${esc(op.typed)}</span>`:`<span class="${op.kind}" title="${op.kind==='missing'?'漏词':'写成了 '+esc(op.typed)}">${esc(op.expected)}${op.kind==='changed'?`（${esc(op.typed)}）`:'〔漏〕'}</span>`).join(' ')}</div></div>`:''}${draft.revealed||result?`<div class="precision-reference"><h4>原文与跟读提示</h4><p lang="en">${esc(sentence.text)}</p>${sentenceHints(sentence.text)}${slots.length?`<p class="practice-label">还有听不清的重点词？标记后进入“听出”薄弱词队列。</p><div class="precision-keywords">${slots.map(slot=>`<button data-precision-weak="${esc(slot.id)}" ${draft.marked.includes(slot.id)?'disabled':''}>${esc(clozeExpected(slot.id))} · ${draft.marked.includes(slot.id)?'已标记':'听不清'}</button>`).join('')}</div>`:''}</div>`:''}</section>`;
}
function comprehensionPanel(story){
  const s=listeningSession,attempt=s.comprehension,questions=LISTENING_QUESTION_INDEX.get(story.id)||[];
  if(!questions.length)return '<section class="comprehension-panel"><h3>故事理解题</h3><p>这篇暂未载入题目，可以先练单句精听。</p></section>';
  const correct=questions.filter((q,i)=>attempt.choices[i]===q.answer).length;
  return `<section class="comprehension-panel"><h3>听完故事，再回答 ${questions.length} 道题</h3><p class="practice-label">按英文故事作答。先选完再提交，答案与依据暂时隐藏；可用上方播放器连听全部段落。</p>${attempt.checked?`<div class="cloze-summary" role="status"><strong>答对 ${correct} / ${questions.length} 题</strong><p>${attempt.assisted?'本轮查看过原文或精听答案，结果仅作核对。':'本次成绩已保存到学习足迹。理解题单独记录，不自动将本章词汇标记为掌握。'}</p></div>`:''}${questions.map((q,i)=>`<article class="comprehension-question" id="comprehension-${i}"><small>${i+1}. ${q.type==='detail'?'细节与因果':q.type==='main'?'主旨':'动机与推断'}</small><h4 lang="en">${esc(q.prompt)}</h4><div class="comprehension-options">${attempt.orders[i].map((index,position)=>`<button data-comprehension-choice="${i}:${index}" aria-pressed="${attempt.choices[i]===index}" class="${attempt.choices[i]===index?'selected ':''}${attempt.checked?(index===q.answer?'correct':index===attempt.choices[i]?'wrong':''):''}" ${attempt.checked?'disabled':''}><b>${'ABCD'[position]}</b><span lang="en">${esc(q.options[index])}</span></button>`).join('')}</div>${attempt.checked?`<div class="comprehension-feedback"><strong>${attempt.choices[i]===q.answer?'✓ 回答正确':'请沿着这条线索重听'}</strong><blockquote lang="en">${esc(q.evidence.quote)}</blockquote><p>${esc(q.explanation)}</p><button class="button secondary compact" data-comprehension-evidence="${i}">定位依据，精听这一句 →</button></div>`:''}</article>`).join('')}<button class="button" data-comprehension-action="${attempt.checked?'restart':'submit'}">${attempt.checked?'重新听故事，再答一轮':'提交理解题 →'}</button></section>`;
}
const listeningReaderBeforePractice=listeningReader;
listeningReader=function(story){
  const s=ensureListeningPractice(story);listeningReaderBeforePractice(story);
  const precision=s.precisionDrafts[s.paragraph][s.sentenceIndex];
  if(s.mode==='precision'&&(precision.revealed||precision.result)||s.mode==='dictation'&&s.drafts[s.paragraph].results)s.comprehension.assisted=true;
  const modes=document.querySelector('.listening-modes');
  modes.insertAdjacentHTML('beforeend',`<button data-listening-mode="precision" aria-pressed="${s.mode==='precision'}" class="${s.mode==='precision'?'active':''}">单句精听</button><button data-listening-mode="questions" aria-pressed="${s.mode==='questions'}" class="${s.mode==='questions'?'active':''}">故事理解题</button>`);
  if(s.mode==='precision'||s.mode==='questions'){
    document.querySelector('.listening-dictation')?.remove();
    const transcriptActions=document.querySelector('.listening-transcript-actions');
    transcriptActions.insertAdjacentHTML('beforebegin',s.mode==='precision'?precisionPanel(story):comprehensionPanel(story));
    if(s.mode==='precision'){transcriptActions.remove();document.querySelector('.listening-transcript')?.remove();}
  }
  if(s.mode==='precision'){
    const label=document.getElementById('listening-loop').parentElement;label.lastChild.textContent=' 循环本句';
    document.getElementById('listening-continuous').parentElement.hidden=true;
  }
  updateListeningPlayer();
};
const updatePlayerBeforePractice=updateListeningPlayer;
updateListeningPlayer=function(){updatePlayerBeforePractice();const s=listeningSession;if(!s||s.scope!=='sentence')return;const progress=document.getElementById('listening-progress');if(progress)progress.textContent=`第 ${s.paragraph+1} 段 · 第 ${s.sentenceIndex+1} / ${s.sentences[s.paragraph].length} 句`;const play=document.querySelector('[data-listening="play"]');if(play&&s.playing)play.textContent='↺ 从本句重听';};
document.addEventListener('input',event=>{if(event.target.id==='precision-input'){const s=listeningSession;s.precisionDrafts[s.paragraph][s.sentenceIndex].text=event.target.value;}});
document.addEventListener('submit',event=>{
  if(event.target.id!=='precision-form')return;event.preventDefault();event.stopImmediatePropagation();
  const s=listeningSession,d=s.precisionDrafts[s.paragraph][s.sentenceIndex],story=getStory(s.id),sentence=s.sentences[s.paragraph][s.sentenceIndex];
  if(d.result)return;if(!listeningTokens(d.text).length){toast('先写下听清的部分，或显示本句原文。');document.getElementById('precision-input').focus();return;}
  d.result=compareListeningSentence(sentence.text,d.text);s.comprehension.assisted=true;s.drafts[s.paragraph].assisted=true;
  if(!d.assisted){
    const slots=sentenceWordSlots(story,s.paragraph,sentence),correctSlots=slots.map(slot=>{const indices=d.result.source.map((token,i)=>token.start>=slot.start&&token.end<=slot.end?i:-1).filter(i=>i>=0);return indices.length>0&&indices.every(i=>d.result.operations.some(op=>op.source===i&&op.kind==='equal'));});
    [...new Set(slots.map(slot=>slot.id))].forEach(id=>recordInSkills(id,slots.every((slot,i)=>slot.id!==id||correctSlots[i]),['listen','spell']));
  }
  reader(s.id);document.querySelector('.precision-panel .cloze-summary')?.scrollIntoView({block:'center'});
},true);
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-precision-sentence],[data-precision-action],[data-precision-weak],[data-comprehension-choice],[data-comprehension-action],[data-comprehension-evidence]');if(!b)return;
  event.preventDefault();event.stopImmediatePropagation();
  const s=listeningSession,story=getStory(s.id),d=s.precisionDrafts[s.paragraph][s.sentenceIndex],attempt=s.comprehension;
  if(b.dataset.precisionSentence!==undefined){listeningStop();s.sentenceIndex=Number(b.dataset.precisionSentence);s.chunk=0;s.status='句子已选好，点播放开始精听。';}
  else if(b.dataset.precisionAction==='reveal'){d.revealed=!d.revealed;if(d.revealed){d.assisted=true;attempt.assisted=true;s.drafts[s.paragraph].assisted=true;}}
  else if(b.dataset.precisionAction==='restart'){listeningStop();d.text='';d.result=null;d.assisted=false;d.revealed=false;d.marked=[];s.chunk=0;s.status='开始新一轮本句听写。';}
  else if(b.dataset.precisionWeak){if(!d.marked.includes(b.dataset.precisionWeak)){recordInSkills(b.dataset.precisionWeak,false,['listen']);d.marked.push(b.dataset.precisionWeak);}}
  else if(b.dataset.comprehensionChoice){if(!attempt.checked){const [question,choice]=b.dataset.comprehensionChoice.split(':').map(Number);attempt.choices[question]=choice;}}
  else if(b.dataset.comprehensionAction==='submit'){
    if(attempt.checked)return;const questions=LISTENING_QUESTION_INDEX.get(s.id),empty=attempt.choices.findIndex(choice=>choice===null);
    if(empty>=0){toast(`第 ${empty+1} 题还没选择。`);document.getElementById('comprehension-'+empty).scrollIntoView({block:'center'});return;}
    attempt.checked=true;
    if(!attempt.assisted){const previous=state.listeningChecks[s.id];state.listeningChecks[s.id]={correct:questions.filter((q,i)=>attempt.choices[i]===q.answer).length,total:questions.length,last:today(),attempts:(previous?.attempts||0)+1,updatedAt:Date.now()};save();}
  }
  else if(b.dataset.comprehensionAction==='restart'){listeningStop();attempt.checked=false;attempt.assisted=false;attempt.choices=attempt.choices.map(()=>null);attempt.orders=(LISTENING_QUESTION_INDEX.get(s.id)||[]).map(q=>shuffle(q.options.map((_,i)=>i)));s.transcript=false;s.paragraph=0;s.chunk=0;}
  else if(b.dataset.comprehensionEvidence!==undefined){
    const q=LISTENING_QUESTION_INDEX.get(s.id)[Number(b.dataset.comprehensionEvidence)];listeningStop();s.mode='precision';s.paragraph=q.evidence.paragraph;
    const anchor=(q.evidence.focusQuote||q.evidence.quote).trim(),offset=listeningPlain(story.en[s.paragraph]).indexOf(anchor);
    s.sentenceIndex=Math.max(0,s.sentences[s.paragraph].findIndex(sentence=>offset>=sentence.start&&offset<sentence.end));s.chunk=0;s.continuous=false;s.transcript=false;s.status='已定位答案依据，点播放重听。';
  }
  reader(s.id);
},true);
