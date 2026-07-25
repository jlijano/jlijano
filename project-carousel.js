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

  const oligarchyProject = document.createElement("article");
  oligarchyProject.className = "project-carousel__item";
  oligarchyProject.style.backgroundImage = "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85')";
  oligarchyProject.setAttribute("aria-label", "Oligarchy Services website project");
  oligarchyProject.innerHTML = `
    <div class="project-carousel__content">
      <img src="assets/oligarchy-services-logo.svg" alt="Oligarchy" style="display:block;width:min(250px,55vw);height:auto;margin:0 0 18px;padding:10px 14px;border-radius:12px;background:rgba(10,10,12,.9);box-shadow:0 10px 28px rgba(0,0,0,.32)">
      <p class="project-carousel__eyebrow">Technology services website</p>
      <h3 class="project-carousel__title">Oligarchy Services</h3>
      <p class="project-carousel__description">A professional technology services website presenting digital solutions, managed services, consulting capabilities, and clear client engagement pathways.</p>
      <div class="project-carousel__tags" aria-label="Project capabilities">
        <span>Technology Services</span><span>Business Website</span><span>Responsive Design</span><span>Lead Generation</span>
      </div>
      <a class="button project-carousel__link" href="https://oligarchyservices.com/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
    </div>`;

  const secureLoginProject = document.createElement("article");
  secureLoginProject.className = "project-carousel__item";
  secureLoginProject.style.backgroundImage = "linear-gradient(100deg,rgba(5,15,35,.9),rgba(10,26,56,.48)),url('assets/custom-secure-login.svg')";
  secureLoginProject.style.backgroundSize = "cover";
  secureLoginProject.style.backgroundPosition = "center";
  secureLoginProject.setAttribute("aria-label", "Custom secure login system project");
  secureLoginProject.innerHTML = `
    <div class="project-carousel__content">
      <p class="project-carousel__eyebrow">Secure client portal</p>
      <h3 class="project-carousel__title">Custom Secure Login System</h3>
      <p class="project-carousel__description">A branded, responsive authentication experience built for private client workspaces, controlled account access, and secure organisation-managed sign-in.</p>
      <div class="project-carousel__tags" aria-label="Project features">
        <span>Secure Authentication</span><span>Role-Based Access</span><span>Client Portal</span><span>Responsive UI</span><span>Access Requests</span>
      </div>
      <p class="project-carousel__description" style="margin-top:14px">Key features include protected login flows, password visibility controls, remembered email preferences, access-request routing, organisation-managed accounts, validation states, and mobile-friendly design.</p>
    </div>`;

  const existingProjects = slide ? [...slide.querySelectorAll(".project-carousel__item")] : [];
  if (slide) {
    slide.insertBefore(eliteAutoProject, existingProjects[1] ?? null);
    slide.insertBefore(optivexProject, existingProjects[2] ?? null);
    slide.insertBefore(oligarchyProject, existingProjects[3] ?? null);
    slide.insertBefore(secureLoginProject, existingProjects[4] ?? null);
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
