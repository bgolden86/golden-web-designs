document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  carousel.addEventListener('slid.bs.carousel', () => {
    const active = carousel.querySelector('.carousel-item.active video');
    if (active) {
      active.muted = true;
      active.playsInline = true;
      try { active.play(); } catch {}
    }
  });
});
