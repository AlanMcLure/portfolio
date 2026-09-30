# AGENTS.md

Guidance for AI coding agents working in this repository. `CLAUDE.md` imports this file, so this is the single source of truth: update it here.

## Commands

- `npm run dev` — start the Astro dev server (also aliased as `npm start`).
- `npm run build` — runs `astro check && astro build`. `astro check` performs TypeScript + `.astro` type checking against `astro/tsconfigs/strict`; a type error fails the build. Read the whole output: some failures (for example a `getStaticPaths` error) only show up in the `astro build` part, after `0 errors` from the check.
- `npm run preview` — serve the built `dist/` locally.
- `npm run astro -- <cmd>` — invoke the Astro CLI (e.g. `npm run astro -- add <integration>`).

The tracked lockfile is `bun.lock` (`package-lock.json` and `pnpm-lock.yaml` are gitignored); `bun install` keeps it in sync, and npm works too. There is no test runner, linter, or formatter configured — do not invent commands for them.

## Architecture

Astro 4 + Tailwind static site. The content is in Spanish. Page structure lives in `.astro` files; the lists of content live in JSON files under `src/data/`. There is no CMS, MDX, or content collection.

- **Single landing page** — [src/pages/index.astro](src/pages/index.astro) composes the whole portfolio: `Hero`, `Experience`, `Experience` again for education (`Formación`, fed by `src/data/education.json` through the `items` prop), `Projects`, `AIWorkflow` ("Cómo trabajo con IA"), `AboutMe`, `Contact`, each wrapped in a `SectionContainer` with an anchor id (`#experiencia`, `#formacion`, `#proyectos`, `#ia`, `#sobre-mi`, `#contacto`). The header nav in [src/components/Header.astro](src/components/Header.astro) links to those anchors (the active one is highlighted by an `IntersectionObserver` that matches section ids to the links' `aria-label`).
- **Project detail pages** — [src/pages/proyectos/[slug].astro](src/pages/proyectos/[slug].astro) builds one page per project that has a `slug` in `projects.json`, and appends the case study from `src/data/case-studies.json` when the slug matches (see `docs/casos-de-estudio.md`). `getStaticPaths` is hoisted, so it can only use imported data, not constants declared in the frontmatter. Tag styling lives in [src/components/projectTags.ts](src/components/projectTags.ts).
- **Design-system page** — [src/pages/components.astro](src/pages/components.astro) (`/components`) showcases shared primitives (`Badge`, `SocialPill`, etc.). It is internal: `noindex` and excluded from the sitemap.
- **Layout / global styles** — [src/layouts/Layout.astro](src/layouts/Layout.astro) owns `<head>`, global CSS, the font imports, the flat background with a CSS dot grid, and the scroll-driven `#header-nav` blur animation (`animation-timeline: scroll()`). It also mounts `DotGrid` (a canvas that highlights the background dots near the cursor; its `SPACING` must match the CSS grid size in `Layout.astro`) and wires `<ViewTransitions />`; the theme toggle button uses `transition:persist` so client state survives navigations — preserve that attribute on any element holding cross-page state. SEO lives here too: canonical, Open Graph (default image `public/og.jpg`, 1200x630), Twitter card, JSON-LD (Person + WebSite), `theme-color`, and an optional `noindex` prop.
- **Data-as-config** — content lists are JSON: [projects.json](src/data/projects.json), [case-studies.json](src/data/case-studies.json), [experience.json](src/data/experience.json), [education.json](src/data/education.json), [ia-workflow.json](src/data/ia-workflow.json). `navItems` is a constant in `Header.astro`. Add an entry by editing that data, not by adding new files. Experience and education are listed most recent first.
- **Icons** — every icon is its own `.astro` component under [src/components/icons/](src/components/icons/). They accept a `class` prop (typically `size-N`) that is forwarded to the inline `<svg>`. Add new icons as siblings rather than introducing an icon library.
- **Path alias** — `@/*` → `src/*` (see [tsconfig.json](tsconfig.json)). Prefer `@/components/...` over relative paths in new code.
- **Integrations** — `@astrojs/tailwind`, `astro-robots-txt` and `@astrojs/sitemap` are wired in [astro.config.mjs](astro.config.mjs). `site` is still the upstream placeholder `https://porfolio.dev/`; it drives the canonical URLs, `og:image`, the sitemap and `robots.txt`, and must be changed to the real domain before publishing (see `docs/despliegue.md`).

## Style and design tokens

- `.astro` files use double quotes and no semicolons in the frontmatter — match the surrounding style (`Layout.astro` keeps semicolons on its imports).
- The look is inspired by Nothing: monochrome, red accent, dot-matrix type. Use the Tailwind tokens in [tailwind.config.mjs](tailwind.config.mjs): `accent` / `accent-light` (red, `accent-light` for text on dark), `font-dot` (Doto, headings and big numbers only, never body text) and `font-mono` (Space Mono, dates, labels and small details). Body text is Onest. Do not bring back the old yellow accent.
- Dark mode is driven by the `dark:` variant + the theme toggle script in `ThemeToggle.astro` (it toggles `dark` on `<html>`); do not introduce a separate dark-mode mechanism.
- Respect `prefers-reduced-motion` in any new animation.
- Images: use WebP at their display size (retina at most). The profile photos were reduced from several hundred KB to a few dozen; do not add multi-megapixel images.

## Content rules

- Never invent facts about Alan (jobs, dates, results, decisions, technologies). Write only what he has stated, and mark anything illustrative clearly.
- Current placeholders that must be replaced before publishing: the company name "Empresa X" (`experience.json` and `public/cv-alan-mclure.pdf`), the FastLap case study (`"example": true` in `case-studies.json`, shows a visible warning) and the draft steps in `ia-workflow.json`.
- Before changing copy that was rewritten, check `docs/textos-anteriores.md`, which keeps the original texts.
- More context lives in `docs/`: `ideas.md` (decisions and pending work), `casos-de-estudio.md` (case study structure and interview questions), `despliegue.md` (what to do before deploying).

## Repository notes

- The repo is a fork of `midudev/porfolio.dev` customized for Alan McLure — page titles, project list, and contact email are personal. Don't revert them to the upstream content.
- The `mailto:` address appears in `Hero.astro`, `Footer.astro` and `Contact.astro`; keep them in sync if it changes.
