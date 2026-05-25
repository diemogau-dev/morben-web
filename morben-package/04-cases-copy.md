# 04 — COPY CASOS DE ESTUDIO

## ESTRUCTURA COMÚN DE CADA PÁGINA DE CASO

Layout estilo Stripe Customers / Linear Customers:

1. **Hero del caso**: eyebrow con rubro + headline grande con el resultado + subtitle.
2. **Header de datos** (chip row): logo del cliente · rubro · ciclo de implementación.
3. **El problema** (display M + body).
4. **El cuello de botella real** (display M + body).
5. **La solución** (display M + body + bullets).
6. **Implementación** (display M + body).
7. **Resultado** (display L con números grandes destacados).
8. **CTA de cierre** (display M + botón).

Sin imágenes en el cuerpo. Solo tipografía y números. Animación Reveal por bloque.

Para los números destacados del resultado: usar `font-display font-semibold text-[clamp(64px,9vw,128px)] leading-none tracking-[-0.04em]` con el número en blanco y la unidad/descripción en muted body al lado.

---

## /CASOS/INCENTIVA

### META
- **Title**: Caso Incentiva — 1.265 horas mensuales recuperadas | Morben
- **Description**: Un agente de IA que centralizó información dispersa y devolvió los mejores candidatos en segundos para una empresa paraguaya de reclutamiento.

### HERO

**Eyebrow**:
```
CASO · RRHH
```

**Headline (Display L)**:
```
Cómo Incentiva redujo más de 1.265 horas mensuales de búsqueda manual en su proceso de selección.
```

**Subtitle (body L)**:
```
Un agente de IA que centraliza información dispersa y devuelve los mejores candidatos en segundos.
```

**Chip row** (eyebrow style, separados por `·`):
```
Incentiva  ·  Reclutamiento y selección  ·  Implementación: pocas semanas
```

(Separador)

### BLOQUE — EL PROBLEMA

**Eyebrow**:
```
EL PROBLEMA
```

**Display M**:
```
1.265 horas al mes perdidas en tareas que no agregaban valor al proceso.
```

**Body**:
```
Incentiva opera con veintitrés selectores. Cada uno dedicaba entre dos y tres horas diarias a revisar CVs, notas y documentos dispersos en distintos sistemas. El resultado: un proceso lento, repetitivo y difícil de escalar.
```

### BLOQUE — EL CUELLO DE BOTELLA REAL

**Eyebrow**:
```
EL CUELLO DE BOTELLA
```

**Display M**:
```
El problema no era encontrar candidatos. Era acceder a la información correcta en el momento correcto.
```

**Body**:
```
Los CVs, las notas internas y los datos de búsquedas previas vivían en sistemas distintos que no se hablaban entre sí. Cada vez que un selector iniciaba una nueva búsqueda, tenía que reconstruir contexto manualmente — abrir carpetas, leer notas, cruzar información, recordar entrevistas pasadas. Una tarea que se repetía decenas de veces al día, multiplicada por veintitrés personas.
```

### BLOQUE — LA PREGUNTA CLAVE

**Eyebrow**:
```
LA PREGUNTA CLAVE
```

**Display M** (tratamiento citation, con un border-left naranja sutil):
```
¿Puede el selector interactuar con el sistema como si fuera un compañero de trabajo que conoce a todos los candidatos de la base?
```

**Body**:
```
La respuesta ideal era escribir algo así: "Necesito candidatos con más de 5 años en marketing y menos de 35 años, con experiencia en consumo masivo." Y recibir la lista. Sin formularios. Sin filtros. Sin procesos intermedios.
```

### BLOQUE — LA SOLUCIÓN

**Eyebrow**:
```
LA SOLUCIÓN
```

**Display M**:
```
Un agente de IA integrado al proceso real de selección.
```

**Body**:
```
Construimos un agente que centraliza CVs, notas y datos dispersos en un único sistema de búsqueda conversacional. El selector escribe en lenguaje natural y recibe candidatos relevantes en segundos, ya estructurados y con el contexto histórico cargado.
```

**Bullets (sin íconos, solo guiones largos)**:
```
— Una sola interfaz conversacional, sin formularios.
— Toda la información centralizada y disponible al instante.
— Resultados ordenados con el contexto ya armado para la entrevista.
```

### BLOQUE — IMPLEMENTACIÓN

