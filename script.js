const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuButton && nav){
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

const revealElements = document.querySelectorAll(
  ".impact, .live-section, .release, .member-card, .gallery, .gallery-card, .gallery-hero, .quote, .cta"
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = `
    opacity 1s cubic-bezier(.16,1,.3,1),
    transform 1s cubic-bezier(.16,1,.3,1)
  `;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold:0.12
  }
);

revealElements.forEach((el) => {
  observer.observe(el);
});
