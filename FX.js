/*PARTICULAS LINEAS*/

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createParticles() {
  particles = [];
  const count = Math.floor(window.innerWidth / 20); // ← antes /20, ahora más partículas
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,          // ← antes 1.5, ahora más grandes
      vx: (Math.random() - 0.5) * 0.5,     // ← un poco más rápidas
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.8 + 0.3   // ← antes 0.4+0.1, ahora más visibles
    });
  }
}

createParticles();

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    particles.slice(i + 1).forEach(q => {
      const dist = Math.hypot(p.x - q.x, p.y - q.y);
      if (dist < 160) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 229, 160, ${0.25 * (1 - dist / 500)})`;  
        ctx.lineWidth = 0.5;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }
    });
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 229, 160, ${p.opacity})`;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
  createParticles();
  drawParticles();


/*CURSOR*/
const phrases = [
'Analista de Requerimientos',
'Desarrollador de software (Frontend)',
'Analista en Calidad de Software',
'Analista en Ciberseguridad',
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];
  el.textContent = isDeleting
    ? current.slice(0, --charIndex)
    : current.slice(0, ++charIndex);

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
  setTimeout(type, isDeleting ? 40 : 80);
}
type();

const revealEls = Array.from(document.querySelectorAll('.reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

const groupCounters = new Map();
revealEls.forEach(el => {
  const parent = el.parentElement;
  const index = groupCounters.get(parent) || 0;
  const hasManualDelay = el.classList.contains('reveal-delay-1') ||
                         el.classList.contains('reveal-delay-2') ||
                         el.classList.contains('reveal-delay-3');
  if (!hasManualDelay) {
    el.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  }
  groupCounters.set(parent, index + 1);
  observer.observe(el);
});

/*DESPLAZAMIENTO SUAVE ENTRE SECCIONES*/
function animateScrollTo(target) {
  const root = document.scrollingElement || document.documentElement;
  const startY = window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.5));
  const startTime = performance.now();
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';

  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + distance * ease(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      root.style.scrollBehavior = previousBehavior;
    }
  };

  requestAnimationFrame(step);
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href');
  if (!hash || hash.length < 2) return;
  const target = document.querySelector(hash);
  if (!target) return;
  event.preventDefault();
  animateScrollTo(target);
  try { history.pushState(null, '', hash); } catch (e) {}
});

/*DESPLAZAMIENTO SUAVE AL CARGAR CON #seccion*/
window.addEventListener('load', () => {
  const hash = window.__initialHash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (!target) return;
  animateScrollTo(target);
  try { history.replaceState(null, '', hash); } catch (e) {}
});