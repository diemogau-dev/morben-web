# 01 — COPY HOMEPAGE

## META

- **Title**: Morben — Automatizamos operaciones sobre los sistemas que ya tenés
- **Description**: Construimos automatizaciones con IA dentro de tu empresa, sobre lo que ya funciona. En semanas, no en años. Resultados medidos antes de cobrar el primer guaraní.
- **OG image**: `/og/home.png` (TODO: generar 1200x630 con wordmark + tagline)

---

## BLOQUE 01 — HERO

**Layout**: Full viewport height (mín 700px). Texto centrado o alineado izquierda con espacio asimétrico a la derecha (estilo Unframe). Sin imagen.

**Eyebrow (pequeño, naranja, uppercase)**:
```
SISTEMAS IA Y AUTOMATIZACIONES
```

**Headline (display, máximo tamaño)**:
```
Automatizamos tus operaciones sobre los sistemas que ya tenés.
```

**Subtitle (body L, muted)**:
```
En semanas, con IA aplicada donde realmente duele. Sin reemplazar nada de lo que ya funciona.
```

**CTA principal (botón naranja sólido)**:
```
Agendar reunión de diagnóstico  →
```
Link a `/contacto` (o directamente a Calendly cuando esté listo).

**CTA secundario (link discreto bajo el botón)**:
```
Suscribite al newsletter
```
Link a `/newsletter`.

---

## BLOQUE 02 — LOGO MARQUEE

**Header (eyebrow + título pequeño)**:
```
[EYEBROW] CONFIANZA
Empresas con las que ya construimos.
```

**Contenido**: 9 logos en escala blanca sobre carbón, en banda horizontal con auto-scroll suave infinito (estilo Stripe/Linear). Altura uniforme. Spacing generoso entre logos. Sin bordes, sin cards, solo logos flotando sobre el bg.

Archivos en `/public/logos/`:
- bristol.png
- codas-broker.png
- codas-vuyk.png
- incentiva.png
- loops.png
- morado.png
- pulsak.png
- salon-market.png
- vagos.png

**Animación**: Marquee horizontal infinito a velocidad lenta (~30s loop). Pausa en hover. Fade en bordes laterales (gradient mask hacia transparente).

---

## BLOQUE 03 — MANIFESTO EXCERPT

**Layout**: Una columna centrada, max-width 720px. Texto declarativo grande.

**Eyebrow**:
```
POR QUÉ MORBEN
```

**Texto (display M, blanco)**:
```
Construiste algo que funciona.

Una empresa que crece. Un equipo que empuja. Números que cierran.

Pero adentro, el caos está cerca. Los procesos críticos viven en la cabeza de tres personas. Si una falta, algo se atrasa. Los reportes salen los domingos a la noche.

El problema no es que falte tecnología. Tecnología sobra. Lo que falta es alguien que se siente con vos, entienda cómo funciona tu empresa de verdad, y construya automatizaciones donde realmente duele.
```

**Link**:
```
Leer el manifiesto completo  →
```
Link a `/sobre-nosotros`.

---

## BLOQUE 04 — WHAT WE DO (3 DOLORES TRANSVERSALES)

**Eyebrow**:
```
QUÉ HACEMOS
```

**Section heading (Display L)**:
```
Tres frentes donde tu empresa pierde plata sin verla.
```

**Subtitle (body L)**:
```
No vendemos paquetes cerrados. Diagnosticamos primero, construimos después. Pero la mayoría de los problemas operativos caen en alguno de estos tres frentes.
```

**Layout**: 3 columnas en desktop, stack vertical en mobile. Cada columna es un bloque, separado por aire (no bordes).

### Columna 1 — Operación de la empresa

**Number eyebrow**:
```
01
```

**Título (Display M)**:
```
Operación de la empresa
```

**Body (body)**:
```
Tu equipo pierde horas todos los días buscando información que vive en archivos dispersos, planillas, correos viejos y la cabeza de alguien.

Construimos agentes y sistemas RAG que centralizan el conocimiento de tu empresa y lo entregan al equipo en segundos. La normativa, los procesos, los datos de clientes, la historia de cada operación — todo accesible desde donde tu equipo ya trabaja.
```

**Footnote (body S, muted)**:
```
Aplicable a oficiales de crédito, asesores comerciales, atención al cliente, contadores, equipo legal interno, agentes de seguros.
```

### Columna 2 — Gestión de clientes y ventas

**Number eyebrow**:
```
02
```

**Título**:
```
Gestión de clientes y ventas
```

**Body**:
```
Estás contactando a toda tu base por igual. A los que no van a comprar y a los que sí. A los que van a pagar y a los que no. El costo lo pagás siempre — el resultado, no.

Construimos sistemas que priorizan, segmentan y actúan. Quién contactar primero, qué decirle, por qué canal, en qué momento. Cobranza inteligente, recuperación de clientes dormidos, follow-up que no se cae.
```

