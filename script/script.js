let header = document.querySelector('.header');
let close_menu_toolbar = document.querySelector('.close-menu-toolbar');
let nav_menu = document.querySelector('.nav-menu');
let btn_burger_menu = document.querySelector('.burger')
let btn_close_menu = document.querySelector('.close-menu')

function toggleMobileMenu(){
    header.classList.toggle('active');
    close_menu_toolbar.classList.toggle('active');
    nav_menu.classList.toggle('active');
    burger_menu.classList.toggle('active');
}

btn_close_menu.addEventListener('click', toggleMobileMenu)
btn_burger_menu.addEventListener('click', toggleMobileMenu)