**Eyebrow**:
```
IMPLEMENTACIÓN
```

**Display M**:
```
De concepto a producción en pocas semanas.
```

**Body**:
```
Trabajamos sobre lo que Incentiva ya tenía. Sin reemplazar sistemas. Sin migrar bases. Sin pedirle al equipo que cambie de herramientas. Parte clave del trabajo fue estructurar los datos antes de automatizar la búsqueda — el sistema funciona porque los datos abajo están limpios.
```

### BLOQUE — RESULTADO

**Eyebrow**:
```
RESULTADO
```

**Number destacado grande**:
```
80–90%
```

**Body al lado del número (body L)**:
```
de reducción estimada en tiempo operativo de búsqueda.
```

**Body adicional debajo**:
```
El impacto es directo en la velocidad del proceso de selección — reduciendo fricción en las etapas tempranas del pipeline, donde antes se perdía la mayoría del tiempo del equipo.

El impacto completo se está midiendo en ciclos reales de uso y se actualizará en los próximos meses.
```

### CTA DE CIERRE DE CASO

**Display M**:
```
¿Tu equipo tiene un proceso similar?
```

**Body**:
```
Podemos analizar tu caso y ver si este enfoque aplica a tu operación. Sin compromiso. Sin promesas adelantadas. Sin ruido innecesario.
```

**CTA**:
```
Agendar reunión de diagnóstico  →
```

---

## /CASOS/SALON-MARKET

### META
- **Title**: Caso Salon Market — +15-20% en ventas recurrentes | Morben
- **Description**: Un sistema que detecta cuándo un cliente está listo para volver a comprar, y actúa en ese momento exacto. Para una importadora de cosméticos.

### HERO

**Eyebrow**:
```
CASO · RETAIL
```

**Headline**:
```
Cómo Salon Market convirtió clientes dormidos en ventas recurrentes otra vez.
```

**Subtitle**:
```
Un sistema que detecta cuándo un cliente está listo para volver a comprar, y actúa en ese momento exacto.
```

**Chip row**:
```
Salon Market  ·  Retail · Importación de cosméticos  ·  Implementación: pocas semanas
```

### BLOQUE — EL PROBLEMA

**Eyebrow**:
```
EL PROBLEMA
```

**Display M**:
```
Clientes que compraban, y en algún momento dejaron de hacerlo.
```

**Body**:
```
Sin aviso. Sin reclamo. Simplemente dejaron de aparecer.

El equipo seguía contactando a toda la base por WhatsApp, sin distinción, al mismo tiempo. Algunos respondían. La mayoría no. Y el costo de cada mensaje se pagaba igual.

Salon Market estaba pagando por contactar clientes que todavía no necesitaban comprar — mientras los que sí estaban listos para volver pasaban desapercibidos.
```

### BLOQUE — EL CUELLO DE BOTELLA REAL

**Eyebrow**:
```
EL CUELLO DE BOTELLA
```

**Display M**:
```
Sin datos, es imposible distinguir al cliente que ya está en ventana activa de retorno del que todavía no.
```

**Body**:
```
Sin esa distinción, el costo de adquisición sube, la tasa de respuesta baja, y el ingreso dormido sigue dormido. Todos los clientes recibían el mismo mensaje, en el mismo momento, sin importar dónde estaban en su ciclo de compra.
```

### BLOQUE — LA SOLUCIÓN

**Eyebrow**:
```
LA SOLUCIÓN
```

**Display M**:
```
Un sistema de recuperación de revenue.
```

**Body**:
```
Construimos un sistema que analiza patrones transaccionales y comportamiento histórico de recompra de cada cliente para estimar ventanas de alta probabilidad de retorno.

El resultado no es una campaña masiva. Es una lista priorizada de clientes con mayor probabilidad de recompra esa semana. Solo a esos se les envía el mensaje. El resto queda en pausa hasta que el sistema detecte que ya están listos.
```

**Bullets**:
```
— Análisis de patrones de recompra individuales, no promedios.
— Priorización semanal automática de la base de contacto.
— El sistema ajusta sus predicciones con cada nuevo ciclo de datos.
```

**Body de cierre del bloque**:
```
No funciona con reglas fijas. Aprende con el uso.
```

### BLOQUE — IMPLEMENTACIÓN

