/* Story listening uses device English voices and the original marked English text. */
let listeningSession=null,listeningGeneration=0,listeningTimer=null,listeningUtterance=null;
function listeningPlain(text){return text.replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g,(_,id,surface)=>id==='reservior'?'reservoir':surface||id);}
function listeningChunks(text){
  // Short utterances avoid mobile engines silently truncating a whole chapter.
  const sentences=storySentences(text),chunks=[];
  sentences.forEach(sentence=>{
    const words=sentence.text.trim().split(/\s+/);
    for(let at=0;at<words.length;at+=32)chunks.push(words.slice(at,at+32).join(' '));
  });
  return chunks.filter(Boolean);
}
function ensureListening(story){
  if(!listeningSession||listeningSession.id!==story.id){
    listeningStop();
    listeningSession={id:story.id,paragraph:0,mode:'blind',transcript:false,loop:false,continuous:true,accent:'en-GB',playing:false,paused:false,chunk:0,status:'准备好了，先不看原文听一遍。',drafts:story.en.map(text=>{
      const slots=wordsceneMatches(text,/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g).map(match=>({id:match[1],answer:match[1]==='reservior'?'reservoir':match[2]||match[1]}));
      return {slots,answers:slots.map(()=>''),results:null,assisted:false};
    })};
  }
  return listeningSession;
}
function listeningStop(message){
  listeningGeneration++;clearTimeout(listeningTimer);listeningUtterance=null;
  if('speechSynthesis' in window)speechSynthesis.cancel();
  if(listeningSession){
    const wasPlaying=listeningSession.playing||listeningSession.paused;
    listeningSession.playing=false;listeningSession.paused=false;
    if(message)listeningSession.status=message;else if(wasPlaying)listeningSession.status='播放已停止，点播放可重新听本段。';
  }
  updateListeningPlayer();
}
function listeningVoices(){
  if(!('speechSynthesis' in window)||typeof speechSynthesis.getVoices!=='function')return [];
  return speechSynthesis.getVoices().filter(voice=>/^en[-_]/i.test(voice.lang));
}
function updateListeningPlayer(){
  const session=listeningSession,status=document.getElementById('listening-status');
  if(!session||!status)return;
  status.textContent=session.status;
  const play=document.querySelector('[data-listening="play"]'),pause=document.querySelector('[data-listening="pause"]');
  if(play)play.textContent=session.paused?'▷ 继续本句':session.playing?'↺ 从本段重听':'▷ 播放英文';
  if(pause)pause.disabled=!session.playing;
  document.querySelectorAll('[data-listening-paragraph]').forEach(button=>{
    const active=Number(button.dataset.listeningParagraph)===session.paragraph;
    button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  const progress=document.getElementById('listening-progress');
  if(progress)progress.textContent=`第 ${session.paragraph+1} / ${getStory(session.id).en.length} 段`;
}
function listeningPlay(resume){
  const session=listeningSession;
  if(!session)return;
  if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){
    session.status='当前浏览器不支持英语朗读。请用支持朗读的浏览器（如桌面 Edge）打开，或先查看英文原文。';updateListeningPlayer();return;
  }
  const voices=listeningVoices();
  if(speechSynthesis.getVoices().length&&!voices.length){
    session.status='设备上没有可用的英语语音，请安装系统英语语音后重试。';updateListeningPlayer();return;
  }
  const chunk=resume?session.chunk:0;
  listeningStop();session.chunk=chunk;session.playing=true;session.paused=false;
  const generation=listeningGeneration,voice=voices.find(v=>v.lang.replace('_','-').toLowerCase()===session.accent.toLowerCase())||voices[0];
  function next(){
    if(generation!==listeningGeneration||!session.playing||clozeView!=='listen')return;
    const story=getStory(session.id),chunks=listeningPlaybackChunks(session,story);
    if(session.chunk>=chunks.length){
      if(story.novel){if(session.scope==='sentence')session.precisionDrafts[session.paragraph][session.sentenceIndex].heard=true;else session.drafts[session.paragraph].heard=true;}
      session.chunk=0;
      if(session.loop){session.status='本段已听完，再听一遍。';}
      else if(session.scope!=='sentence'&&session.continuous&&session.paragraph+1<story.en.length){session.paragraph++;session.sentenceIndex=0;session.transcript=false;reader(session.id);}
      else {session.playing=false;session.status='播放完成。可以复述情节，或切到重点词听写。';updateListeningPlayer();return;}
    }
    const text=listeningPlaybackChunks(session,story)[session.chunk];
    const utterance=new SpeechSynthesisUtterance(text);listeningUtterance=utterance;
    utterance.lang=voice?voice.lang:session.accent;if(voice)utterance.voice=voice;utterance.rate=state.preferences.rate;
    session.status=session.scope==='sentence'?`正在听第 ${session.paragraph+1} 段 · 第 ${session.sentenceIndex+1} 句`:`正在听第 ${session.paragraph+1} 段 · 第 ${session.chunk+1} 小节`;updateListeningPlayer();
    clearTimeout(listeningTimer);
    listeningTimer=setTimeout(()=>{if(generation===listeningGeneration)listeningStop('语音没有启动。请检查设备英语语音，或换支持朗读的浏览器重试。');},12000);
    utterance.onstart=()=>{if(generation===listeningGeneration)clearTimeout(listeningTimer);};
    utterance.onend=()=>{if(generation!==listeningGeneration)return;clearTimeout(listeningTimer);session.chunk++;next();};
    utterance.onerror=event=>{
      if(generation!==listeningGeneration)return;
      listeningStop(['canceled','interrupted'].includes(event.error)?'播放已停止。':'英语语音暂时不可用。请检查系统语音与网络后重试，或换支持朗读的浏览器。');
    };
    try{speechSynthesis.speak(utterance);}catch(_){listeningStop('英语语音未能启动，请换支持朗读的浏览器重试。');}
  }
  next();
}
function listeningReader(story){
  const session=ensureListening(story),draft=session.drafts[session.paragraph],supported='speechSynthesis' in window&&typeof SpeechSynthesisUtterance!=='undefined';
  state.lastStory=story.id;save();
  main.innerHTML=`<div class="reader-top"><a class="back-link" href="#library">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="bookmark" data-id="${esc(story.id)}">${state.bookmarks.includes(story.id)?'★ 已加书签':'☆ 加书签'}</button><button class="button secondary compact" data-action="focus">${document.body.classList.contains('focus-mode')?'退出专注':'专注阅读'}</button></div></div>${storyStudySteps('listen')}${readerTools()}<article class="reader-paper webnovel-paper listening-paper"><div class="eyebrow">STORY LISTENING · ${esc(story.category)}</div><h1>${esc(story.title)}</h1><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="cloze-step-heading"><h2>第三步：听故事，抓住英文</h2><p>先盲听抓人物、行动和转折，再逐段听写重点词。播放的是英文参考段落，与中文网文扩写并非逐句对应。</p></div><div class="listening-modes"><button data-listening-mode="blind" aria-pressed="${session.mode==='blind'}" class="${session.mode==='blind'?'active':''}">先听故事</button><button data-listening-mode="dictation" aria-pressed="${session.mode==='dictation'}" class="${session.mode==='dictation'?'active':''}">重点词听写</button></div><section class="listening-player" aria-label="故事播放器"><div class="listening-player-top"><strong id="listening-progress">第 ${session.paragraph+1} / ${story.en.length} 段</strong><span>设备英语语音</span></div><div class="listening-paragraphs" aria-label="选择段落">${story.en.map((_,i)=>`<button data-listening-paragraph="${i}" aria-label="播放段落选择：第 ${i+1} 段" aria-pressed="${session.paragraph===i}" class="${session.paragraph===i?'active':''}">${String(i+1).padStart(2,'0')}</button>`).join('')}</div><div class="listening-buttons"><button class="button" data-listening="play">▷ 播放英文</button><button class="button secondary" data-listening="pause" disabled>暂停</button><button class="button secondary" data-listening="stop">停止</button></div><div class="listening-options"><label><input id="listening-continuous" type="checkbox" ${session.continuous?'checked':''}> 连播后续段落</label><label><input id="listening-loop" type="checkbox" ${session.loop?'checked':''}> 循环本段</label><label for="listening-accent">口音<select id="listening-accent"><option value="en-GB" ${session.accent==='en-GB'?'selected':''}>英式优先</option><option value="en-US" ${session.accent==='en-US'?'selected':''}>美式优先</option></select></label></div><p id="listening-status" class="listening-status" role="status" aria-live="polite">${esc(supported?session.status:'当前浏览器不支持英语朗读。请用支持朗读的浏览器（如桌面 Edge）打开。')}</p><p class="practice-label">语速可在上方调整。音色取决于设备已安装的英语语音；部分语音需要联网。暂停后继续会从当前句开头重听。</p></section>${session.mode==='blind'?'<div class="listening-prompt"><strong>先听，不急着看答案。</strong><p>谁在做什么？遇到了什么阻碍？事情怎样发生转折？听完后用一两句话复述，再展开原文核对。</p></div>':listeningDictation(draft)}<div class="listening-transcript-actions"><button class="button secondary" data-listening="transcript" aria-expanded="${session.transcript}">${session.transcript?'隐藏英文原文':'显示英文原文与词义'}</button>${session.transcript?'<p class="practice-label">本段已查看原文；这一轮听写核对不计入词汇掌握。重新听写可开启新一轮。</p>':''}</div>${session.transcript?`<section class="listening-transcript"><h3>第 ${session.paragraph+1} 段 · 原文核对</h3><p class="translation" lang="en">${formatEnglish(story.en[session.paragraph])}</p><div class="listening-vocabulary">${draft.slots.map(slot=>`<p><button class="story-word" data-word="${esc(slot.id)}" lang="en">${esc(slot.answer)}</button><span>${esc(getWord(slot.id)?.meaning||'')}</span></p>`).join('')}</div></section>`:''}<div class="listening-next"><button class="button secondary" data-listening="previous" ${session.paragraph===0?'disabled':''}>← 上一段</button><button class="button secondary" data-listening="next" ${session.paragraph===story.en.length-1?'disabled':''}>下一段 →</button></div></article>`;
  applyPreferences();updateListeningPlayer();
}
function listeningDictation(draft){
  if(!draft.slots.length)return '<p class="listening-prompt">这一段没有标记词，可先盲听并复述情节。</p>';
  let index=0;
  const story=getStory(listeningSession.id),text=story.en[listeningSession.paragraph].split(/(\[\[.*?\]\])/g).map(part=>{
    if(!part.startsWith('[['))return esc(part);
    const i=index++,result=draft.results?.[i];
    return `<span class="listening-slot ${result||''}"><label for="listening-answer-${i}">${i+1}.</label><input id="listening-answer-${i}" data-listening-answer="${i}" aria-label="听写第 ${i+1} 空" aria-invalid="${result==='wrong'}" value="${esc(draft.answers[i])}" placeholder="________" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="80" enterkeyhint="next" ${draft.results?'disabled':''}>${result?`<span class="listening-feedback">${result==='correct'?'✓':'→ '+esc(draft.slots[i].answer)}</span>`:''}</span>`;
  }).join('');
  return `<section class="listening-dictation"><h3>听清这段剧情里的 ${draft.slots.length} 个词</h3><p class="practice-label">按录音中的实际拼写回填，包括过去式或复数；不区分大小写。先听再答，原文默认隐藏。</p>${draft.results?`<div class="cloze-summary" role="status"><strong>答对 ${draft.results.filter(result=>result==='correct').length} / ${draft.slots.length} 空</strong><p>${draft.assisted?'本轮查看过参考或未完整播放，结果仅供核对，不计入词汇掌握。':'已保存本轮结果，错词已加入复习。'}</p></div>`:''}<form id="listening-form" novalidate><p class="listening-cloze-text" lang="en">${text}</p><div class="listening-form-actions">${draft.results?'<button type="button" class="button" data-listening="restart">重新听写本段</button>':'<button type="submit" class="button">核对听写 →</button>'}<button type="button" class="text-link" data-listening="restart">清空，重新听写</button></div></form></section>`;
}
const readerBeforeListening=reader;
reader=function(id){
  if(listeningSession&&(listeningSession.id!==id||clozeView!=='listen'))listeningStop();
  readerBeforeListening(id);
};
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-listening],[data-listening-mode],[data-listening-paragraph]');
  if(!button||!listeningSession)return;
  event.preventDefault();event.stopImmediatePropagation();
  const session=listeningSession,draft=session.drafts[session.paragraph],action=button.dataset.listening;
  if(button.dataset.listeningMode){listeningStop();session.mode=button.dataset.listeningMode;session.continuous=['blind','questions'].includes(session.mode);session.loop=false;session.chunk=0;reader(session.id);return;}
  if(button.dataset.listeningParagraph!==undefined||action==='previous'||action==='next'){
    listeningStop();session.chunk=0;session.sentenceIndex=0;session.transcript=false;
    session.paragraph=button.dataset.listeningParagraph!==undefined?Number(button.dataset.listeningParagraph):session.paragraph+(action==='next'?1:-1);
    session.paragraph=Math.max(0,Math.min(session.drafts.length-1,session.paragraph));session.status='段落已切换，点播放开始。';reader(session.id);return;
  }
  if(action==='play')listeningPlay(session.paused);
  else if(action==='pause'){listeningStop('已暂停。继续时从当前句开头重听。');session.paused=true;updateListeningPlayer();}
  else if(action==='stop'){listeningStop('播放已停止。');session.chunk=0;}
  else if(action==='transcript'){session.transcript=!session.transcript;if(session.transcript){draft.assisted=true;if(session.comprehension)session.comprehension.assisted=true;if(session.precisionDrafts)session.precisionDrafts[session.paragraph].forEach(sentence=>sentence.assisted=true);}reader(session.id);}
  else if(action==='restart'){listeningStop();draft.answers=draft.slots.map(()=> '');draft.results=null;draft.assisted=false;draft.heard=false;session.transcript=false;session.chunk=0;session.status='新一轮听写已开始。';reader(session.id);}
},true);
document.addEventListener('change',event=>{
  if(!listeningSession||clozeView!=='listen')return;
  const id=event.target.id;
  if(id==='listening-loop')listeningSession.loop=event.target.checked;
  else if(id==='listening-continuous')listeningSession.continuous=event.target.checked;
  else if(id==='listening-accent'){listeningStop('口音偏好已更改，点播放重听。');listeningSession.accent=event.target.value;listeningSession.chunk=0;}
  else if(id==='speech-rate'){listeningStop('语速已更改，点播放重听。');listeningSession.chunk=0;}
});
document.addEventListener('input',event=>{
  if(event.target.dataset.listeningAnswer===undefined||!listeningSession)return;
  const draft=listeningSession.drafts[listeningSession.paragraph];
  if(!draft.results)draft.answers[Number(event.target.dataset.listeningAnswer)]=event.target.value;
});
document.addEventListener('keydown',event=>{
  if(event.key!=='Enter'||event.target.dataset.listeningAnswer===undefined)return;
  event.preventDefault();const index=Number(event.target.dataset.listeningAnswer),next=document.getElementById('listening-answer-'+(index+1));
  if(next)next.focus();else document.querySelector('#listening-form button[type="submit"]')?.click();
});
document.addEventListener('submit',event=>{
  if(event.target.id!=='listening-form')return;
  event.preventDefault();event.stopImmediatePropagation();
  const session=listeningSession,draft=session.drafts[session.paragraph];if(draft.results)return;
  const empty=draft.answers.findIndex(value=>!normalizeCloze(value));
  if(empty>=0){toast(`第 ${empty+1} 空还没填写。先重听，或展开原文核对。`);document.getElementById('listening-answer-'+empty).focus();return;}
  draft.results=draft.slots.map((slot,i)=>isClozeCorrect(draft.answers[i],slot.answer)?'correct':'wrong');
  if(getStory(session.id).novel&&!draft.heard)draft.assisted=true;
  if(!draft.assisted){
    const ids=[...new Set(draft.slots.map(slot=>slot.id))];
    ids.forEach(id=>recordInSkills(id,draft.slots.every((slot,i)=>slot.id!==id||draft.results[i]==='correct'),['listen','spell']));
  }
  if(session.comprehension)session.comprehension.assisted=true;
  if(session.precisionDrafts)session.precisionDrafts[session.paragraph].forEach(sentence=>sentence.assisted=true);
  reader(session.id);document.querySelector('.cloze-summary')?.scrollIntoView({block:'center'});
},true);
window.addEventListener('hashchange',()=>listeningStop());
window.addEventListener('pagehide',()=>listeningStop());
document.addEventListener('visibilitychange',()=>{if(document.hidden&&listeningSession?.playing)listeningStop('已停止后台播放。回到页面后可重新播放。');});
if('speechSynthesis' in window&&typeof speechSynthesis.addEventListener==='function')speechSynthesis.addEventListener('voiceschanged',updateListeningPlayer);
