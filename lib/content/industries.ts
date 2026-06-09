export interface Industry {
  slug: string
  index: string
  name: string
  /** Resumen corto para el listado de industrias. */
  pain: string
  /** Título de la página de detalle. */
  headline: string
  subtitle: string
  /** El problema real del rubro, contado con detalle operativo. */
  problem: { heading: string; body: string }
  /** El insight que solo se gana operando: "lo que aprendimos". */
  learned: { heading: string; body: string }
  /** Cómo lo resolvemos, sobre los sistemas que ya tienen. */
  solution: { heading: string; body: string; bullets: string[] }
  /** Qué puede esperar, en términos cualitativos y honestos. */
  results: { heading: string; body: string; outcomes: string[] }
  relatedCases: string[]
}

/**
 * Las tres verticales / frentes donde cae la mayoría de los proyectos.
 * Se muestran en la cabecera de /industrias como marco de lectura.
 */
export interface Vertical {
  index: string
  name: string
  tagline: string
  body: string
}

export const verticals: Vertical[] = [
  {
    index: '01',
    name: 'Orquestación operativa',
    tagline: 'Unimos sistemas y destrabamos los cuellos de botella entre áreas.',
    body: 'Procesos que cruzan varias áreas y sistemas y hoy se sostienen a fuerza de WhatsApp, mails y planillas. Conectamos lo que ya tenés y dejamos el flujo corriendo de punta a punta, para que la información no se trabe entre un sistema y otro.',
  },
  {
    index: '02',
    name: 'Inteligencia comercial',
    tagline: 'Tu base de datos trabajando: a quién contactar, con qué y cuándo.',
    body: 'Tu base tratada según lo que cada cliente vale, no toda igual. A quién contactar primero, qué ofrecerle y por qué canal: cobranza, recuperación de clientes dormidos y follow-up que no se cae.',
  },
  {
    index: '03',
    name: 'Procesamiento documental',
    tagline: 'Lo que vive en PDFs y planillas, leído y estructurado solo.',
    body: 'Pilas de PDFs, carpetas, pólizas, facturas y planillas que alguien lee y carga a mano. Extraemos, estructuramos y analizamos esos documentos automáticamente: lo que tomaba horas queda en minutos.',
  },
]

