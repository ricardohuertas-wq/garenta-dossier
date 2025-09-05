// Nav: resalta la página activa
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a').forEach(a=>{
    const href = a.getAttribute('href');
    if((path === 'index.html' && href === 'index.html') || (href && path === href)){
      a.classList.add('active');
    }
  });
})();

// DataLayer mínimo y smooth scroll
window.dataLayer = window.dataLayer || [];
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(a){
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); window.scrollTo({top: el.offsetTop - 80, behavior:'smooth'}); }
  }
});
