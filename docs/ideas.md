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

## Proyectos aparte, enlazados desde el portfolio

- **Blog**: mejor como proyecto personal independiente que como sección del portfolio. Solo tiene sentido si se mantiene. Cuando exista, se enlaza desde Proyectos (una entrada con su categoría y `link`) y, si se quiere, desde otro sitio como el menú o el pie de página.
- **3D interactivo** (estilo Bruno Simon): también como proyecto aparte, no dentro del portfolio. Mucho coste y no aporta al perfil de la web principal.

## Hecho

- **Rejilla de puntos que reacciona al cursor** (`src/components/DotGrid.astro`): los puntos cercanos al ratón crecen y se ponen rojos. Se desactiva con `prefers-reduced-motion` y no reacciona al tacto.

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
