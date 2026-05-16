// ── NAVBAR scroll effect ──────────────────────────
const navbar   = document.getElementById('navbar');
const backTop  = document.getElementById('back-top');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Scrolled class
  navbar.classList.toggle('scrolled', y > 60);

  // Back to top visibility
  backTop.classList.toggle('visible', y > 400);

  // Active nav link based on scroll position
  let current = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ── HAMBURGER toggle ─────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// ── BACK TO TOP ──────────────────────────────────
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── SCROLL REVEAL ────────────────────────────────
const revealEls = document.querySelectorAll(
  '.prog-card, .inv-card, .value-card, .c-item, .about-card-img, .about-content'
);

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  revealObs.observe(el);
});

// ── CONTACT FORM ─────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm && contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formSuccess.classList.remove('hidden');
  contactForm.reset();
  setTimeout(() => formSuccess.classList.add('hidden'), 5000);
});

// ── NEWSLETTER FORM ──────────────────────────────
const nlForm = document.getElementById('nl-form');
nlForm && nlForm.addEventListener('submit', e => {
  e.preventDefault();
  const btn = nlForm.querySelector('button');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = '#2e7d32';
  btn.style.color = '#fff';
  nlForm.reset();
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
    btn.style.color = '';
  }, 4000);
});
