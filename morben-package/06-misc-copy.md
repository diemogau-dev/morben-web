# 06 — COPY MISCELÁNEO

## HEADER (NAVEGACIÓN)

**Layout**: Sticky top, fondo `bg-carbon/80` con `backdrop-blur-md` cuando scroll > 20px. Padding vertical sutil. Logo a la izquierda, nav a la derecha, CTA en el extremo.

**Logo**: Lockup Morben oficial (wordmark + isótopo) tamaño ~36px de altura.

**Nav links** (orden):
```
Casos       → /casos
Industrias  → /industrias
Equipo      → /equipo
Blog        → /blog
```

**CTA en header (más sutil que el principal)**:
```
Agendar reunión  →
```
Botón con `border border-orange/40` (outline) en vez de fill.

**Mobile**: hamburguesa que abre menú full-screen con los links + CTA grande abajo.

---

## FOOTER

**Layout**: Fondo `bg-carbon`, padding generoso `py-20 md:py-24`. 4 columnas en desktop:

### Columna 1 — Brand
```
[Logo Morben grande]

Sistemas IA y automatizaciones que reemplazan el trabajo manual repetitivo de tu equipo. En semanas, no en años.

Asunción, Paraguay 🇵🇾
```

### Columna 2 — Navegación
```
NAVEGACIÓN

Casos
Industrias
Equipo
Sobre nosotros
Blog
Newsletter
Contacto
```

### Columna 3 — Industrias
```
INDUSTRIAS

Servicios Financieros
Aseguradoras
Servicios Profesionales
Agronegocios y Ganaderas
Bienes Raíces
Retail e Importadoras
Clínicas y Salud
```

### Columna 4 — Contacto
```
CONTACTO

hola@morben.com.py
[TODO: número WhatsApp]
[TODO: link Instagram]
[TODO: link LinkedIn]

[CTA SECUNDARIO]
Agendar reunión de diagnóstico  →
```

### Footer bottom (línea separadora muy sutil)
```
© 2026 Morben. Todos los derechos reservados.
[link a Política de Privacidad]   [link a Términos]
```

---

## /CONTACTO

### META
- **Title**: Contacto — Morben
- **Description**: Cuarenta y cinco minutos. Sin venderte nada.

### HERO

**Eyebrow**:
```
CONTACTO
```

**Headline (Display L)**:
```
Cuarenta y cinco minutos. Sin venderte nada.
```

**Subtitle**:
```
Agendá una reunión de diagnóstico para entender si tu empresa está lista — y si nosotros somos los indicados. Te vamos a hacer algunas preguntas previas para asegurarnos de que el tiempo de los dos esté bien invertido.
```

### BLOQUE CALENDLY

Embed de Calendly inline (cuando esté listo).

Placeholder hasta entonces:
```
[Iframe de Calendly aquí]

URL placeholder: https://calendly.com/morben/diagnostico-45min
```

### BLOQUE — OTROS CANALES

**Eyebrow**:
```
OTROS CANALES
```

**Sub-bloque grid 3 cols**:

```
EMAIL
hola@morben.com.py
[copia al portapapeles en hover]

WHATSAPP
[TODO: número]
[link directo wa.me]

UBICACIÓN
Asunción, Paraguay
[opcional: link a Google Maps si tenemos oficina física]
```

---

## /NEWSLETTER

### META
- **Title**: Newsletter — Morben
- **Description**: Cómo se hace, contado por los que lo hacen. Una vez por quincena.

### HERO

**Eyebrow**:
```
NEWSLETTER
```

**Headline (Display L)**:
```
Cómo se hace, contado por los que lo hacen.
```

**Subtitle**:
```
Una vez por quincena. Un caso real, un framework operativo, cero humo. Pensado para dueños y gerentes de empresas medianas que ya están cansados del ruido.
```

### FORM

Formulario centrado, max-w 480px.

**Label** (mono):
```
TU EMAIL DE TRABAJO
```

**Input**:
```
Placeholder: "tu@empresa.com.py"
```

**Botón naranja**:
```
Suscribirme  →
```

**Micro-copy bajo el form**:
```
Sin spam. Te podés dar de baja cuando quieras.
```

