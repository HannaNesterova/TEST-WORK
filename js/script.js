const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu-links');
const body = document.querySelector('body');
const links = document.querySelectorAll('.header_menu-links li');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    } )
})