// Mobile navigation toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    nav.classList.remove('open');
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
