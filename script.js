const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const track = document.querySelector("[data-carousel-track]");
const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const dotsContainer = document.querySelector("[data-carousel-dots]");
let activeSlide = 0;

function updateCarousel(index) {
  if (!track || slides.length === 0) return;

  activeSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${activeSlide * 100}%)`;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
    slide.setAttribute("aria-hidden", String(slideIndex !== activeSlide));
  });

  document.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

if (dotsContainer && slides.length > 0) {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => updateCarousel(index));
    dotsContainer.appendChild(dot);
  });
}

prevButton?.addEventListener("click", () => updateCarousel(activeSlide - 1));
nextButton?.addEventListener("click", () => updateCarousel(activeSlide + 1));

document.addEventListener("keydown", (event) => {
  const carousel = document.querySelector(".carousel");
  if (!carousel || !carousel.matches(":focus-within")) return;

  if (event.key === "ArrowLeft") {
    updateCarousel(activeSlide - 1);
  }

  if (event.key === "ArrowRight") {
    updateCarousel(activeSlide + 1);
  }
});

updateCarousel(0);

document.querySelectorAll(".timeline-toggle").forEach((toggle) => {
  const card = toggle.closest(".timeline-card");
  const details = card?.querySelector(".timeline-details");

  if (!card || !details) return;

  toggle.addEventListener("click", () => {
    const isOpen = card.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
