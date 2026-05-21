:root{
  --black:#0B0B0B;
  --red:#B11226;
  --amber:#F2A23A;
  --warm:#FFF7EA;
  --muted:rgba(255,247,234,.72);
  --border:rgba(255,255,255,.12);
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  background:var(--black);
  color:var(--warm);
  font-family:'Montserrat',sans-serif;
  overflow-x:hidden;
}

a{
  color:inherit;
  text-decoration:none;
}

img{
  display:block;
  max-width:100%;
}

p{
  color:var(--muted);
  line-height:1.75;
}

h1,h2,h3{
  font-family:'Bebas Neue',sans-serif;
  font-weight:400;
  letter-spacing:1px;
  line-height:.9;
}

section{
  position:relative;
  padding:110px 7vw;
}

/* HEADER */

.header{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:1000;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 6vw;
  background:rgba(0,0,0,.34);
  backdrop-filter:blur(22px);
  border-bottom:1px solid rgba(255,255,255,.06);
}

.logo{
  font-family:'Bebas Neue',sans-serif;
  font-size:36px;
  letter-spacing:4px;
}

.menu-btn{
  display:none;
  background:none;
  border:1px solid var(--border);
  color:var(--warm);
  width:44px;
  height:44px;
  border-radius:999px;
  font-size:24px;
  cursor:pointer;
}

nav{
  display:flex;
  align-items:center;
  gap:24px;
}

nav a{
  font-size:12px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:.7px;
  opacity:.82;
  transition:.3s ease;
}

nav a:hover{
  opacity:1;
  color:var(--amber);
}

.nav-cta{
  padding:12px 18px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(255,255,255,.04);
}

/* HERO */

.hero{
  min-height:100vh;
  display:flex;
  align-items:flex-end;
  padding:130px 7vw 90px;
  overflow:hidden;
  background:#000;
}

.hero-bg{
  position:absolute;
  inset:0;
  z-index:0;
}

.hero-bg img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center center;
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:
    linear-gradient(
      180deg,
      rgba(0,0,0,.18) 0%,
      rgba(0,0,0,.72) 68%,
      rgba(0,0,0,.95) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0,0,0,.82) 0%,
      rgba(0,0,0,.28) 45%,
      rgba(0,0,0,.16) 100%
    );
}

.hero-content{
  position:relative;
  z-index:2;
  max-width:950px;
}

.eyebrow,
.kicker{
  color:var(--amber);
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:3.5px;
  margin-bottom:18px;
  display:block;
}

.hero h1{
  font-size:clamp(78px, 13vw, 178px);
  max-width:1000px;
  margin-bottom:28px;
  text-shadow:0 10px 42px rgba(0,0,0,.72);
}

.hero-text{
  max-width:650px;
  font-size:clamp(18px, 2vw, 24px);
  color:rgba(255,247,234,.9);
}

/* BUTTONS */

.buttons{
  display:flex;
  gap:16px;
  flex-wrap:wrap;
  margin-top:38px;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:54px;
  padding:16px 28px;
  border-radius:999px;
  font-size:13px;
  font-weight:900;
  letter-spacing:.7px;
  text-transform:uppercase;
  transition:.35s ease;
}

