const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#main-nav');

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');

    hamburger.setAttribute('aria-expanded', isOpen);
});