// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animCursor);
}
animCursor();

// SCROLL REVEAL
const allReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
function checkReveal() {
  const wh = window.innerHeight;
  allReveal.forEach(el => {
    if (el.getBoundingClientRect().top < wh - 80) el.classList.add('show');
  });
}
window.addEventListener('scroll', checkReveal);
checkReveal();