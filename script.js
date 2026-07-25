const portfolioData = {
  projects: [
    {
      title: "FinPro Dash",
      category: "Finance Dashboard",
      image: "assets/projects/finpro.webp",
      fallback: "assets/headshot.jpg",
      link: "#contact"
    },
    {
      title: "EduLearn App",
      category: "E-Learning Platform",
      image: "assets/projects/edulearn.webp",
      fallback: "assets/headshot.jpg",
      link: "#contact"
    },
    {
      title: "ShopEase",
      category: "E-Commerce Application",
      image: "assets/projects/shopease.webp",
      fallback: "assets/headshot.jpg",
      link: "#contact"
    }
  ],
  services: [
    { icon: "✦", title: "UI/UX Design", description: "User-centred interface design for web and mobile products." },
    { icon: "◇", title: "Web Design", description: "Modern, responsive, and visually polished website design." },
    { icon: "▱", title: "App Design", description: "Clean and practical mobile application experiences." },
    { icon: "⌁", title: "Prototyping", description: "Interactive prototypes for testing, validation, and presentation." }
  ]
};

const projectsRoot = document.querySelector("[data-projects]");
const servicesRoot = document.querySelector("[data-services]");

if (projectsRoot) {
  projectsRoot.innerHTML = portfolioData.projects.map((project) => `
    <article class="project-card reveal">
      <a class="project-link" href="${project.link}" aria-label="View ${project.title} project">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title} ${project.category} preview" width="800" height="600" loading="lazy" onerror="this.onerror=null;this.src='${project.fallback}'">
        </div>
        <div class="project-body">
          <div><h3>${project.title}</h3><p>${project.category}</p></div>
          <span class="project-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </article>`).join("");
}

if (servicesRoot) {
  servicesRoot.innerHTML = portfolioData.services.map((service) => `
    <article class="service-card reveal">
      <span class="service-icon" aria-hidden="true">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>`).join("");
}

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-menu a[href^="#"]')];

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});
document.addEventListener("click", (event) => {
  if (!mobileMenu || mobileMenu.hidden || !menuToggle) return;
  const target = event.target;
  if (target instanceof Node && !mobileMenu.contains(target) && !menuToggle.contains(target)) setMenu(false);
});

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 20);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55%", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelector("[data-year]")?.replaceChildren(String(new Date().getFullYear()));

const form = document.querySelector("[data-contact-form]");
const status = form?.querySelector(".form-status");

function validateField(field) {
  const error = document.querySelector(`#${field.id}-error`);
  let message = "";
  if (!field.value.trim()) message = `${field.labels?.[0]?.textContent || "This field"} is required.`;
  if (field.type === "email" && field.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) message = "Enter a valid email address.";
  field.setAttribute("aria-invalid", String(Boolean(message)));
  field.setAttribute("aria-describedby", `${field.id}-error`);
  if (error) error.textContent = message;
  return !message;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input, textarea")];
  const valid = fields.map(validateField).every(Boolean);
  if (!valid) {
    fields.find((field) => field.getAttribute("aria-invalid") === "true")?.focus();
    if (status) status.textContent = "Please correct the highlighted fields.";
    return;
  }
  if (status) status.textContent = "Thanks! This demo form is ready to connect to your preferred form service.";
  form.reset();
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
});

form?.addEventListener("input", (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) validateField(event.target);
});
