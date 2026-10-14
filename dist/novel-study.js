/* Chapter listening and original CET-style micro-practice from the same story. */
const NOVEL_STUDY_LABEL='以下为原创 CET-style 仿真模拟训练。';
let novelPointSession=null,novelDraftTimer=null,novelHubId='';
function novelStudyChapter(preferHub=false){return SERIAL_CHAPTER_INDEX.get((preferHub&&novelHubId)||state.serial.lastChapter)||SERIAL_CHAPTER_INDEX.values().next().value;}
function novelStudyUrl(chapter,view){return '#serial/'+chapter.book.id+'/'+chapter.id+(view==='read'?'':'/'+view);}
function novelStudyNav(chapter,view){return `<nav class="cloze-steps novel-study-tabs" aria-label="本章学习方式">${[['read','01 · READ','沉浸阅读'],['exercise','02 · RECALL','剧情填空'],['listen','03 · LISTEN','故事听力'],['points','04 · APPLY','六级考点']].map(([key,no,label])=>`<a href="${novelStudyUrl(chapter,key)}" data-serial-view="${key}" class="${view===key?'active':''}" ${view===key?'aria-current="page"':''}><small>${no}</small>${label}</a>`).join('')}</nav>`;}
function novelFeatureLinks(chapter){return `<section class="novel-feature-grid" aria-label="小说辅助学习"><a class="novel-feature" href="${novelStudyUrl(chapter,'listen')}"><small>LISTEN IN THE STORY</small><h3>听这一章，抓住线索</h3><p>整章连播 · 重点词听写 · 单句精听</p><span>故事听力 →</span></a><a class="novel-feature" href="${novelStudyUrl(chapter,'points')}"><small>CET-6 IN CONTEXT</small><h3>从这一章，读懂考点</h3><p>语境辨义 · 词形还原 · 逻辑关系 · 剧情翻译</p><span>本章六级考点 →</span></a></section>`;}
function novelStudyHub(){
  const chapter=novelStudyChapter(true);if(!chapter){serialNotFound();return;}main.dataset.view='novel-hub';
  main.innerHTML=`<section class="page-heading"><div class="serial-kicker">READ · LISTEN · APPLY</div><h1>故事里的词，听懂也用对。</h1><p>先选一章，再把同一段剧情读懂、听清、写出来。</p></section><section class="novel-chapter-picker"><label for="novel-study-chapter">今天练哪一章？</label><select id="novel-study-chapter">${serialBooks().map(book=>`<optgroup label="${esc(book.title)}">${book.chapters.map(c=>`<option value="${c.id}" ${c.id===chapter.id?'selected':''}>${String(Number(c.id.split('-').pop())).padStart(2,'0')} · ${esc(c.title)}</option>`).join('')}</optgroup>`).join('')}</select><p id="novel-hub-summary">${esc(chapter.summary)}</p></section><section class="novel-feature-grid">${[['listen','故事听力','整章连播、词汇听写、逐句核对'],['points','小说六级考点','从本章原句练语境、词形与逻辑'],['journey','八词线索闯关','找出线索、拼回动作、听音寻词'],['exam','六级题型训练','选词填空、仔细阅读、信息匹配与写译']].map(([kind,title,text])=>`<a class="novel-feature" data-novel-hub="${kind}" href="${kind==='exam'?'#practice/home':kind==='journey'?'#practice/journey/'+chapter.id:novelStudyUrl(chapter,kind)}"><small>${kind==='exam'?'EXAM PRACTICE':'IN THIS CHAPTER'}</small><h2>${title}</h2><p>${text}</p><span>进入练习 →</span></a>`).join('')}</section><section class="serial-entry"><div><h2>先回到人物的选择。</h2><p>听力和考点使用所选章的同一份正文，学习成绩分别记录。</p></div><a class="button secondary" data-novel-hub="read" href="${novelStudyUrl(chapter,'read')}">读所选章 →</a></section>`;applyPreferences();
}
function novelStoryAdapter(chapter){return {...chapter,novel:true,words:serialTerms(chapter).map(term=>{
  const marker=wordsceneMatches(chapter.en.join(' '),/\[\[([^|\]]+)\|([^\]]+)\]\]/g).find(m=>m[1]===term.id);
  return {...getWord(term.id),id:term.id,word:clozeExpected(term.id),meaning:term.meaning,surface:marker?.[2]||clozeExpected(term.id),storyId:chapter.id,source:chapter.title};
})};}
const getStoryBeforeNovel=getStory;
getStory=function(id){const chapter=SERIAL_CHAPTER_INDEX.get(id);return chapter?.cn?.length?novelStoryAdapter(chapter):getStoryBeforeNovel(id);};
function novelStudyTop(chapter,view){return `<div class="reader-top"><a class="back-link" href="#serial/${chapter.book.id}">← ${esc(chapter.book.title)} · 目录</a><a class="text-link" href="#practice">听读练习总览 →</a></div>${novelStudyNav(chapter,view)}${readerTools()}`;}
function novelStudyPage(id,view){
  const chapter=SERIAL_CHAPTER_INDEX.get(id);if(!chapter?.cn?.length){serialNotFound();return;}
  serialReadId=id;serialReadView=view;clozeView=view;state.serial.lastChapter=id;
  if(view==='listen'){
    const previous=state.lastStory;
    listeningReader(novelStoryAdapter(chapter));state.lastStory=previous;save();main.dataset.view='novel-listen';
    main.querySelector('.reader-top').outerHTML=novelStudyTop(chapter,view).replace(/<nav[\s\S]*$/,'');
    main.querySelector('.cloze-steps').outerHTML=novelStudyNav(chapter,view);
    main.querySelector('.reader-controls')?.remove();
    const heading=main.querySelector('.cloze-step-heading');heading.querySelector('h2').textContent='听这一章，再把线索听回来';heading.querySelector('p').textContent='本章英文与中文剧情对应。先听人物、行动和转折，再逐段听写或单句精听。';
    main.querySelector('[data-listening-mode="questions"]')?.remove();
    main.querySelectorAll('.listening-vocabulary p').forEach(row=>{const id=row.querySelector('[data-word]').dataset.word;row.querySelector('span').textContent=serialTerms(chapter).find(term=>term.id===id)?.meaning||getWord(id).meaning;});
    main.querySelector('.listening-paper').insertAdjacentHTML('beforeend',`<div class="serial-entry"><div><h2>听到的表达，怎样用进六级？</h2><p>回到本章原句，练语境、词形和逻辑，再试着翻译一段剧情。</p></div><a class="button secondary" href="${novelStudyUrl(chapter,'points')}">本章六级考点 →</a></div>`);
  }else novelPointsPage(chapter);
  applyPreferences();
}
const serialReadBeforeNovel=serialRead;
serialRead=function(id,view){
  const chapter=SERIAL_CHAPTER_INDEX.get(id),requested=view||(serialReadId===id?serialReadView:'read');
  if(chapter?.cn?.length&&['listen','points'].includes(requested))return novelStudyPage(id,requested);
  const result=serialReadBeforeNovel(id,view);
  if(chapter?.cn?.length&&main.querySelector('.cloze-steps'))main.querySelector('.cloze-steps').outerHTML=novelStudyNav(chapter,serialReadView);
  return result;
};
const libraryBeforeNovelStudy=library;
library=function(){libraryBeforeNovelStudy();const chapter=novelStudyChapter();if(chapter)main.querySelector('.serial-rewards')?.insertAdjacentHTML('afterend',novelFeatureLinks(chapter));};
const practicePageBeforeNovel=practicePage;
practicePage=function(section){if(!section)return novelStudyHub();const result=practicePageBeforeNovel(section);main.insertAdjacentHTML('afterbegin','<div class="reader-top"><a class="back-link" href="#practice">← 听读练习总览</a></div>');return result;};
const progressBeforeNovelStudy=progress;
progress=function(){progressBeforeNovelStudy();const records=Object.entries(state.training).filter(([key])=>key.startsWith('novel:')).sort((a,b)=>b[1].updatedAt-a[1].updatedAt);main.querySelector('.progress-grid')?.insertAdjacentHTML('afterend',`<section class="progress-card"><h2>小说里的六级考点</h2><p>已练 ${records.length} 章。听写的重点词计入“听出”和“拼对”，考点微练按章节单独保存。</p>${records.slice(0,5).map(([key,r])=>{const c=SERIAL_CHAPTER_INDEX.get(key.slice(6));return `<p><a class="text-link" href="${novelStudyUrl(c,'points')}">${esc(c.book.title)} · ${esc(c.title)} →</a> <span>最近 ${r.correct} / ${r.total} 项</span></p>`;}).join('')}<a class="text-link" href="#practice">继续听读练习 →</a></section>`);};
const wordModalBeforeNovelStudy=wordModal;
wordModal=function(id){if(main.dataset.view==='novel-points'&&novelPointSession&&!novelPointSession.checked)novelPointSession.assisted=true;if(main.dataset.view==='novel-listen'&&listeningSession){const l=listeningSession;l.drafts[l.paragraph].assisted=true;l.precisionDrafts[l.paragraph].forEach(d=>d.assisted=true);}return wordModalBeforeNovelStudy(id);};
document.addEventListener('change',event=>{if(event.target.id!=='novel-study-chapter')return;novelHubId=event.target.value;const c=novelStudyChapter(true);document.getElementById('novel-hub-summary').textContent=c.summary;main.querySelectorAll('[data-novel-hub]').forEach(link=>{const kind=link.dataset.novelHub;if(kind==='exam')return;link.href=kind==='journey'?'#practice/journey/'+c.id:novelStudyUrl(c,kind);});});

