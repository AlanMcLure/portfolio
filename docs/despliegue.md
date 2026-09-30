# Despliegue

Es un sitio estático (Astro genera `dist/`), así que funciona en cualquier hosting estático. No hay configuración de despliegue en el repositorio (ni `vercel.json`, ni `netlify.toml`, ni workflows).

## Lo que hay que cambiar antes de publicar

| Qué | Dónde | Por qué |
|---|---|---|
| **`site`** | `astro.config.mjs` (ahora `https://porfolio.dev/`) | Es el dominio de midudev. De ahí salen el canonical, `og:url`, `og:image` y la URL del JSON-LD. Publicado así, tus páginas dirían a Google que el original es la web de otra persona. Hay que poner tu URL real. |
| **`robots.txt` y sitemap** | `astro-robots-txt` y `@astrojs/sitemap` | Ya se generan los dos, pero usan `site`, así que hasta cambiarlo apuntan al dominio de midudev. Se corrigen solos al poner tu URL. `/components` está excluido del sitemap y marcado `noindex`. |
| **"Empresa X"** | `src/data/experience.json` y `public/cv-alan-mclure.pdf` | Es un marcador. El CV es genérico y también lo lleva. |
| **Caso de estudio de FastLap** | `src/data/case-studies.json` | Es un ejemplo sin validar (`"example": true`). Contestar las preguntas de `docs/casos-de-estudio.md` o quitar la entrada. |
| **Sección "Cómo trabajo con IA"** | `src/data/ia-workflow.json` | Es un borrador. Revisarlo para que describa la forma real de trabajar. |

Otros pendientes menores: segunda foto de "Sobre mí" y enlace de Ausiàs March en Formación.

## Opciones de hosting

- **Vercel** (ya se usa para FastLap): conectar el repositorio; detecta Astro solo. Comando `npm run build`, salida `dist`. Da una URL `*.vercel.app` y permite dominio propio.
- **Netlify**: igual de sencillo, con `npm run build` y `dist`.
- **GitHub Pages**: gratis y sin salir de GitHub, pero necesita un workflow y, si va en `usuario.github.io/portfolio`, ajustar `base` en `astro.config.mjs` y todos los enlaces absolutos (`/#experiencia`, `/proyectos/...`, `/cv-alan-mclure.pdf`, imágenes) para que respeten esa ruta base. Con un dominio propio en la raíz no hace falta.

## Ver los cambios sin publicarlos

Publicar la rama `main` es lo que actualiza la web que ve todo el mundo. Mientras las ramas `claude/acceso-disponible-d62h8r` y `claude/tema-nothing` no se fusionen en `main`, no cambian nada público.

Para probarlo antes:
- **En local**: `git fetch origin`, `git checkout claude/tema-nothing`, `npm install` (o `bun install`) y `npm run dev`. Con `npm run build && npm run preview` se ve la versión de producción.
- **Vista previa por rama**: Vercel y Netlify crean una URL de vista previa para cada rama. Conviene comprobar en su configuración si esas previsualizaciones son privadas o públicas, y que no se indexen.

## Lista antes de fusionar en `main`

1. Revisar la rama en local y decidir qué se queda.
2. Rellenar o quitar los marcadores de la tabla de arriba.
3. Poner `site` con la URL definitiva (el sitemap y `robots.txt` se actualizan solos).
4. `npm run build` sin errores.
5. Fusionar (por PR o merge), y comprobar la web publicada: canonical, imagen al compartir el enlace, descarga del CV y enlaces de las páginas de proyecto.
