# Casos de estudio

Cada proyecto importante tiene una página propia (`/proyectos/<slug>`) que cuenta el proyecto más allá de la captura: el problema, las decisiones, cómo se usó la IA y cómo se verificó el resultado. Es lo que más diferencia un portfolio, porque enseña criterio y no solo resultado.

Regla de oro: **solo se escribe lo que es cierto y se puede defender en una entrevista**. Si algo no se sabe o no se quiere contar, se deja fuera.

## Estructura de un caso de estudio

| # | Sección | Campo en `case-studies.json` | Qué responde |
|---|---|---|---|
| 01 | El problema | `problem` | ¿Qué se quería resolver y para quién? |
| 02 | Decisiones técnicas | `decisions` (título + descripción) | ¿Por qué esta tecnología y esta arquitectura? |
| 03 | Cómo usé la IA | `ai` | ¿Qué parte se hizo con IA y qué parte a mano? |
| 04 | Verificación | `verification` | ¿Cómo sé que funciona? |
| 05 | Limitaciones | `limits` | ¿Qué no hace o qué falla? |
| 06 | Qué mejoraría | `next` | ¿Qué haría distinto hoy? |

Además, `role` (qué parte hice yo). El título, la descripción, las etiquetas y los enlaces salen de `projects.json`.

## Proceso de preguntas (para cualquier proyecto)

Se responde con frases sueltas. Las respuestas se convierten en el texto de la página.

**Contexto**
1. ¿Qué querías conseguir y para quién es? ¿Cómo surgió la idea?
2. ¿Fue individual o en equipo? ¿Qué parte hiciste tú?

**Decisiones técnicas**
3. ¿Por qué esta tecnología? ¿Cómo se guardan y se sirven los datos (base de datos, API, autenticación)?
4. ¿De dónde salen los datos o el contenido principal?
5. ¿Qué decisión de diseño o arquitectura fue la más difícil, o cuál cambiaste por el camino?

**IA y verificación**
6. ¿Usaste IA? ¿Para qué (código, diseño, depurar, documentar) y qué partes hiciste a mano?
7. ¿Cómo comprobabas que funcionaba? ¿Hay pruebas o se probaba a mano?

**Cierre**
8. ¿Qué problema o error te dio más guerra y cómo lo resolviste?
9. ¿Qué mejorarías o qué falta? ¿Hay algún dato real (usuarios, nota, tiempo, rendimiento)?

Consejo: para los proyectos donde la IA tiene un papel central (agentes, automatizaciones), añadir dos preguntas más: ¿qué pasa cuando el agente falla o se equivoca? y ¿cómo lo evalúas (casos de prueba, métricas)?

## Preguntas específicas de FastLap

Además de las generales:
- ¿Cómo funciona el dashboard y de dónde salen los datos de Fórmula 1?
- ¿Cómo se guardan publicaciones, comentarios y votos? ¿Hay autenticación?
- ¿Qué parte del proyecto fue la más costosa de hacer?
- ¿Se usó el repositorio `AlanMcLure/Fastlap` como referencia para contrastar las respuestas? (opcional: se puede dar acceso a la sesión para leer el código y responder solo las preguntas técnicas).

## Cómo se muestra en el portfolio

Cada proyecto con `slug` en `src/data/projects.json` tiene su **página de detalle** (`/proyectos/<slug>`): título, categoría, etiquetas, descripción, botones de Code y Preview, la imagen grande y, si existe, el caso de estudio debajo. En la tarjeta de Proyectos, la imagen, el título y "Ver proyecto →" llevan a esa página.

- Un proyecto **sin caso de estudio** tiene igualmente su página de detalle, solo que sin las secciones del caso.
- El campo opcional `shortTitle` de `projects.json` es el nombre corto que sale como título grande de la página (por ejemplo `FastLap`); el subtítulo es el resto del `title`.

## Estado actual

**El caso de FastLap que hay en `src/data/case-studies.json` es un ejemplo ilustrativo**, escrito solo para ver cómo queda la página. Lo único que viene de datos reales es que es el Proyecto Final de Grado, una red social tipo Reddit con dashboard en Next.js y Tailwind CSS. Todo lo demás está sin validar.

Lleva `"example": true`, así que la página muestra un aviso rojo. Antes de publicar:
1. Contestar las preguntas y sustituir los textos.
2. Quitar `"example": true` (desaparece el aviso).

## Cómo añadir un proyecto nuevo

1. Añadir el proyecto a `src/data/projects.json` con un `slug` (por ejemplo `"widget-nothing"`), y opcionalmente `shortTitle`. Ya tiene página de detalle.
2. Si tiene caso de estudio, añadir una entrada a `src/data/case-studies.json` con el mismo `slug` y los campos de la tabla (`role`, `problem`, `decisions`, `ai`, `verification`, `limits`, `next`).
3. Las etiquetas (`tags`) con marca propia se definen en `src/components/projectTags.ts`; las demás salen como una píldora neutra.
