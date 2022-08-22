const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const tabs = document.querySelectorAll(".qualifications-tab");
const tabsContainer = document.querySelector(".tabs-container");
const tabsContent = document.querySelectorAll(".qualification-content");

const sectionHeroEl = document.querySelector(".section-hero");

const allLinks = document.querySelectorAll(".nav-list-item");

//////////////////////////////////////////////////////////////
// Mobile Navigation

btnNavEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////
// Tabbed content

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".qualifications-tab");
  // Guard Clause - return early if some condition is met to immediately finish this function
  if (!clicked) return;
  // Remove active classes
  tabs.forEach((t) => t.classList.remove("qualification-tab-active"));
  tabsContent.forEach((c) =>
    c.classList.remove("qualification-content-active")
  );
  // Active tab
  clicked.classList.add("qualification-tab-active");
  // Activate content area
  console.log(clicked.dataset.tabs);
  document
    .querySelector(`.qualification-content-${clicked.dataset.tab}`)
    .classList.add("qualification-content-active");
});

///////////////////////////////////////////////////////////
//  Sticky Navigation

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scrolls back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });

      // close mobile navigation
      if (link.classList.contains("nav-list-item"))
        headerEl.classList.toggle("nav-open");
    }
  });
});
