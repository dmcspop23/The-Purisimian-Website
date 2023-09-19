const toggleNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mobile-nav-toggle');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-show');
        burger.classList.toggle('toggle');
    });
};

const closeNavOnClick = () => {
    document.querySelectorAll('.nav-links-mobile').forEach(link => {
        link.addEventListener('click', () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.mobile-nav-toggle');
            
            burger.classList.remove('toggle');
            nav.classList.remove('nav-show');
        });
    });
};

const initMobileNav = () => {
    toggleNav();
    closeNavOnClick();
};

initMobileNav();
