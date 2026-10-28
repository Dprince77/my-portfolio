// Highlights the current section's nav link as you scroll.
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul a");

  function onScroll() {
    let currentId = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      if (link.getAttribute("href") === `#${currentId}`) {
        link.style.color = "#EDEBE6";
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
