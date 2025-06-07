document.addEventListener("DOMContentLoaded", () => {
  const CARD_COUNT = 2;

  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll("nav a");
  const canvas = document.getElementById("canvas");
  const filtersPanel = document.getElementById("filtersPanel");
  const toggleBtn = document.getElementById("filterToggle");
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("mobileMenuOverlay");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  const desktopText = document.getElementById("desktopAnimatedText");
  const mobileText = document.getElementById("mobileAnimatedText");

  const projects = [
    {
      title: "My Portfolio",
      description: "Not much to say, it's the website you are currently looking at.",
      date: "May, 2025",
      link: "#",
      tags: ["Design", "Website"],
      image: "images/GPcreation_website.png",
    },
    {
      title: "C-ortho",
      description: "A website built for a Belgian company specializing in 3D-printed medical corsets.",
      date: "March, 2025",
      link: "https://www.c-ortho.be/",
      tags: ["Design", "Website"],
      image: "images/c-ortho_website.png",
    },
  ];

  function createCards() {
    const text = "Godpower Creations";
    desktopText.innerHTML = "";
    mobileText.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span1 = document.createElement("span");
      const span2 = document.createElement("span");
      span1.textContent = span2.textContent = char === " " ? "\u00A0" : char;
      span1.style.animationDelay = span2.style.animationDelay = `${index * 0.1}s`;
      desktopText.appendChild(span1);
      mobileText.appendChild(span2);
    });

    canvas.querySelectorAll(".card").forEach((c) => c.remove());

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const cardWidth = 220;
    const cardHeight = 240;
    const borderBuffer = 50;

    const centerZone = {
      left: canvasWidth / 2 - 300,
      right: canvasWidth / 2 + 300,
      top: canvasHeight / 2 - 100,
      bottom: canvasHeight / 2 + 100,
    };

    function getSafeRandomPosition() {
      const maxLeft = canvasWidth - cardWidth - borderBuffer;
      const maxTop = canvasHeight - cardHeight - borderBuffer;
      let tries = 0, top, left, rect;

      do {
        top = Math.random() * (maxTop - borderBuffer) + borderBuffer;
        left = Math.random() * (maxLeft - borderBuffer) + borderBuffer;
        rect = {
          top,
          left,
          right: left + cardWidth,
          bottom: top + cardHeight,
        };
        tries++;

        const overlapsCenter =
          rect.left < centerZone.right &&
          rect.right > centerZone.left &&
          rect.top < centerZone.bottom &&
          rect.bottom > centerZone.top;

        if (!overlapsCenter || tries > 300) break;
      } while (true);

      return { top, left };
    }

    for (let i = 0; i < CARD_COUNT; i++) {
      const base = projects[i % projects.length];
      const project = { ...base };
      if (CARD_COUNT > projects.length) {
        project.title += ` (${Math.floor(i / projects.length) + 1})`;
      }

      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-tags", project.tags.join(","));
      const { top, left } = getSafeRandomPosition();
      card.style.top = `${top}px`;
      card.style.left = `${left}px`;
      card.style.animationDelay = `${Math.random() * 5}s`;

      card.innerHTML = `
        <div class="card-content">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-description">${project.description}</p>
          <p class="card-date">${project.date}</p>
          <a class="card-link" href="${project.link}" target="_blank">Visit Site</a>
        </div>
      `;
      canvas.appendChild(card);
    }

    makeCardsDraggable();
  }

  function makeCardsDraggable() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.style.cursor = "grab";
      let isDragging = false;
      let offsetX = 0, offsetY = 0;

      card.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
        card.style.cursor = "grabbing";
        card.style.zIndex = 1001;
      });

      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        card.style.left = `${e.clientX - offsetX}px`;
        card.style.top = `${e.clientY - offsetY}px`;
      });

      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          card.style.cursor = "grab";
          card.style.zIndex = 0;
        }
      });
    });
  }

  function resetHamburgerMenu() {
    hamburger.classList.remove("active");
    overlay.classList.add("hidden");

    const icon = hamburger.querySelector("i");
    hamburger.style.background = "var(--accent)";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    icon.style.color = "#fff";
  }

  function switchSection(target) {
    const current = document.querySelector(".page-section.visible");
    const newSection = document.getElementById(target);
    if (current === newSection) return;

    sections.forEach((sec) => sec.classList.remove("visible"));
    navLinks.forEach((nav) => nav.classList.remove("active"));

    setTimeout(() => {
      newSection.classList.add("visible");
      const desktopLink = document.querySelector(`nav a[data-target="${target}"]`);
      if (desktopLink) desktopLink.classList.add("active");

      if (target === "home") createCards();

      resetHamburgerMenu();
    }, 100);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");

      if (document.getElementById(target).classList.contains("visible")) {
        link.classList.add("fading");
        setTimeout(() => link.classList.remove("fading"), 500);
        return;
      }

      switchSection(target);
    });
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");

      resetHamburgerMenu();
      switchSection(target);
    });
  });

  hamburger.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
    hamburger.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    if (hamburger.classList.contains("active")) {
      hamburger.style.background = "transparent";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      icon.style.color = "#000";
    } else {
      hamburger.style.background = "var(--accent)";
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      icon.style.color = "#fff";
    }
  });

  let closeTimeout;

  function expandBar() {
    clearTimeout(closeTimeout);
    toggleBtn.classList.add("expanded");
  }

  function collapseBar() {
    closeTimeout = setTimeout(() => {
      toggleBtn.classList.remove("expanded");
    }, 200);
  }

  toggleBtn.addEventListener("mouseenter", expandBar);
  toggleBtn.addEventListener("mouseleave", collapseBar);

  const checkboxes = filtersPanel.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((box) =>
    box.addEventListener("change", () => {
      const selected = Array.from(checkboxes)
        .filter((b) => b.checked)
        .map((b) => b.value);
      document.querySelectorAll(".card").forEach((card) => {
        const tags = card.dataset.tags.split(",");
        const match =
          selected.length === 0 || selected.some((tag) => tags.includes(tag));
        card.classList.toggle("hidden", !match);
      });
    })
  );

  createCards(); // Initial load

  // === Slide-up footer on hover ===
  const footer = document.getElementById("slideFooter");

  window.addEventListener("mousemove", (e) => {
    const viewportHeight = window.innerHeight;
    const mouseY = e.clientY;

    if (mouseY > viewportHeight * 0.85) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
  });
});
