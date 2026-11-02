const revealItems = document.querySelectorAll(".reveal");
const projectTabs = Array.from(document.querySelectorAll('[role="tab"]'));
const projectPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateProjectTab(nextTab) {
  projectTabs.forEach((tab) => {
    const isActive = tab === nextTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  projectPanels.forEach((panel) => {
    panel.hidden = panel.id !== nextTab.getAttribute("aria-controls");
    if (!panel.hidden) panel.classList.add("is-visible");
  });
}

projectTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateProjectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % projectTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + projectTabs.length) % projectTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = projectTabs.length - 1;

    projectTabs[nextIndex].focus();
    activateProjectTab(projectTabs[nextIndex]);
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
