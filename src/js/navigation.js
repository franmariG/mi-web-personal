const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

// Abrir / cerrar menú
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier enlace
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
