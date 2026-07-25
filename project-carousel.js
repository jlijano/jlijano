"use strict";

const projectCarousel = document.querySelector("[data-project-carousel]");

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
      <p class="project-carousel__eyebrow">Automotive appraisal website</p>
      <h3 class="project-carousel__title">Elite Auto Estimates</h3>
      <p class="project-carousel__description">A professional website for Colorado auto-damage appraisal services, designed to present services clearly and help customers request assistance online.</p>
      <div class="project-carousel__tags" aria-label="Project capabilities">
        <span>Website</span><span>Automotive</span><span>Lead Generation</span><span>Responsive Design</span>
      </div>
      <a class="button project-carousel__link" href="https://eliteautoestimates.com/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
    </div>`;

  const existingProjects = slide ? [...slide.querySelectorAll(".project-carousel__item")] : [];
  if (slide) slide.insertBefore(eliteAutoProject, existingProjects[1] ?? null);

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
