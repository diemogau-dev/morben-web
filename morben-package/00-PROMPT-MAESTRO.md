# PROMPT MAESTRO PARA CLAUDE CODE — MORBEN LANDING

## CONTEXTO

Sos un desarrollador senior frontend especialista en landing pages enterprise B2B premium. Vas a construir la web pública de **Morben**, una empresa paraguaya que automatiza operaciones empresariales con IA sobre los sistemas que el cliente ya tiene.

El cliente es **Diego Morales**, CEO. La marca tiene que transmitir: empresa seria, operadora real, premium, sobria, confiada. Cero entusiasmo IA forzado. Cero estética futurista cliché.

**Referencia visual principal**: https://www.unframe.ai
- Minimalismo enterprise.
- Tipografía como protagonista.
- Sin ilustraciones decorativas, sin íconos genéricos.
- Espacios generosos, layout asimétrico cuando aporta.
- Animaciones sutiles (scroll-triggered fade-in, stagger reveals).
- Densidad declarativa: cada bloque dice una cosa, sin adverbios.

**Referencias secundarias**: Vercel, Linear, Stripe. Minimalismo enterprise AI-native.

**NO uses bajo ninguna circunstancia**:
- Gradientes neón violeta-azul.
- Ilustraciones de cerebro / circuitos / robots.
- Stock photos.
- Animaciones de partículas o blobs.
- Inter como única tipografía (es default AI).
- Espaciado apretado.
- Más de un acento de color.
- Border radius excesivo (>16px en cards).
- Bordes y separadores marcados (todo se separa por espacio, no por líneas).

---

## STACK TÉCNICO

- **Framework**: Next.js 14+ (App Router)
- **Estilos**: Tailwind CSS 3.4+
- **Tipografía**: Poppins (display) + Inter (body) + JetBrains Mono (meta/labels) vía `next/font/google`
- **Iconografía**: Lucide React (solo cuando estrictamente necesario — preferí no usar íconos)
- **Animaciones**: Framer Motion (`motion`) para scroll-triggered reveals
- **Forms**: React Hook Form + Zod (newsletter, contacto)
- **Deploy**: Vercel
- **Analytics**: `@vercel/analytics`
- **SEO**: Metadata API de Next.js

**Restricciones**:
- No localStorage / sessionStorage en componentes client.
- Imágenes via `next/image`.
- Mobile-first responsive (breakpoints sm: 640, md: 768, lg: 1024, xl: 1280).
- Lighthouse Performance >= 90.
- Accesibilidad: contraste AA mínimo, navegación por teclado, alt texts.

---

## DESIGN SYSTEM (DEFINITIVO)

### Paleta

```css
/* tailwind.config.ts -> theme.extend.colors */
colors: {
  carbon:    '#0E0E10',  // bg principal
  surface:   '#1C1C1E',  // cards, secciones secundarias
  card:      '#282828',  // cards más cercanas al lector
  border:    '#2A2A2D',  // separadores muy sutiles
  offwhite:  '#F5F5F5',  // texto principal
  muted:     '#A0A0A4',  // texto secundario
  hint:      '#5B5B5B',  // micro-copy, labels
  orange: {
    DEFAULT: '#FF5722',  // acento principal
    light:   '#FF7E55',  // hover
    deep:    '#EE3900',  // énfasis
  }
}
```

**Regla de oro**: el naranja `#FF5722` aparece SOLO en: acento de logo, eyebrow labels uppercase, links importantes, focus rings, y un highlight cada 2-3 bloques (jamás como bloque entero). El resto vive en blanco/gris sobre carbón. Esto es lo que hace que la marca se vea "enterprise" y no "agencia".

### Tipografía

```ts
// app/fonts.ts
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})
```

```css
/* tailwind.config.ts */
fontFamily: {
  display: ['var(--font-poppins)', 'sans-serif'],
  sans: ['var(--font-inter)', 'sans-serif'],
  mono: ['var(--font-mono)', 'monospace'],
}
```

**Escala tipográfica**:

| Token | Class Tailwind | Uso |
|-------|---|---|
| Hero display | `font-display font-semibold text-[clamp(48px,7vw,96px)] leading-[1.02] tracking-[-0.03em]` | Hero h1 |
| Display L | `font-display font-semibold text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.02em]` | h2 secciones grandes |
| Display M | `font-display font-semibold text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em]` | h3 |
| Body L | `font-sans text-[18px] md:text-[20px] leading-[1.55] text-muted` | Subhead, lead |
| Body | `font-sans text-[16px] md:text-[17px] leading-[1.65] text-muted` | Párrafos |
| Body S | `font-sans text-[14px] leading-[1.6] text-muted` | Captions, meta |
| Eyebrow | `font-mono text-[11px] uppercase tracking-[0.16em] text-orange` | Labels de sección |

