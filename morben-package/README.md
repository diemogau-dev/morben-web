# PAQUETE MORBEN LANDING — README

## QUÉ HAY EN ESTE PAQUETE

```
morben-package/
├── README.md                      ← este archivo (instrucciones para Diego)
├── 00-PROMPT-MAESTRO.md          ← prompt principal para Claude Code
├── 01-home-copy.md               ← copy completo del homepage
├── 02-about-copy.md              ← copy /sobre-nosotros (manifesto)
├── 03-team-copy.md               ← copy /equipo (4 founders)
├── 04-cases-copy.md              ← copy de los 3 casos
├── 05-industries-copy.md         ← copy /industrias (7 rubros)
├── 06-misc-copy.md               ← footer, header, micro-copy, 404
├── Morben_Brand_Kit.html         ← brand kit oficial (SVG del isótopo dentro)
├── logo-preview.png              ← preview de cómo se ven los logos sobre fondo carbón
└── assets/
    ├── team/                     ← 4 fotos B&N procesadas (1200x1500, mismo tratamiento)
    │   ├── diego-morales.jpg
    │   ├── nestor-benitez.jpg
    │   ├── antonio-riera.jpg
    │   └── emilio-morales.jpg
    └── logos/                    ← 9 logos sello (blanco sobre transparente)
        ├── bristol.png
        ├── codas-broker.png
        ├── codas-vuyk.png
        ├── incentiva.png
        ├── loops.png
        ├── morado.png
        ├── pulsak.png
        ├── salon-market.png
        └── vagos.png
```

---

## CÓMO USAR ESTO CON CLAUDE CODE

### Paso 1 — Setup inicial (5 minutos)

Abrí Claude Code en la carpeta donde querés crear el proyecto. Pegale exactamente este prompt:

```
Voy a construir la landing page de Morben (morben.com.py). Te paso un paquete con prompt maestro, copy de cada página, brand kit y assets.

Empezá leyendo en orden:
1. /Users/[tu-user]/morben-package/00-PROMPT-MAESTRO.md
2. /Users/[tu-user]/morben-package/Morben_Brand_Kit.html
3. Los 6 archivos de copy (01-06).

Después devolveme:
- Tu plan de construcción en pasos concretos.
- Cualquier pregunta crítica antes de empezar.
- Confirmá que tenés todo lo necesario para arrancar.

A partir de ahí avanzamos sección por sección. NO empieces a programar hasta que confirme el plan.
```

### Paso 2 — Aprobar el plan

Claude Code te va a devolver un plan. Revisalo. Si te suena bien, decile: "Adelante. Empezá por el setup del proyecto y el design system. Avisame cuando esté listo para revisar."

### Paso 3 — Build iterativo

Vas a iterar bloque por bloque. Después de cada bloque importante:
1. Commit
2. Deploy preview en Vercel (Claude Code lo hace solo si configuraste Vercel CLI)
3. Revisás el preview
4. Pasás al siguiente

### Paso 4 — Lanzamiento

Cuando todas las páginas estén listas:
1. Confirmá dominio morben.com.py apuntado a Vercel.
2. Configurá Vercel Analytics.
3. Configurá Calendly y reemplazá placeholders.
4. Confirmá email hola@morben.com.py funcionando.
5. Probá en mobile + desktop + Safari + Chrome + Firefox.
6. Lanzá.

---

## QUÉ FALTA QUE LO MANEJES VOS

Estas cosas NO las decidió este paquete, las tenés que cerrar vos antes o durante el desarrollo:

1. **URL de Calendly** — configurar con preguntas de filtro (rubro, empleados, facturación). Pasarle la URL a Claude Code para reemplazar los `TODO`.
2. **Email hola@morben.com.py** — configurar en tu provider de mail (Google Workspace, Cloudflare Email Routing, etc).
3. **WhatsApp Business público** — confirmar número y formato `wa.me/595XXXXXXXXX`.
4. **Links sociales** — Instagram, LinkedIn de la empresa (no de los founders).
5. **Logo de Snicks** — pasamelo cuando lo tengas, lo proceso al mismo formato que los otros.
6. **Logos faltantes** — si querés sumar Mercado Móvil, Inmobiliaria del Este u otros al sello, pasamelos en SVG o alta resolución sobre fondo blanco/negro y los proceso.
7. **Política de Privacidad y Términos** — páginas legales mínimas. Cuando estés cerca de lanzar las redactamos.

---

## REGLAS DE ORO PARA CLAUDE CODE

Si en algún momento Claude Code te propone algo que viola estas reglas, frená y corregilo:

1. **Tipografía**: SOLO Poppins + Inter + JetBrains Mono. Nunca Roboto, Arial, system, ni "default sans".
2. **Color naranja `#FF5722`**: SOLO como acento. Jamás un bloque entero naranja excepto el botón CTA principal.
3. **Sin gradientes**, sin partículas, sin glassmorphism, sin neumorphism.
4. **Sin íconos genéricos** en hero o secciones principales. Si necesitás un ícono, primero pensá si la palabra alcanza.
5. **Sin emojis** salvo la bandera 🇵🇾 del footer.
6. **Sin "transformación"**, sin "innovación", sin "vanguardia", sin "revolucionar". Estas palabras están prohibidas en todo el copy.
7. **El isótopo es SIEMPRE 18% de la altura del wordmark**, alineado a la base. Está en el brand kit HTML como referencia.
8. **Fotos del equipo SIN filtros adicionales**. Las que están en `/team/` ya están procesadas.
9. **Plazo de Morben**: nunca prometer "demos gratis". El CTA único es "Agendar reunión de diagnóstico".
10. **Mobile-first siempre**. El 60% del tráfico va a ser mobile.

---

## DESPUÉS DEL LANZAMIENTO

Para iterar contenido (nuevos casos, posts de blog, ajustes de copy), seguimos en este mismo chat de Claude. El flujo es:

1. Vos me pasás la data del caso/post nuevo con la plantilla que ya está en mi memoria.
2. Yo te devuelvo el copy formateado.
3. Vos lo metés a la web con Claude Code en sesiones cortas (15-30 min por update).

Cuando esté lista la web te paso también:
- Plantilla para mandar el primer caso a publicar.
- Calendario editorial inicial del newsletter (8 ediciones).
- Estructura del primer post del blog.
- Plan de SEO técnico para los primeros 30 días.

---

## SI ALGO NO TE CIERRA

Si al ver el preview algo no funciona visualmente o el copy te suena raro:
1. Tomá screenshot.
2. Pasamelo en este chat con tu observación.
3. Iteramos copy o decisiones de diseño.
4. Vos ejecutás el cambio en Claude Code.

Este chat es la fuente de verdad de estrategia y copy. Claude Code es la herramienta de ejecución. Los dos trabajan juntos.

---

Listo. Andá a Claude Code y empezá. Avisame cuando tengas el primer preview en Vercel para revisarlo.
