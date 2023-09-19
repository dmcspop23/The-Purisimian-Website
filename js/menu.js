const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav-toggle');

const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-show');
        burger.classList.toggle('toggle');
    });
}   //click then add

document.querySelectorAll('.nav-links-mobile').forEach(n => n.addEventListener('click', () =>{
    burger.classList.remove('toggle');
    nav.classList.remove('nav-show');
}));  //Removing in the classlist whe clicking inside a nav-links



navSlide();