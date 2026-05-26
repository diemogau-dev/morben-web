import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { Reveal } from '@/components/motion/Reveal'
import { displayM } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description:
    'Cuatro fundadores que estuvimos del otro lado. Esto es por qué existe Morben y por qué ahora es el momento.',
}

type Block = { type: 'heading' | 'paragraph'; text: string }

const manifesto: Block[] = [
  { type: 'heading', text: 'Construiste algo que funciona.' },
  {
    type: 'paragraph',
    text: 'Una empresa que crece. Un equipo que empuja. Números que cierran. No fue suerte. Fue oficio, decisiones tomadas a tiempo y muchas noches sin dormir.',
  },
  { type: 'paragraph', text: 'Pero hay algo que sabés y que no le contás a casi nadie.' },
  {
    type: 'paragraph',
    text: 'Adentro, el caos está cerca. Los procesos críticos viven en la cabeza de tres personas. Si una falta, algo se atrasa. Si otro renuncia, no hay plan B. Los reportes salen los domingos a la noche. El sistema "no anda". Los archivos están dispersos. Tu equipo trabaja bajo presión y caos constante, y vos seguís aprobando cosas por WhatsApp los fines de semana.',
  },
  {
    type: 'paragraph',
    text: 'Una empresa seria. Con ingresos sólidos. Con equipos buenos. Y un problema operativo del que nadie habla.',
  },
  { type: 'heading', text: 'El problema no es que falte tecnología. Tecnología sobra.' },
  {
    type: 'paragraph',
    text: 'Lo que falta es alguien que se siente con vos, entienda cómo funciona tu empresa de verdad, y construya operación nueva donde realmente duele. Sin PowerPoints idealistas que nunca se implementan. Sin migraciones eternas. Sin venir a venderte un CRM más para que termine en el cementerio de software que ya pagaste.',
  },
  { type: 'heading', text: 'Mientras tanto, afuera, el mundo cambió.' },
  {
    type: 'paragraph',
    text: 'Hacer con IA lo que hace dos años costaba cincuenta mil dólares hoy cuesta mil. La barrera técnica colapsó. Y eso significa una sola cosa: durante los próximos tres años se va a definir quién, en Paraguay, sale adelante con esto, y quién mira desde afuera cómo otros toman la delantera.',
  },
  {
    type: 'paragraph',
    text: 'No estamos exagerando. Tu competidor, el que hoy factura parecido a vos, va a tomar una decisión esta semana o el mes que viene. Si la toma bien, en dos años tu equipo de veinte personas no va a competir contra el de él de cinco que produce el doble. Eso ya está pasando en otros mercados. En Paraguay todavía no, porque casi nadie ejecutó.',
  },
  { type: 'heading', text: 'Y mientras la oportunidad se abre, lo que aparece en el medio es ruido.' },
  {
    type: 'paragraph',
    text: 'Gente que vende "soluciones de IA" que son menúes de WhatsApp con cuatro respuestas guionadas. Agencias que se rebrandearon "AI-first" porque enchufaron ChatGPT al final de sus servicios de siempre. Freelancers que se aprendieron tres prompts y cobran como consultora grande. Consultoras grandes que siguen cobrando como consultora grande y entregan business plans que terminan en el cajón de algún gerente.',
  },
  { type: 'heading', text: 'Por eso decidimos construir una Operational AI Company.' },
  { type: 'paragraph', text: 'La primera de Paraguay.' },
  {
    type: 'paragraph',
    text: 'Operational porque la IA no es el producto. El producto es operación nueva: una cobranza que recupera el doble, un asistente que centraliza información dispersa, un proceso documental que pasa de horas a minutos. La IA está adentro, sí, pero lo que entregamos es operación. Eso es lo que el cliente compra y lo que medimos.',
  },
  {
    type: 'paragraph',
    text: 'Company porque no somos freelancers, no somos una agencia de chatbots y no somos una consultora. Somos un equipo con metodología, retainer mensual y responsabilidad sobre lo que prometemos.',
  },
  {
    type: 'paragraph',
    text: 'Y de Paraguay porque acá vivimos, acá estamos sentados, acá conocemos los sistemas que usan las empresas: Bancard, SIFEN, DNIT, IPS, los cores bancarios locales, los ERPs.',
  },
  { type: 'heading', text: 'No vendemos IA. Vendemos lo que la IA habilita.' },
  {
    type: 'paragraph',
    text: 'Lo que construimos en Morben funciona sobre los sistemas que ya tenés. No reemplazamos nada. No migramos nada. No te vendemos potencial. Cerramos plazo, cerramos precio y cerramos métrica de éxito antes de cotizar, simple y sin vueltas.',
  },
  {
    type: 'paragraph',
    text: 'En semanas, tu equipo deja de hacer tareas repetitivas y empieza a dedicarle sus horas a tareas que mueven la aguja. En seis meses, podés decir que tenés una empresa automatizada con un SOP sólido. En doce, la operación de tu empresa funciona en otra liga.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Manifiesto"
        title="Por qué existe Morben."
        subtitle="Cuatro fundadores que estuvimos del otro lado. Esto es lo que vimos, lo que nos cansó, y lo que decidimos construir."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-[720px]">
            {manifesto.map((block, i) =>
              block.type === 'heading' ? (
                <Reveal key={i}>
                  <h2 className={`${displayM} mb-8 mt-16 first:mt-0`}>{block.text}</h2>
                </Reveal>
              ) : (
                <Reveal key={i}>
                  <p className="mb-6 max-w-[680px] font-sans text-[18px] leading-[1.7] text-muted md:text-[20px]">
                    {block.text}
                  </p>
                </Reveal>
              ),
            )}
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Si querés ser el que toma la decisión correcta antes que el resto, sentate a hablar con nosotros."
        body="Solo para entender si tu empresa está lista y si nosotros somos los indicados."
        secondary={{ label: 'Conocer al equipo', href: '/equipo' }}
      />
    </>
  )
}