### BLOQUE — QUÉ VAS A RECIBIR

**Eyebrow**:
```
QUÉ ESPERAR
```

**Grid 3 columnas**:

```
01 / UN CASO REAL
Cada quincena, un cliente, un problema, un sistema construido. Con números cuando los tenemos.

02 / UN FRAMEWORK
Una forma concreta de pensar tu operación. Aplicable la misma semana que lo leés.

03 / CERO RUIDO
No vamos a contarte qué pasó con OpenAI esta semana. No hace falta.
```

### BLOQUE — ARCHIVO (cuando haya ediciones)

```
EDICIONES ANTERIORES

[Listado vacío hasta que tengamos contenido. Hasta entonces, mostrar mensaje "Pronto. La primera edición sale este mes."]
```

---

## /BLOG

### META
- **Title**: Blog — Morben
- **Description**: Casos, frameworks operativos y aprendizajes de implementar IA en empresas paraguayas.

### HERO (estado vacío)

**Eyebrow**:
```
BLOG
```

**Headline**:
```
Pronto.
```

**Body**:
```
Estamos por publicar los primeros artículos. Mientras tanto, suscribite al newsletter para recibirlos primero.
```

**CTA**:
```
Suscribirme al newsletter  →
```

(Cuando haya artículos, reemplazar por listado de cards con título, fecha, eyebrow de categoría, excerpt)

### TEMPLATE INDIVIDUAL `/blog/[slug]`

Layout artículo:
- Eyebrow con categoría + fecha
- Display L con título
- Subtitle opcional
- Body con max-w 680px, leading 1.75
- Imagen opcional sin caption
- Tabla de contenido opcional sticky lateral en desktop
- CTA final con newsletter + link a casos

---

## 404 / NOT FOUND

**Headline (Display L)**:
```
Acá no hay nada todavía.
```

**Body**:
```
La página que buscás no existe o se movió. Pero como ya estás acá, capaz te interese ver lo que sí.
```

**CTAs (botones secundarios)**:
```
Volver al inicio  →
Ver casos  →
```

---

## MICRO-COPY GENÉRICO

### Botones
- Primario: "Agendar reunión de diagnóstico"
- Secundario: "Leer caso completo", "Ver más", "Conocer al equipo"
- Newsletter: "Suscribirme"

### Estados de formulario
- Loading: "Enviando..."
- Success newsletter: "Listo. Te vamos a escribir pronto."
- Error: "Algo salió mal. Probá de nuevo en un minuto."

### Validaciones
- Email vacío: "Necesitamos tu email para suscribirte."
- Email inválido: "Ese email no parece válido. ¿Lo querés revisar?"

### Cookies / Consentimiento (si hace falta)
Como Vercel Analytics no usa cookies de tracking personal, NO mostramos banner de cookies. Si en el futuro se suma GA o Meta Pixel, agregar banner mínimo.

---

## OPEN GRAPH / SOCIAL META

### Plantilla OG
- Tamaño: 1200x630 px
- Fondo: carbon (#0E0E10)
- Logo Morben grande arriba a la izquierda
- Headline grande centrado o desplazado
- Acento naranja en el isótopo del logo

### OG por página

**Home**:
```
Morben
Automatizamos tus operaciones sobre los sistemas que ya tenés.
```

**About**:
```
Morben — Manifiesto
Por qué existe Morben.
```

**Equipo**:
```
Morben — Equipo
Cuatro fundadores. Una sola mesa.
```

**Casos (cada uno)**:
```
Morben — Caso [Cliente]
[Headline del caso]
```

---

## NOTAS PARA CLAUDE CODE

- **Footer**: usar mapas/arrays para los links, no hard-codear cada uno.
- **Header**: usar `usePathname()` para resaltar link activo (color naranja).
- **Mobile menu**: full-screen overlay, animación slide desde la derecha.
- **Toasts/notifications para forms**: usar componente simple, no librería externa.
- **TODO comments**: dejar `// TODO: confirmar X con Diego` en todos los placeholders (WhatsApp, Calendly URL, social links).
- **Accesibilidad**: aria-label en todos los links de íconos, role="navigation" en nav, skip-to-content link al inicio del body.
