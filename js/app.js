const navbarExpandButton = document.querySelector(".nav-bar__hamburger");
const navbarLinks = document.querySelector(".nav-bar__links");

navbarExpandButton.addEventListener("click", () => {
  navbarExpandButton.classList.toggle("nav-bar__hamburger--active");
  navbarLinks.classList.toggle("nav-bar__links--expanded");
});
