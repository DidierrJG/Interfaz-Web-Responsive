# Directorio Web

Aplicación web que consume la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para mostrar un directorio de usuarios con búsqueda, ordenamiento alfabético y vista de detalles adicionales.

## Características

- **Listado dinámico de usuarios**: obtiene los datos mediante `fetch` y los renderiza en tarjetas.
- **Buscador en tiempo real**: filtra usuarios por nombre a medida que se escribe.
- **Ordenamiento alfabético**: botón que alterna entre orden A-Z y Z-A.
- **Detalles ampliados**: cada tarjeta permite expandir/contraer información adicional (email, teléfono, sitio web).
- **Manejo de estados y errores**: muestra mensajes de carga y de error si la petición a la API falla.
- **Diseño responsive**: adaptado a escritorio, tablet y móvil mediante CSS Grid y Flexbox.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Grid, Flexbox, Media Queries)
- JavaScript (ES6+, `async/await`, Fetch API, manipulación del DOM)

## Estructura del proyecto

```
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DidierrJG/Interfaz-Web-Responsive.git
   ```
2. Abre la carpeta del proyecto.
3. Abre el archivo `index.html` en tu navegador (o usa una extensión como Live Server en VS Code).

No requiere instalación de dependencias ni build previo: es un proyecto de HTML, CSS y JavaScript puro (vanilla).

## API utilizada

Este proyecto consume el endpoint de usuarios de JSONPlaceholder:

```
GET https://jsonplaceholder.typicode.com/users
```