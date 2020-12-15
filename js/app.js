// ------------------------------------
// construct nav links list dynamically
// ------------------------------------
const pageSections = document.querySelectorAll(".page-section");
const navList = document.createElement("ul");

pageSections.forEach((section) => {
  const navListItem = document.createElement("li");
  const navLink = document.createElement("a");

  navLink.href = `#${section.id}`;
  navLink.textContent = section.dataset.sectionName;
  navLink.classList.add("nav-bar__link");
  navListItem.appendChild(navLink);
  navList.appendChild(navListItem);
});

const navbarLinks = document.querySelector(".nav-bar__links");
navbarLinks.appendChild(navList);

// ----------------------------------------
// make the hamburger icon toggle nav links
// ----------------------------------------
const navbarExpandButton = document.querySelector(".nav-bar__hamburger");

navbarExpandButton.addEventListener("click", () => {
  navbarExpandButton.classList.toggle("nav-bar__hamburger--active");
  navbarLinks.classList.toggle("nav-bar__links--expanded");
});

// -----------------------------------------------
// collapse expanded navbar when a link is clicked
// -----------------------------------------------
navbarLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-bar__link")) {
    navbarExpandButton.classList.remove("nav-bar__hamburger--active");
    navbarLinks.classList.remove("nav-bar__links--expanded");
  }
});

// --------------------------------------------------
// toggle active state for a section when in viewport
// --------------------------------------------------
document.addEventListener("scroll", () => {
  setTimeout(() => {
    const windowMidPoint = window.innerHeight / 2;
    pageSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      // check if section is taking up the major area in viewport
      if (sectionTop < windowMidPoint && sectionBottom >= windowMidPoint) {
        section.classList.add("page-section--active");
      } else {
        section.classList.remove("page-section--active");
      }
    });
  }, 300);
});
