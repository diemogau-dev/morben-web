export interface CaseSection {
  eyebrow: string
  heading: string
  body?: string[]
  bullets?: string[]
  closingLine?: string
  variant?: 'default' | 'quote'
  subBlocks?: { title: string; body: string }[]
}

export interface BigNumber {
  value: string
  description: string
}

export interface CaseStudy {
  slug: string
  client: string
  logo: string | null
  eyebrowTag: string
  headline: string
  subtitle: string
  chips: string[]
  sections: CaseSection[]
  resultEyebrow: string
  results: BigNumber[]
  resultBody: string[]
  closing: { heading: string; body: string }
  meta: { title: string; description: string }
  preview: { category: string; headline: string; result: string }
}

export const cases: CaseStudy[] = [
  {
    slug: 'incentiva',
    client: 'Incentiva',
    logo: '/logos/incentiva.png',
    eyebrowTag: 'Caso · RRHH',
    headline:
      'Cómo Incentiva redujo más de 1.265 horas mensuales de búsqueda manual en su proceso de selección.',
    subtitle:
      'Un asistente interno conversacional que centraliza información dispersa y devuelve los mejores candidatos en segundos.',
    chips: ['Incentiva', 'Reclutamiento y selección', 'Implementación: pocas semanas'],
    sections: [
      {
        eyebrow: 'El problema',
        heading:
          '1.265 horas al mes perdidas en tareas que no agregaban valor al proceso.',
        body: [
          'Incentiva opera con veintitrés selectores. Cada uno dedicaba entre dos y tres horas diarias a revisar CVs, notas y documentos dispersos en distintos sistemas. El resultado: un proceso lento, repetitivo y difícil de escalar.',
        ],
      },
      {
        eyebrow: 'El cuello de botella',
        heading:
          'El problema no era encontrar candidatos. Era acceder a la información correcta en el momento correcto.',
        body: [
          'Los CVs, las notas internas y los datos de búsquedas previas vivían en sistemas distintos que no se hablaban entre sí. Cada vez que un selector iniciaba una nueva búsqueda, tenía que reconstruir contexto manualmente. Abrir carpetas, leer notas, cruzar información, recordar entrevistas pasadas. Una tarea que se repetía decenas de veces al día, multiplicada por veintitrés personas.',
        ],
      },
      {
        eyebrow: 'La pregunta clave',
        heading:
          '¿Puede el selector interactuar con el sistema como si fuera un compañero de trabajo que conoce a todos los candidatos de la base?',
        variant: 'quote',
        body: [
          'La respuesta ideal era escribir algo así: "Necesito candidatos con más de 5 años en marketing y menos de 35 años, con experiencia en consumo masivo." Y recibir la lista. Sin formularios. Sin filtros. Sin procesos intermedios.',
        ],
      },
      {
        eyebrow: 'La solución',
        heading: 'Un asistente interno conversacional integrado al proceso real de selección.',
        body: [
          'Construimos un asistente interno que centraliza CVs, notas y datos dispersos en un único sistema de búsqueda conversacional. El selector escribe en lenguaje natural y recibe candidatos relevantes en segundos, ya estructurados y con el contexto histórico cargado.',
        ],
        bullets: [
          'Una sola interfaz conversacional, sin formularios.',
          'Toda la información centralizada y disponible al instante.',
          'Resultados ordenados con el contexto ya armado para la entrevista.',
        ],
      },
      {
        eyebrow: 'Implementación',
        heading: 'De concepto a producción en pocas semanas.',
        body: [
          'Trabajamos sobre lo que Incentiva ya tenía. Sin reemplazar sistemas. Sin migrar bases. Sin pedirle al equipo que cambie de herramientas. Parte clave del trabajo fue estructurar los datos antes de automatizar la búsqueda. El sistema funciona porque los datos abajo están limpios.',
        ],
      },
    ],
    resultEyebrow: 'Resultado',
    results: [
      { value: '80 a 90%', description: 'de reducción estimada en tiempo operativo de búsqueda.' },
    ],
    resultBody: [
      'El impacto es directo en la velocidad del proceso de selección, reduciendo fricción en las etapas tempranas del pipeline, donde antes se perdía la mayoría del tiempo del equipo.',
      'El impacto completo se está midiendo en ciclos reales de uso y se actualizará en los próximos meses.',
    ],
    closing: {
      heading: '¿Tu equipo tiene un proceso similar?',
      body: 'Podemos analizar tu caso y ver si este enfoque aplica a tu operación. Sin compromiso. Sin promesas adelantadas. Sin ruido innecesario.',
    },
    meta: {
      title: 'Caso Incentiva, 1.265 horas mensuales recuperadas',
      description:
        'Un asistente interno conversacional que centralizó información dispersa y devolvió los mejores candidatos en segundos para una empresa paraguaya de reclutamiento.',
    },
    preview: {
      category: 'RRHH · Reclutamiento y selección',
      headline:
        'Cómo Incentiva redujo más de 1.265 horas mensuales de búsqueda manual.',
      result: '80 a 90% de reducción en tiempo operativo de búsqueda.',
    },
  },
  {
    slug: 'salon-market',
    client: 'Salon Market',
    logo: '/logos/salon-market.png',
    eyebrowTag: 'Caso · Retail',
    headline: 'Cómo Salon Market convirtió clientes dormidos en ventas recurrentes otra vez.',
    subtitle:
      'Un sistema que detecta cuándo un cliente está listo para volver a comprar, y actúa en ese momento exacto.',
    chips: [
      'Salon Market',
      'Retail · Importación de cosméticos',
      'Implementación: pocas semanas',
    ],
    sections: [
      {
        eyebrow: 'El problema',
        heading: 'Clientes que compraban, y en algún momento dejaron de hacerlo.',
        body: [
          'Sin aviso. Sin reclamo. Simplemente dejaron de aparecer.',
          'El equipo seguía contactando a toda la base por WhatsApp, sin distinción, al mismo tiempo. Algunos respondían. La mayoría no. Y el costo de cada mensaje se pagaba igual.',
          'Salon Market estaba pagando por contactar clientes que todavía no necesitaban comprar, mientras los que sí estaban listos para volver pasaban desapercibidos.',
        ],
      },
      {
        eyebrow: 'El cuello de botella',
        heading:
          'Sin datos, es imposible distinguir al cliente que ya está en ventana activa de retorno del que todavía no.',
        body: [
          'Sin esa distinción, el costo de adquisición sube, la tasa de respuesta baja, y el ingreso dormido sigue dormido. Todos los clientes recibían el mismo mensaje, en el mismo momento, sin importar dónde estaban en su ciclo de compra.',
        ],
      },
      {
        eyebrow: 'La solución',
        heading: 'Un sistema de recuperación de revenue.',
        body: [
          'Construimos un sistema que analiza patrones transaccionales y comportamiento histórico de recompra de cada cliente para estimar ventanas de alta probabilidad de retorno.',
          'El resultado no es una campaña masiva. Es una lista priorizada de clientes con mayor probabilidad de recompra esa semana. Solo a esos se les envía el mensaje. El resto queda en pausa hasta que el sistema detecte que ya están listos.',
        ],
        bullets: [
          'Análisis de patrones de recompra individuales, no promedios.',
          'Priorización semanal automática de la base de contacto.',
          'El sistema ajusta sus predicciones con cada nuevo ciclo de datos.',
        ],
        closingLine: 'No funciona con reglas fijas. Aprende con el uso.',
      },
      {
        eyebrow: 'Implementación',
        heading: 'Sobre los datos que Salon Market ya tenía.',
        body: [
          'Sin nuevos sistemas. Sin cambiar la operación comercial. Sin aumentar el equipo. Usamos el historial de transacciones que ya existía dentro de la empresa, lo estructuramos, y lo conectamos al canal de contacto que ya estaba en uso.',
        ],
      },
    ],
    resultEyebrow: 'Resultado · Proyección anualizada',
    results: [
      { value: '+15 a 20%', description: 'incremento en ventas' },
      { value: '60 a 80%', description: 'menos costo en mensajes de WhatsApp' },
      { value: '~20 hs', description: 'ahorradas por mes en gestión manual' },
    ],
    resultBody: [
      'ROI que mejora con cada ciclo de datos. El sistema se vuelve más preciso a medida que ve más patrones de recompra.',
      'Los números reales se están midiendo en este momento y se actualizarán en los próximos meses.',
    ],
    closing: {
      heading:
        'Tu base de clientes probablemente ya tiene ventas listas para volver. Solo que hoy no podés verlas.',
      body: 'Analizamos tu historial de compras y te mostramos cuánto revenue está dormido, qué clientes tienen mayor probabilidad de recompra, dónde se está perdiendo eficiencia comercial, y cuánto podrías recuperar automatizando el seguimiento.',
    },
    meta: {
      title: 'Caso Salon Market, +15 a 20% en ventas recurrentes',
      description:
        'Un sistema que detecta cuándo un cliente está listo para volver a comprar, y actúa en ese momento exacto. Para una importadora de cosméticos.',
    },
    preview: {
      category: 'Retail · Importación de cosméticos',
      headline:
        'Cómo Salon Market convirtió clientes dormidos en ventas recurrentes otra vez.',
      result: '+15 a 20% en ventas / 60 a 80% menos costo de WhatsApp.',
    },
  },
  {
    slug: 'pyae-movil',
    client: 'Pya’e Móvil',
    logo: null,
    eyebrowTag: 'Caso · Logística',
    headline:
      'Cómo Pya’e Móvil multiplicó sus pedidos automatizando casi toda su operación de última milla.',
    subtitle:
      'Una operación que dependía de una persona pegada al WhatsApp pasó a correr casi sola, desde la carga del pedido hasta el cobro conciliado.',
    chips: ['Pya’e Móvil', 'Logística de última milla', 'Implementación: pocas semanas'],
    sections: [
      {
        eyebrow: 'El problema',
        heading: 'Toda la operación pasaba por una persona, mensaje por mensaje.',
        body: [
          'Pya’e Móvil hace logística de última milla. Antes, cada pedido de pick up y drop entraba por WhatsApp y lo resolvía el dueño a mano.',
          'Contestar el mensaje, pedir ubicación, horario y datos del paquete, analizar las zonas de retiro y entrega, decidir qué driver tomaba el pedido según ruta y horario, pasarle la orden por WhatsApp, anotar todo en un Excel, esperar la confirmación del driver, cambiar el estado en la planilla, avisarle al cliente, pasarle los datos bancarios, recibir el comprobante, entrar al banco a verificar la transferencia, anotar el cobro y emitir la factura. Todo eso, multiplicado por cientos de pedidos al día.',
          'Esa operación no le dejaba crecer.',
        ],
      },
      {
        eyebrow: 'El cuello de botella',
        heading: 'El crecimiento estaba limitado por las horas de una sola persona.',
        body: [
          'Cada pedido nuevo era más trabajo manual para la misma persona. Sumar volumen significaba sumar caos, no ingresos. El techo no era el mercado ni los drivers. Era cuántos mensajes podía procesar el dueño en un día.',
        ],
      },
      {
        eyebrow: 'La solución',
        heading: 'Un sistema que opera el ciclo completo de cada pedido.',
        body: [
          'No fue una sola automatización. Construimos la operación de punta a punta, desde que el cliente carga el pedido hasta que el cobro queda conciliado.',
        ],
        subBlocks: [
          {
            title: '01 / Sistema interno de gestión',
            body: 'Un sistema central con ruteo, drivers, pedidos, estados y notificaciones automáticas. El corazón de la operación, donde antes había un Excel.',
          },
          {
            title: '02 / App para drivers',
            body: 'Los drivers reciben los pedidos asignados, cambian el estado en tiempo real y consultan los datos de cada entrega desde su teléfono.',
          },
          {
            title: '03 / Web y app para clientes',
            body: 'Los clientes cargan sus pedidos con todas las indicaciones e información necesarias, sin pasar por una persona del otro lado.',
          },
          {
            title: '04 / Agente de WhatsApp',
            body: 'Un agente responde, agenda pedidos y carga los datos directo al sistema de Pya’e, las veinticuatro horas, sin que nadie tenga que estar conectado.',
          },
          {
            title: '05 / Agente de conciliación de cobros',
            body: 'Analiza los comprobantes recibidos, los cruza contra el extracto bancario diario y envía la confirmación del cobro o el pedido de reintento al cliente, automáticamente.',
          },
        ],
      },
      {
        eyebrow: 'Implementación',
        heading: 'Sobre la operación que Esteban ya tenía.',
        body: [
          'Trabajamos con Esteban, el dueño, sobre los canales que ya usaba. El WhatsApp siguió siendo la puerta de entrada y el Excel quedó atrás, reemplazado por un sistema que el equipo entiende. Nada que aprender de cero, todo construido alrededor de cómo ya trabajaban.',
        ],
      },
    ],
    resultEyebrow: 'Resultado',
    results: [
      { value: '~90%', description: 'de la operación diaria automatizada' },
      { value: '+150%', description: 'de crecimiento en pedidos al liberar el tiempo del dueño' },
      { value: '~50 hs', description: 'semanales liberadas de gestión manual' },
      { value: '24/7', description: 'de atención y agenda de pedidos sin intervención humana' },
    ],
    resultBody: [
      'El dueño dejó de operar el WhatsApp y volvió a su rol real: hacer crecer la empresa. Lo que antes ponía un techo a cuántos pedidos se podían tomar por día, hoy escala sin sumar gente.',
      'La conciliación de cobros que antes tomaba horas hoy pasa en minutos, y los números siguen mejorando a medida que el sistema toma más volumen.',
    ],
    closing: {
      heading:
        'Si tu operación depende de una persona contestando mensajes y cargando planillas, tenés un techo que no se ve.',
      body: 'Podemos mapear tu operación y mostrarte qué parte puede correr sola, cuántas horas se liberan y cuánto podés crecer sin sumar gente.',
    },
    meta: {
      title: 'Caso Pya’e Móvil, casi 90% de la operación automatizada',
      description:
        'Cómo una empresa de logística de última milla automatizó la toma de pedidos, el ruteo, la atención y la conciliación de cobros, y multiplicó su volumen sin sumar gente.',
    },
    preview: {
      category: 'Logística · Última milla',
      headline:
        'Cómo Pya’e Móvil automatizó casi toda su operación de última milla.',
      result: 'Casi 90% de la operación automatizada / hasta +150% en pedidos.',
    },
  },
  {
    slug: 'snicks',
    client: 'Snicks',
    logo: null,
    eyebrowTag: 'Caso · Servicios',
    headline:
      'Cómo Snicks atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.',
    subtitle:
      'Una operación de servicio que corre sola. Personas para lo que importa, IA para lo que se repite.',
    chips: ['Snicks', 'Servicios · Customer experience', 'Implementación: pocas semanas'],
    sections: [
      {
        eyebrow: 'El problema',
        heading: 'Cada pedido pasaba por las manos de alguien. Siempre. Inevitable.',
        body: [
          'Snicks limpia y restaura sneakers premium. Cada cliente entra por WhatsApp pidiendo cotización, manda fotos del par, pregunta por estado, coordina retiro, pregunta cuándo está listo, pide la factura, comenta si quedó conforme.',
          'Cada uno de esos pasos requería que un humano respondiera. Cuando el volumen empezó a crecer, el cuello de botella se hizo obvio: el dueño respondía mensajes desde la cama. El equipo perdía pedidos por demoras de respuesta. El contenido para redes sociales nunca se publicaba porque nadie tenía tiempo de armarlo. Los clientes que no volvían a comprar simplemente desaparecían. No había manera de recuperarlos sin sentar a alguien a perseguirlos uno por uno.',
        ],
      },
      {
        eyebrow: 'El cuello de botella',
        heading:
          'En un negocio de servicio premium, cada interacción importa. Pero no todas las interacciones requieren un humano.',
        body: [
          'Responder "¿cuánto cuesta?" es una tarea operativa. Diagnosticar el estado de un par es una decisión técnica. Coordinar logística es coordinación. Pedir reseña a un cliente satisfecho es marketing. Reactivar a un cliente que no compra hace seis meses es ventas.',
          'El equipo de Snicks estaba haciendo todas esas tareas al mismo tiempo, con la misma persona, en el mismo canal. El costo era alto y el techo de crecimiento era bajo: para crecer, había que sumar gente. Y sumar gente implicaba bajar el margen.',
        ],
      },
      {
        eyebrow: 'La solución',
        heading: 'Un sistema de tres capas que opera el ciclo completo del cliente.',
        body: [
          'No es una sola automatización. Es un sistema integrado que cubre la operación de punta a punta.',
        ],
        subBlocks: [
          {
            title: '01 / Atención conversacional con visión por IA',
            body: 'Un agente atiende WhatsApp veinticuatro horas. El cliente manda fotos del par, el agente las analiza con visión por IA, diagnostica el estado, devuelve cotización en segundos. Si el cliente confirma, agenda el retiro o coordina el drop. Si la conversación se complica, por un reclamo, un cobro especial o un daño, escala automáticamente al humano.',
          },
          {
            title: '02 / Logística y prueba documental automatizada',
            body: 'Cada par que entra al taller se fotografía en caja de estudio y se sube al sistema con el nombre del cliente. Esa foto se envía como prueba del "antes". Al finalizar, se repite el proceso con el "después". El cliente recibe ambas fotos sin que nadie del equipo tenga que mandarlas manualmente. Cuando el trabajo está listo, el sistema le avisa al cliente, le manda link de pago o coordina retiro.',
          },
          {
            title: '03 / Motor de contenido automatizado',
            body: 'Las fotos en caja de estudio del antes y después son material premium. La IA agarra esas fotos, las edita, genera piezas para Instagram y TikTok, y las sube a un Drive donde el equipo de marketing las publica. Sin sesiones de fotos extra. Sin diseñador armando reels. Sin demora entre el trabajo y el contenido.',
          },
          {
            title: '04 / Sistema de remarketing que corre solo',
            body: 'NPS automático veinticuatro horas después del retiro. Recordatorio a clientes que no compran hace tres, seis o doce meses. Cupones automáticos según comportamiento. Lo que antes nadie hacía, ahora pasa sin que nadie lo piense.',
          },
        ],
      },
      {
        eyebrow: 'Implementación',
        heading: 'Sin reemplazar nada de la operación existente.',
        body: [
          'Snicks ya usaba WhatsApp como canal principal, ya tenía estudio de fotos para los pares, ya tenía cuenta de Instagram. El sistema se construyó encima de todo eso. Ninguna herramienta nueva que el equipo tuviera que aprender. Ningún cambio que el cliente notara, excepto que ahora la atención es instantánea.',
        ],
      },
    ],
    resultEyebrow: 'Resultado',
    results: [
      { value: '+70%', description: 'conversaciones resueltas sin intervención humana' },
      { value: '+40 hs', description: 'semanales liberadas del equipo' },
      { value: '8 a 12', description: 'piezas de contenido generadas por semana' },
      { value: '~15%', description: 'de retorno en reactivación de clientes inactivos' },
    ],
    resultBody: [
      'El equipo solo entra cuando el sistema escala. Reclamos, casos especiales, decisiones de excepción. Lo que antes era operación, ahora es excepción.',
    ],
    closing: {
      heading:
        'Si tu negocio depende de responder, coordinar y darle seguimiento a cada cliente, probablemente estés perdiendo plata sin verla.',
      body: 'Podemos analizar tu operación y mostrarte cuánto tiempo se va en tareas que la IA puede hacer mejor, y dónde está el techo de crecimiento real de tu equipo.',
    },
    meta: {
      title: 'Caso Snicks, operación de servicio automatizada de punta a punta',
      description:
        'Cómo un negocio de servicio premium atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.',
    },
    preview: {
      category: 'Servicios · Customer experience automatizado',
      headline:
        'Cómo Snicks atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.',
      result: '+70% de conversaciones resueltas sin intervención humana / +40 hs semanales liberadas.',
    },
  },
]

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
