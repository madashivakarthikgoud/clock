const hrsEl = document.getElementById('hrs');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const dateEl = document.getElementById('date');
const hero = document.querySelector('.hero');
const toggle = document.getElementById('theme-toggle');

// Update time & date
function updateClock() {
  const now = new Date();
  hrsEl.textContent = String(now.getHours()).padStart(2, '0');
  minEl.textContent = String(now.getMinutes()).padStart(2, '0');
  secEl.textContent = String(now.getSeconds()).padStart(2, '0');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}
setInterval(updateClock, 1000);
updateClock();

// Theme toggle
toggle.addEventListener('click', () => {
  hero.classList.toggle('light');
  if (hero.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.removeItem('theme');
  }
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  hero.classList.add('light');
}