.primary{
  background:linear-gradient(135deg, var(--red), #e1492d 62%, var(--amber));
  box-shadow:0 0 42px rgba(177,18,38,.48);
}

.primary:hover{
  transform:translateY(-4px) scale(1.02);
  box-shadow:0 0 70px rgba(177,18,38,.7);
}

.secondary{
  border:1px solid rgba(255,255,255,.22);
  background:rgba(255,255,255,.04);
  backdrop-filter:blur(10px);
}

.secondary:hover{
  background:rgba(255,255,255,.09);
  transform:translateY(-3px);
}

/* IMPACT */

.impact{
  text-align:center;
  background:
    radial-gradient(circle at 50% 0%, rgba(177,18,38,.22), transparent 36%),
    linear-gradient(180deg, #0B0B0B, #140709);
}

.impact h2{
  font-size:clamp(50px, 7vw, 102px);
  max-width:1050px;
  margin:0 auto;
}

.cards{
  margin-top:54px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}

.cards div{
  min-height:160px;
  display:flex;
  align-items:end;
  padding:28px;
  border-radius:28px;
  background:
    linear-gradient(160deg, rgba(255,255,255,.08), rgba(255,255,255,.02)),
    radial-gradient(circle at 20% 20%, rgba(242,162,58,.16), transparent 32%);
  border:1px solid rgba(255,255,255,.09);
  color:var(--warm);
  font-weight:900;
  text-align:left;
  transition:.35s ease;
}

.cards div:hover{
  transform:translateY(-8px);
  border-color:rgba(242,162,58,.36);
}

/* LIVE SECTION */

.live-section{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:60px;
  align-items:center;
  background:linear-gradient(135deg, #0A0A0A, #111 60%, #17070A);
}

.live-image{
  border-radius:34px;
  overflow:hidden;
  background:#0B0B0B;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:18px;
  box-shadow:0 30px 90px rgba(0,0,0,.45);
}

.live-image img{
  width:100%;
  height:auto;
  object-fit:contain;
  border-radius:20px;
}

.live-section h2,
.release h2,
.gallery h2,
.cta h2{
  font-size:clamp(52px, 7vw, 104px);
  margin-bottom:24px;
}

/* RELEASE */

.release{
  background:
    radial-gradient(circle at 15% 15%, rgba(242,162,58,.12), transparent 28%),
    radial-gradient(circle at 85% 20%, rgba(177,18,38,.16), transparent 30%),
    linear-gradient(180deg, #0B0B0B, #080808);
}

.release-content{
  max-width:1120px;
  margin:0 auto;
}

.release-heading{
  text-align:center;
  max-width:980px;
  margin:0 auto 34px;
}

.release-heading .kicker{
  text-align:center;
}

.release h2{
  text-align:center;
}

.release-text{
  max-width:880px;
  margin:0 auto;
  display:grid;
  gap:18px;
}

.release-text p{
  font-size:18px;
  text-align:justify;
  text-align-last:left;
}

.members{
  margin-top:56px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}

.member-card{
  overflow:hidden;
  border-radius:28px;
  border:1px solid rgba(255,255,255,.1);
  background:#050505;
  box-shadow:0 18px 54px rgba(0,0,0,.35);
  transition:.35s ease;
}

.member-card:hover{
  transform:translateY(-8px);
  border-color:rgba(242,162,58,.35);
  box-shadow:0 26px 80px rgba(0,0,0,.55);
}

.member-photo{
  height:390px;
  background:#000;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}

.member-photo img{
  width:100%;
  height:100%;
  object-fit:contain;
  object-position:center center;
  filter:brightness(.9) contrast(1.08) saturate(1.04);
  transition:.5s ease;
}

.member-card:hover .member-photo img{
  filter:brightness(1) contrast(1.12) saturate(1.08);
  transform:scale(1.025);
}

.member-info{
  padding:24px;
  background:
    linear-gradient(180deg, rgba(10,10,10,.82), #080808),
    radial-gradient(circle at 20% 0%, rgba(177,18,38,.2), transparent 35%);
}

.member-info strong{
  display:block;
  color:var(--warm);
  font-size:18px;
  font-weight:900;
  margin-bottom:8px;
}

.member-info span{
  display:block;
  color:var(--amber);
  font-size:13px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:.8px;
  line-height:1.4;
}

.release-closing{
  margin:42px auto 0;
  max-width:780px;
  color:#FFF7EA;
  font-size:22px;
  font-weight:800;
  line-height:1.45;
  text-align:center;
}

/* GALLERY */

.gallery{
  background:
    radial-gradient(circle at 20% 10%, rgba(177,18,38,.20), transparent 30%),
    #080808;
}

.gallery-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:30px;
  margin-bottom:54px;
}

.gallery-top p{
  max-width:520px;
}

.gallery-grid{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:18px;
}

.gallery-hero{
  border-radius:34px;
  overflow:hidden;
  background:#0B0B0B;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:18px;
  margin-bottom:18px;
  box-shadow:0 30px 90px rgba(0,0,0,.42);
}

.gallery-hero img{
  width:100%;
  height:auto;
  object-fit:contain;
  border-radius:20px;
  transition:transform .7s ease;
}

.gallery-hero:hover img{
  transform:scale(1.01);
}

.gallery-card{
  border-radius:28px;
  overflow:hidden;
  background:#0B0B0B;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:14px;
  box-shadow:0 18px 50px rgba(0,0,0,.32);
}

.gallery-card img{
  width:100%;
  height:auto;
  object-fit:contain;
  border-radius:20px;
  transition:transform .6s ease, filter .6s ease;
  filter:brightness(.94) contrast(1.06) saturate(1.04);
}

.gallery-card:hover img{
  transform:scale(1.02);
  filter:brightness(1) contrast(1.1) saturate(1.06);
}

/* QUOTES */

.quotes{
  background:
    linear-gradient(rgba(0,0,0,.76), rgba(0,0,0,.92)),
    url('https://lh3.googleusercontent.com/d/1i70uHele5zfAIczDlQlnzUq24LFTKt13');
  background-size:cover;
  background-position:center;
}

.quote-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}

.quote{
  border:1px solid rgba(255,255,255,.12);
  background:rgba(0,0,0,.35);
  backdrop-filter:blur(4px);
  border-radius:28px;
  padding:36px;
  font-family:'Bebas Neue',sans-serif;
  text-transform:uppercase;
  line-height:1;
  font-size:clamp(30px,4vw,54px);
}

/* CTA */

.cta{
  text-align:center;
  background:
    linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.92)),
    url('https://lh3.googleusercontent.com/d/1i70uHele5zfAIczDlQlnzUq24LFTKt13');
  background-size:cover;
  background-position:center;
}

.cta-content{
  max-width:900px;
  margin:auto;
}

.cta p{
  margin-bottom:34px;
}

/* FOOTER */

.footer{
  padding:70px 6vw;
  border-top:1px solid rgba(255,255,255,.08);
  background:#050505;
}

.footer-content{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  gap:22px;
}

.instagram-link{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  color:#FFF7EA;
  font-size:17px;
  font-weight:700;
  padding:14px 22px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.03);
  transition:transform .3s ease, background .3s ease, border-color .3s ease;
}

.instagram-link:hover{
  transform:translateY(-3px);
  background:rgba(255,255,255,.08);
  border-color:rgba(255,255,255,.24);
}

.footer-logo{
  width:180px;
  height:auto;
  opacity:.94;
  filter:drop-shadow(0 10px 30px rgba(0,0,0,.45));
  transition:transform .4s ease, opacity .4s ease;
}

.footer-logo:hover{
  transform:scale(1.03);
  opacity:1;
}

.footer-content p{
  color:#FFF7EA;
  font-size:16px;
  font-weight:500;
  line-height:1.5;
}

/* MOBILE */

@media(max-width:980px){

  section{
    padding:90px 6vw;
  }

  .menu-btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
  }

  nav{
    position:fixed;
    top:76px;
    right:6vw;
    width:min(340px,88vw);
    display:none;
    flex-direction:column;
    align-items:stretch;
    gap:0;
    padding:18px;
    border-radius:24px;
    background:rgba(0,0,0,.88);
    border:1px solid rgba(255,255,255,.12);
    backdrop-filter:blur(24px);
  }

  nav.active{
    display:flex;
  }

  nav a{
    padding:16px;
    border-bottom:1px solid rgba(255,255,255,.07);
  }

  nav a:last-child{
    border-bottom:0;
  }

  .hero{
    min-height:92vh;
    padding:110px 6vw 70px;
  }

  .hero-bg{
    display:flex;
    align-items:flex-start;
    justify-content:center;
    background:#000;
  }

  .hero-bg img{
    width:100%;
    height:100%;
    object-fit:contain;
    object-position:center top;
    background:#000;
  }

  .hero-overlay{
    background:
      linear-gradient(
        180deg,
        rgba(0,0,0,.08) 0%,
        rgba(0,0,0,.62) 58%,
        rgba(0,0,0,.96) 100%
      );
  }

  .hero h1{
    font-size:clamp(64px,19vw,94px);
  }

  .hero-text{
    font-size:17px;
  }

  .buttons{
    flex-direction:column;
  }

  .btn{
    width:100%;
  }

  .cards,
  .live-section,
  .members,
  .quote-grid,
  .gallery-grid{
    grid-template-columns:1fr;
  }

  .member-photo{
    height:560px;
  }

  .release-text p{
    font-size:17px;
    text-align:left;
  }

  .release-closing{
    font-size:20px;
  }

  .gallery-top{
    flex-direction:column;
    align-items:flex-start;
  }

  .footer{
    padding:60px 6vw;
  }

  .instagram-link{
    width:100%;
    max-width:320px;
  }

  .footer-logo{
    width:160px;
  }
}

@media(max-width:640px){

  .hero h1{
    font-size:64px;
  }

  .live-section h2,
  .release h2,
  .gallery h2,
  .cta h2{
    font-size:50px;
  }

  .hero-bg img{
    object-fit:contain;
    object-position:center top;
  }

  .member-photo{
    height:460px;
  }
}

@media(prefers-reduced-motion:reduce){
  *{
    animation:none !important;
    transition:none !important;
    scroll-behavior:auto !important;
  }
}
