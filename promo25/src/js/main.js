// Animación de scroll del header (primero transparente y luego con fondo al hacer scroll desktop)
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav-container');
    if (!nav) return;
    if (window.scrollY > 90) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Funcionalidad del botón del responsive navbar
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

window.toggleMenu = toggleMenu;
