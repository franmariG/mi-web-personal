const form = document.getElementById('contact-form');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');
const filterButtons = document.querySelectorAll('.portfolio-filters button');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   if (!form.checkValidity()) {
//     mostrarModal('Por favor completa correctamente todos los campos.');
//     return;
//   }

//   mostrarModal('Mensaje enviado correctamente.');

//   form.reset();
// });

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    mostrarModal('Por favor completa correctamente todos los campos.');
    return;
  }

  const formData = {
    name: document.getElementById('nombre').value,
    email: document.getElementById('correo').value,
    content: document.getElementById('mensaje').value
  };

  try {
    const response = await fetch('http://localhost:4000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      mostrarModal('Mensaje enviado correctamente.');
      form.reset();
    } else {
      mostrarModal('Error al enviar el mensaje.');
    }
  } catch (error) {
    console.error(error);
    mostrarModal('Error al enviar el mensaje.');
  }
});

function mostrarModal(texto) {
  modalText.textContent = texto;
  modal.style.display = 'flex';
}

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

