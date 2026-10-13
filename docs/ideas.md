# Ideas para el portfolio

Apuntes de lo que hemos hablado. No es una lista de tareas cerrada, sirve para no perder el hilo.

## Enfoque

Con la IA, lo que se valora es menos "qué stack sabes" y más los fundamentos y el criterio: entender el problema, diseñar, revisar lo que genera la IA, verificar y explicar las decisiones. Por eso no hay sección de stack.

## Decidido

- **Cada proyecto como caso de estudio**: problema, decisiones técnicas, qué parte se hizo con IA y cómo se verificó, limitaciones y qué se mejoraría.
- **Sección "Cómo trabajo con IA"** (`#ia`): hecha una versión básica en `src/data/ia-workflow.json`. Es un borrador escrito como propuesta de buen método. Hay que revisarlo y ajustarlo a la forma real de trabajar antes de publicar.
- **Una línea de fundamentos** en lugar de una parrilla de tecnologías (pendiente de redactar).

## Pendiente

- Caso de estudio de FastLap.
- Proyectos con agentes o automatizaciones que se puedan enseñar, idealmente con pruebas o evaluación.
- Proyectos para Nothing (categoría propia en Proyectos).
- README claros y actividad reciente en GitHub, porque se usa para contrastar la web.
- Nombre real de la empresa (ahora "Empresa X"), segunda foto para "Sobre mí", enlace de Ausiàs March.
- Dominio (`site` en `astro.config.mjs`) y despliegue.
- CV definitivo (ahora hay uno genérico en `public/cv-alan-mclure.pdf`).

## Ideas para más adelante

Detalles de diseño y extras que no son urgentes:

- **Terminal oculta**: al pulsar `` ` `` o `/`, una mini terminal con `help`, `about`, `projects`, `contact`, `sudo hire alan`. Es lo más vistoso y lo que más mantenimiento pide.
- **Tema "terminal"**: tercera opción en el selector, con fuente mono y texto verde, o un modo dot-matrix puro.
- **Comandos en la consola** del navegador (`alan.hire()`, `alan.skills()`), además del saludo que ya hay.
- **Clic repetido en el logo** o en un punto de la rejilla: pequeño efecto.
- **Páginas `/uses` y `/now`**, y redirecciones cortas como `/hire` o `/cv`.
- **Scroll**: indicador del nav que se desliza entre secciones.
- **Tarjetas de proyecto**: pista "Ver caso →" al pasar el cursor y animación dot-matrix en los títulos.
- **Contraste**: revisar el texto gris pequeño en mono sobre el fondo de puntos, en claro y oscuro.
- **Imágenes**: `width`/`height` en las de proyecto y una imagen para compartir por proyecto (`og`).
- **Versión en inglés**: la tarea más grande, solo si se busca fuera.

## Ideas inspiradas en otros portfolios

Vistas en https://pauwma.com/ (solo el contenido estático, sin ver el comportamiento):

- **Secciones numeradas** (01–06) en los títulos, en línea con el "01 / 04" de las tarjetas de proyecto.
- **Reloj y ubicación en vivo** en mono (ciudad, coordenadas y hora local). Confirmar las coordenadas antes.
- **Insignia de estado** ("Abierto a ofertas"), solo si es cierto.
- **Página `/setup`** con las herramientas que uso (hay que escribirla).
- **Libro de visitas**: pide base de datos y moderación; descartado por ahora.
- **Más atajos**: `g` + `h`/`p`/`c` para saltar de sección, `j`/`k` para pasar a la siguiente o anterior y `1`–`6` para ir directo.

## Proyectos aparte, enlazados desde el portfolio

- **Blog**: mejor como proyecto personal independiente que como sección del portfolio. Solo tiene sentido si se mantiene. Cuando exista, se enlaza desde Proyectos (una entrada con su categoría y `link`) y, si se quiere, desde otro sitio como el menú o el pie de página.
- **3D interactivo** (estilo Bruno Simon): también como proyecto aparte, no dentro del portfolio. Mucho coste y no aporta al perfil de la web principal.

## Hecho

- **Rejilla de puntos que reacciona al cursor** (`src/components/DotGrid.astro`): los puntos cercanos al ratón crecen y se ponen rojos. Se desactiva con `prefers-reduced-motion` y no reacciona al tacto.

- **Detalles de diseño**: selección de texto en rojo, rejilla de puntos atenuada sobre texto, hovers unificados de botones, scrollbar fina, página 404, enlace "Saltar al contenido", botón para copiar el email y transiciones compartidas en proyectos.
- **Extras para desarrolladores**: `humans.txt`, `.well-known/security.txt` (con el email de contacto actual y caducidad el 2027-10-04, que habrá que renovar), saludo en la consola, código Konami (ola de puntos rojos) y 404 con humor.
- **Atajos de teclado** (`src/components/Eggs.astro`): escribir `sudo hire alan` (lleva a Contacto), `Ctrl/Cmd + K` para una paleta de comandos con secciones, proyectos y copiar el email, `?` o `Ctrl + /` para una ayuda con los atajos, `/` para abrir la paleta, `T` para cambiar el tema y `C` para copiar el email. La paleta también descarga el CV, abre GitHub, LinkedIn y el código fuente, y cambia el tema.
- **Más detalles**: barra de progreso de lectura en las páginas de proyecto (CSS puro, solo con `prefers-reduced-motion: no-preference`), `<title>` que cambia al salir de la pestaña y fecha de última actualización en el pie (la del build).

## Descartado

- **Sección de stack**: aporta poco cuando la IA cambia las herramientas.

## Fuentes consultadas

- https://hakia.com/skills/building-portfolio/
- https://pesto.tech/resources/what-recruiters-look-for-in-developer-portfolios
- https://codeconductor.ai/blog/future-of-junior-developers-ai/
- https://builtin.com/articles/developer-hiring-process-ai-era
- https://getcoai.com/news/how-smart-teams-should-update-technical-interviews-for-software-recruiting-in-the-ai-era
- https://dev.to/it-wibrc/why-foundational-skills-still-matter-in-the-age-of-frameworks-and-ai-24jp
- https://northeasttimes.com/2026/08/16/why-software-engineers-say-ai-makes-old-school-fundamentals-matter-more
- https://elementor.com/blog/best-web-developer-portfolio-examples/

Son artículos de blog, con sesgo de marketing y sin estudios rigurosos, pero coinciden en lo esencial.
