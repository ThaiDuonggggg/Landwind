const barsMobile = document.querySelector('.header__nav-icon-mobile');
const navMobile = document.querySelector('.header__nav-main');

function showNavMobile() {
    navMobile.classList.toggle('active');
}

barsMobile.addEventListener('click', showNavMobile);


/* show question-list*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);

const askLists = $$('.asked-question__list');
const askDess = $$('.asked-question__description');

askLists.forEach((aks, index) => {
    const askDes = askDess[index];

    aks.onclick = function () {
        // $('.asked-question__list.active').classList.remove('active');
        // $('.asked-question__description.active').classList.remove('active');


        this.classList.toggle('active')
        askDes.classList.toggle('active')
    }
})