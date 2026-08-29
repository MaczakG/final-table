/* ==========================================================================
   Final Table Catering — motion layer
   Vanilla JS: IntersectionObserver scroll-reveal + a lightweight scroll
   parallax on the hero/section photo bands. No external animation library.
   Skips the parallax scroll listener entirely on narrow viewports and for
   prefers-reduced-motion, since html.js-anim (see <head>) already disables
   the CSS side of things there.
   ========================================================================== */

(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyStagger() {
    var counts = new Map();
    document.querySelectorAll("[data-animate]").forEach(function (el) {
      var parent = el.parentElement;
      var index = counts.get(parent) || 0;
      el.style.transitionDelay = reduceMotion ? "0ms" : Math.min(index * 90, 360) + "ms";
      counts.set(parent, index + 1);
    });
  }

  function initReveal() {
    var targets = document.querySelectorAll("[data-animate]");
    if (!targets.length) return;

    applyStagger();

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initParallax() {
    if (reduceMotion) return;
    if (window.matchMedia("(max-width: 760px)").matches) return;

    var images = Array.prototype.slice.call(document.querySelectorAll(".section-photo img"));
    if (!images.length) return;

    var ticking = false;

    function update() {
      var viewportH = window.innerHeight;
      images.forEach(function (img) {
        var rect = img.parentElement.getBoundingClientRect();
        var centerOffset = rect.top + rect.height / 2 - viewportH / 2;
        var shift = Math.max(-32, Math.min(32, centerOffset * 0.08));
        img.style.transform = "translateY(" + shift.toFixed(1) + "px)";
      });
      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initParallax();
  });
})();
