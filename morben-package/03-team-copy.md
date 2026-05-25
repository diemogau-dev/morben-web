# 03 — COPY /EQUIPO

## META

- **Title**: Equipo — Morben
- **Description**: Cuatro fundadores ejecutando. El que te vende es el que ejecuta. Sin equipo junior intermediando.

---

## ESTRUCTURA DE PÁGINA

Layout estilo Morningside AI (referencia en `assets/reference-team-layout.png` cuando lo agreguemos). Cada founder ocupa una "fila" amplia con:
- **Layout alternado**: founder 1 (foto derecha, texto izquierda), founder 2 (foto izquierda, texto derecha), founder 3 (foto derecha, texto izquierda), founder 4 (foto izquierda, texto derecha).
- **Foto B&N** ocupa aproximadamente 40% del ancho, ratio 4:5, sin bordes ni efectos.
- **Texto** ocupa el otro 40-45%, alineado a top de la foto.
- **Espacio vertical generoso** entre founders (mín 120px desktop).

---

## HERO DE LA PÁGINA

**Eyebrow**:
```
EQUIPO
```

**Headline (Display L)**:
```
Cuatro fundadores. Una sola mesa.
```

**Subtitle (Body L, max-w 720px)**:
```
Morben está fundada por cuatro operadores con más de cuarenta años combinados construyendo, vendiendo y operando negocios en Paraguay y la región. Pasamos por agencias, marketplaces, fintech, retail y software enterprise. Vimos por dentro lo que cuesta hacer crecer una empresa con sistemas que no se hablan, equipos que no escalan, y proveedores que prometen más de lo que entregan.

Hoy aplicamos todo eso a un solo trabajo: implementar IA dentro de empresas que ya facturan bien — y volverlas dos o tres veces más eficientes en doce meses, sin reemplazar nada de lo que ya funciona.
```

(Separador amplio)

---

## FOUNDER 01 — DIEGO MORALES

**Foto**: `/team/diego-morales.jpg` (alt: "Diego Morales, Director y Gerente General de Morben")

**Nombre (Display L con apellido en naranja)**:
```
Diego <span class="text-orange">Morales</span>
```

**Rol (mono uppercase, gris)**:
```
DIRECTOR Y GERENTE GENERAL
```

**Bio (body, max-w 540px)**:
```
Diego lidera estrategia comercial y crecimiento de Morben. Dirige ventas, alianzas y estrategia comercial. Más de diez años fundando, escalando y vendiendo negocios en Paraguay.

Co creó y dirigió Loops, plataforma B2B de beneficios corporativos. Antes fundó Mercado Móvil, el primer supermercado 100% online de Paraguay, lo llevó desde cero hasta su venta. Antes fundó Flip Media Marketing, agencia de performance y desarrollo de software, vendida tras escalarla a treinta y cinco cuentas activas. Es Lic. en Administración por Campbellsville University, Kentucky.

Ganador de Mejor Startup Paraguaya en Moonshot 2019. Mejor Startup en Ecommerce Day Paraguay en 2019 y 2024. Primer puesto Tigo Conecta 2023, con Loops.
```

**Links sociales (opcional, íconos discretos)**:
```
LinkedIn: https://www.linkedin.com/in/diemogau/
```

---

## FOUNDER 02 — NÉSTOR BENÍTEZ

**Foto**: `/team/nestor-benitez.jpg`

**Nombre**:
```
Néstor <span class="text-orange">Benítez</span>
```

**Rol**:
```
DIRECTOR DE TECNOLOGÍA
```

