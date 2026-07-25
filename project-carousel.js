"use strict";

const projectCarousel = document.querySelector("[data-project-carousel]");

if (projectCarousel) {
  const slide = projectCarousel.querySelector("[data-project-carousel-slide]");
  const nextButton = projectCarousel.querySelector("[data-project-carousel-next]");
  const previousButton = projectCarousel.querySelector("[data-project-carousel-prev]");
  const status = projectCarousel.querySelector("[data-project-carousel-status]");

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
