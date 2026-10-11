/* Mobile enhancements preserve wordscene-v2 progress and the existing routes. */
(() => {
  function syncNavigation(){
    document.querySelectorAll('[data-nav]').forEach(link=>{
      if(link.classList.contains('active'))link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
    const badge=document.getElementById('nav-due');
    if(badge)badge.hidden=Number(badge.textContent)===0;
  }
  function enhanceControls(){
    const route=location.hash.slice(1).split('/')[0]||'library';
    document.body.dataset.view=route;
    document.querySelectorAll('.coverage-panel').forEach(panel=>{
      const paragraph=panel.querySelector('div:first-child p');
      const lineBreak=paragraph?.querySelector('br');
      if(lineBreak&&!paragraph.querySelector('.coverage-reference')){
        const reference=document.createElement('span');
        reference.className='coverage-reference';
        lineBreak.after(reference);
        while(reference.nextSibling)reference.append(reference.nextSibling);
        reference.prepend(lineBreak);
      }
      const unitLink=panel.querySelector('a[href="#units"]');
      if(unitLink&&!unitLink.querySelector('.unit-label-mobile'))unitLink.innerHTML='<span class="unit-label-full">按单元学习全部词 →</span><span class="unit-label-mobile">学习单元 →</span>';
    });
    document.querySelectorAll('.search input').forEach(input=>{
      input.setAttribute('enterkeyhint','search');
      input.setAttribute('autocapitalize','none');
      input.setAttribute('autocorrect','off');
    });
    document.getElementById('spell-input')?.setAttribute('enterkeyhint','done');
    document.querySelectorAll('[data-category],[data-notebook],[data-mode],[data-reading]').forEach(button=>button.setAttribute('aria-pressed',String(button.classList.contains('active'))));
    const table=document.querySelector('.word-table');
    if(table){
      const headings=[...table.querySelectorAll('thead th')];
      headings.forEach((heading,index)=>{heading.id='word-column-'+index;heading.scope='col';});
      table.querySelectorAll('tbody tr').forEach(row=>[...row.children].forEach((cell,index)=>cell.setAttribute('headers','word-column-'+index)));
    }
    syncNavigation();
  }
  const existingNav=updateNav;
  updateNav=function(){existingNav();syncNavigation();};
  for(const method of ['render','reader','quizPage','renderWordList']){
    // Function declarations in the buildless app are also properties of window.
    const existing=window[method];
    window[method]=function(...args){const result=existing(...args);enhanceControls();return result;};
  }
  const originalPreferences=applyPreferences;
  applyPreferences=function(){
    originalPreferences();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',state.preferences.night?'#1d2522':'#f6f5f0');
  };
  function syncDialogState(){document.body.classList.toggle('dialog-open',wordDialog.open||utilityDialog.open);}
  const dialogObserver=new MutationObserver(syncDialogState);
  [wordDialog,utilityDialog].forEach(dialog=>dialogObserver.observe(dialog,{attributes:true,attributeFilter:['open']}));
  let restingHeight=window.innerHeight;
  function syncKeyboard(){
    const editable=document.activeElement?.matches('input:not([type="file"]),textarea');
    const visibleHeight=window.visualViewport?.height||window.innerHeight;
    if(!editable)restingHeight=window.innerHeight;
    document.body.classList.toggle('keyboard-open',Boolean(editable&&restingHeight-visibleHeight>150));
  }
  document.addEventListener('focusin',syncKeyboard);
  document.addEventListener('focusout',()=>setTimeout(syncKeyboard,80));
  window.visualViewport?.addEventListener('resize',syncKeyboard);
  window.addEventListener('resize',syncKeyboard);
  window.addEventListener('orientationchange',()=>{restingHeight=window.innerHeight;syncKeyboard();});
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-category],[data-notebook]');
    if(button){enhanceControls();button.scrollIntoView({block:'nearest',inline:'nearest',behavior:'auto'});}
  });
  enhanceControls();
  syncDialogState();
  applyPreferences();
})();
