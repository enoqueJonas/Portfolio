const header = document.querySelector('.header');
const closeMenuToolbar = document.querySelector('.close-menu-toolbar');
const navMenu = document.querySelector('.nav-menu');
const btnBurgerMenu = document.querySelector('.burger');
const btnCloseMenu = document.querySelector('.close-menu');
const navItemPortfolio = document.querySelector('#nav-item-portfolio');
const navItemAbout = document.querySelector('#nav-item-about');
const navItemContact = document.querySelector('#nav-item-contact');

function toggleMobileMenu() {
  header.classList.toggle('active');
  closeMenuToolbar.classList.toggle('active');
  navMenu.classList.toggle('active');
  btnBurgerMenu.classList.toggle('active');
}

navItemContact.addEventListener('click', toggleMobileMenu);
navItemAbout.addEventListener('click', toggleMobileMenu);
navItemPortfolio.addEventListener('click', toggleMobileMenu);
btnCloseMenu.addEventListener('click', toggleMobileMenu);
btnBurgerMenu.addEventListener('click', toggleMobileMenu);
