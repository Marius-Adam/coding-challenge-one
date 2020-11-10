//Selectors
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
const logo = document.querySelector(".logo")

//Event listeners
navbarToggler.addEventListener("click", navbarTogglerClick);

//Functions
function navbarTogglerClick() {
  navbarMenu.classList.toggle("open");
  logo.classList.toggle("hidden");
}

navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkClick));

//Close navbar link in smaller screens once clicked
function navbarLinkClick(event) {
  if (navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}