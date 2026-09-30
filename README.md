# Porfolio de Alan McLure

Mi porfolio personal: experiencia, proyectos y sobre mí. Es una web estática hecha con Astro y Tailwind CSS, con el contenido en español.

![Astro Badge](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # comprueba tipos (astro check) y genera dist/
npm run preview  # sirve dist/ en local
```

## Estructura

- `src/pages/index.astro`: la página principal, que junta Hero, Experiencia, Proyectos y Sobre mí.
- `src/pages/components.astro`: catálogo de componentes compartidos (`/components`).
- `src/data/experience.json` y `src/data/projects.json`: el contenido de las secciones de Experiencia y Proyectos.
- `src/components/`: componentes de la web. Los iconos están en `src/components/icons/`.

## Créditos

Basado en [midudev/porfolio.dev](https://github.com/midudev/porfolio.dev), personalizado con mi contenido.
