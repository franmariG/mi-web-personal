# Franmari DEV – Sitio Web Personal

Este es el repositorio de mi sitio web personal, desarrollado como parte de un proyecto académico para la materia de **Desarrollo Web**.

El objetivo principal es construir una aplicación web completa que incluya:  
* Una landing page profesional y responsiva.
* Sección "Sobre mí".
* Servicios ofrecidos.
* Portafolio dinámico conectado a una base de datos.
* Formulario de contacto funcional, que almacena los mensajes en la base de datos y envía notificaciones por correo.


## Tecnologías principales

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL
- **Hosting:** 
  - Frontend → Vercel → [https://franmari-dev.vercel.app](https://franmari-dev.vercel.app)
  - Backend y DB → Render → [https://mi-web-personal-backend.onrender.com](https://mi-web-personal-backend.onrender.com) 

## Estructura del proyecto

```bash
mi-web-personal/
├── backend/ # Código del servidor Node.js y API REST
│  ├── controllers/ # Lógica para manejar proyectos y mensajes
│  │  ├── messagesController.js
│  │  └── projetsController.js
│  ├── routes/ # Rutas de la API
│  │  ├── messages.js
│  │  └── projets.js
│  ├── db/ # Conexión a PostgreSQL
│  │  └── index.js
│  ├── app.js # Configuración principal del servidor
│  └── package.json # Dependencias y scripts del backend
│
└── src/ # Código fuente del frontend
    ├── assets/ # Imágenes e íconos
    │   ├── icons/
    │   └── images/
    ├── css/ # Archivos CSS organizados
    │   ├── reset.css
    │   ├── variables.css
    │   ├── layout.css
    │   └── components.css
    ├── js/ # Scripts JavaScript
    │   ├── main.js
    │   ├── navigation.js
    │   └── animations.js
    └── index.html # Landing page principal
```

## Descripción de funcionalidades

### **Frontend**
- Landing page con navegación responsiva y diseño adaptado a dispositivos móviles.
- Sección "Sobre mí", servicios y portafolio.
- Portafolio dinámico con filtros generados desde los datos.
- Formulario de contacto con validación y confirmación mediante modal.
- Redes sociales

### **Backend**
- API REST que expone proyectos y gestiona los mensajes recibidos.
- Conexión a la base de datos PostgreSQL.
- Envío de notificaciones de contacto por correo con Nodemailer.

## **Base de datos**
La base de datos fue diseñada en PostgreSQL y desplegada en Render.  
Incluye las tablas:  
- `project`
- `category`
- `technology`
- `project_category`
- `project_technology`
- `message`

Las relaciones permiten asociar múltiples categorías y tecnologías por proyecto, y registrar los mensajes recibidos desde el sitio web.

## Autor
**Franmari Garcia**  
Desarrolladora en formación | Ingeniería en Informática
