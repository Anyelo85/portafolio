# Portafolio de Anyelo Gutiérrez Correa

Portafolio personal de desarrollo de software hecho con HTML, CSS y JavaScript puro (sin framework ni build).

## Demo

https://anyelo85.github.io/portafolio/

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid y media queries)
- JavaScript (vanilla)
- Google Fonts (Urbanist, Righteous)
- Chart.js (vía CDN; hoy sin gráficos activos)

## Secciones

- **Sobre mí** (`#about`)
- **Experiencia** (`#experience`) — carrusel de tarjetas
- **Educación** (`#education`)
- **Habilidades** (`#chart`)
- **Proyectos** (`#projects`)
- **Contacto** (`#contact`)

## Estructura

```
portafolio/
├─ index.html
├─ README.md
├─ robots.txt
├─ .gitignore
├─ cv/
│  └─ HV_Anyelo_Gutierrez_Correa_Publica.pdf
└─ assets/
   ├─ css/
   │  ├─ style.css
   │  └─ mediaqueries.css
   ├─ js/
   │  ├─ script.js
   │  ├─ fx.js
   │  └─ skills-chart.js
   ├─ img/
   │  ├─ proyectos/
   │  │  ├─ loweb.png
   │  │  ├─ casa-viena.png
   │  │  └─ repos-github-gitlab.png
   │  ├─ perfil/
   │  │  ├─ profile-pic.png
   │  │  ├─ profile-pic-2.png
   │  │  └─ about-pic.png
   │  ├─ iconos/
   │  │  ├─ arrow.png
   │  │  ├─ checkmark.png
   │  │  ├─ email.png
   │  │  ├─ github.png
   │  │  └─ linkedin.png
   │  ├─ secciones/
   │  │  ├─ experience.png
   │  │  └─ education.png
   │  └─ favicon/
   │     ├─ favicon.svg
   │     ├─ favicon.ico
   │     ├─ favicon-32.png
   │     └─ apple-touch-icon.png
   └─ resume-example.pdf
```

## Contacto

- Email: anyeloingenierosistema@gmail.com
- LinkedIn: https://www.linkedin.com/in/angelo-guti%C3%A9rrez-correa-406070338/
- GitHub: https://github.com/Anyelo85
- Hoja de vida: `cv/HV_Anyelo_Gutierrez_Correa_Publica.pdf`

## Despliegue

Publicado con GitHub Pages desde la rama `main` (raíz del repositorio). Al ser un sitio estático no requiere paso de compilación.

El sitio incluye `<meta name="robots" content="noindex, nofollow">` y un `robots.txt` con `Disallow: /`, por lo que no se indexa en buscadores.

## Cómo verlo en local

Abre `index.html` directamente en el navegador (funciona con `file://`). Opcionalmente puedes servirlo con cualquier servidor estático.