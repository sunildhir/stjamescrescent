const nav = document.querySelector('.nav');
document.querySelector('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const grid = document.getElementById('galleryGrid');
for (let i = 1; i <= 45; i++) {
  const a = document.createElement('a');
  a.className = 'gallery-item';
  a.href = `assets/gallery/${i}.jpg`;
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = `<img src="assets/gallery/${i}.jpg" alt="352 St. James Crescent gallery photo ${i}" loading="lazy"><span>${String(i).padStart(2, '0')}</span>`;
  grid.appendChild(a);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
