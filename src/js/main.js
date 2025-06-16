const form = document.getElementById('contact-form');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.visibility = "hidden";
  preloader.style.transition = "opacity 0.5s ease";
});


form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    mostrarModal('Por favor completa correctamente todos los campos.');
    return;
  }

  mostrarModal('Mensaje enviado correctamente.');

  form.reset();
});

function mostrarModal(texto) {
  modalText.textContent = texto;
  modal.style.display = 'flex';
}

// Cerrar el modal al hacer click en el botón
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// (Opcional) Cerrar al hacer click fuera del modal
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
