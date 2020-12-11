// ----------------------------------------
// make the hamburger icon toggle nav links
// ----------------------------------------
const navbarExpandButton = document.querySelector(".nav-bar__hamburger");
const navbarLinks = document.querySelector(".nav-bar__links");

navbarExpandButton.addEventListener("click", () => {
  navbarExpandButton.classList.toggle("nav-bar__hamburger--active");
  navbarLinks.classList.toggle("nav-bar__links--expanded");
});

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
  navListItem.appendChild(navLink);
  navList.appendChild(navListItem);
});

navbarLinks.appendChild(navList);
