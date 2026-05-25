# 05 — COPY INDUSTRIAS

## /INDUSTRIAS (Listado)

### META
- **Title**: Industrias — Morben
- **Description**: Trabajamos con empresas paraguayas de servicios financieros, aseguradoras, retail, agronegocios, bienes raíces, servicios profesionales y salud.

### HERO

**Eyebrow**:
```
INDUSTRIAS
```

**Headline (Display L)**:
```
Trabajamos con empresas de estos rubros.
```

**Subtitle**:
```
Estos son los rubros donde estamos viendo el mejor encaje entre dolor operativo, capacidad de inversión y velocidad de decisión. Si tu empresa está acá, lo más probable es que tengamos algo que decirte.
```

### GRID DE 7 RUBROS

Layout: grid responsive (3 cols desktop, 2 tablet, 1 mobile). Cada tile linkea a la sub-página.

Cada tile:
```
[Numero / Rubro en eyebrow naranja]
[Nombre del rubro en Display M]
[Una línea de dolor en body muted]
[Link "Ver más →" en hover]
```

Listado con datos:

```ts
[
  {
    slug: 'servicios-financieros',
    eyebrow: '01 / Industria',
    name: 'Servicios Financieros',
    pain: 'Cooperativas, financieras, casas de crédito, casas de cambio. Mora alta, oficiales sin info en tiempo real, carpetas que tardan días en analizarse.',
  },
  {
    slug: 'aseguradoras',
    eyebrow: '02 / Industria',
    name: 'Aseguradoras',
    pain: 'Emisión lenta de pólizas, gestión manual de siniestros, conversion drop por demora.',
  },
  {
    slug: 'servicios-profesionales',
    eyebrow: '03 / Industria',
    name: 'Servicios Profesionales',
    pain: 'Estudios contables, jurídicos, gestoras. Tiempo perdido en carga manual y búsqueda de info en expedientes viejos.',
  },
  {
    slug: 'agronegocios',
    eyebrow: '04 / Industria',
    name: 'Agronegocios y Ganaderas',
    pain: 'Reportes manuales, gestión de cosecha y hacienda con Excel, falta de visibilidad operativa en tiempo real.',
  },
  {
    slug: 'bienes-raices',
    eyebrow: '05 / Industria',
    name: 'Bienes Raíces',
    pain: 'Gestión manual de leads, follow-up que se cae, documentación dispersa, conversión baja por velocidad de respuesta.',
  },
  {
    slug: 'retail',
    eyebrow: '06 / Industria',
    name: 'Retail e Importadoras',
    pain: 'Inventario sin trazabilidad real, gestión de cuenta corriente manual, atención al cliente saturada.',
  },
  {
    slug: 'salud',
    eyebrow: '07 / Industria',
    name: 'Clínicas y Salud',
    pain: 'Agendamiento manual, ausentismo no gestionado, historia clínica dispersa, cobranzas a obras sociales.',
  },
]
```

---

## /INDUSTRIAS/[SLUG] — PLANTILLA ÚNICA

Cada sub-página usa la misma plantilla con data específica.

### Estructura

**Eyebrow**:
```
INDUSTRIA · [Nombre del rubro]
```

**Headline (Display L)**:
[Headline específico del rubro]

**Subtitle**:
[Descripción del dolor agregado]

(Separador)

**Bloque 1 — Cómo se ve la operación hoy**
**Eyebrow**: `CÓMO SE VE HOY`
**Display M**: [Frase fuerte del status quo]
**Body**: [Descripción del problema en lenguaje del dueño]

**Bloque 2 — Qué se puede automatizar**
**Eyebrow**: `QUÉ AUTOMATIZAMOS`
**Display M**: [Frase de cómo Morben aborda el rubro]
**Body**: [Descripción de las áreas concretas]
**Bullets**: lista de aplicaciones

**Bloque 3 — Casos relacionados**
Si hay caso publicado del rubro, mostrar card.
Si no, omitir bloque.

**CTA cierre**:
Display M + botón Calendly.

---

### DATA POR RUBRO