**Eyebrow**:
```
IMPLEMENTACIÓN
```

**Display M**:
```
Sobre los datos que Salon Market ya tenía.
```

**Body**:
```
Sin nuevos sistemas. Sin cambiar la operación comercial. Sin aumentar el equipo. Usamos el historial de transacciones que ya existía dentro de la empresa, lo estructuramos, y lo conectamos al canal de contacto que ya estaba en uso.
```

### BLOQUE — RESULTADO

**Eyebrow**:
```
RESULTADO  ·  PROYECCIÓN ANUALIZADA
```

**Grid 3 columnas con números destacados**:

Columna 1:
```
+15–20%
incremento en ventas
```

Columna 2:
```
–60–80%
menos costo en mensajes de WhatsApp
```

Columna 3:
```
~20 hs
ahorradas por mes en gestión manual
```

**Body debajo del grid**:
```
ROI que mejora con cada ciclo de datos — el sistema se vuelve más preciso a medida que ve más patrones de recompra.

Los números reales se están midiendo en este momento y se actualizarán en los próximos meses.
```

### CTA DE CIERRE

**Display M**:
```
Tu base de clientes probablemente ya tiene ventas listas para volver. Solo que hoy no podés verlas.
```

**Body**:
```
Analizamos tu historial de compras y te mostramos cuánto revenue está dormido, qué clientes tienen mayor probabilidad de recompra, dónde se está perdiendo eficiencia comercial, y cuánto podrías recuperar automatizando el seguimiento.
```

**CTA**:
```
Agendar reunión de diagnóstico  →
```

---

## /CASOS/SNICKS

### META
- **Title**: Caso Snicks — Operación de servicio automatizada de punta a punta | Morben
- **Description**: Cómo un negocio de servicio premium atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.

### HERO

**Eyebrow**:
```
CASO · SERVICIOS
```

**Headline**:
```
Cómo Snicks atiende, cotiza, agenda, cobra y produce contenido sin un humano detrás de cada paso.
```

**Subtitle**:
```
Una operación de servicio que corre sola. Personas para lo que importa, IA para lo que se repite.
```

**Chip row**:
```
Snicks  ·  Servicios · Customer experience  ·  Implementación: pocas semanas
```

### BLOQUE — EL PROBLEMA

**Eyebrow**:
```
EL PROBLEMA
```

**Display M**:
```
Cada pedido pasaba por las manos de alguien. Siempre. Inevitable.
```

**Body**:
```
Snicks limpia y restaura sneakers premium. Cada cliente entra por WhatsApp pidiendo cotización, manda fotos del par, pregunta por estado, coordina retiro, pregunta cuándo está listo, pide la factura, comenta si quedó conforme.

Cada uno de esos pasos requería que un humano respondiera. Cuando el volumen empezó a crecer, el cuello de botella se hizo obvio: el dueño respondía mensajes desde la cama. El equipo perdía pedidos por demoras de respuesta. El contenido para redes sociales nunca se publicaba porque nadie tenía tiempo de armarlo. Los clientes que no volvían a comprar simplemente desaparecían — no había manera de recuperarlos sin sentar a alguien a perseguirlos uno por uno.
```

### BLOQUE — EL CUELLO DE BOTELLA REAL

**Eyebrow**:
```
EL CUELLO DE BOTELLA
```

**Display M**:
```
En un negocio de servicio premium, cada interacción importa. Pero no todas las interacciones requieren un humano.
```

**Body**:
```
Responder "¿cuánto cuesta?" es una tarea operativa. Diagnosticar el estado de un par es una decisión técnica. Coordinar logística es coordinación. Pedir reseña a un cliente satisfecho es marketing. Reactivar a un cliente que no compra hace seis meses es ventas.

El equipo de Snicks estaba haciendo todas esas tareas al mismo tiempo, con la misma persona, en el mismo canal. El costo era alto y el techo de crecimiento era bajo: para crecer, había que sumar gente. Y sumar gente implicaba bajar el margen.
```

### BLOQUE — LA SOLUCIÓN

**Eyebrow**:
```
LA SOLUCIÓN
```

**Display M**:
```
Un sistema de tres capas que opera el ciclo completo del cliente.
```

**Body intro**:
```
No es una sola automatización. Es un sistema integrado que cubre la operación de punta a punta.
```

