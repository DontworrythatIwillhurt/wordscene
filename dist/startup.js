/* ES5 syntax so a blocked file or unsupported engine never leaves a blank main. */
(function(){
  var failure=null,timer;
  function panel(){return document.getElementById('startup-panel');}
  function showFailure(){
    var element=panel();
    if(!element)return;
    element.querySelector('h1').textContent='内容暂时没能加载';
    element.querySelector('p').textContent='请重试加载。若仍无法显示，请更新浏览器，或复制网址到最新版 Chrome、Edge 打开。学习记录不会被清除。';
    var details=element.querySelector('details');
    details.hidden=false;
    details.querySelector('pre').textContent=failure||'加载等待时间较长，请检查网络后重试。';
    element.querySelector('button').hidden=false;
  }
  window.addEventListener('error',function(event){
    if(!failure){
      if(event.target&&event.target.tagName==='SCRIPT')failure='文件未加载：'+(event.target.src||'').split('/').pop();
      else if(event.message)failure=event.message+(event.filename?'\n文件：'+event.filename.split('/').pop():'');
    }
    if(failure)showFailure();
  },true);
  document.addEventListener('DOMContentLoaded',function(){
    var element=panel();
    if(!element)return;
    element.querySelector('button').addEventListener('click',function(){
      var url=location.href.split('#')[0],hash=location.hash;
      url=url.replace(/([?&])retry=\d+/g,'$1').replace(/[?&]$/,'');
      location.replace(url+(url.indexOf('?')<0?'?':'&')+'retry='+Date.now()+hash);
    });
    if(failure)showFailure();
    else timer=setTimeout(showFailure,20000);
  });
  window.addEventListener('load',function(){if(!panel())clearTimeout(timer);else if(!failure)failure='页面初始化未完成。';if(failure)showFailure();});
})();