```ts
// lib/content/industries.ts

{
  'servicios-financieros': {
    name: 'Servicios Financieros',
    headline: 'Cooperativas, financieras y casas de crédito que ya operan distinto.',
    subtitle: 'Mora que no baja, oficiales que pierden horas buscando info, carpetas que se atrasan en comité. Son los tres dolores que más escuchamos en este rubro — y los tres se pueden resolver en semanas.',
    statusQuo: {
      heading: 'El equipo trabaja con sistemas que no se hablan entre sí.',
      body: 'El core bancario tiene los movimientos. El CRM tiene los contactos. Excel tiene el seguimiento. WhatsApp tiene las conversaciones. La carpeta digital tiene los documentos. Para tomar una decisión cualquiera, el oficial reconstruye todo eso a mano, cada vez.',
    },
    whatWeAutomate: {
      heading: 'Tres frentes claros, con impacto medible en 90 días.',
      body: 'En servicios financieros el ROI es directo y rápido: menos mora, más cierres, menos horas perdidas. Trabajamos sobre los tres frentes que más mueven el número.',
      bullets: [
        'Cobranza priorizada con scoring de recupero y secuencias automáticas.',
        'Asistente IA para oficiales de crédito con normativa, historial del cliente y políticas en tiempo real.',
        'Análisis automatizado de carpetas crediticias con detección de red flags y scoring asistido.',
      ],
    },
    relatedCases: [],  // Cuando haya, agregar slug
  },

  'aseguradoras': {
    name: 'Aseguradoras',
    headline: 'Aseguradoras que emiten en horas, no en días.',
    subtitle: 'La emisión lenta de pólizas tiene un costo invisible: la conversión cae entre 15-20% por cada día que demora. Y los siniestros se gestionan a mano porque el sistema interno no acompaña.',
    statusQuo: {
      heading: 'Cada póliza pasa por seis personas antes de salir.',
      body: 'Validación de datos, revisión de antecedentes, análisis del bien asegurado, aprobación técnica, emisión, envío. Cada paso suma demora. Cada demora cuesta conversión.',
    },
    whatWeAutomate: {
      heading: 'Procesamiento documental y agentes que aceleran el ciclo.',
      body: 'Las aseguradoras tienen toneladas de documentos no estructurados — pólizas, peritajes, expedientes — que pueden procesarse con IA. Y los flujos de aprobación tienen reglas claras que se pueden automatizar.',
      bullets: [
        'Procesamiento automático de pólizas y peritajes con extracción estructurada.',
        'Agentes IA para producción y atención al cliente que conocen las pólizas vigentes.',
        'Detección automatizada de patrones en siniestros y red flags.',
      ],
    },
    relatedCases: [],
  },

  'servicios-profesionales': {
    name: 'Servicios Profesionales',
    headline: 'Estudios contables y jurídicos que facturan más sin sumar gente.',
    subtitle: 'En servicios profesionales la limitación es el tiempo del equipo senior. Cada hora que pasan en carga manual o búsqueda de expedientes es una hora que no facturan.',
    statusQuo: {
      heading: 'El conocimiento del estudio vive en la cabeza de los socios.',
      body: 'Cuando un caso nuevo entra, alguien tiene que recordar el caso similar de 2019, dónde está el modelo del contrato, qué jurisprudencia aplica. Esa recuperación de contexto se repite todos los días, varias veces.',
    },
    whatWeAutomate: {
      heading: 'Asistentes que centralizan el know-how del estudio.',
      body: 'Los estudios tienen una base de conocimiento gigante — expedientes, contratos, jurisprudencia, normativa — que hoy no es accesible. La hacemos accesible.',
      bullets: [
        'Asistente IA sobre la base completa de expedientes y conocimiento del estudio.',
        'Procesamiento automático de facturas, balances y documentos repetitivos.',
        'Redacción asistida de informes, contratos y demandas con plantillas propias del estudio.',
      ],
    },
    relatedCases: ['incentiva'],  // Caso de RRHH aplica
  },

  'agronegocios': {
    name: 'Agronegocios y Ganaderas',
    headline: 'Operaciones agro con visibilidad en tiempo real.',
    subtitle: 'Las empresas agro tienen un problema particular: la operación está distribuida geográficamente y la información viaja por WhatsApp y planillas. Decisiones grandes con datos viejos.',
    statusQuo: {
      heading: 'El gerente se entera de los problemas el lunes a la mañana.',
      body: 'La información de campo llega al escritorio con dos días de retraso. Las decisiones de stock, contratación, logística se toman con datos que ya cambiaron.',
    },
    whatWeAutomate: {
      heading: 'Automatización de reportes y visibilidad operativa.',
      body: 'Convertimos los datos que ya se capturan en campo en información accionable en tiempo real para gerencia.',
      bullets: [
        'Reportes automatizados de cosecha, hacienda y operación diaria.',
        'Asistente IA para gerencia con vista consolidada de la operación.',
        'Procesamiento de documentos del campo (partes, remitos, controles) sin carga manual.',
      ],
    },
    relatedCases: [],
  },

  'bienes-raices': {
    name: 'Bienes Raíces',
    headline: 'Inmobiliarias que cierran antes que la competencia.',
    subtitle: 'En bienes raíces la velocidad de respuesta define la conversión. El primer agente que responde con la información correcta gana la operación. Los demás compiten por las sobras.',
    statusQuo: {
      heading: 'Los leads se enfrían mientras alguien busca el folder.',
      body: 'Un lead entra por web, WhatsApp, Instagram. Alguien lo lee horas después. Cuando responde, ya está hablando con dos competidores. Y la documentación del inmueble está dispersa en tres carpetas distintas.',
    },
    whatWeAutomate: {
      heading: 'Atención inmediata + información unificada de cada inmueble.',
      body: 'Construimos sistemas que atienden al lead en segundos, califican la oportunidad, y cargan al agente humano cuando vale la pena su tiempo.',
      bullets: [
        'Atención automatizada multicanal con calificación de leads en tiempo real.',
        'Asistente IA con información completa de cada inmueble y operación.',
        'Follow-up automatizado de leads tibios y reactivación de clientes inactivos.',
      ],
    },
    relatedCases: [],
  },

  'retail': {
    name: 'Retail e Importadoras',
    headline: 'Retail con cuenta corriente que no pierde clientes ni inventario.',
    subtitle: 'Retail e importadoras tienen dos cuellos de botella crónicos: la atención al cliente saturada y la gestión de cuenta corriente que se hace a mano.',
    statusQuo: {
      heading: 'El equipo de atención al cliente atiende lo mismo todo el día.',
      body: 'Estado de pedido, stock disponible, precio actualizado, condición de cuenta. Preguntas que se repiten cientos de veces por día, todas con respuestas que están en el sistema — solo que nadie las tiene a mano.',
    },
    whatWeAutomate: {
      heading: 'Atención conversacional + reactivación de clientes dormidos.',
      body: 'Combinamos un agente que atiende lo repetitivo con un sistema que detecta y recupera clientes que dejaron de comprar.',
      bullets: [
        'Atención automatizada con conocimiento de stock, precio y cuenta del cliente.',
        'Sistema de recuperación de clientes inactivos con priorización por probabilidad de retorno.',
        'Cobranza inteligente de cuenta corriente con segmentación y secuencias diferenciadas.',
      ],
    },
    relatedCases: ['salon-market'],
  },

  'salud': {
    name: 'Clínicas y Salud',
    headline: 'Clínicas que reducen ausentismo y simplifican el agendamiento.',
    subtitle: 'En clínicas y consultorios el ausentismo, el agendamiento manual y la cobranza a obras sociales son los tres dolores constantes. Todos automatizables.',
    statusQuo: {
      heading: 'Las recepcionistas pasan el día en el teléfono.',
      body: 'Tomar turnos, confirmar, reprogramar, recordar, cobrar copagos, gestionar autorizaciones de obras sociales. Una sola persona haciendo cinco tareas distintas al mismo tiempo, con resultado lógico: errores, esperas, pacientes que se van a otro lado.',
    },
    whatWeAutomate: {
      heading: 'Agendamiento, recordatorios y procesos administrativos.',
      body: 'Liberamos a tu equipo de recepción para que se enfoque en el paciente que está enfrente, no en el teléfono.',
      bullets: [
        'Agendamiento automatizado por WhatsApp con confirmación y recordatorios.',
        'Asistente IA con historia clínica y vista del paciente para profesionales.',
        'Procesamiento automatizado de autorizaciones y cobranza a obras sociales.',
      ],
    },
    relatedCases: [],
  },
}
```

---

## NOTAS PARA CLAUDE CODE — INDUSTRIAS

- **Una sola plantilla**: `app/industrias/[slug]/page.tsx` con `generateStaticParams` para los 7 rubros.
- **Data centralizada**: `lib/content/industries.ts`.
- **Si `relatedCases` está vacío**: no renderizar la sección.
- **Bullets**: usar guión largo `—` al inicio, no íconos.
- **Layout simple**: máx 720px para texto, max-w-7xl para container.
- **Sin diferenciación visual entre rubros**: misma plantilla, mismo look. La diferenciación es solo de copy.
