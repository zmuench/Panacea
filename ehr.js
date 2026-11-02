/* PANACEA EHR skin: adds the navy title bar (home button, this app's tab, site name and clock) to the top of the page. */
(function(){
  var name=(document.title||'').split(/[·|–-]/)[0].trim()||'PANACEA';
  var bar=document.createElement('div');bar.className='ehr-title';
  bar.innerHTML='<a class="ehr-menu" href="../#clinical" aria-label="PANACEA home"><img src="../favicon.svg" alt="">PANACEA</a>'+
    '<div class="ehr-tab"></div><div class="ehr-r"><b>muench.md</b><span class="ehr-clock"></span></div>';
  bar.querySelector('.ehr-tab').textContent=name;
  document.body.insertBefore(bar,document.body.firstChild);
  var c=bar.querySelector('.ehr-clock');
  function t(){c.textContent=new Date().toLocaleString([],{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}
  t();setInterval(t,30000);
})();
