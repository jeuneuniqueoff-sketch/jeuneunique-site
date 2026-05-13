// JeuneUnique — main.js

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initAccordion();
  initStickyCTA();
  markActiveNavLink();
  initBeamsHero();
});

/* ---- Beams hero (canvas) ---- */
function initBeamsHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const BEAM_COUNT = 30;
  let beams = [];
  let raf;

  function createBeam() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return {
      x:         Math.random() * w * 1.5 - w * 0.25,
      y:         Math.random() * h * 1.5 - h * 0.25,
      width:     30 + Math.random() * 60,
      length:    h * 2.5,
      angle:     -35 + Math.random() * 10,
      speed:     0.6 + Math.random() * 1.2,
      opacity:   0.12 + Math.random() * 0.16,
      hue:       190 + Math.random() * 70,
      pulse:     Math.random() * Math.PI * 2,
      pulseSpeed:0.02 + Math.random() * 0.03,
    };
  }

  function resetBeam(beam, i) {
    const spacing = window.innerWidth / 3;
    const col = i % 3;
    beam.y       = window.innerHeight + 100;
    beam.x       = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
    beam.width   = 100 + Math.random() * 100;
    beam.speed   = 0.5 + Math.random() * 0.4;
    beam.hue     = 190 + (i * 70) / BEAM_COUNT;
    beam.opacity = 0.2 + Math.random() * 0.1;
  }

  function drawBeam(beam) {
    ctx.save();
    ctx.translate(beam.x, beam.y);
    ctx.rotate(beam.angle * Math.PI / 180);
    const op = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
    const g  = ctx.createLinearGradient(0, 0, 0, beam.length);
    g.addColorStop(0,   `hsla(${beam.hue},85%,65%,0)`);
    g.addColorStop(0.1, `hsla(${beam.hue},85%,65%,${op * 0.5})`);
    g.addColorStop(0.4, `hsla(${beam.hue},85%,65%,${op})`);
    g.addColorStop(0.6, `hsla(${beam.hue},85%,65%,${op})`);
    g.addColorStop(0.9, `hsla(${beam.hue},85%,65%,${op * 0.5})`);
    g.addColorStop(1,   `hsla(${beam.hue},85%,65%,0)`);
    ctx.fillStyle = g;
    ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
    ctx.restore();
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth  + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
    beams = Array.from({ length: BEAM_COUNT }, createBeam);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(35px)';
    beams.forEach((beam, i) => {
      beam.y     -= beam.speed;
      beam.pulse += beam.pulseSpeed;
      if (beam.y + beam.length < -100) resetBeam(beam, i);
      drawBeam(beam);
    });
    raf = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();
}

/* ---- Navigation ---- */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll → ajoute la classe .scrolled
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger mobile
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Fermer au clic sur un lien mobile
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

function markActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (path === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ---- Accordion FAQ ---- */
function initAccordion() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body   = item.querySelector('.accordion-body');
    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Fermer tous
      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      // Ouvrir si pas déjà ouvert
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---- Sticky CTA (page formation) ---- */
function initStickyCTA() {
  const cta = document.querySelector('.sticky-cta');
  const hero = document.querySelector('.formation-hero');
  if (!cta || !hero) return;

  const observer = new IntersectionObserver(entries => {
    cta.classList.toggle('visible', !entries[0].isIntersecting);
  }, { threshold: 0 });
  observer.observe(hero);
}

/* ---- Filtres catalogue ---- */
function initFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  const grid  = document.getElementById('formations-grid');
  if (!pills.length || !grid) return;

  function render(univers) {
    const list = getFormationsByUnivers(univers);
    grid.innerHTML = list.map(renderFormationCard).join('');
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      render(pill.dataset.univers);
    });
  });

  // Initial render
  render('tous');
}

/* ---- Page formation dynamique ---- */
function initFormationPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { window.location.href = 'formations.html'; return; }

  const f = getFormationById(id);
  if (!f) { window.location.href = 'formations.html'; return; }

  const univers = UNIVERS.find(u => u.id === f.univers);
  const badge   = BADGE_CLASS[f.univers] || '';

  // Title
  document.title = `${f.titre} — JeuneUnique`;

  // Breadcrumb
  const bc = document.getElementById('breadcrumb-title');
  if (bc) bc.textContent = f.titre;

  // Hero
  set('formation-badge',    `<span class="formation-card__badge ${badge}">${univers ? univers.icon : ''} ${univers ? univers.label : f.univers}</span>${f.bestseller ? '<span class="tag" style="background:rgba(201,168,76,0.12);color:var(--gold);margin-left:8px;">⭐ Bestseller</span>' : ''}`);
  set('formation-titre',    f.titre);
  set('formation-soustitre',f.soustitre);
  set('formation-prix',     `${f.prix}€`);

  // Stripe links
  document.querySelectorAll('.stripe-link').forEach(el => {
    el.setAttribute('href', f.stripeLink);
  });

  // Contenu
  const contenuEl = document.getElementById('formation-contenu');
  if (contenuEl) {
    contenuEl.innerHTML = f.contenu.map(c => `
      <div class="includes-item reveal">
        <div class="includes-item__icon">✓</div>
        <span>${c}</span>
      </div>
    `).join('');
  }

  // Livrables
  const livEl = document.getElementById('formation-livrables');
  if (livEl) {
    const items = [
      f.livrable.ebook  ? '📄 E-book PDF complet'                       : null,
      f.livrable.video  ? `🎬 Vidéo de formation (${f.livrable.video})` : null,
      f.livrable.prompts? `🤖 ${f.livrable.prompts} prompts IA prêts`   : null,
      ...(f.livrable.outils || []).map(o => `🛠 ${o}`)
    ].filter(Boolean);
    livEl.innerHTML = items.map(item => `
      <div class="includes-item">
        <div class="includes-item__icon">✦</div>
        <span>${item}</span>
      </div>
    `).join('');
  }

  // Pour qui
  const pourQuiEl = document.getElementById('formation-pour-qui');
  if (pourQuiEl) {
    pourQuiEl.innerHTML = f.pourQui.map(p => `
      <div class="includes-item">
        <div class="includes-item__icon" style="background:rgba(52,211,153,0.15);color:#34d399;">✓</div>
        <span>${p}</span>
      </div>
    `).join('');
  }

  // FAQ
  const faqEl = document.getElementById('formation-faq');
  if (faqEl) {
    faqEl.innerHTML = f.faq.map(item => `
      <div class="accordion-item">
        <button class="accordion-header">
          ${item.q}
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-body-inner">${item.r}</div>
        </div>
      </div>
    `).join('');
    initAccordion();
  }

  // Sticky CTA prix
  const stickPrice = document.getElementById('sticky-price');
  if (stickPrice) stickPrice.textContent = `${f.prix}€`;

  // Révéler les éléments
  setTimeout(initReveal, 100);
}

function set(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

/* ---- Copier email ---- */
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copié !');
  });
}

/* ---- Toast notification ---- */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position:fixed;bottom:32px;right:32px;z-index:999;
    background:var(--gold);color:var(--navy);
    padding:12px 20px;border-radius:6px;
    font-size:0.875rem;font-weight:600;
    animation:toastIn 0.3s ease;
  `;
  toast.textContent = message;

  const style = document.createElement('style');
  style.textContent = `@keyframes toastIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`;
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
