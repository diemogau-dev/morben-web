# 02 — COPY /SOBRE-NOSOTROS

## META

- **Title**: Sobre nosotros — Morben
- **Description**: Cuatro fundadores que estuvimos del otro lado. Esto es por qué existe Morben y por qué ahora es el momento.

---

## ESTRUCTURA DE PÁGINA

Una sola columna centrada. Max-width 720px para el texto, max-width 1280px para el container. Sin imágenes en el cuerpo. Tipografía como protagonista. Animación de revelado por bloques al hacer scroll (cada párrafo aparece con fade-in suave).

**Estilo de bloques**:
- Líneas marcadas con `**` van en `Display M`, color offwhite, en su propio bloque, espaciadas con margen amplio.
- Párrafos normales en `Body L` (18-20px), color muted, leading generoso.

---

## HERO DE LA PÁGINA

**Eyebrow**:
```
MANIFIESTO
```

**Título principal (Display L o Hero)**:
```
Por qué existe Morben.
```

**Subtitle**:
```
Cuatro fundadores que estuvimos del otro lado. Esto es lo que vimos, lo que nos cansó, y lo que decidimos construir.
```

(Separador amplio — `mt-32 md:mt-40`)

---

## CUERPO DEL MANIFIESTO

**Construiste algo que funciona.**

Una empresa que crece. Un equipo que empuja. Números que cierran. No fue suerte. Fue oficio, decisiones tomadas a tiempo, y muchas noches sin dormir.

Pero hay algo que sabés y que no le contás a casi nadie.

Adentro, el caos está cerca. Los procesos críticos viven en la cabeza de tres personas. Si una falta, algo se atrasa. Si otro renuncia, no hay plan B. Los reportes salen los domingos a la noche. El sistema "no anda". Los archivos están dispersos. Tu equipo trabaja bajo presión y caos constante, y vos seguís aprobando cosas por WhatsApp los fines de semana.

Una empresa seria. Con ingresos sólidos. Con equipos buenos. Y un problema operativo del que nadie habla.

**El problema no es que falte tecnología. Tecnología sobra.**

Lo que falta es alguien que se siente con vos, entienda cómo funciona tu empresa de verdad, y construya automatizaciones donde realmente duele. Sin PowerPoints idealistas que nunca se implementan. Sin migraciones eternas. Sin venir a venderte un CRM más para que termine en el cementerio de software que ya pagaste.

**Mientras tanto, afuera, el mundo cambió.**

Hacer con IA lo que hace dos años costaba doscientos mil dólares hoy cuesta dos mil. La barrera técnica colapsó. Y eso significa una sola cosa: durante los próximos tres años se va a definir quién, en Paraguay, sale adelante con esto, y quién mira desde afuera cómo otros toman la delantera.

No estamos exagerando. Tu competidor, el que hoy factura parecido a vos, va a tomar una decisión esta semana o el mes que viene. Si la toma bien, en dos años tu equipo de veinte personas va a competir contra el de él de cinco que produce el doble. Eso ya está pasando en otros mercados. En Paraguay todavía no, porque casi nadie ejecutó.

**Y mientras la oportunidad se abre, lo que aparece en el medio es ruido.**

Gente que vende "soluciones de IA" que son menúes de WhatsApp con cuatro respuestas guionadas. Agencias que se rebrandearon "AI-first" porque enchufaron ChatGPT al final de sus servicios de siempre. Freelancers que se aprendieron tres prompts y cobran como consultora grande. Consultoras grandes que siguen cobrando como consultora grande y entregan business plans que terminan en el cajón de algún gerente.

**Por eso decidimos crear Morben.**

Cuatro fundadores que estuvimos del otro lado. Levantamos agencias. Operamos marketplaces. Construimos productos tech. Desarrollamos software para empresas paraguayas durante años, y aprendimos por dentro cómo se compra, cómo se decide, cómo se rompe la confianza, cómo se gana.

Sabemos lo que es estar sentado del lado del emprendedor, escuchando una presentación impecable, queriendo creer, pero sabiendo que probablemente nada de eso se va a entregar. Y sabemos lo que es estar del otro lado, ejecutando, y entregando exactamente lo que se prometió.

Lo que construimos en Morben funciona sobre los sistemas que ya tenés hoy en tu empresa. No reemplazamos nada. No migramos nada. No te vendemos potencial. Cerramos plazo, cerramos precio, y cerramos métrica de éxito, simple y sin vueltas.

En dos a siete semanas, tu equipo deja de hacer tareas repetitivas y empieza a dedicarle sus horas a tareas que muevan la aguja. En seis meses, podés decir que tenés una empresa automatizada con un SOP sólido. En doce, la operación de tu empresa se potencia diez veces.

**No vendemos IA. Vendemos lo que la IA habilita.**

Si lo que querés es ser el que toma la decisión correcta antes que el resto, sentate a hablar con nosotros. Sin venderte nada. Solo para entender si tu empresa está lista y si nosotros somos los indicados.

(Separador amplio)

---

## CTA DE CIERRE DE LA PÁGINA

**Display M**:
```
Cuarenta y cinco minutos. Una sola pregunta: ¿estás listo?
```

**CTA principal**:
```
Agendar reunión de diagnóstico  →
```
Link al Calendly.

**CTA secundario (link sutil)**:
```
Conocer al equipo  →
```
Link a `/equipo`.

---

## NOTAS PARA CLAUDE CODE

- Esta es la página más "literaria" del sitio. La tipografía manda. Generosa, respirada.
- Los párrafos en `**bold**` van como heading display, en su propio bloque, con margen vertical amplio.
- El cuerpo en párrafos normales: `font-sans text-[18px] md:text-[20px] leading-[1.7] text-muted` con `max-w-[680px]`.
- Aplicar `Reveal` motion (fade + translate-y) por párrafo al entrar en viewport, con delay incremental.
- Selección de texto en color naranja (ya configurado en globals).
- Sin imágenes. Sin ilustraciones. Sin separadores con líneas. Solo aire entre bloques.
