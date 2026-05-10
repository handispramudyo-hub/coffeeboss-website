/* ==========================================
   CoffeeBoss Indonesia — Animations & Logic
   Libraries: GSAP + ScrollTrigger + Lenis
   ========================================== */

gsap.registerPlugin(ScrollTrigger);

/* ---------- State ---------- */
let lenis;
const isDesktop = window.matchMedia("(pointer: fine)").matches;

/* ==========================================
   1. LENIS SMOOTH SCROLL
   ========================================== */
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

  // Connect anchor links to Lenis
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) lenis.scrollTo(target, { offset: -64 });
    });
  });
}

/* ==========================================
   2. PRELOADER
   ========================================== */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const bar = document.getElementById("preloader-bar");

  const tl = gsap.timeline();

  tl.to(bar, {
    width: "100%",
    duration: 1.4,
    ease: "power2.inOut",
  }).to(
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

/* ==========================================
   3. CUSTOM CURSOR
   ========================================== */
function initCursor() {
  if (!isDesktop) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mouseX = 0,
    mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" });
    gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.4, ease: "power2.out" });
  });

  // Hover state
  const hoverables = document.querySelectorAll(
    "a, button, [data-magnetic], select, .card",
  );
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
  });

  // Hide when leaving window
  document.addEventListener("mouseleave", () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
  });
  document.addEventListener("mouseenter", () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
  });
}

/* ==========================================
   4. MOBILE MENU
   ========================================== */
function initMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const openBtn = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("menuClose");

  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    lenis?.stop();
  });
  closeBtn.addEventListener("click", () => {
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

/* ==========================================
   5. HERO ANIMATIONS
   ========================================== */
function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Text lines reveal
  tl.to(
    ".hero-line-inner",
    {
      y: 0,
      duration: 1.2,
      stagger: 0.12,
    },
    0,
  );

  // Badge
  tl.to(
    ".hero-badge",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    0.3,
  );

  // Paragraph
  tl.to(
    ".hero-text",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    0.6,
  );

  // Buttons
  tl.to(
    ".hero-btns",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    0.75,
  );

  // Stats
  tl.to(
    ".hero-stats",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    0.9,
  );

  // Image
  tl.to(
    ".hero-image",
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    },
    0.4,
  );

  // Floating cards
  tl.to(
    ".hero-float-1",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    1.0,
  );

  tl.to(
    ".hero-float-2",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    1.15,
  );

  // Continuous float
  gsap.to(".hero-float-1", {
    y: -8,
    duration: 2.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2,
  });
  gsap.to(".hero-float-2", {
    y: -8,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2.3,
  });
}

/* ==========================================
   6. SCROLL-TRIGGERED ANIMATIONS
   ========================================== */
function initScrollAnimations() {
  // --- Generic fade-up for [data-animate] ---
  document.querySelectorAll("[data-animate]").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // --- Stagger children for [data-stagger] ---
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    const staggerDelay = parseFloat(parent.dataset.stagger) || 0.1;
    const children = parent.children;

    gsap.from(children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: parent,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // --- Parallax for [data-parallax] ---
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const speed = parseFloat(el.dataset.parallax) || 0.1;
    const img = el.querySelector("img");

    if (img) {
      gsap.to(img, {
        y: () => speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }
  });

  // --- Counter animation for [data-counter] ---
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

  // --- Process steps sequential reveal ---
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
        toggleActions: "play none none none",
      },
      delay: i * 0.1,
    });
  });

  // --- Marquee with GSAP ---
  initMarquee();

  // --- Magnetic buttons ---
  initMagnetic();
}

/* ==========================================
   7. MARQUEE
   ========================================== */
function initMarquee() {
  const track = document.querySelector(".marquee-track");
  if (!track) return;

  const content = track.querySelector(".marquee-content");
  const contentWidth = content.offsetWidth;

  gsap.to(track, {
    x: -contentWidth,
    duration: 25,
    ease: "none",
    repeat: -1,
  });
}

/* ==========================================
   8. MAGNETIC BUTTONS
   ========================================== */
function initMagnetic() {
  if (!isDesktop) return;

  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    });
  });
}

/* ==========================================
   9. CONTACT FORM
   ========================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const location = document.getElementById("formLocation").value.trim();
    const product = document.getElementById("formProduct").value;
    const message = document.getElementById("formMessage").value.trim();

    // Validation
    let hasError = false;
    if (!name) {
      shakeField(document.getElementById("formName"));
      hasError = true;
    }
    if (!email) {
      shakeField(document.getElementById("formEmail"));
      hasError = true;
    }
    if (hasError) return;

    // Build WhatsApp message
    let msg = `Halo CoffeeBoss,%0A%0ANama: ${name}%0AEmail: ${email}`;
    if (location) msg += `%0ALokasi: ${location}`;
    if (product) msg += `%0AProduk: ${product}`;
    if (message) msg += `%0APesan: ${message}`;

    // Show toast
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
    }, 600);

    // Reset & animate
    form.reset();
    gsap.from(form, {
      scale: 0.98,
      opacity: 0.5,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  // Clear error on input
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
    onComplete: () => {
      el.style.borderColor = "#dc2626";
    },
  });
}

/* ==========================================
   10. WHATSAPP FLOAT BUTTON
   ========================================== */
function initWaFloat() {
  const wa = document.getElementById("waFloat");
  wa.style.opacity = "0";
  wa.style.pointerEvents = "none";
  wa.style.transition = "all 0.4s ease";

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

/* ==========================================
   11. SET INITIAL STATES
   ========================================== */
function setInitialStates() {
  // Hero text lines start below
  gsap.set(".hero-line-inner", { y: "120%" });
  gsap.set(".hero-badge", { opacity: 0, y: 20 });
  gsap.set(".hero-text", { opacity: 0, y: 20 });
  gsap.set(".hero-btns", { opacity: 0, y: 20 });
  gsap.set(".hero-stats", { opacity: 0, y: 20 });
  gsap.set(".hero-image", { opacity: 0, scale: 0.92 });
  gsap.set(".hero-float-1", { opacity: 0, y: 30 });
  gsap.set(".hero-float-2", { opacity: 0, y: 30 });
}

/* ==========================================
   INIT
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  setInitialStates();
  initLenis();
  initPreloader();
  initCursor();
  initMobileMenu();
  initContactForm();
  initWaFloat();
});
