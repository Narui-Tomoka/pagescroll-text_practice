const fadeElements = document.querySelectorAll(".js-fade-in");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// 要素をすべて observe
fadeElements.forEach((el) => observer.observe(el));

// ★ これだけ追加
// DOM読み込み直後に「今見えてる分も含めて」もう一度チェックさせる
window.addEventListener("DOMContentLoaded", () => {
  fadeElements.forEach((el) => observer.observe(el));
});