**Sub-bloque 1**:
```
01 / Atención conversacional con visión por IA

Un agente atiende WhatsApp veinticuatro horas. El cliente manda fotos del par, el agente las analiza con visión por IA, diagnostica el estado, devuelve cotización en segundos. Si el cliente confirma, agenda el retiro o coordina el drop. Si la conversación se complica — reclamo, cobro especial, daño — escala automáticamente al humano.
```

**Sub-bloque 2**:
```
02 / Logística y prueba documental automatizada

Cada par que entra al taller se fotografía en caja de estudio y se sube al sistema con el nombre del cliente. Esa foto se envía como prueba del "antes". Al finalizar, se repite el proceso con el "después". El cliente recibe ambas fotos sin que nadie del equipo tenga que mandarlas manualmente. Cuando el trabajo está listo, el sistema le avisa al cliente, le manda link de pago o coordina retiro.
```

**Sub-bloque 3**:
```
03 / Motor de contenido automatizado

Las fotos en caja de estudio del antes y después son material premium. La IA agarra esas fotos, las edita, genera piezas para Instagram y TikTok, y las sube a un Drive donde el equipo de marketing las publica. Sin sesiones de fotos extra. Sin diseñador armando reels. Sin demora entre el trabajo y el contenido.
```

**Sub-bloque 4 (más corto)**:
```
04 / Sistema de remarketing que corre solo

NPS automático veinticuatro horas después del retiro. Recordatorio a clientes que no compran hace tres, seis o doce meses. Cupones automáticos según comportamiento. Lo que antes nadie hacía, ahora pasa sin que nadie lo piense.
```

### BLOQUE — IMPLEMENTACIÓN

**Eyebrow**:
```
IMPLEMENTACIÓN
```

**Display M**:
```
Sin reemplazar nada de la operación existente.
```

**Body**:
```
Snicks ya usaba WhatsApp como canal principal, ya tenía estudio de fotos para los pares, ya tenía cuenta de Instagram. El sistema se construyó encima de todo eso. Ninguna herramienta nueva que el equipo tuviera que aprender. Ningún cambio que el cliente notara — excepto que ahora la atención es instantánea.
```

### BLOQUE — RESULTADO

**Eyebrow**:
```
RESULTADO
```

**Grid 4 columnas (2x2 en mobile) con números destacados**:

Columna 1:
```
+70%
conversaciones resueltas sin intervención humana
```

Columna 2:
```
+40 hs
semanales liberadas del equipo
```

Columna 3:
```
8–12
piezas de contenido generadas por semana
```

Columna 4:
```
~15%
de retorno en reactivación de clientes inactivos
```

**Body debajo**:
```
El equipo solo entra cuando el sistema escala — reclamos, casos especiales, decisiones de excepción. Lo que antes era operación, ahora es excepción.
```

### CTA DE CIERRE

**Display M**:
```
Si tu negocio depende de responder, coordinar y darle seguimiento a cada cliente, probablemente estés perdiendo plata sin verla.
```

**Body**:
```
Podemos analizar tu operación y mostrarte cuánto tiempo se va en tareas que la IA puede hacer mejor — y dónde está el techo de crecimiento real de tu equipo.
```

**CTA**:
```
Agendar reunión de diagnóstico  →
```

---

## /CASOS (LISTADO)

Página índice de casos.

**Eyebrow**:
```
CASOS
```

**Headline (Display L)**:
```
Empresas que ya están operando distinto.
```

**Subtitle**:
```
Casos reales con números reales. Sin maquillar, sin promesas.
```

**Grid de 3 cards** (igual layout que homepage), cada una linkeada a su página.

(Mismo contenido que el bloque 05 del homepage)

---

## NOTAS PARA CLAUDE CODE — CASOS

- **Data en `lib/content/cases.ts`**: cada caso como objeto tipado, incluyendo todos los bloques.
- **Componente `CaseSection`**: recibe `eyebrow`, `displayHeading`, `body`, `bullets?`, `quote?`.
- **Componente `BigNumber`**: para los resultados destacados. Props: `value` (string), `description` (string).
- **Layout de página de caso**: max-width 800px para texto, max-width 1200px para grid de números.
- **Plantilla única**: las 3 páginas usan el mismo componente con data distinta.
- **CTA siempre presente**: al final de cada caso, el mismo CTA de reunión de diagnóstico.
