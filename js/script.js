const menuIcon = document.querySelector('.hamburgerMenuIcon');
const mobileMenu = document.querySelector('.hamburgerMenu');
const closeIcon = document.querySelector('.closeIcon')
const darkModeIcon = document.querySelector('.dark-mode')
const lightModeIcon = document.querySelector('.light-mode')
menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
window.addEventListener('resize', mobileClose);

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
