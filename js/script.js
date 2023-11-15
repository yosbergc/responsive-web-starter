const menuIcon = document.querySelector('.hamburgerMenuIcon');
const mobileMenu = document.querySelector('.hamburgerMenu');
const closeIcon = document.querySelector('.closeIcon');
const darkModeIcon = document.querySelector('.dark-mode');
const lightModeIcon = document.querySelector('.light-mode');
const body = document.querySelector('body');
const h2title = document.querySelector('.h2-title');
const h5title = document.querySelector('.h5-title');
const logo = document.querySelector('.logo');
const currentPage = document.querySelector('.firstOne');

darkModeIcon.addEventListener('click', activateDarkMode);
lightModeIcon.addEventListener('click', activateLightMode);
menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
window.addEventListener('resize', mobileClose);
function activateLightMode() {
    lightModeIcon.classList.add('active-ui');
    lightModeIcon.setAttribute('src', 'images/sun_dark.svg');
    darkModeIcon.setAttribute('src', 'images/moon_light.svg');
    darkModeIcon.classList.remove('active-ui');
    body.classList.remove('dark-mode-background');
    h2title.classList.remove('dark-mode-text-white');
    h5title.classList.remove('dark-mode-text-white');
    logo.setAttribute('src','images/alarado-icon-homepage.svg');
    currentPage.classList.remove('dark-mode-currentPage');
}
function activateDarkMode() {
    lightModeIcon.classList.remove('active-ui');
    lightModeIcon.setAttribute('src','images/sun_light.svg');
    darkModeIcon.setAttribute('src','images/moon_dark.svg');
    darkModeIcon.classList.add('active-ui');
    body.classList.add('dark-mode-background');
    h2title.classList.add('dark-mode-text-white');
    h5title.classList.add('dark-mode-text-white');
    logo.setAttribute('src','images/alarado-black-theme.svg');
    currentPage.classList.add('dark-mode-currentPage');
}
function mobileClose() {
    if (window.innerWidth >= 1024) {
        mobileMenu.classList.add('closed');
    }
}
function toggleMenu() {
    if (mobileMenu.classList.contains('closed')) {
        mobileMenu.classList.remove('closed');
    } else {
        mobileMenu.classList.add('closed');
    }
}
