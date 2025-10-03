// Điều hướng khi bấm vào card có data-href
document.addEventListener('click', (e) => {
  const card = e.target.closest('.nav-card[data-href]');
  if (card) {
    const url = card.getAttribute('data-href');
    if (url && url !== '#') window.location.href = url;
  }
});

// Hỗ trợ Enter/Space để điều hướng (accessibility)
document.addEventListener('keydown', (e) => {
  const card = e.target.closest('.nav-card[data-href]');
  if (!card) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const url = card.getAttribute('data-href');
    if (url && url !== '#') window.location.href = url;
  }
});
