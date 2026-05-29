export interface Founder {
  slug: string
  firstName: string
  lastName: string
  role: string
  photo: string
  alt: string
  bio: string[]
  linkedin: string
}

export const team: Founder[] = [
  {
    slug: 'diego-morales',
    firstName: 'Diego',
    lastName: 'Morales',
    role: 'Director y Gerente General',
    photo: '/team/diego-morales.jpg',
    alt: 'Diego Morales, Director y Gerente General de Morben',
    bio: [
      'Diego lidera estrategia comercial, ventas, alianzas y crecimiento de Morben. Habla el idioma del dueño porque lo fue: más de diez años fundando, escalando y vendiendo negocios en Paraguay.',
      'Co creó y dirigió Loops, plataforma B2B de beneficios corporativos. Antes fundó Mercado Móvil, el primer supermercado 100% online de Paraguay, lo llevó desde cero hasta su venta. Antes fundó Flip Media Marketing, agencia de performance y desarrollo de software, vendida tras escalarla a treinta y cinco cuentas activas. Es Lic. en Administración por Campbellsville University, Kentucky.',
      'Ganador de Mejor Startup Paraguaya en Moonshot 2019. Mejor Startup en Ecommerce Day Paraguay en 2019 y 2024. Primer puesto Tigo Conecta 2023, con Loops.',
    ],
    linkedin: 'https://www.linkedin.com/in/diemogau/',
  },
  {
    slug: 'nestor-benitez',
    firstName: 'Néstor',
    lastName: 'Benítez',
    role: 'Director de Tecnología',
    photo: '/team/nestor-benitez.jpg',
    alt: 'Néstor Benítez, Director de Tecnología de Morben',
    bio: [
      'Néstor es el arquitecto de los sistemas que Morben entrega. Diseñó sistemas de decisión operativa con IA para empresas como Codas Vuyk, Bristol e IDESA, definiendo la arquitectura técnica e integrando IA en procesos reales.',
      'Más de veinte años construyendo software y negocios. Fundó y vendió su primera empresa a los veintitrés. Co-fundó MOBI, empresa de logística de última milla, operativa hasta hoy. Domina React, Node.js, MongoDB, SQL, APIs REST y GraphQL, y la cadena completa de herramientas modernas de IA.',
      'Trabaja en el punto exacto donde la mayoría de las iniciativas tecnológicas fallan: la ejecución.',
      'En Morben se asegura de que lo que prometemos se entregue.',
    ],
    linkedin: 'https://www.linkedin.com/in/nbdietrich/',
  },
  {
    slug: 'antonio-riera',
    firstName: 'Antonio',
    lastName: 'Riera',
    role: 'Ingeniero de Datos',
    photo: '/team/antonio-riera.jpg',
    alt: 'Antonio Riera, Ingeniero de Datos de Morben',
    bio: [
      'Antonio construye los modelos que deciden. Diseñó modelos de riesgo crediticio con XGBoost para bancos y financieras paraguayas que reducen incumplimientos, además de modelos de segmentación de clientes y predicción de churn.',
      'Trabajó en planificación financiera en Banco Basa, donde construyó dashboards de seguimiento de metas y semiautomatizó procesos críticos que antes tomaban horas. Máster en Ciencia de Datos por la Universidad de Edimburgo y economista por la Universidad Católica de Asunción. Representó a Paraguay en olimpiadas internacionales de matemática y obtuvo mención de honor en la IMO 2014.',
      'Domina Python, R, SQL, Power BI, Tableau, n8n y modelos avanzados de machine learning.',
      'En Morben convierte datos en decisiones.',
    ],
    linkedin: 'https://www.linkedin.com/in/antonio-riera-3b5a181ba/',
  },
  {
    slug: 'emilio-morales',
    firstName: 'Emilio',
    lastName: 'Morales',
    role: 'Director de Diseño',
    photo: '/team/emilio-morales.jpg',
    alt: 'Emilio Morales, Director de Diseño de Morben',
    bio: [
      'Un sistema que el equipo no usa, no sirve. Emilio lidera diseño de producto y experiencia en Morben para que cada cosa que entregamos se adopte desde el día uno. Diseñador y desarrollador con más de seis años construyendo interfaces para clientes en Estados Unidos, España y Latinoamérica.',
      'Trabajó en CandidLeap, agencia enterprise de Webflow, desarrollando sitios para startups norteamericanas en etapas Series A y B. Co-fundó Loops liderando diseño de producto y desarrollo. Antes diseñó la experiencia digital de Mercado Móvil. Especialista en interfaces de SaaS, funnels de conversión y producto que el usuario adopta de inmediato. Es Lic. en Marketing por la Universidad Católica de Asunción.',
      'En Morben, la interfaz no es un adorno: es lo que hace que tu equipo use el sistema todos los días, sin fricción.',
    ],
    linkedin: 'https://www.linkedin.com/in/emilio-moralesg/',
  },
]