**Footnote**:
```
Aplicable a cooperativas, financieras, retail con cuenta corriente, importadoras, aseguradoras, empresas de servicio recurrente.
```

### Columna 3 — Procesamiento de datos y documentos

**Number eyebrow**:
```
03
```

**Título**:
```
Procesamiento de datos y documentos
```

**Body**:
```
Pilas de PDFs. Carpetas crediticias. Pólizas. Facturas. Expedientes. Tu equipo dedica horas a leer, copiar, validar y trasladar información de un lado a otro.

Construimos sistemas que extraen, estructuran y analizan documentos automáticamente. Scoring asistido, detección de red flags, redacción de informes. Lo que tomaba horas pasa a minutos — y los datos quedan estructurados para tomar decisiones.
```

**Footnote**:
```
Aplicable a análisis de carpetas crediticias, evaluación de pólizas, due diligence jurídica, procesamiento de facturas, gestión de expedientes.
```

---

## BLOQUE 05 — CASES PREVIEW

**Eyebrow**:
```
CASOS
```

**Section heading**:
```
Empresas que ya están operando distinto.
```

**Subtitle**:
```
Casos reales, con números reales. Sin maquillar, sin promesas.
```

**Layout**: 3 cards en grid. Cada card abre la página completa del caso.

### Card 1 — Incentiva
```
[Logo Incentiva (versión gris/blanca)]
RRHH · Reclutamiento y selección

Cómo Incentiva redujo más de 1.265 horas mensuales de búsqueda manual.

Resultado destacado: 80-90% reducción en tiempo operativo de búsqueda.

[Link] Leer caso completo →
```
Link: `/casos/incentiva`

### Card 2 — Salon Market
```
[Logo Salon Market]
Retail · Importación de cosméticos

Cómo Salon Market convirtió clientes dormidos en ventas recurrentes otra vez.

Resultado destacado: +15-20% incremento en ventas / -60-80% costo de WhatsApp.

[Link] Leer caso completo →
```
Link: `/casos/salon-market`

### Card 3 — Snicks
```
[Logo Snicks o placeholder]
Servicios · Customer experience automatizado

Cómo Snicks atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.

Resultado destacado: +70% conversaciones resueltas sin intervención humana / +40 hs semanales liberadas.

[Link] Leer caso completo →
```
Link: `/casos/snicks`

---

## BLOQUE 06 — HOW WE WORK (4 FASES)

**Eyebrow**:
```
CÓMO TRABAJAMOS
```

**Section heading**:
```
Cuatro fases. Plazo cerrado. Métrica acordada antes de empezar.
```

**Layout**: Timeline vertical o grid 2x2 con números grandes (estilo Linear changelog). Cada fase con número grande en naranja + título + descripción.

### Fase 01 — Workshop
```
01 / Workshop

Empezamos por entender. Nos sentamos contigo y tu equipo. Mapeamos procesos, datos, sistemas y cuellos de botella reales. Salimos del workshop con un plan concreto: qué automatizar primero, las herramientas a utilizar, qué impacto esperar, en qué orden ejecutar.
```

### Fase 02 — Desarrollo
```
02 / Desarrollo

Construimos lo acordado en sprints de una a dos semanas, con demos en vivo a tu equipo. Si algo cambia, lo ajustamos en el sprint siguiente — no en una nueva propuesta de tres meses. Velocidad sobre todo.
```

### Fase 03 — Implementación
```
03 / Implementación

Subimos el sistema a producción controlado por tu equipo y ya siendo parte de tu operación. Medimos al detalle lo que acordamos como métrica de éxito en el workshop. Ajustamos lo que haga falta. Cuando una automatización está impecable, pasamos a la siguiente.
```

### Fase 04 — Optimización
```
04 / Optimización

A partir del sistema operando entramos en modo optimización continua. Monitoreamos, mejoramos, agregamos casos de uso nuevos, nuevas LLMs, herramientas. Tu sistema deja de ser un proyecto y pasa a ser parte del proceso operativo de la empresa y la cultura.
```

---

## BLOQUE 07 — INTEGRATIONS (SIN REEMPLAZOS)

**Eyebrow**:
```
INTEGRACIONES
```

**Section heading**:
```
Sin reemplazos. Sobre los sistemas que ya tenés.
```

**Body**:
```
No te vendemos un software más. Construimos arriba de lo que ya pagaste y ya funciona — tu ERP, tu CRM, tu WhatsApp, tus planillas, tu canal de cobros. Conectamos con APIs cuando existen y trabajamos sobre los datos cuando no.
```

