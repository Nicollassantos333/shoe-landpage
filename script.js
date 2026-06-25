/* REVEAL ON SCROLL */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((el) => observer.observe(el));

/* HOVER EXTRA NOS BOTÕES DE COMPRA */
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow = "0 12px 28px rgba(255,255,255,0.08)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});