**Bio**:
```
Néstor es el arquitecto de los sistemas que Morben entrega. Más de veinte años construyendo software y negocios. Fundó y vendió su primera empresa a los veintitrés. Co-fundó MOBI, empresa de logística de última milla, operativa hasta hoy.

Diseñó sistemas de decisión operativa con IA para empresas como Codas Vuyk, Bristol e IDESA; definiendo arquitectura técnica e integrando IA en procesos reales. Domina React, Node.js, MongoDB, SQL, APIs REST y GraphQL, y la cadena completa de herramientas modernas de IA.

Trabaja en el punto exacto donde la mayoría de las iniciativas tecnológicas fallan: la ejecución.

En Morben se asegura de que lo que prometemos se entregue.
```

**Links**:
```
LinkedIn: https://www.linkedin.com/in/nbdietrich/
```

---

## FOUNDER 03 — ANTONIO RIERA

**Foto**: `/team/antonio-riera.jpg`

**Nombre**:
```
Antonio <span class="text-orange">Riera</span>
```

**Rol**:
```
INGENIERO DE DATOS
```

**Bio**:
```
Antonio lidera datos y modelado en Morben. Máster en Ciencia de Datos por la Universidad de Edimburgo. Economista por la Universidad Católica de Asunción.

Diseñó modelos de riesgo crediticio con XGBoost para reducir incumplimientos en bancos y financieras paraguayas, modelos de segmentación de clientes y predicción de churn. Trabajó en planificación financiera en Banco Basa, donde construyó dashboards de seguimiento de metas y semiautomatizó procesos críticos que antes tomaban horas. Representó a Paraguay en olimpiadas internacionales de matemática y mención de honor IMO 2014.

Domina Python, R, SQL, Power BI, Tableau, n8n y modelos avanzados de machine learning.

En Morben convierte datos en decisiones.
```

**Links**:
```
LinkedIn: https://www.linkedin.com/in/antonio-riera-3b5a181ba/
```

---

## FOUNDER 04 — EMILIO MORALES

**Foto**: `/team/emilio-morales.jpg`

**Nombre**:
```
Emilio <span class="text-orange">Morales</span>
```

**Rol**:
```
DIRECTOR DE DISEÑO
```

**Bio**:
```
Emilio lidera diseño de producto y experiencia en Morben. Diseñador y desarrollador con más de seis años construyendo interfaces para clientes en Estados Unidos, España y Latinoamérica.

Trabajó en CandidLeap, agencia enterprise de Webflow, desarrollando sitios para startups norteamericanas en etapas Series A y B. Co-fundó Loops liderando diseño de producto y desarrollo. Antes diseñó la experiencia digital de Mercado Móvil. Especialista en interfaces de SaaS, funnels de conversión y producto que el usuario adopta de inmediato. Es Lic. en Marketing por la Universidad Católica de Asunción.

En Morben se asegura de que cada sistema que entregamos tenga interfaz pensada al detalle, para que tu equipo lo use todos los días con facilidad.
```

**Links**:
```
LinkedIn: https://www.linkedin.com/in/emilio-moralesg/
```

---

## CTA DE CIERRE

(Separador amplio)

**Display M**:
```
¿Querés sentarte con nosotros?
```

**Body**:
```
Cuarenta y cinco minutos. Sin venderte nada. Solo para entender si tu empresa está lista — y si nosotros somos los indicados.
```

**CTA principal**:
```
Agendar reunión de diagnóstico  →
```

---

## NOTAS PARA CLAUDE CODE

- **Tratamiento de fotos**: las 4 fotos vienen ya procesadas en B&N. NO aplicar filtros adicionales. Mostrarlas como están.
- **Aspect ratio del bloque foto**: 4:5 vertical. `aspect-[4/5]` en Tailwind.
- **Layout alternado**: usar `flex-row-reverse` en odd children o data-attribute.
- **Animación**: Reveal stagger por founder. Cada founder con delay incremental (`index * 0.1`).
- **Hover sobre foto**: scale sutil `1.02` con transición lenta (700ms). Opcional.
- **Nombre del founder**: apellido en `text-orange`, con `tracking-[-0.02em]`.
- **Componente reutilizable**: `<FounderCard founder={data} reversed={index % 2 === 1} />`
