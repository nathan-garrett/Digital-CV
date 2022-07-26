const tabs = document.querySelectorAll(".qualifications-tab");
const tabsContainer = document.querySelector(".tabs-container");
const tabsContent = document.querySelectorAll(".qualification-content");

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
