(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".site-header");
  var schematic = document.querySelector(".schematic");
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  function drawSchematic() {
    if (schematic) {
      schematic.classList.add("is-drawn");
    }
  }

  if (reduceMotion) {
    drawSchematic();
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });

    if (schematic) {
      var schematicObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              drawSchematic();
              schematicObserver.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      schematicObserver.observe(schematic);
    }
  } else {
    drawSchematic();
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  function setActive(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + id) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map();

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) {
          return;
        }

        var bestId = null;
        var bestRatio = 0;
        visible.forEach(function (ratio, id) {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActive(bestId);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1]
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  var ticking = false;

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateHeader();
})();