const NOVEL_LOGIC_POINTS=[
  {id:'contrast',label:'转折或让步',pattern:/\b(?:however|nevertheless|although|even though)\b|^["'“\s]*but\b|[,;]\s*but\b/i,note:'先找前后观点或情境的差异，再看人物最终采取什么行动。不能只抓转折前的一句，就判断整句态度。'},
  {id:'condition',label:'条件和限制',pattern:/^["'“\s]*(?:if|unless)\b|[,;]\s*(?:if|unless)\b|\bprovided that\b/i,note:'把条件与结果分开，再连起来读。条件尚未满足时，结果也不能当成已经发生的事实；unless 表示否定条件。'},
  {id:'reason',label:'原因和结果',pattern:/\bbecause(?: of)?\b/i,note:'分清原因和结果各是什么。选项若把因果颠倒，或只写一个相邻细节，就不等于准确解释了人物的行动。'},
  {id:'sequence',label:'时间或先后顺序',pattern:/^["'“\s]*(?:before|after|then|later|finally)\b|\buntil\b/i,note:'先确定时间范围或先后顺序。until 提示某种状态持续到一个时间点；不能把先发生直接当成造成后果的原因。'}
];
function novelSentences(chapter){return chapter.en.reduce((all,paragraph,index)=>all.concat(storySentences(paragraph).map(sentence=>({marked:sentence.text,text:listeningPlain(sentence.text),paragraph:index}))),[]);}
function novelWordExample(chapter,id){const found=novelSentences(chapter).find(s=>s.marked.includes('[['+id+'|'));if(found)return found;const paragraph=chapter.en.findIndex(p=>p.includes('[['+id+'|'));if(paragraph>=0)return {marked:chapter.en[paragraph],text:listeningPlain(chapter.en[paragraph]),paragraph};}
function novelLogicExamples(chapter){const sentences=novelSentences(chapter),examples=[];for(const rule of NOVEL_LOGIC_POINTS){const conditionalProvided=rule.id==='condition'&&serialTerms(chapter).some(t=>t.id==='provided'&&/只要|假如|如果|倘若/.test(t.meaning));const sentence=sentences.find(s=>rule.pattern.test(s.text)||(conditionalProvided&&s.marked.includes('[[provided|provided]]')));if(sentence){const match=sentence.text.match(rule.pattern)||['provided'];examples.push({...sentence,rule,cue:match[0].trim().replace(/^[,;“"'\s]+/, '')});}}return examples;}
function novelForms(chapter){const rows=[];chapter.en.forEach((text,paragraph)=>wordsceneMatches(text,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).forEach(([,id,surface])=>{if(normalizeCloze(surface)!==normalizeCloze(clozeExpected(id)))rows.push({id,surface,paragraph,example:novelWordExample(chapter,id)});}));return rows;}
function novelQuizStart(chapter){
  const items=[];
  for(const term of shuffle(serialTerms(chapter)).slice(0,5)){
    const example=novelWordExample(chapter,term.id);if(!example)continue;
    const marker=wordsceneMatches(example.marked,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).find(m=>m[1]===term.id);
    items.push({kind:'meaning',id:term.id,example,answer:term.id,meaning:term.meaning,surface:marker[2],options:skillMeaningOptions({...getWord(term.id),id:term.id,meaning:term.meaning}).map(w=>({value:w.id,text:w.meaning,word:w.id}))});
  }
  for(const row of novelForms(chapter).slice(0,2))items.push({kind:'form',...row,answer:row.surface});
  const logic=novelLogicExamples(chapter)[0];if(logic)items.push({kind:'logic',example:logic,answer:logic.rule.id,options:shuffle(NOVEL_LOGIC_POINTS.map(rule=>({value:rule.id,text:rule.label}))) });
  novelPointSession={id:chapter.id,items,choices:items.map(()=>''),checked:false,assisted:false,reference:false};novelPointsPage(chapter);
  document.getElementById('novel-quiz')?.scrollIntoView({block:'start'});
}
function novelQuizCorrect(item,answer){return item.kind==='form'?normalizeCloze(answer)===normalizeCloze(item.answer):answer===item.answer;}
function novelQuizPanel(chapter){
  const s=novelPointSession;if(!s)return `<section class="novel-lesson"><h2>把本章表达，换一种方式认出来。</h2><p>从本章原句抽取五个词，再练实际词形和逻辑信号。先作答，提交后看依据。</p><button class="button" data-novel-action="quiz-start">开始本章考点微练 →</button></section>`;
  const correct=s.items.filter((item,i)=>novelQuizCorrect(item,s.choices[i])).length;
  return `<section class="novel-lesson" id="novel-quiz"><h2>本章考点微练</h2><p class="practice-label">${NOVEL_STUDY_LABEL} ${s.checked?(s.assisted?'已查看参考，本轮只作核对。':'本轮成绩已保存，重复提交不重复计分。'):'先选完或填完，再核对。查看词卡或参考后，本轮只作核对。'}</p>${s.checked?`<div class="cloze-summary" role="status"><strong>答对 ${correct} / ${s.items.length} 项</strong></div>`:''}${s.items.map((item,i)=>{
    const result=s.checked?novelQuizCorrect(item,s.choices[i]):null;
    const title=item.kind==='meaning'?`原句中的 ${item.surface} 更接近哪个意思？`:item.kind==='form'?`把 ${clozeExpected(item.id)} 填成本章原句的实际词形。`:`加粗的「${item.example.cue}」提示什么关系？`;
    let example=item.example.text;
    if(item.kind==='form')example=listeningPlain(item.example.marked.replace(new RegExp('\\[\\['+item.id+'\\|[^\\]]+\\]\\]'),'________'));
    let rendered=esc(example);if(item.kind==='meaning')rendered=esc(item.example.marked).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g,(_,id,surface)=>id===item.id?'<strong>'+surface+'</strong>':surface);
    if(item.kind==='logic'){const at=example.toLowerCase().indexOf(item.example.cue.toLowerCase());rendered=esc(example.slice(0,at))+'<strong>'+esc(example.slice(at,at+item.example.cue.length))+'</strong>'+esc(example.slice(at+item.example.cue.length));}
    return `<article class="novel-question ${result===null?'':result?'correct':'wrong'}"><small>${i+1} · ${item.kind==='meaning'?'语境辨义':item.kind==='form'?'词形还原':'逻辑关系'}</small><h3>${esc(title)}</h3><p class="novel-example" lang="en">${rendered}</p>${item.kind==='form'?`<label class="sr-only" for="novel-form-${i}">第 ${i+1} 项实际词形</label><input id="novel-form-${i}" class="spelling-input" data-novel-form="${i}" value="${esc(s.choices[i])}" autocomplete="off" autocapitalize="off" spellcheck="false" ${s.checked?'disabled':''}>`:`<div class="novel-options">${item.options.map(option=>`<button data-novel-answer="${i}:${esc(option.value)}" aria-pressed="${s.choices[i]===option.value}" ${s.checked?'disabled':''} class="${s.choices[i]===option.value?'selected':''}">${esc(option.text)}</button>`).join('')}</div>`}${s.checked?`<div class="novel-feedback"><strong>${result?'✓ 回忆正确':'沿着原句再看一次'}</strong><p>${item.kind==='meaning'?esc(item.surface+' 在本章表示「'+item.meaning+'」。'):item.kind==='form'?esc('原文用 '+item.surface+'，词库原形是 '+clozeExpected(item.id)+'；听写要保留实际词形。'):esc(item.example.rule.note)}</p><p>依据：本章第 ${item.example.paragraph+1} 段</p><p lang="en">${esc(item.example.text)}</p>${item.kind==='meaning'?`<details><summary>其他选项为什么不合适？</summary>${item.options.filter(o=>o.value!==item.answer).map(o=>`<p>${esc(o.text)}：对应 ${esc(clozeExpected(o.word))}，不是这里 ${esc(item.surface)} 的语境义。</p>`).join('')}</details>`:''}</div>`:''}</article>`;
  }).join('')}<div class="training-actions">${s.checked?'<button class="button" data-novel-action="quiz-start">换一组再练</button><button class="text-link" data-novel-action="quiz-exit">回到本章讲解</button>':'<button class="button" data-novel-action="quiz-submit">核对本章微练 →</button><button class="text-link" data-novel-action="quiz-reference">查看本章参考</button>'}</div></section>`;
}
function novelTranslationDraft(chapter){const key='novel:'+chapter.id;state.microWork[key]||=( {} );return state.microWork[key].translation||=( {text:'',submitted:false,checks:[false,false,false],updatedAt:0} );}
function novelLessonPanels(chapter){
  const logic=novelLogicExamples(chapter).slice(0,2),forms=novelForms(chapter).slice(0,4),sentences=novelSentences(chapter),long=sentences.find(s=>s.text.split(/\s+/).length>=24)||sentences.reduce((best,s)=>s.text.length>best.text.length?s:best,sentences[0]);
  const paragraph=chapter.cn.length-1,draft=novelTranslationDraft(chapter);
  return `<section class="novel-lesson"><h2>原形与实际词形</h2><p>词库复习填原形；听写和翻译要看原句中的实际形式。</p>${forms.length?`<div class="novel-form-list">${forms.map(row=>`<div><button class="text-link" data-word="${row.id}">${esc(clozeExpected(row.id))}</button><span>→</span><strong lang="en">${esc(row.surface)}</strong><small>见第 ${row.paragraph+1} 段</small></div>`).join('')}</div>`:'<p>本章标记词主要使用原形。仍要留意句中未标记动词的时态，以及数量词与名词的搭配。</p>'}</section>${logic.map(row=>`<section class="novel-lesson"><small>阅读与听力 · ${row.rule.label}</small><h2>读到「${esc(row.cue)}」，先找它连接的两部分。</h2><p class="novel-example" lang="en">${esc(row.text)}</p><p>${esc(row.rule.note)}</p><small>本章第 ${row.paragraph+1} 段</small>${row.rule.id==='condition'?'<p><a class="text-link" href="https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second" target="_blank" rel="noopener">条件句语法参考 ↗</a></p>':''}</section>`).join('')}<section class="novel-lesson"><h2>长句：先保留关键事实，再补细节。</h2><p class="novel-example" lang="en">${esc(long.text)}</p><p>先找谁采取了什么行动，再核对时间、条件和附加说明。复述时保留事实之间的关系，避免只拼接认识的单词。</p><button class="text-link" data-novel-sentence="${long.paragraph}">▷ 听这句所在的英文段落</button><p id="serial-speech-status" role="status">与本章剧情相同的英文语境。</p></section><section class="novel-lesson"><small>剧情 → 英文表达</small><h2>试译本章最后一段</h2><p class="novel-translation-source">${esc(listeningPlain(chapter.cn[paragraph]))}</p><form id="novel-translation-form"><label for="novel-translation-input">先写自己的译文，再对照参考</label><textarea id="novel-translation-input" maxlength="7000" placeholder="人物是谁，做了什么，结果怎样？" rows="7">${esc(draft.text)}</textarea><button class="button" type="submit">对照本章参考译文 →</button></form>${draft.submitted?`<div class="novel-translation-reference"><h3>本章参考译文</h3><p class="novel-example" lang="en">${esc(listeningPlain(chapter.en[paragraph]))}</p><p class="practice-label">按信息、语法和表达自评；参考译文可有其他合理写法。</p>${['人物、动作和关键事实没有漏掉','时态、单复数及逻辑关系保持一致','目标词在句中的用法自然、词形正确'].map((text,i)=>`<label><input type="checkbox" data-novel-check="${i}" ${draft.checks[i]?'checked':''}> ${text}</label>`).join('')}</div>`:''}<p class="practice-label">草稿自动保存在当前浏览器，并随学习备份导出。对照译文不增加词汇掌握。</p></section>`;
}
function novelPointsPage(chapter){
  if(novelPointSession?.id!==chapter.id)novelPointSession=null;
  const active=novelPointSession&&!novelPointSession.checked&&!novelPointSession.reference;
  main.dataset.view='novel-points';state.serial.lastChapter=chapter.id;save();
  main.innerHTML=novelStudyTop(chapter,'points')+`<article class="reader-paper"><div class="serial-kicker">${esc(chapter.book.title)} · 第 ${chapter.number} 章</div><h1>把「${esc(chapter.title)}」里的英文用对。</h1><p class="practice-label">${NOVEL_STUDY_LABEL}</p><p>使用本章原句练语境、词形、逻辑与翻译，再到六级题型中检验。</p><div class="novel-point-tags"><span>语境辨义</span><span>词形还原</span><span>逻辑关系</span><span>长句与翻译</span></div>${novelQuizPanel(chapter)}${active?'':novelLessonPanels(chapter)}<div class="serial-entry"><div><h2>再走一步，换到六级题型。</h2><p>选词填空练词性和搭配；阅读练证据与推断；写译练信息组织。</p></div><a class="button secondary" href="#practice/home">六级题型训练 →</a></div></article>`;applyPreferences();
}
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-novel-action],[data-novel-answer],[data-novel-sentence]');if(!b)return;event.preventDefault();event.stopImmediatePropagation();const c=SERIAL_CHAPTER_INDEX.get(serialReadId),s=novelPointSession;
  if(b.dataset.novelSentence!==undefined){serialSpeak(c.en[Number(b.dataset.novelSentence)]);return;}
  if(b.dataset.novelAnswer){if(!s||s.checked)return;const [index,value]=b.dataset.novelAnswer.split(':');s.choices[Number(index)]=value;b.closest('.novel-options').querySelectorAll('button').forEach(button=>{const selected=button===b;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});return;}
  const action=b.dataset.novelAction;
  if(action==='quiz-start'){novelQuizStart(c);return;}
  if(action==='quiz-exit'){novelPointSession=null;novelPointsPage(c);return;}
  if(action==='quiz-reference'&&s&&!s.checked){s.assisted=true;s.reference=true;novelPointsPage(c);return;}
  if(action==='quiz-submit'&&s&&!s.checked){
    if(s.choices.some(answer=>!answer.trim())){toast('先完成每一项，再核对。');return;}
    s.checked=true;const correct=s.items.filter((item,i)=>novelQuizCorrect(item,s.choices[i])).length;
    if(!s.assisted){storeTraining('novel:'+c.id,correct,s.items.length);s.items.forEach((item,i)=>{if(item.id)recordInSkills(item.id,novelQuizCorrect(item,s.choices[i]),[item.kind==='form'?'spell':'read']);});}
    novelPointsPage(c);document.getElementById('novel-quiz').scrollIntoView({block:'start'});
  }
},true);
document.addEventListener('input',event=>{
  if(event.target.dataset.novelForm!==undefined&&novelPointSession&&!novelPointSession.checked)novelPointSession.choices[Number(event.target.dataset.novelForm)]=event.target.value;
  if(event.target.id==='novel-translation-input'){const draft=novelTranslationDraft(SERIAL_CHAPTER_INDEX.get(serialReadId));draft.text=event.target.value;draft.updatedAt=Date.now();draft.submitted=false;clearTimeout(novelDraftTimer);novelDraftTimer=setTimeout(save,250);}
});
document.addEventListener('change',event=>{if(event.target.dataset.novelCheck===undefined)return;const draft=novelTranslationDraft(SERIAL_CHAPTER_INDEX.get(serialReadId));draft.checks[Number(event.target.dataset.novelCheck)]=event.target.checked;draft.updatedAt=Date.now();save();});
document.addEventListener('submit',event=>{if(event.target.id!=='novel-translation-form')return;event.preventDefault();event.stopImmediatePropagation();const chapter=SERIAL_CHAPTER_INDEX.get(serialReadId),draft=novelTranslationDraft(chapter);if(!draft.text.trim()||!/[A-Za-z]/.test(draft.text)){toast('先写下自己的英文，再对照参考。');return;}draft.submitted=true;draft.updatedAt=Date.now();clearTimeout(novelDraftTimer);save();novelPointsPage(chapter);document.querySelector('.novel-translation-reference').scrollIntoView({block:'start'});},true);
window.addEventListener('pagehide',()=>{clearTimeout(novelDraftTimer);save();});
