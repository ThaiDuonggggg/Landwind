const barsMobile = document.querySelector('.header__nav-icon-mobile');
const navMobile = document.querySelector('.header__nav-main');

function showNavMobile() {
    navMobile.classList.toggle('active');
}

barsMobile.addEventListener('click', showNavMobile);