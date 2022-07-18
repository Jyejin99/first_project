const nav_menu = document.querySelector('.nav_menu');
const nav_bar = document.querySelector('.nav_bar');

const handleBurgerClick = () =>{
    nav_menu.classList.toggle("active");
    nav_bar.classList.toggle("active");
}

nav_menu.addEventListener('click', handleBurgerClick);