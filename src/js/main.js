document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const modalClose = document.getElementById('modal-close');
  const filtersContainer = document.querySelector('.portfolio-filters');
  const cardsContainer = document.getElementById('portfolio-cards-container');

  // Modal
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

  // Formulario contacto
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("nombre").value;
      const email = document.getElementById("correo").value;
      const message = document.getElementById("mensaje").value;

      if (!name || !email || !message) {
        mostrarModal("Por favor completa correctamente todos los campos.");
        return;
      }

      try {
        const response = await fetch("https://mi-web-personal-backend.onrender.com/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, content: message })
        });

        if (response.ok) {
          mostrarModal("¡Mensaje enviado con éxito!");
          form.reset();
        } else {
          const data = await response.json();
          mostrarModal("Error: " + (data.error || "No se pudo enviar el mensaje"));
        }
      } catch (err) {
        console.error(err);
        mostrarModal("Ocurrió un error al enviar el mensaje");
      }
    });
  }

  // Portafolio dinámico
  try {
    const response = await fetch("https://mi-web-personal-backend.onrender.com/api/projects");
    const projects = await response.json();

    // Generar filtros dinámicos
    const categories = new Set();
    projects.forEach(p => p.categories.forEach(c => categories.add(c)));

    filtersContainer.innerHTML = `<button class="btn btn-primary" data-filter="all">Todos</button>`;
    categories.forEach(cat => {
      filtersContainer.innerHTML += `<button class="btn btn-primary" data-filter="${cat}">${cat}</button>`;
    });

    // Renderizar proyectos
    function renderProjects(filter) {
      cardsContainer.innerHTML = "";
      projects
        .filter(p => filter === "all" || p.categories.includes(filter))
        .forEach(p => {
          cardsContainer.innerHTML += `
            <div class="card">
              <h4>${p.title}</h4>
              <img src="${p.image_url}" alt="${p.title}">
              <p>${p.description}</p>
              <p><strong>Tecnologías</strong>: ${p.technologies.join(', ')}</p>
              <div class="card-button">
                <a class="btn btn-primary" href="${p.github_url}" target="_blank">Ver más</a>
              </div>
            </div>
          `;
        });
    }

    renderProjects("all");

    // Filtrado
    filtersContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const filtro = e.target.dataset.filter;
        renderProjects(filtro);
      }
    });

  } catch (err) {
    console.error("Error cargando proyectos", err);
  }
});

