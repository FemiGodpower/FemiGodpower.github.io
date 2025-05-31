// Godpower Creation JavaScript
// Change the number of cards here:
const CARD_COUNT = 2;

const sampleProjects = [
  { title: "My Portfolio", description: "A showcase of my unique, creative, and innovative vision for a portfolio", date: "May, 2025", link: "#", tags: ["Design", "Website"] },
  { title: "C-ortho", description: "A website built for a Belgian company specializing in 3D-printed corsets", date: "March, 2025", link: "https://www.c-ortho.be/", tags: ["Design, Website"] },
];

const projects = Array.from({ length: CARD_COUNT }, (_, i) => {
  const base = sampleProjects[i % sampleProjects.length];
  return {
    ...base
  };
});

const text = 'Godpower Creation';
const container = document.getElementById('animatedText');
text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = `${index * 0.1}s`;
  container.appendChild(span);
});

const canvas = document.getElementById('canvas');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const cardWidth = 220;
const cardHeight = 240;
const padding = 10;
const borderBuffer = 40; // 1rem in pixels

const centerZone = {
  left: canvasWidth / 2 - 300,
  right: canvasWidth / 2 + 300,
  top: canvasHeight / 2 - 100,
  bottom: canvasHeight / 2 + 100
};
const placedRects = [centerZone];

function overlaps(rect) {
  return placedRects.some(r =>
    rect.left < r.right && rect.right > r.left &&
    rect.top < r.bottom && rect.bottom > r.top
  );
}

function getSafeRandomPosition() {
  let tries = 0, top, left, rect;
  do {
    top = borderBuffer + Math.random() * (canvasHeight - cardHeight - padding - 2 * borderBuffer);
    left = borderBuffer + Math.random() * (canvasWidth - cardWidth - padding - 2 * borderBuffer);
    rect = { top, left, right: left + cardWidth + padding, bottom: top + cardHeight + padding };
    tries++;
    if (tries > 100) break;
  } while (overlaps(rect));
  placedRects.push(rect);
  return { top, left };
}

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('data-tags', project.tags.join(','));

  const { top, left } = getSafeRandomPosition();
  card.style.top = `${top}px`;
  card.style.left = `${left}px`;
  card.style.animationDelay = `${Math.random() * 5}s`;

  card.innerHTML = `
    <figure></figure>
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <small>${project.date}</small><br/>
      <a href="${project.link}" target="_blank">Visit Site</a>
    </div>
  `;
  canvas.appendChild(card);
});

const toggleBtn = document.getElementById('filterToggle');
const filtersPanel = document.getElementById('filtersPanel');
toggleBtn.addEventListener('click', () => {
  filtersPanel.style.display = filtersPanel.style.display === 'flex' ? 'none' : 'flex';
});

const checkboxes = filtersPanel.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(box => box.addEventListener('change', applyFilters));

function applyFilters() {
  const selected = Array.from(checkboxes).filter(b => b.checked).map(b => b.value);
  document.querySelectorAll('.card').forEach(card => {
    const tags = card.dataset.tags.split(',');
    const match = selected.length === 0 || selected.some(tag => tags.includes(tag));
    card.classList.toggle('hidden', !match);
  });
}
