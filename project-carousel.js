"use strict";

const projectCarousel = document.querySelector("[data-project-carousel]");
const projectsSectionTitle = document.querySelector("#projects-title");

if (projectsSectionTitle) projectsSectionTitle.textContent = "Featured Projects";

if (projectCarousel) {
  const slide = projectCarousel.querySelector("[data-project-carousel-slide]");
  const nextButton = projectCarousel.querySelector("[data-project-carousel-next]");
  const previousButton = projectCarousel.querySelector("[data-project-carousel-prev]");
  const status = projectCarousel.querySelector("[data-project-carousel-status]");

  const createProject = ({ label, image, content, className = "" }) => {
    const article = document.createElement("article");
    article.className = `project-carousel__item ${className}`.trim();
    article.style.backgroundImage = `url('${image}')`;
    article.setAttribute("aria-label", label);
    article.innerHTML = content;
    return article;
  };

  const eliteAutoProject = createProject({
    label: "Elite Auto Estimates website project",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=85",
    content: `
      <div class="project-carousel__content">
        <img class="project-carousel__logo project-carousel__logo--light" src="assets/elite-auto-logo.svg" alt="Elite Auto Estimates">
        <p class="project-carousel__eyebrow">Automotive appraisal website</p>
        <h3 class="project-carousel__title">Elite Auto Estimates</h3>
        <p class="project-carousel__description">A professional website for Colorado auto-damage appraisal services, designed to present services clearly and help customers request assistance online.</p>
        <div class="project-carousel__tags" aria-label="Project capabilities"><span>Website</span><span>Automotive</span><span>Lead Generation</span><span>Responsive Design</span></div>
        <a class="button project-carousel__link" href="https://eliteautoestimates.com/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
      </div>`
  });

  const optivexProject = createProject({
    label: "Optivex Solutions website project",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    content: `
      <div class="project-carousel__content">
        <img class="project-carousel__logo project-carousel__logo--light" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/mv0PQyjGP6Sl0jQx/nav_logo-m5K8W4BJ6ESwRjO3.webp" alt="Optivex Solutions">
        <p class="project-carousel__eyebrow">Business solutions website</p>
        <h3 class="project-carousel__title">Optivex Solutions</h3>
        <p class="project-carousel__description">A responsive business website designed to present Optivex services, strengthen its professional online presence, and provide visitors with a clear path to enquire.</p>
        <div class="project-carousel__tags" aria-label="Project capabilities"><span>Business Website</span><span>Responsive Design</span><span>Branding</span><span>Lead Generation</span></div>
        <a class="button project-carousel__link" href="https://optivex.solutions/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
      </div>`
  });

  const oligarchyProject = createProject({
    label: "Oligarchy Services website project",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    content: `
      <div class="project-carousel__content">
        <img class="project-carousel__logo project-carousel__logo--dark" src="assets/oligarchy-services-logo.svg" alt="Oligarchy">
        <p class="project-carousel__eyebrow">Technology services website</p>
        <h3 class="project-carousel__title">Oligarchy Services</h3>
        <p class="project-carousel__description">A professional technology services website presenting digital solutions, managed services, consulting capabilities, and clear client engagement pathways.</p>
        <div class="project-carousel__tags" aria-label="Project capabilities"><span>Technology Services</span><span>Business Website</span><span>Responsive Design</span><span>Lead Generation</span></div>
        <a class="button project-carousel__link" href="https://oligarchyservices.com/" target="_blank" rel="noopener noreferrer">Visit Website <span aria-hidden="true">↗</span></a>
      </div>`
  });

  const secureLoginProject = createProject({
    label: "Custom secure login system project",
    image: "assets/custom-secure-login.svg",
    className: "project-carousel__item--product",
    content: `
      <div class="project-carousel__content">
        <p class="project-carousel__eyebrow">Secure client portal</p>
        <h3 class="project-carousel__title">Custom Secure Login System</h3>
        <p class="project-carousel__description">A branded, responsive authentication experience built for private client workspaces, controlled account access, and secure organisation-managed sign-in.</p>
        <div class="project-carousel__tags" aria-label="Project features"><span>Secure Authentication</span><span>Role-Based Access</span><span>Client Portal</span><span>Responsive UI</span><span>Access Requests</span></div>
        <div class="project-carousel__metrics" aria-label="Project highlights"><span><strong>5</strong> Core flows</span><span><strong>100%</strong> Responsive</span><span><strong>WCAG</strong> Focus states</span></div>
      </div>`
  });

  const existingProjects = slide ? [...slide.querySelectorAll(".project-carousel__item")] : [];
  if (slide) {
    slide.insertBefore(eliteAutoProject, existingProjects[1] ?? null);
    slide.insertBefore(optivexProject, existingProjects[2] ?? null);
    slide.insertBefore(oligarchyProject, existingProjects[3] ?? null);
    slide.insertBefore(secureLoginProject, existingProjects[4] ?? null);
  }

  const getItems = () => [...slide.querySelectorAll(".project-carousel__item")];

  const chrome = document.createElement("div");
  chrome.className = "project-carousel__chrome";
  chrome.innerHTML = `
    <div class="project-carousel__meta" aria-hidden="true"><span data-carousel-current>01</span><i></i><span data-carousel-total>01</span></div>
    <div class="project-carousel__dots" role="tablist" aria-label="Choose a featured project"></div>
    <div class="project-carousel__progress" aria-hidden="true"><span></span></div>`;
  projectCarousel.appendChild(chrome);

  const dots = chrome.querySelector(".project-carousel__dots");
  const currentLabel = chrome.querySelector("[data-carousel-current]");
  const totalLabel = chrome.querySelector("[data-carousel-total]");
  const progressBar = chrome.querySelector(".project-carousel__progress span");

  if (previousButton) {
    previousButton.innerHTML = '<span aria-hidden="true">←</span><span class="project-carousel__control-label">Previous</span>';
    previousButton.setAttribute("title", "Previous project");
  }
  if (nextButton) {
    nextButton.innerHTML = '<span class="project-carousel__control-label">Next</span><span aria-hidden="true">→</span>';
    nextButton.setAttribute("title", "Next project");
  }

  const initialItems = getItems();
  const projectIds = new Map(initialItems.map((item, index) => [item, index]));

  const renderDots = () => {
    dots.innerHTML = "";
    initialItems.forEach((item, index) => {
      const button = document.createElement("button");
      const title = item.querySelector(".project-carousel__title")?.textContent?.trim() || `Project ${index + 1}`;
      button.type = "button";
      button.className = "project-carousel__dot";
      button.setAttribute("role", "tab");
      button.setAttribute("aria-label", `Show ${title}`);
      button.addEventListener("click", () => showProject(item));
      dots.appendChild(button);
    });
  };

  const updateUi = () => {
    const items = getItems();
    const activeItem = items[1];
    const activeIndex = projectIds.get(activeItem) ?? 0;
    const title = activeItem?.querySelector(".project-carousel__title")?.textContent?.trim();

    items.forEach((item, index) => {
      const isActive = index === 1;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-hidden", String(!isActive));
      item.querySelectorAll("a, button").forEach((control) => {
        if (isActive) control.removeAttribute("tabindex");
        else control.setAttribute("tabindex", "-1");
      });
    });

    [...dots.children].forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
      dot.tabIndex = isActive ? 0 : -1;
    });

    const total = initialItems.length;
    if (currentLabel) currentLabel.textContent = String(activeIndex + 1).padStart(2, "0");
    if (totalLabel) totalLabel.textContent = String(total).padStart(2, "0");
    if (progressBar) progressBar.style.transform = `scaleX(${(activeIndex + 1) / total})`;
    if (status && title) status.textContent = `${title} is now displayed.`;
  };

  const showNext = () => {
    const items = getItems();
    if (items.length > 1) slide.appendChild(items[0]);
    updateUi();
  };

  const showPrevious = () => {
    const items = getItems();
    if (items.length > 1) slide.prepend(items[items.length - 1]);
    updateUi();
  };

  const showProject = (target) => {
    let safety = getItems().length + 1;
    while (getItems()[1] !== target && safety > 0) {
      const items = getItems();
      slide.appendChild(items[0]);
      safety -= 1;
    }
    updateUi();
  };

  nextButton?.addEventListener("click", showNext);
  previousButton?.addEventListener("click", showPrevious);

  projectCarousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "Home") {
      event.preventDefault();
      showProject(initialItems[0]);
    } else if (event.key === "End") {
      event.preventDefault();
      showProject(initialItems[initialItems.length - 1]);
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

  renderDots();
  updateUi();
}