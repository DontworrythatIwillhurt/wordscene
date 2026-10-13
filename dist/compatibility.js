/* Small fallbacks for older mobile engines; progress keeps the same storage key. */
(function(){
  if(typeof globalThis==='undefined')window.globalThis=window;
  if(!Object.fromEntries)Object.fromEntries=function(entries){
    var result={};
    entries.forEach(function(entry){Object.defineProperty(result,entry[0],{value:entry[1],enumerable:true,writable:true,configurable:true});});
    return result;
  };
  if(!Object.entries)Object.entries=function(object){return Object.keys(object).map(function(key){return [key,object[key]];});};
  if(!Object.values)Object.values=function(object){return Object.keys(object).map(function(key){return object[key];});};
  // Native <dialog> is absent in older Safari and some Android browser engines.
  var dialogs=document.querySelectorAll('dialog'),active=null,previousFocus=null;
  function syncBackdrop(){document.body.classList.toggle('dialog-fallback-open',!!document.querySelector('dialog.dialog-fallback[open]'));}
  for(var i=0;i<dialogs.length;i++){
    var dialog=dialogs[i];
    if(typeof dialog.showModal==='function'&&typeof dialog.close==='function')continue;
    dialog.classList.add('dialog-fallback');
    dialog.setAttribute('role','dialog');
    dialog.setAttribute('aria-modal','true');
    if(!('open' in dialog))Object.defineProperty(dialog,'open',{get:function(){return this.hasAttribute('open');},set:function(value){if(value)this.setAttribute('open','');else this.removeAttribute('open');}});
    dialog.showModal=function(){
      previousFocus=document.activeElement;active=this;
      this.setAttribute('open','');syncBackdrop();
      var focusable=this.querySelector('button,input,select,textarea,a[href]');
      if(focusable)focusable.focus();
    };
    dialog.close=function(){
      var wasOpen=this.hasAttribute('open');this.removeAttribute('open');syncBackdrop();
      if(active===this)active=null;
      if(previousFocus&&document.documentElement.contains(previousFocus))previousFocus.focus();
      if(wasOpen){var event=document.createEvent('Event');event.initEvent('close',false,false);this.dispatchEvent(event);}
    };
  }
  document.addEventListener('keydown',function(event){
    if(!active)return;
    if(event.key==='Escape'){event.preventDefault();active.close();return;}
    if(event.key!=='Tab')return;
    var controls=Array.prototype.filter.call(active.querySelectorAll('button,input,select,textarea,a[href],[tabindex]'),function(element){return !element.disabled&&element.tabIndex>=0&&element.getClientRects().length;});
    if(!controls.length){event.preventDefault();return;}
    var first=controls[0],last=controls[controls.length-1];
    if(event.shiftKey&&(document.activeElement===first||!active.contains(document.activeElement))){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&(document.activeElement===last||!active.contains(document.activeElement))){event.preventDefault();first.focus();}
  });
})();
