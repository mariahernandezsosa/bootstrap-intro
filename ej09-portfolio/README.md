# Portfolio de María Hernández

Portfolio profesional de María Luisa Hernández Sosa, desarrollado con **HTML5 y Bootstrap 5.3** en el módulo Diseño de Interfaces Web (2.º DAW).

🔗 **Web publicada:** https://mariahernandezsosa.github.io/bootstrap-intro/

📁 **Repositorio:** https://github.com/mariahernandezsosa/bootstrap-intro.gitLinks


## Tecnologías
- HTML5
- CSS3
- Bootstrap 5.3
- Bootstrap Icons
- JavaScript

## Estructura
```
ej09-portfolio/
├── index.html
├── README.md
├── ENUNCIADO.md
├── css/
│   └── estilos.css
├── js/
│   └── main.js
├── img/
│   ├── icon.png
│   └── proyectojunit.png
└── docs/
    ├── LEEME.txt
    └── CV_Hernández_Sosa_María.pdf
```

## Accesibilidad
 
- `<html lang="es">`, un único `<h1>` y títulos sin saltos de nivel.
- Enlace «Saltar al contenido» (`visually-hidden-focusable`) como primer elemento.
- Foco visible con contorno sólido en todos los elementos interactivos.
- Iconos decorativos con `aria-hidden="true"`; enlaces solo con icono con `aria-label`.
- Enlaces con `target="_blank"` con `rel="noopener"` y aviso para lectores de pantalla.
- Formulario con `<label>` asociado, `type` y `autocomplete` adecuados y mensajes de error enlazados con `aria-describedby`. El error nunca se indica solo con el color.
- Sin animaciones propias ni reproducción automática; las transiciones de Bootstrap respetan `prefers-reduced-motion`.
- Diseño usable con zoom al 200 % y sin scroll horizontal a 375, 768 y 1200 px.


## Informe de calidad
 
| Prueba | Resultado exigido | Resultado obtenido | Captura |
|---|---|---|---|
| Lighthouse · Accesibilidad (móvil) | ≥ 90 | [XX] | `docs/evidencias/lighthouse.png` |
| Lighthouse · Buenas prácticas | ≥ 90 | [XX] | `docs/evidencias/lighthouse.png` |
| Lighthouse · SEO | ≥ 90 | [XX] | `docs/evidencias/lighthouse.png` |
| WAVE | 0 errores y 0 errores de contraste | [X errores / X contraste] | `docs/evidencias/wave.png` |
| Validador HTML (W3C) | 0 errores | [X] | `docs/evidencias/validador-html.png` |
| Validador CSS (W3C) | 0 errores | [X] | `docs/evidencias/validador-css.png` |
| DevTools responsive | Correcto a 375, 768 y 1200 px | [Correcto] | `docs/evidencias/responsive.png` |
 
![Informe de Lighthouse](docs/evidencias/lighthouse.png)
![Informe de WAVE](docs/evidencias/wave.png)
![Validador HTML del W3C](docs/evidencias/validador-html.png)
![Validador CSS del W3C](docs/evidencias/validador-css.png)


## Declaración de uso de IA
 
He utilizado la IA como asistente para que el botón de "descargar CV" funcionase correctamente, para corregir errores, consultar dudas y para completar la memoria/readme del proyecto (en concreto, la parte de accesibilidad y el informe de calidad).

Ninguno de los textos o las imágenes son generadas con IA.