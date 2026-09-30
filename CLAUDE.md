# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Astro dev server (also aliased as `npm start`).
- `npm run build` — runs `astro check && astro build`. `astro check` performs TypeScript + `.astro` type checking against `astro/tsconfigs/strict`; a type error fails the build.
- `npm run preview` — serve the built `dist/` locally.
- `npm run astro -- <cmd>` — invoke the Astro CLI (e.g. `npm run astro -- add <integration>`).

The tracked lockfile is `bun.lock` (`package-lock.json` and `pnpm-lock.yaml` are gitignored); `bun install` keeps it in sync, and npm works too. There is no test runner, linter, or formatter configured — do not invent commands for them.

## Architecture

Astro 4 + Tailwind static site. Content is in Spanish and authored directly inside the `.astro` files — there is no CMS, MDX, or content collection. To change copy, edit the component, not data.

- **Single landing page** — [src/pages/index.astro](src/pages/index.astro) composes the whole portfolio: `Hero`, `Experience`, `Projects`, `AboutMe`, each wrapped in a `SectionContainer` with an anchor id (`#experiencia`, `#proyectos`, `#sobre-mi`). The header nav in [src/components/Header.astro](src/components/Header.astro) links to those anchors plus a `mailto:` for `Contacto`.
- **Second route** — [src/pages/components.astro](src/pages/components.astro) is a design-system showcase page (`/components`), not part of the public portfolio flow. Use it when adjusting shared primitives (`Badge`, `SocialPill`, etc.) without breaking the landing page.
- **Layout / global styles** — [src/layouts/Layout.astro](src/layouts/Layout.astro) owns `<head>`, global CSS, the Onest variable font import, the background radial gradient, and the scroll-driven `#header-nav` blur animation (`animation-timeline: scroll()`). It also wires `<ViewTransitions />`; the theme toggle button uses `transition:persist` so client state survives navigations — preserve that attribute on any element holding cross-page state.
- **Data-as-config** — projects and experience live in JSON files ([src/data/projects.json](src/data/projects.json), [src/data/experience.json](src/data/experience.json)) imported by `Projects.astro` / `Experience.astro`; `navItems` is a constant in `Header.astro`. Add a project/experience/nav entry by editing that data (experience is listed most recent first), not by adding new files.
- **Icons** — every icon is its own `.astro` component under [src/components/icons/](src/components/icons/). They accept a `class` prop (typically `size-N`) that is forwarded to the inline `<svg>`. Add new icons as siblings rather than introducing an icon library.
- **Path alias** — `@/*` → `src/*` (see [tsconfig.json](tsconfig.json)). Prefer `@/components/...` over relative paths in new code.
- **Integrations** — `@astrojs/tailwind` and `astro-robots-txt` are wired in [astro.config.mjs](astro.config.mjs); `site` is set to `https://porfolio.dev/` (this is used by `robots.txt` and any absolute URL generation).

## Conventions worth keeping

- `.astro` files in this repo use double quotes and no semicolons in the frontmatter — match the surrounding style.
- Tailwind dark mode is driven by the `dark:` variant + the theme toggle script in `ThemeToggle.astro`; do not introduce a separate dark-mode mechanism.
- The repo is a fork of `midudev/porfolio.dev` customized for Alan McLure — page titles, project list, and contact email are personal. Don't revert them to the upstream content.
