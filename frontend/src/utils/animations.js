export function initRevealAnimations() {
  const elements = document.querySelectorAll("[data-anim]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    elements.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = e.target.getAttribute("data-delay");
          if (delay) e.target.style.transitionDelay = `${delay}ms`;
          const dur = e.target.getAttribute("data-duration");
          if (dur) e.target.style.transitionDuration = `${dur}ms`;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach((el) => {
    el.classList.add("pre-anim");
    io.observe(el);
  });
}
