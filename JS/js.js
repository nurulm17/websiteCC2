const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navBar.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navBar.classList.remove('navbar-scrolled');
    }
});



function redirect(){
    window.location.href ='#';
}
