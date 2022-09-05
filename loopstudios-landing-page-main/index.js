const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');



function showNav (){
    mobileNav.style.display = 'block';
}

function hideNav(){
    mobileNav.style.display = 'none';
}


menuBtn.addEventListener('click', showNav);
closeMenu.addEventListener('click', hideNav);

