export const industries: Industry[] = [
  {
    slug: 'servicios-financieros',
    index: '01',
    name: 'Servicios Financieros',
    pain: 'Cooperativas, financieras y casas de crédito. Mora que no baja, oficiales sin datos a mano y carpetas que duermen días en comité.',
    headline: 'Servicios financieros que deciden con los datos a mano, no de memoria.',
    subtitle:
      'Cooperativas, financieras y casas de crédito donde la mora sube, el comité se atrasa y cada oficial reconstruye la misma información a mano, todos los días.',
    problem: {
      heading: 'La información del socio vive en cinco lugares que no se hablan.',
      body: 'El core tiene los movimientos. El CRM, los contactos. El seguimiento está en un Excel que actualiza una sola persona. Las conversaciones, en el WhatsApp del oficial. Los documentos, en una carpeta compartida. Para decidir un refinanciamiento, una gestión de mora o aprobar una carpeta, alguien junta todo eso a mano, cada vez. La mora no sube porque falte voluntad de cobrar: sube porque cuando hay que actuar, nadie tiene la foto completa a tiempo.',
    },
    learned: {
      heading: 'La mora se gana en los primeros días, no en el call center.',
      body: 'Hablando con gerentes de riesgo y de cobranzas aprendimos que el problema casi nunca es falta de gente, sino de orden. Se llama parejo a toda la cartera vencida en vez de empezar por la que de verdad se recupera. Cuando ordenás a quién llamar primero, qué decirle y por qué canal, el mismo equipo cobra más sin trabajar más horas.',
    },
    solution: {
      heading: 'Tres frentes que mueven el número, sobre el core que ya tenés.',
      body: 'No reemplazamos tu sistema. Construimos encima: leemos lo que ya está cargado y lo convertimos en algo accionable para el oficial y para el comité.',
      bullets: [
        'Cobranza priorizada: la cartera ordenada por probabilidad de recupero, con secuencias automáticas por WhatsApp y derivación al humano cuando hace falta.',
        'Asistente para el oficial de crédito: historial del socio, políticas y normativa respondidas al instante, sin abrir cinco pantallas.',
        'Análisis de carpetas: lectura y extracción automática de la documentación, con alertas tempranas y orden de prioridad para el comité.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Nada de esto reemplaza el criterio de tu equipo. Le saca de encima el trabajo que hoy lo frena.',
      outcomes: [
        'Gestión de mora que arranca el día uno y prioriza lo recuperable.',
        'Oficiales que dedican el tiempo a decidir y vender, no a buscar datos.',
        'Comité que recibe las carpetas leídas y ordenadas, no una pila de PDFs.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'aseguradoras',
    index: '02',
    name: 'Aseguradoras',
    pain: 'Emisión que tarda días, siniestros gestionados a mano y un cliente que, mientras espera, sigue cotizando en otro lado.',
    headline: 'Aseguradoras que emiten y responden a la velocidad del cliente.',
    subtitle:
      'Donde cada póliza pasa por demasiadas manos antes de salir y los siniestros se gestionan a pura planilla, mientras el asegurado espera.',
    problem: {
      heading: 'Entre la cotización y la emisión se cae la venta.',
      body: 'Validar datos, revisar antecedentes, evaluar el bien, aprobación técnica, emisión, envío. Cada paso suma un día, y cada día que el cliente espera es un día en el que sigue cotizando en otro lado. Del otro lado del ciclo, los siniestros se gestionan a mano: planillas, mails y llamadas para juntar lo que el perito, el productor y el asegurado mandan por canales distintos.',
    },
    learned: {
      heading: 'El cuello de botella no es técnico: son papeles que nadie lee a tiempo.',
      body: 'Las aseguradoras nadan en documentos no estructurados: pólizas, peritajes, denuncias, expedientes. Vimos que la demora rara vez está en decidir; está en leer, transcribir y ordenar todo eso para que alguien pueda decidir. Ahí es donde la IA mueve la aguja, porque las reglas de aprobación ya existen y están escritas.',
    },
    solution: {
      heading: 'Sacarle el papeleo al ciclo, no el criterio.',
      body: 'Automatizamos la lectura y el ruteo de documentos para que producción y siniestros lleguen a la decisión sin la parte tediosa.',
      bullets: [
        'Procesamiento automático de pólizas, peritajes y denuncias, con los datos ya extraídos y estructurados.',
        'Agente de producción y atención que conoce las coberturas vigentes y responde al productor y al cliente al instante.',
        'Detección temprana de inconsistencias y patrones en siniestros, para priorizar lo que necesita ojo humano.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Un ciclo que corre solo en lo repetitivo y reserva a tu gente para lo que de verdad necesita criterio.',
      outcomes: [
        'Emisión que deja de depender de cuántas manos estén libres hoy.',
        'Siniestros con la información junta desde el primer contacto.',
        'Productores y clientes que reciben respuesta en el momento, no al otro día.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'servicios-profesionales',
    index: '03',
    name: 'Servicios Profesionales',
    pain: 'Estudios contables, jurídicos y gestoras. Horas del equipo senior perdidas en carga manual y en buscar el expediente de hace tres años.',
    headline: 'Estudios que facturan más horas sin sumar más gente.',
    subtitle:
      'Donde lo que limita el crecimiento es el tiempo del equipo senior, y cada hora en carga manual o buscando un expediente viejo es una hora que no se factura.',
    problem: {
      heading: 'El conocimiento del estudio vive en la cabeza de los socios.',
      body: 'Entra un caso nuevo y alguien tiene que acordarse del similar de 2019, dónde quedó el modelo de contrato, qué dictamen aplica, qué se le había respondido a ese cliente. Esa búsqueda de contexto se repite todos los días, varias veces, y siempre la hace la persona más cara del estudio. Mientras tanto, la carga de facturas y balances repetitivos se come las horas del equipo junior.',
    },
    learned: {
      heading: 'No les falta talento; les sobra trabajo que no debería tocar un profesional.',
      body: 'Hablando con socios de estudios aprendimos que el techo no es la demanda, es la capacidad. Y esa capacidad se va en tareas que no requieren criterio profesional: transcribir, buscar, ordenar, redactar el borrador desde cero. El know-how existe, pero no es accesible: está disperso en carpetas, mails y la memoria de tres personas.',
    },
    solution: {
      heading: 'Hacer accesible el conocimiento que ya tienen.',
      body: 'Convertimos los años de expedientes, contratos y dictámenes en algo que el estudio puede consultar y reutilizar en segundos.',
      bullets: [
        'Asistente sobre la base completa de expedientes, contratos y normativa del estudio, que responde con la fuente.',
        'Procesamiento automático de facturas, balances y documentación repetitiva.',
        'Redacción asistida de informes, contratos y escritos a partir de los modelos propios del estudio.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'El equipo senior vuelve a hacer lo que cobra caro: pensar, asesorar y cerrar.',
      outcomes: [
        'Horas facturables recuperadas de tareas que no requerían un profesional.',
        'Conocimiento del estudio disponible para todos, no solo para los socios.',
        'Capacidad para tomar más casos sin sumar estructura.',
      ],
    },
    relatedCases: ['incentiva'],
  },
  {
    slug: 'agronegocios',
    index: '04',
    name: 'Agronegocios y Ganaderas',
    pain: 'Operación repartida en el campo, datos que viajan por WhatsApp y planillas, y decisiones grandes tomadas con información de hace dos días.',
    headline: 'Operaciones agro que se manejan con datos de hoy, no del lunes pasado.',
    subtitle:
      'Donde la operación está repartida geográficamente, la información viaja por WhatsApp y Excel, y las decisiones de plata se toman con datos que ya cambiaron.',
    problem: {
      heading: 'El gerente se entera de los problemas dos días tarde.',
      body: 'Lo que pasa en el campo —cosecha, hacienda, insumos, maquinaria, personal— llega al escritorio con días de atraso, a fuerza de partes en papel, audios de WhatsApp y planillas que carga alguien a la noche. Cuando el dato llega a gerencia para decidir compra de insumos, logística o venta, ya es viejo. Y reconstruir la foto consolidada de varias unidades es un trabajo manual que nadie quiere hacer.',
    },
    learned: {
      heading: 'El dato ya se captura; lo que falta es que llegue a tiempo y junto.',
      body: 'Vimos que el campo no tiene un problema de falta de información, sino de circulación. Los datos existen, pero quedan atrapados en el celular de un encargado o en una planilla local. El salto no es poner a todos a cargar más cosas: es capturar lo que ya se anota y hacerlo subir solo, consolidado, a una vista única.',
    },
    solution: {
      heading: 'Convertir lo que ya se anota en una vista única en tiempo real.',
      body: 'Trabajamos sobre los canales que el campo ya usa para que la información llegue ordenada a gerencia, sin sumar burocracia.',
      bullets: [
        'Reportes automáticos de cosecha, hacienda y operación diaria, sin esperar a que alguien arme la planilla.',
        'Asistente para gerencia con la vista consolidada de todas las unidades.',
        'Procesamiento de partes, remitos y controles del campo, sin recarga manual.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Decisiones tomadas con la operación real de hoy, no con el resumen de la semana pasada.',
      outcomes: [
        'Visibilidad consolidada de la operación sin perseguir a nadie por WhatsApp.',
        'Decisiones de compra, logística y venta con datos del día.',
        'Encargados que reportan en segundos, no armando planillas a la noche.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'bienes-raices',
    index: '05',
    name: 'Bienes Raíces',
    pain: 'Leads que entran por todos lados y se enfrían mientras alguien busca el folder. Gana el que responde primero.',
    headline: 'Inmobiliarias que responden primero y cierran antes que la competencia.',
    subtitle:
      'Donde la velocidad de respuesta define la venta: el primer agente que contesta con la información correcta se queda la operación, y el resto compite por las sobras.',
    problem: {
      heading: 'El lead se enfría mientras alguien busca la información del inmueble.',
      body: 'Entra una consulta por web, WhatsApp o Instagram. Alguien la ve horas después. Cuando responde, el cliente ya está hablando con dos competidores y la mitad de la data del inmueble —precio actualizado, disponibilidad, fotos, condiciones— está repartida en tres carpetas y en la cabeza del agente que hoy está de franco. Los leads tibios, los que no compran hoy pero sí en tres meses, directamente se pierden: nadie tiene tiempo de seguirlos.',
    },
    learned: {
      heading: 'Casi nadie pierde por precio; se pierde por demora y por falta de seguimiento.',
      body: 'Hablando con inmobiliarias vimos que la venta rara vez se cae por la propiedad o el precio: se cae porque se respondió tarde o porque nadie volvió a llamar. El seguimiento al lead tibio es donde está la plata que hoy se deja sobre la mesa, y es justo lo primero que se suelta cuando el equipo está ocupado.',
    },
    solution: {
      heading: 'Responder en segundos y no soltar nunca el seguimiento.',
      body: 'Construimos una primera línea que atiende, califica y pasa al agente humano solo cuando vale su tiempo.',
      bullets: [
        'Atención multicanal en segundos, con calificación del lead en tiempo real.',
        'Asistente con la información completa de cada inmueble y operación, siempre actualizada.',
        'Seguimiento automático de leads tibios y reactivación de clientes que quedaron en el camino.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Que ninguna consulta se enfríe esperando y que ningún lead tibio se pierda por falta de seguimiento.',
      outcomes: [
        'Respuesta inmediata a cada consulta, las 24 horas.',
        'Agentes que solo hablan con leads ya calificados.',
        'Seguimiento que no depende de que alguien se acuerde.',
      ],
    },
    relatedCases: [],
  },
  {
    slug: 'retail',
    index: '06',
    name: 'Retail e Importadoras',
    pain: 'Atención al cliente saturada con las mismas preguntas y cuenta corriente que se gestiona a mano, cliente por cliente.',
    headline: 'Retail con cuenta corriente que no pierde ni clientes ni cobranzas.',
    subtitle:
      'Donde la atención al cliente se satura contestando siempre lo mismo y la cuenta corriente se gestiona a mano, cliente por cliente.',
    problem: {
      heading: 'El equipo de atención contesta todo el día lo que ya está en el sistema.',
      body: 'Estado del pedido, stock, precio actualizado, saldo de cuenta. Las mismas preguntas cientos de veces por día, todas con respuesta en el sistema, solo que nadie las tiene a mano en el momento. Mientras tanto, la cobranza de cuenta corriente se hace parejo y a pulmón, y los clientes que dejaron de comprar —que antes pedían todas las semanas— se van apagando sin que nadie lo note hasta que ya es tarde.',
    },
    learned: {
      heading: 'El cliente que se enfría no avisa; deja de comprar de a poco.',
      body: 'Vimos que en retail con cuenta corriente se pierde plata por dos lados silenciosos: la atención que no llega a tiempo y el cliente que baja el ritmo sin que salte ninguna alarma. Ninguno de los dos aparece en un reporte hasta que el daño ya está hecho. Los datos para anticiparlo ya están en el sistema; lo que falta es que alguien —o algo— los mire todos los días.',
    },
    solution: {
      heading: 'Atender lo repetitivo y vigilar lo que se enfría.',
      body: 'Combinamos un agente que resuelve lo de siempre con un sistema que detecta al cliente que se está yendo antes de que se vaya.',
      bullets: [
        'Atención automática con conocimiento de stock, precio, pedido y cuenta del cliente.',
        'Detección y reactivación de clientes que bajaron el ritmo de compra, priorizados por probabilidad de retorno.',
        'Cobranza de cuenta corriente segmentada, con secuencias distintas según el cliente.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Que el equipo deje de apagar incendios repetitivos y que la plata deje de irse en silencio.',
      outcomes: [
        'Atención que responde al instante sin saturar al equipo.',
        'Clientes dormidos detectados y recuperados a tiempo.',
        'Cobranza ordenada por lo que de verdad se recupera.',
      ],
    },
    relatedCases: ['salon-market'],
  },
  {
    slug: 'salud',
    index: '07',
    name: 'Clínicas y Salud',
    pain: 'Recepción atrapada en el teléfono, turnos que se pierden por ausentismo y autorizaciones de seguros gestionadas a mano.',
    headline: 'Clínicas que llenan la agenda y liberan a recepción del teléfono.',
    subtitle:
      'Donde el ausentismo, el agendamiento manual y la gestión con los seguros consumen el día de recepción, a costa del paciente que tienen enfrente.',
    problem: {
      heading: 'Una sola persona haciendo cinco tareas al mismo tiempo.',
      body: 'Recepción toma turnos, confirma, reprograma, recuerda, cobra copagos y pelea autorizaciones con los seguros, todo a la vez y casi todo por teléfono. El resultado es predecible: esperas, errores, turnos que quedan vacíos porque nadie alcanzó a confirmar, y pacientes que se cansan de esperar y se van a otro lado. El hueco que deja un paciente que no vino no lo ocupa nadie, porque nadie tuvo tiempo de avisarle al siguiente de la lista.',
    },
    learned: {
      heading: 'El ausentismo no se arregla retando al paciente; se arregla recordándole bien.',
      body: 'Vimos que la mayor parte del ausentismo y de los turnos perdidos no es mala voluntad del paciente: es falta de un recordatorio en el canal correcto y de una forma fácil de reprogramar. Cuando el recordatorio sale solo por WhatsApp y reprogramar es contestar un mensaje, la agenda se ordena sola y recepción recupera el día.',
    },
    solution: {
      heading: 'Sacarle a recepción lo repetitivo para que atienda al paciente.',
      body: 'Automatizamos el ida y vuelta del agendamiento y el papeleo administrativo, sin tocar la parte clínica.',
      bullets: [
        'Agendamiento por WhatsApp con confirmación, recordatorios y reprogramación automática.',
        'Reasignación de turnos liberados a la lista de espera, sin que nadie tenga que llamar.',
        'Procesamiento de autorizaciones y apoyo a la cobranza con los seguros.',
      ],
    },
    results: {
      heading: 'Qué podés esperar.',
      body: 'Una agenda más llena, una recepción menos quemada y un paciente mejor atendido.',
      outcomes: [
        'Menos turnos vacíos por ausentismo no gestionado.',
        'Recepción enfocada en el paciente presente, no en el teléfono.',
        'Autorizaciones y cobros con los seguros que dejan de trabarse.',
      ],
    },
    relatedCases: [],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}
