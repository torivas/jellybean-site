const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#site-nav');

function closeMenu(){
  if(!menuButton || !nav) return;
  nav.classList.remove('active');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Abrir menu');
}

if(menuButton && nav){
  menuButton.addEventListener('click',()=>{
    const isOpen = nav.classList.toggle('active');
    menuButton.setAttribute('aria-expanded',String(isOpen));
    menuButton.setAttribute('aria-label',isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));

  document.addEventListener('keydown',event=>{
    if(event.key === 'Escape') closeMenu();
  });
}

const revealElements = document.querySelectorAll('.reveal, .reveal-item');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(reduceMotion || !('IntersectionObserver' in window)){
  revealElements.forEach(el=>el.classList.add('is-visible'));
}else{
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  revealElements.forEach(el=>observer.observe(el));
}
