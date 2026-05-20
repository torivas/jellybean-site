/* ========================================= */
/* JELLY BEAN — SCROLL REVEAL */
/* ========================================= */

const revealElements = document.querySelectorAll(
  ".live-section, .gallery, .gallery-card, .gallery-hero, .quote, .cta"
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