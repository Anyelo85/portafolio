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
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Problem Solver'
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

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

/* EXPERIENCE IMAGE VISIBILITY */
const expImages = document.querySelectorAll('.exp-container .img-box');
const expContainer = document.querySelector('.exp-container');

expImages.forEach(img => img.style.visibility = 'hidden');

window.addEventListener('scroll', () => {
  if (!expContainer) return;
  
  const rect = expContainer.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;
  
  expImages.forEach(img => {
    img.style.visibility = isVisible ? 'visible' : 'hidden';
  });
});