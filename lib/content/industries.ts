export interface Industry {
  slug: string
  index: string
  name: string
  pain: string
  headline: string
  subtitle: string
  statusQuo: { heading: string; body: string }
  whatWeAutomate: { heading: string; body: string; bullets: string[] }
  relatedCases: string[]
}

export const industries: Industry[] = [
  {
    slug: 'servicios-financieros',
    index: '01',
    name: 'Servicios Financieros',
    pain: 'Cooperativas, financieras, casas de crédito, casas de cambio. Mora alta, oficiales sin info en tiempo real, carpetas que tardan días en analizarse.',
    headline: 'Cooperativas, financieras y casas de crédito que ya operan distinto.',
    subtitle:
      'Mora que no baja, oficiales que pierden horas buscando info, carpetas que se atrasan en comité. Son los tres dolores que más escuchamos en este rubro, y los tres se pueden resolver en semanas.',
    statusQuo: {
      heading: 'El equipo trabaja con sistemas que no se hablan entre sí.',
      body: 'El core bancario tiene los movimientos. El CRM tiene los contactos. Excel tiene el seguimiento. WhatsApp tiene las conversaciones. La carpeta digital tiene los documentos. Para tomar una decisión cualquiera, el oficial reconstruye todo eso a mano, cada vez.',
    },
    whatWeAutomate: {
      heading: 'Tres frentes claros, con impacto medible en 90 días.',
      body: 'En servicios financieros el ROI es directo y rápido: menos mora, más cierres, menos horas perdidas. Trabajamos sobre los tres frentes que más mueven el número.',
      bullets: [
        'Cobranza con priorización automática del recupero y secuencias automáticas.',
        'Asistente interno para oficiales de crédito con normativa, historial del cliente y políticas en tiempo real.',
        'Análisis automatizado de carpetas crediticias con detección de red flags y ranking automático de prioridad.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'aseguradoras',
    index: '02',
    name: 'Aseguradoras',
    pain: 'Emisión lenta de pólizas, gestión manual de siniestros, conversion drop por demora.',
    headline: 'Aseguradoras que emiten en horas, no en días.',
    subtitle:
      'La emisión lenta de pólizas tiene un costo invisible: la conversión cae entre 15-20% por cada día que demora. Y los siniestros se gestionan a mano porque el sistema interno no acompaña.',
    statusQuo: {
      heading: 'Cada póliza pasa por seis personas antes de salir.',
      body: 'Validación de datos, revisión de antecedentes, análisis del bien asegurado, aprobación técnica, emisión, envío. Cada paso suma demora. Cada demora cuesta conversión.',
    },
    whatWeAutomate: {
      heading: 'Procesamiento documental y agentes que aceleran el ciclo.',
      body: 'Las aseguradoras tienen toneladas de documentos no estructurados, como pólizas, peritajes y expedientes, que pueden procesarse con IA. Y los flujos de aprobación tienen reglas claras que se pueden automatizar.',
      bullets: [
        'Procesamiento automático de pólizas y peritajes con extracción estructurada.',
        'Agentes IA para producción y atención al cliente que conocen las pólizas vigentes.',
        'Detección automatizada de patrones en siniestros y red flags.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'servicios-profesionales',
    index: '03',
    name: 'Servicios Profesionales',
    pain: 'Estudios contables, jurídicos, gestoras. Tiempo perdido en carga manual y búsqueda de info en expedientes viejos.',
    headline: 'Estudios contables y jurídicos que facturan más sin sumar gente.',
    subtitle:
      'En servicios profesionales la limitación es el tiempo del equipo senior. Cada hora que pasan en carga manual o búsqueda de expedientes es una hora que no facturan.',
    statusQuo: {
      heading: 'El conocimiento del estudio vive en la cabeza de los socios.',
      body: 'Cuando un caso nuevo entra, alguien tiene que recordar el caso similar de 2019, dónde está el modelo del contrato, qué jurisprudencia aplica. Esa recuperación de contexto se repite todos los días, varias veces.',
    },
    whatWeAutomate: {
      heading: 'Asistentes que centralizan el know-how del estudio.',
      body: 'Los estudios tienen una base de conocimiento gigante de expedientes, contratos, jurisprudencia y normativa que hoy no es accesible. La hacemos accesible.',
      bullets: [
        'Asistente IA sobre la base completa de expedientes y conocimiento del estudio.',
        'Procesamiento automático de facturas, balances y documentos repetitivos.',
        'Redacción asistida de informes, contratos y demandas con plantillas propias del estudio.',
      ],
    },
    relatedCases: ['incentiva'],
  },
  {
    slug: 'agronegocios',
    index: '04',
    name: 'Agronegocios y Ganaderas',
    pain: 'Reportes manuales, gestión de cosecha y hacienda con Excel, falta de visibilidad operativa en tiempo real.',
    headline: 'Operaciones agro con visibilidad en tiempo real.',
    subtitle:
      'Las empresas agro tienen un problema particular: la operación está distribuida geográficamente y la información viaja por WhatsApp y planillas. Decisiones grandes con datos viejos.',
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
  {
    slug: 'bienes-raices',
    index: '05',
    name: 'Bienes Raíces',
    pain: 'Gestión manual de leads, follow-up que se cae, documentación dispersa, conversión baja por velocidad de respuesta.',
    headline: 'Inmobiliarias que cierran antes que la competencia.',
    subtitle:
      'En bienes raíces la velocidad de respuesta define la conversión. El primer agente que responde con la información correcta gana la operación. Los demás compiten por las sobras.',
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
  {
    slug: 'retail',
    index: '06',
    name: 'Retail e Importadoras',
    pain: 'Inventario sin trazabilidad real, gestión de cuenta corriente manual, atención al cliente saturada.',
    headline: 'Retail con cuenta corriente que no pierde clientes ni inventario.',
    subtitle:
      'Retail e importadoras tienen dos cuellos de botella crónicos: la atención al cliente saturada y la gestión de cuenta corriente que se hace a mano.',
    statusQuo: {
      heading: 'El equipo de atención al cliente atiende lo mismo todo el día.',
      body: 'Estado de pedido, stock disponible, precio actualizado, condición de cuenta. Preguntas que se repiten cientos de veces por día, todas con respuestas que están en el sistema, solo que nadie las tiene a mano.',
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
  {
    slug: 'salud',
    index: '07',
    name: 'Clínicas y Salud',
    pain: 'Agendamiento manual, ausentismo no gestionado, historia clínica dispersa, cobranzas a obras sociales.',
    headline: 'Clínicas que reducen ausentismo y simplifican el agendamiento.',
    subtitle:
      'En clínicas y consultorios el ausentismo, el agendamiento manual y la cobranza a obras sociales son los tres dolores constantes. Todos automatizables.',
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
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
