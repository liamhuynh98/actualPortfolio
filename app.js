//Menu show hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

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

//mobile menu exit 
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
  const navMenu = document.getElementById('nav-menu');

  //clicking on nav__link will remove the show-menu class 
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
