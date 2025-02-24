const mobileNavigation = document.getElementById('MobileNavigation');
const navbar = document.getElementById('navbar');
const closeButton = document.getElementById('closeButton');

mobileNavigation.addEventListener('click', () => {
    navbar.classList.add('open');
});

closeButton.addEventListener('click', () => {
    navbar.classList.remove('open');
});