**Tracking del wordmark "morben"**: `tracking-[-0.045em]` (del brand kit).

### Spacing & Layout

- **Container**: `max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16`
- **Section padding vertical**: `py-24 md:py-32 lg:py-40` (generoso, estilo Unframe)
- **Gap entre bloques internos**: `gap-12 md:gap-16 lg:gap-20`
- **Border radius**: `rounded-xl` (12px) máximo, nada más redondo.
- **Cards**: `bg-surface border border-border/40 rounded-xl p-8 md:p-10`

### Componente Logo (lockup oficial)

```tsx
// components/brand/Logo.tsx
// Lockup wordmark + isótopo. Isótopo = 18% altura wordmark, baseline-aligned.
// Variantes: 'default' (blanco+naranja), 'mono' (todo blanco), 'orange' (sobre naranja)

interface LogoProps {
  size?: number  // px del wordmark
  variant?: 'default' | 'mono' | 'orange'
  className?: string
}

// El isótopo es un SVG inline: círculo + dos elipses rotadas +/- 45° + punto central.
// Ver Morben_Brand_Kit.html para el SVG exacto del isótopo.
```

### Animaciones (Framer Motion)

**Patrón único**: fade + translate-y al entrar viewport. Una vez. Sin loops.

```tsx
// components/motion/Reveal.tsx
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}
```

Stagger en grids: cada item con `delay: index * 0.08`.

**Hero**: animación de entrada al cargar (no scroll-triggered): wordmark fade-in primero, headline siguiente (0.2s delay), subtitle (0.4s delay), CTA (0.6s delay).

**NUNCA** uses: parallax, scroll-jacking, animaciones que tarden más de 1s, "wow effects", letters revealing uno por uno.

---

## ESTRUCTURA DE CARPETAS

