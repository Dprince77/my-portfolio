// =====================
// SCROLL REVEAL
// =====================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// =====================
// STAGGER PROJECT CARDS
// =====================
document.querySelectorAll(".project-card").forEach((card, i) => {
  card.style.transitionDelay = i * 0.08 + "s";
  card.classList.add("reveal");
  observer.observe(card);
});

// =====================
// STAGGER TIMELINE ITEMS
// =====================
document.querySelectorAll(".timeline-item").forEach((item, i) => {
  item.style.transitionDelay = i * 0.1 + "s";
  item.classList.add("reveal");
  observer.observe(item);
});