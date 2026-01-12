document.addEventListener("mousemove", e => {
  document.querySelectorAll(".parallax").forEach(el => {
    const speed = el.getAttribute("data-speed") || 10;
    el.style.transform = `
      translate(
        ${e.clientX / speed}px,
        ${e.clientY / speed}px
      )
    `;
  });
});
