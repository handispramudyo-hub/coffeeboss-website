gsap.registerPlugin(ScrollTrigger);

let lenis;
const isDesktop = window.matchMedia("(pointer: fine)").matches;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) lenis.scrollTo(target, { offset: -64 });
    });
  });
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const bar = document.getElementById("preloader-bar");
  gsap
    .timeline()
    .to(bar, { width: "100%", duration: 1.4, ease: "power2.inOut" })
    .to(
      preloader,
      {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          preloader.remove();
          animateHero();
          initScrollAnimations();
        },
      },
      "-=0.1",
    );
}

function initCursor() {
  if (!isDesktop) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  window.addEventListener("mousemove", (e) => {
    gsap.to(dot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.15,
      ease: "power2.out",
    });
    gsap.to(ring, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power2.out",
    });
  });
  document
    .querySelectorAll("a, button, [data-magnetic], select, .card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
      el.addEventListener("mouseleave", () =>
        ring.classList.remove("hovering"),
      );
    });
  document.addEventListener("mouseleave", () =>
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 }),
  );
  document.addEventListener("mouseenter", () =>
    gsap.to([dot, ring], { opacity: 1, duration: 0.3 }),
  );
}

function initMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  document.getElementById("menuToggle").addEventListener("click", () => {
    menu.classList.add("open");
    lenis?.stop();
  });
  document.getElementById("menuClose").addEventListener("click", () => {
    menu.classList.remove("open");
    lenis?.start();
  });
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      lenis?.start();
    });
  });
}

function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.to(".hero-line-inner", { y: 0, duration: 1.2, stagger: 0.12 }, 0);
  tl.to(".hero-badge", { opacity: 1, y: 0, duration: 0.8 }, 0.4);
  tl.to(".hero-text", { opacity: 1, y: 0, duration: 0.8 }, 0.7);
  tl.to(".hero-btns", { opacity: 1, y: 0, duration: 0.8 }, 0.85);
  tl.to(".hero-stats", { opacity: 1, y: 0, duration: 0.8 }, 1.0);
  tl.to(".hero-float-1", { opacity: 1, y: 0, duration: 0.8 }, 1.3);
  tl.to(".hero-float-2", { opacity: 1, y: 0, duration: 0.8 }, 1.45);
  tl.to(".hero-float-3", { opacity: 1, y: 0, duration: 0.8 }, 1.6);
  tl.from(
    ".hero-image video, .hero-image iframe, .hero-image img",
    { scale: 1.15, duration: 1.5, ease: "power2.out" },
    0,
  );
  gsap.to(".hero-float-1", {
    y: -8,
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.5,
  });
  gsap.to(".hero-float-2", {
    y: -10,
    duration: 3.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.8,
  });
  gsap.to(".hero-float-3", {
    y: -6,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 3.1,
  });
}

function initScrollAnimations() {
  document.querySelectorAll("[data-animate]").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none none",
      },
    });
  });
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    const d = parseFloat(parent.dataset.stagger) || 0.1;
    gsap.from(parent.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: d,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent,
        start: "top 85%",
        toggleActions: "play none none none none",
      },
    });
  });
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const s = parseFloat(el.dataset.parallax) || 0.1;
    const img = el.querySelector("img");
    if (img)
      gsap.to(img, {
        y: () => s * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
  });
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const target = parseInt(el.dataset.counter);
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              el.textContent = Math.floor(this.targets()[0].val) + "+";
            },
          },
        );
      },
    });
  });
  document.querySelectorAll(".process-step").forEach((step, i) => {
    gsap.to(step, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none none none",
      },
      delay: i * 0.1,
    });
  });
  initMarquee();
  initMagnetic();
}

function initMarquee() {
  const track = document.querySelector(".marquee-track");
  if (!track) return;
  const w = track.querySelector(".marquee-content").offsetWidth;
  gsap.to(track, { x: -w, duration: 25, ease: "none", repeat: -1 });
}

function initMagnetic() {
  if (!isDesktop) return;
  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.25,
        y: (e.clientY - r.top - r.height / 2) * 0.25,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    });
  });
}

function initHeroSound() {
  const btn = document.getElementById("heroSoundBtn");
  if (!btn) return;
  const show = () => {
    gsap.to(btn, { opacity: 1, duration: 0.5 });
    window.removeEventListener("scroll", show);
    document.removeEventListener("click", show);
  };
  window.addEventListener("scroll", show, { once: true });
  document.addEventListener("click", show, { once: true });
}
function toggleHeroSound() {
  const video = document.querySelector(".hero-image video");
  const icon = document.getElementById("heroSoundIcon");
  if (!video) return;
  video.muted = !video.muted;
  icon.setAttribute(
    "data-icon",
    video.muted ? "mdi:volume-off" : "mdi:volume-high",
  );
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = document.getElementById("formName").value.trim();
    const em = document.getElementById("formEmail").value.trim();
    const loc = document.getElementById("formLocation").value.trim();
    const prod = document.getElementById("formProduct").value;
    const msg = document.getElementById("formMessage").value.trim();
    let err = false;
    if (!n) {
      shakeField(document.getElementById("formName"));
      err = true;
    }
    if (!em) {
      shakeField(document.getElementById("formEmail"));
      err = true;
    }
    if (err) return;
    let w = `Halo CoffeeBoss,%0A%0ANama: ${n}%0AEmail: ${em}`;
    if (loc) w += `%0ALokasi: ${loc}`;
    if (prod) w += `%0AProduk: ${prod}`;
    if (msg) w += `%0APesan: ${msg}`;
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
    setTimeout(
      () => window.open(`https://wa.me/6281234567890?text=${w}`, "_blank"),
      600,
    );
    form.reset();
    gsap.from(form, {
      scale: 0.98,
      opacity: 0.5,
      duration: 0.4,
      ease: "power2.out",
    });
  });
  ["formName", "formEmail"].forEach((id) => {
    document.getElementById(id).addEventListener("input", function () {
      this.style.borderColor = "";
    });
  });
}
function shakeField(el) {
  el.style.borderColor = "#dc2626";
  gsap.to(el, {
    x: [-8, 8, -6, 6, -3, 3, 0],
    duration: 0.5,
    ease: "power2.out",
  });
}

function initWaFloat() {
  const wa = document.getElementById("waFloat");
  wa.style.opacity = "0";
  wa.style.pointerEvents = "none";
  wa.style.transition = "all .4s ease";
  ScrollTrigger.create({
    trigger: "#about",
    start: "top center",
    onEnter: () => {
      wa.style.opacity = "1";
      wa.style.pointerEvents = "auto";
    },
    onLeaveBack: () => {
      wa.style.opacity = "0";
      wa.style.pointerEvents = "none";
    },
  });
}

function setInitialStates() {
  gsap.set(".hero-line-inner", { y: "120%" });
  gsap.set(".hero-badge", { opacity: 0, y: 20 });
  gsap.set(".hero-text", { opacity: 0, y: 20 });
  gsap.set(".hero-btns", { opacity: 0, y: 20 });
  gsap.set(".hero-stats", { opacity: 0, y: 20 });
  gsap.set(".hero-float-1", { opacity: 0, y: 30 });
  gsap.set(".hero-float-2", { opacity: 0, y: 30 });
  gsap.set(".hero-float-3", { opacity: 0, y: 30 });
}

document.addEventListener("DOMContentLoaded", () => {
  setInitialStates();
  initLenis();
  initPreloader();
  initCursor();
  initMobileMenu();
  initContactForm();
  initWaFloat();
  initHeroSound();
});
