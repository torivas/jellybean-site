const menuButton = document.querySelector('.menu-btn');
// Keep all content visible if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.documentElement.classList.add('motion-ready');
}
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

  document.addEventListener('pointerdown',event=>{
    if(nav.classList.contains('active') && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown',event=>{
    if(event.key === 'Escape') {const wasOpen=nav.classList.contains('active');closeMenu();if(wasOpen) menuButton.focus();}
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>980) closeMenu()},{passive:true});
}

const revealElements = document.querySelectorAll('.reveal, .reveal-item');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(reduceMotion || !('IntersectionObserver' in window)){
  document.documentElement.classList.remove('motion-ready');
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


/* Progressive reading feedback and image gallery. */
const progressFill = document.querySelector('#reading-progress-fill');
let progressQueued = false;
function renderReadingProgress(){
  if(!progressFill) return;
  const maximum = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = maximum > 0 ? Math.min(1,Math.max(0,window.scrollY / maximum)) : 0;
  progressFill.style.transform = 'scaleX(' + fraction + ')';
  progressQueued = false;
}
window.addEventListener('scroll',()=>{
  if(!progressQueued){progressQueued=true;requestAnimationFrame(renderReadingProgress)}
},{passive:true});
window.addEventListener('resize',renderReadingProgress,{passive:true});
renderReadingProgress();

const gallery = document.querySelector('#gallery-collection');
const galleryDialog = document.querySelector('#gallery-dialog');
if (gallery && galleryDialog && typeof galleryDialog.showModal === 'function') {
  const items = Array.from(gallery.querySelectorAll('.gallery-item')).filter(item => item.querySelector('img'));
  const largeImage = galleryDialog.querySelector('.gallery-dialog-inner img');
  const caption = galleryDialog.querySelector('.gallery-dialog-caption');
  const count = galleryDialog.querySelector('.gallery-count');
  const closeButton = galleryDialog.querySelector('.gallery-dialog-close');
  let activeItem = null;
  let lastFocused = null;

  const availableItems = () => items.filter(item => !item.classList.contains('gallery-image-unavailable'));

  function markUnavailable(item) {
    if (item.classList.contains('gallery-image-unavailable')) return;
    item.classList.add('gallery-image-unavailable');
    item.setAttribute('aria-disabled', 'true');
    item.removeAttribute('tabindex');
    item.removeAttribute('role');
    item.setAttribute('aria-label', 'Fotografia indisponível');
    const source = item.querySelector('img');
    if (source) source.alt = '';
    const notice = document.createElement('span');
    notice.className = 'gallery-image-fallback';
    notice.textContent = 'Registro temporariamente indisponível';
    item.appendChild(notice);
  }

  function displayImage(item) {
    const available = availableItems();
    if (!available.length) {
      galleryDialog.close();
      return;
    }
    activeItem = available.includes(item) ? item : available[0];
    const source = activeItem.querySelector('img');
    caption.textContent = source.alt || 'Registro da Jelly Bean';
    largeImage.alt = source.alt || 'Registro da Jelly Bean';
    largeImage.removeAttribute('src');
    largeImage.src = source.currentSrc || source.src;
    count.textContent = (available.indexOf(activeItem) + 1) + ' / ' + available.length;
  }

  function navigate(offset) {
    const available = availableItems();
    if (!available.length) { galleryDialog.close(); return; }
    const index = available.indexOf(activeItem);
    displayImage(available[(Math.max(index, 0) + offset + available.length) % available.length]);
  }

  items.forEach((item, index) => {
    const source = item.querySelector('img');
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'Ampliar foto ' + (index + 1));
    source.addEventListener('error', () => markUnavailable(item));
    if (source.complete && source.naturalWidth === 0) markUnavailable(item);
    const open = () => {
      if (item.classList.contains('gallery-image-unavailable')) return;
      lastFocused = document.activeElement;
      displayImage(item);
      galleryDialog.showModal();
      closeButton.focus();
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  largeImage.addEventListener('error', () => {
    if (activeItem) markUnavailable(activeItem);
    const available = availableItems();
    if (available.length) displayImage(available[0]);
    else {
      largeImage.removeAttribute('src');
      caption.textContent = 'Não foi possível carregar as fotografias.';
      count.textContent = '0 / 0';
    }
  });
  closeButton.addEventListener('click', () => galleryDialog.close());
  galleryDialog.querySelector('.gallery-prev').addEventListener('click', () => navigate(-1));
  galleryDialog.querySelector('.gallery-next').addEventListener('click', () => navigate(1));
  galleryDialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
  });
  galleryDialog.addEventListener('click', event => {
    if (event.target === galleryDialog) galleryDialog.close();
  });
  galleryDialog.addEventListener('close', () => {
    largeImage.removeAttribute('src');
    largeImage.alt = '';
    activeItem = null;
    if (lastFocused && lastFocused.isConnected && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  });
}
