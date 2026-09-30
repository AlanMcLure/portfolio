# Diferencias de estilo con `hub` (pendiente de revisar)

Comparación entre el portfolio (rama `claude/tema-nothing`) y el proyecto `hub` (Next.js, CSS plano, skill `nothing-design`). Solo se revisaron `Layout.astro`, `Hero.astro`, `tailwind.config.mjs` y `hub/app/globals.css`. Faltan por comparar `Projects`, `Experience`, `Badge`, `Header` y el resto de componentes. No se ha renderizado nada.

## Ya coinciden

- Acento rojo `#d71921` (el portfolio añade `#FF4D55` para texto sobre oscuro).
- Doto solo en titulares; Space Mono en etiquetas y detalles, en mayúsculas.
- Fondo plano con rejilla de puntos hecha con `radial-gradient` (el portfolio añade `DotGrid` en canvas).
- Quitados el degradado ámbar, el grano y el texto con degradado de la plantilla original.

## Diferencias

| Tema | `hub` | Portfolio |
|---|---|---|
| Fondo oscuro | Negro puro `#000` | `neutral-950` (`#0a0a0a`) |
| Fondo claro | `#f5f5f5`, superficies `#fff` | `neutral-100` |
| Texto de cuerpo | Space Grotesk | Onest |
| Tokens | Variables CSS en `:root` (`--text-primary`, `--border`, etc.) | Tailwind con `accent` y `font-dot`/`font-mono` |
| Modo claro/oscuro | `data-theme="light"`, oscuro por defecto | Clase `dark` en `<html>`, `dark:` de Tailwind |
| Header | Sin efectos | `backdrop-filter: blur(20px)` y sombra al hacer scroll |
| Foto de perfil | — | `bg-gradient-to-t` en el pie, `rounded-3xl` |
| Animaciones | Solo transiciones de 200 ms | Entrada con fade y desplazamiento, y revelado por scroll |
| Estructura | Listas con separadores, botones-píldora con borde | Tarjetas y badges |
| Jerarquía | Tres capas por pantalla | Sin regla explícita |
| Rojo | Solo como interrupción (`[PENDING]`) | También en acentos de texto (Angular, SpringBoot) |

## Si se quiere acercar

Por orden de impacto visual:

1. Negro puro `#000` en oscuro.
2. Quitar el blur y la sombra del header.
3. Quitar el degradado de la foto.
4. Pasar los tokens a variables CSS.
5. Space Grotesk como fuente de cuerpo.
6. Revisar los componentes no comparados.