**Sub-bloque visual**: lista de logos/iconos genéricos de tipos de sistemas con los que integramos. Estilo lista declarativa, no carrusel.

Texto categorías (sin logos, solo nombres en formato grid):
```
ERPs locales · WhatsApp Business API · Bancard · DNIT · IPS · SET · SIFEN
Cores bancarios · Sistemas contables · Drive · Notion · Email · Calendars
PDFs · Excel · Bases SQL · APIs REST y GraphQL
```

(Cada uno como chip/tag sutil, todos del mismo tamaño, blanco/gris sobre carbon)

---

## BLOQUE 08 — INDUSTRIES PREVIEW

**Eyebrow**:
```
INDUSTRIAS
```

**Section heading**:
```
Trabajamos con empresas de estos rubros.
```

**Layout**: Grid de 7 tiles. Cada uno con nombre del rubro + dolor específico en una línea. Hover sutil (color del texto pasa de muted a offwhite).

### Tile 1 — Servicios Financieros
```
01 / Servicios Financieros
Cooperativas, financieras, casas de crédito, casas de cambio. Mora alta, oficiales sin info en tiempo real, carpetas que tardan días.

[Link] Ver más →
```
Link: `/industrias/servicios-financieros`

### Tile 2 — Aseguradoras
```
02 / Aseguradoras
Emisión lenta de pólizas, gestión manual de siniestros, conversion drop por demora.

[Link] Ver más →
```
Link: `/industrias/aseguradoras`

### Tile 3 — Servicios Profesionales
```
03 / Servicios Profesionales
Estudios contables, jurídicos, gestoras. Tiempo perdido en carga manual y búsqueda de info en expedientes.

[Link] Ver más →
```
Link: `/industrias/servicios-profesionales`

### Tile 4 — Agronegocios y Ganaderas
```
04 / Agronegocios y Ganaderas
Reportes manuales, gestión de cosecha y hacienda con Excel, falta de visibilidad operativa en tiempo real.

[Link] Ver más →
```
Link: `/industrias/agronegocios`

### Tile 5 — Bienes Raíces
```
05 / Bienes Raíces
Gestión manual de leads, follow-up que se cae, documentación dispersa, conversión baja por velocidad.

[Link] Ver más →
```
Link: `/industrias/bienes-raices`

### Tile 6 — Retail e Importadoras
```
06 / Retail e Importadoras
Inventario sin trazabilidad real, gestión de cuenta corriente manual, atención al cliente saturada.

[Link] Ver más →
```
Link: `/industrias/retail`

### Tile 7 — Clínicas y Salud
```
07 / Clínicas y Salud
Agendamiento manual, ausentismo no gestionado, historia clínica dispersa, cobranzas a obras sociales.

[Link] Ver más →
```
Link: `/industrias/salud`

---

## BLOQUE 09 — TEAM PREVIEW

**Eyebrow**:
```
EQUIPO
```

**Section heading**:
```
Cuatro fundadores. Una sola mesa.
```

**Body**:
```
Operadores con más de cuarenta años combinados construyendo, vendiendo y operando empresas. Sin equipo junior intermediando. El que te vende es el que ejecuta.
```

**Layout**: Una foto destacada (Diego, foto principal) a la izquierda + lista de los 4 nombres y roles a la derecha. CTA debajo.

**Lista de equipo (preview)**:
```
Diego Morales — Director y Gerente General
Néstor Benítez — Director de Tecnología
Antonio Riera — Ingeniero de Datos
Emilio Morales — Director de Diseño
```

**CTA**:
```
Conocer al equipo  →
```
Link a `/equipo`.

---

## BLOQUE 10 — CLOSING CTA + NEWSLETTER

**Layout**: Sección final, full-width, fondo `bg-surface` o ligeramente diferente al resto. Centrado.

**Display L**:
```
¿Querés ser el que toma la decisión correcta antes que el resto?
```

**Body**:
```
Sentate a hablar con nosotros. Cuarenta y cinco minutos. Sin venderte nada. Solo para entender si tu empresa está lista — y si nosotros somos los indicados.
```

**CTA principal**:
```
Agendar reunión de diagnóstico  →
```

**Separator** (espacio + línea sutil naranja corta de 60px centrada)

**Newsletter (sub-bloque)**:

**Eyebrow**:
```
NEWSLETTER
```

**Título (Display M)**:
```
Cómo se hace, contado por los que lo hacen.
```

**Body**:
```
Una vez por quincena. Un caso real, un framework operativo, cero humo. Pensado para dueños y gerentes de empresas medianas.
```

**Form inline**:
```
[Input email placeholder: "tu@empresa.com.py"]
[Botón naranja: "Suscribirme"]
```

**Micro-copy debajo del form**:
```
Sin spam. Te podés dar de baja cuando quieras.
```