```
morben-web/
├── app/
│   ├── layout.tsx              # RootLayout con fonts + Analytics
│   ├── page.tsx                # Home
│   ├── globals.css             # Tailwind base + variables CSS
│   ├── sobre-nosotros/
│   │   └── page.tsx            # Manifesto largo
│   ├── equipo/
│   │   └── page.tsx            # 4 founders
│   ├── casos/
│   │   ├── page.tsx            # Listado de los 3 casos
│   │   ├── incentiva/page.tsx
│   │   ├── salon-market/page.tsx
│   │   └── snicks/page.tsx
│   ├── industrias/
│   │   ├── page.tsx            # 7 rubros tiles
│   │   └── [slug]/page.tsx     # Plantilla mínima por rubro
│   ├── blog/
│   │   ├── page.tsx            # Listado vacío con CTA newsletter
│   │   └── [slug]/page.tsx     # Plantilla individual
│   ├── newsletter/
│   │   └── page.tsx            # Landing suscripción + archivo
│   └── contacto/
│       └── page.tsx            # Form + Calendly embed
├── components/
│   ├── brand/
│   │   ├── Logo.tsx            # Lockup oficial
│   │   └── Isotype.tsx         # Solo el SVG del isótopo
│   ├── layout/
│   │   ├── Header.tsx          # Nav sticky con bg blur
│   │   ├── Footer.tsx          # Footer con newsletter inline
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LogoMarquee.tsx     # Carrusel infinito
│   │   ├── ManifestoExcerpt.tsx
│   │   ├── WhatWeDo.tsx        # 3 dolores transversales
│   │   ├── CasesPreview.tsx
│   │   ├── HowWeWork.tsx       # 4 fases
│   │   ├── Integrations.tsx    # "Sin reemplazos"
│   │   ├── IndustriesPreview.tsx
│   │   ├── TeamPreview.tsx
│   │   └── ClosingCTA.tsx
│   ├── team/
│   │   ├── FounderCard.tsx     # Layout alternado izq/der
│   │   └── teamData.ts
│   ├── cases/
│   │   ├── CaseHero.tsx
│   │   ├── CaseSection.tsx
│   │   └── CaseFooterCTA.tsx
│   ├── motion/
│   │   └── Reveal.tsx
│   └── forms/
│       └── NewsletterForm.tsx
├── lib/
│   ├── content/
│   │   ├── cases.ts            # Data de los 3 casos
│   │   ├── industries.ts       # 7 rubros con copy
│   │   └── team.ts             # Bios + paths
│   └── utils.ts
├── public/
│   ├── logos/                  # Logos sello (9 archivos PNG transparentes)
│   ├── team/                   # Fotos founders (4 archivos JPG)
│   └── og/                     # Open Graph images
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## ARQUITECTURA DEL HOMEPAGE (orden de bloques)

1. **Hero** — pantalla completa o casi. Headline + subtitle + CTA único.
2. **Logo marquee** — banda con logos sello. Encabezado: "Empresas con las que ya construimos."
3. **Manifesto excerpt** — 3-4 frases del manifesto + CTA link a /sobre-nosotros.
4. **What We Do** — 3 dolores transversales (Operación de la empresa / Gestión de clientes y ventas / Procesamiento de datos y documentos).
5. **Cases preview** — los 3 casos como cards grandes con resultado destacado. Link a página individual.
6. **How We Work** — 4 fases en formato vertical timeline o numeración grande estilo Unframe.
7. **Integrations** — "Sin reemplazos. Sobre lo que ya tenés." Bloque con concept de integración con sistemas locales.
8. **Industries preview** — 7 rubros como tiles con hover sutil.
9. **Team preview** — Foto grande de uno + nombres de los 4 + CTA a /equipo.
10. **Closing CTA** — frase fuerte + botón principal + newsletter inline.

---

## CRITERIOS DE CALIDAD

Antes de dar por terminada cualquier sección, verificá:
- [ ] Renderiza idéntico en Chrome / Safari / Firefox.
- [ ] Responsive: 375px, 768px, 1024px, 1440px sin overflow horizontal.
- [ ] Lighthouse Performance >= 90 mobile.
- [ ] Sin warnings de Next.js Image (width/height definidos).
- [ ] Animaciones respetan `prefers-reduced-motion`.
- [ ] Focus visible en todos los elementos interactivos (ring naranja).
- [ ] Texto seleccionable con color de selección naranja: `::selection { background: #FF5722; color: #fff; }`

---

## INSTRUCCIONES DE TRABAJO

Vas a recibir, en archivos separados de este mismo paquete:

1. `01-home-copy.md` — Todo el copy del homepage.
2. `02-about-copy.md` — Manifesto completo /sobre-nosotros.
3. `03-team-copy.md` — Bios de los 4 founders.
4. `04-cases-copy.md` — Los 3 casos completos.
5. `05-industries-copy.md` — 7 rubros con copy.
6. `06-misc-copy.md` — Footer, micro-copy, 404, meta.
7. `assets/` — Fotos del equipo (4) y logos sello (9), ya procesados.
8. `Morben_Brand_Kit.html` — Brand kit de referencia con el SVG exacto del isótopo.

**Orden de construcción recomendado**:

1. Setup proyecto Next.js + Tailwind + fonts + analytics.
2. `tailwind.config.ts` con paleta y typography.
3. `globals.css` con base styles + selección color.
4. Componente `Logo` (lockup con SVG del isótopo extraído del brand kit).
5. `Header` + `Footer` (layout shell).
6. Home — bloque por bloque, en el orden listado arriba.
7. `/sobre-nosotros`.
8. `/equipo`.
9. Los 3 casos en `/casos/[slug]`.
10. `/industrias` + las 7 sub-páginas plantilla.
11. `/blog` y `/newsletter` como esqueleto vacío.
12. `/contacto`.

**Después de cada página**: hacer commit + deploy preview en Vercel. Diego va a iterar en producción.

---

## INFORMACIÓN DE CONTACTO Y META

- Dominio: morben.com.py
- Email contacto público: hola@morben.com.py (placeholder hasta confirmación)
- WhatsApp: TBD (Diego confirma)
- Calendly: TBD (Diego configura y pasa URL)
- Instagram: @morben.ai (TBD)
- LinkedIn: linkedin.com/company/morben (TBD)

Mientras estos no estén confirmados, dejá placeholders con TODO comment para que sean fáciles de encontrar.

---

## LISTO PARA EMPEZAR

Cuando termines de leer este prompt y los 6 archivos de copy, devolveme:
1. Tu plan de construcción detallado en pasos.
2. Cualquier pregunta crítica que tengas antes de empezar.
3. Tu primera entrega (setup del proyecto + design system + Header/Footer).

A partir de ahí seguimos sección por sección.
