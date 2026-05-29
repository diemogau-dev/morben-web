# Morben — Sitio web

Contexto permanente del proyecto. Este archivo se lee automáticamente al inicio
de cada sesión. Mantenerlo actualizado a medida que evoluciona Morben y el sitio.

## Contexto estratégico (leer siempre)

El contexto completo de la empresa (tesis, moat, modelo de negocio, verticales,
métricas, reglas de comunicación, GTM) vive en
**`morben-package/07-contexto-estrategico.md`**. Leerlo al inicio de cada sesión
para entender Morben antes de tocar copy o estrategia. Mantenerlo actualizado con
cada conversación estratégica que tengamos.

## Qué es Morben

- **Operational AI Company** con base en Asunción, Paraguay 🇵🇾.
- Construimos operación nueva con IA sobre los sistemas que las empresas
  paraguayas ya tienen. "En semanas, no en años."
- Público objetivo: dueños y gerentes de empresas medianas paraguayas.
- Este repo es el **sitio web de marketing** (no el producto).

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS (tokens propios: `carbon`, `surface`, `offwhite`, `muted`, `hint`,
  `orange`, `border`, etc. en `tailwind.config.ts`)
- framer-motion (animaciones, ver `components/motion/Reveal.tsx`)
- react-hook-form + zod (formularios)
- Deploy en Vercel (`@vercel/analytics`)

## Estructura

- `app/` — rutas (App Router). Páginas: home, `casos`, `industrias`, `equipo`,
  `blog`, `sobre-nosotros`, `contacto`, `newsletter`, `agendar`.
- `components/sections/` — secciones de página (Hero, ClosingCTA, etc.)
- `components/ui/` — primitivas (Button, Eyebrow, SectionHeading)
- `lib/site.ts` — **fuente única** de datos del sitio: contacto, redes, nav, CTAs.
- `lib/content/` — contenido (casos, industrias, equipo, posts).
- `morben-package/` — guía de marca, copy de referencia y design system (Markdown).
- `public/` — imágenes, logos, PDFs.

## Convenciones

- **Copy en español rioplatense/paraguayo (voseo)**: "tenés", "agendá", "sentate".
  Tono directo, anti-humo, sin promesas vacías. Ver `morben-package/` para la voz.
- CTA principal: **"Agendar diagnóstico"** → ruta interna `/agendar`.
- Datos de contacto y redes SIEMPRE desde `lib/site.ts`, nunca hardcodeados.
- Antes de dar por terminada una tarea: `npm run build` debe pasar.

## Contacto y redes (en `lib/site.ts`)

- Email: `hola@morben.com.py`
- WhatsApp: +595 981 625 546
- Calendly: https://calendly.com/diemogau/morben
- LinkedIn: https://www.linkedin.com/company/morben-ia
- Instagram: https://www.instagram.com/morbenlab/ (`@morbenlab`)
- X/Twitter: https://x.com/morbenlab (`@morbenlab`)

## Estado del Lead Magnet (importante)

- El lead magnet "**Diagnóstico de Madurez Operativa**" (página `/diagnostico`,
  su API, el form `DiagnosticoForm` y el cuadro en el cierre del home) fue
  **ocultado** para relanzarlo tras pulir el PDF.
- El PDF sigue en `public/diagnostico-madurez-operativa.pdf` pero no está enlazado.
- Para restaurarlo, recuperar esos archivos del historial git (estaban en el
  commit anterior a "Ocultar lead magnet Diagnóstico...").
- Hoy el cierre del home (`ClosingCTA.tsx`) muestra **solo el Newsletter**.

## Git / Deploy — REGLA CLAVE

**`main` es la única fuente de verdad y debe reflejar SIEMPRE la última versión en
producción.** Todo cambio aprobado se mergea a `main`. Cada sesión nueva arranca
clonando el repo y partiendo de `main`, así que si `main` está desactualizado, la
sesión "no ve" el sitio real.

- Trabajar en una branch de feature, abrir PR, y mergear a `main` al aprobar.
- No dejar trabajo importante viviendo solo en branches de feature sin mergear.
- Nota histórica: hubo un período donde producción vivía en una branch
  (`claude/wonderful-hawking-zGpiJ`) sin mergear a `main`; eso ya se corrige
  manteniendo esta regla.
