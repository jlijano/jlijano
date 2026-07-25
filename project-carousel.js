"use strict";

const projectCarousel = document.querySelector("[data-project-carousel]");
const projectsSectionTitle = document.querySelector("#projects-title");

if (projectsSectionTitle) projectsSectionTitle.textContent = "Featured Projects";

if (projectCarousel) {
  const slide = projectCarousel.querySelector("[data-project-carousel-slide]");
  const nextButton = projectCarousel.querySelector("[data-project-carousel-next]");
  const previousButton = projectCarousel.querySelector("[data-project-carousel-prev]");
  const status = projectCarousel.querySelector("[data-project-carousel-status]");

  const eliteAutoProject = document.createElement("article");
  eliteAutoProject.className = "project-carousel__item";
  eliteAutoProject.style.backgroundImage = "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=85')";
  eliteAutoProject.setAttribute("aria-label", "Elite Auto Estimates website project");
  eliteAutoProject.innerHTML = `
    <div class="project-carousel__content">
      <img src="assets/elite-auto-logo.svg" alt="Elite Auto Estimates" style="display:block;width:min(190px,45vw);height:auto;margin:0 0 18px;padding:8px 12px;border-radius:12px;background:rgba(245,241,234,.94);box-shadow:0 10px 28px rgba(0,0,0,.28)">
      <p class="project-carousel__eyebrow">Automotive appraisal website</p>
      <h3 class="project-carousel__title">Elite Auto Estimates</h3>
      <p class="project-carousel__description">A professional website for Colorado auto-damage appraisal services, designed to present services clearly and help customers request assistance online.</p>
      <div class="project-carousel__tags" aria-label="Project capabilities">
        <span>Website</span><span>Automotive</span><span>Lead Generation</span><span>Responsive Design</span>
      </div>
      <a class="button project-carousel__link" href="https://eliteautoestimates.com/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
    </div>`;

  const optivexProject = document.createElement("article");
  optivexProject.className = "project-carousel__item";
  optivexProject.style.backgroundImage = "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85')";
  optivexProject.setAttribute("aria-label", "Optivex Solutions website project");
  optivexProject.innerHTML = `
    <div class="project-carousel__content">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/mv0PQyjGP6Sl0jQx/nav_logo-m5K8W4BJ6ESwRjO3.webp" alt="Optivex Solutions" style="display:block;width:min(210px,48vw);height:auto;margin:0 0 18px;padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.96);box-shadow:0 10px 28px rgba(0,0,0,.28)">
      <p class="project-carousel__eyebrow">Business solutions website</p>
      <h3 class="project-carousel__title">Optivex Solutions</h3>
      <p class="project-carousel__description">A responsive business website designed to present Optivex services, strengthen its professional online presence, and provide visitors with a clear path to enquire.</p>
      <div class="project-carousel__tags" aria-label="Project capabilities">
        <span>Business Website</span><span>Responsive Design</span><span>Branding</span><span>Lead Generation</span>
      </div>
      <a class="button project-carousel__link" href="https://optivex.solutions/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
    </div>`;

  const existingProjects = slide ? [...slide.querySelectorAll(".project-carousel__item")] : [];
  if (slide) {
    slide.insertBefore(eliteAutoProject, existingProjects[1] ?? null);
    slide.insertBefore(optivexProject, existingProjects[2] ?? null);
  }

  const getItems = () => [...slide.querySelectorAll(".project-carousel__item")];

  const announceActiveProject = () => {
    const activeItem = getItems()[1];
    const title = activeItem?.querySelector(".project-carousel__title")?.textContent?.trim();
    if (status && title) status.textContent = `${title} is now displayed.`;
  };

  const showNext = () => {
    const items = getItems();
    if (items.length > 1) slide.appendChild(items[0]);
    announceActiveProject();
  };

  const showPrevious = () => {
    const items = getItems();
    if (items.length > 1) slide.prepend(items[items.length - 1]);
    announceActiveProject();
  };

  nextButton?.addEventListener("click", showNext);
  previousButton?.addEventListener("click", showPrevious);

  projectCarousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
  });

  let touchStartX = 0;

  projectCarousel.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }, { passive: true });

  projectCarousel.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 45) return;
    if (distance < 0) showNext();
    else showPrevious();
  }, { passive: true });

  announceActiveProject();
}
