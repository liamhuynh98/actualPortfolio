//Menu show hidden
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//show menu
//check to see if ID exist exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {});
  navMenu.classList.remove("show-menu");
}
