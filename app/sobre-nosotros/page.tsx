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
    text: 'Una empresa que crece. Un equipo que empuja. Números que cierran. No fue suerte. Fue oficio, decisiones tomadas a tiempo, y muchas noches sin dormir.',
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
    text: 'Lo que falta es alguien que se siente con vos, entienda cómo funciona tu empresa de verdad, y construya automatizaciones donde realmente duele. Sin PowerPoints idealistas que nunca se implementan. Sin migraciones eternas. Sin venir a venderte un CRM más para que termine en el cementerio de software que ya pagaste.',
  },
  { type: 'heading', text: 'Mientras tanto, afuera, el mundo cambió.' },
  {
    type: 'paragraph',
    text: 'Hacer con IA lo que hace dos años costaba doscientos mil dólares hoy cuesta dos mil. La barrera técnica colapsó. Y eso significa una sola cosa: durante los próximos tres años se va a definir quién, en Paraguay, sale adelante con esto, y quién mira desde afuera cómo otros toman la delantera.',
  },
  {
    type: 'paragraph',
    text: 'No estamos exagerando. Tu competidor, el que hoy factura parecido a vos, va a tomar una decisión esta semana o el mes que viene. Si la toma bien, en dos años tu equipo de veinte personas va a competir contra el de él de cinco que produce el doble. Eso ya está pasando en otros mercados. En Paraguay todavía no, porque casi nadie ejecutó.',
  },
  { type: 'heading', text: 'Y mientras la oportunidad se abre, lo que aparece en el medio es ruido.' },
  {
    type: 'paragraph',
    text: 'Gente que vende "soluciones de IA" que son menúes de WhatsApp con cuatro respuestas guionadas. Agencias que se rebrandearon "AI-first" porque enchufaron ChatGPT al final de sus servicios de siempre. Freelancers que se aprendieron tres prompts y cobran como consultora grande. Consultoras grandes que siguen cobrando como consultora grande y entregan business plans que terminan en el cajón de algún gerente.',
  },
  { type: 'heading', text: 'Por eso decidimos crear Morben.' },
  {
    type: 'paragraph',
    text: 'Cuatro fundadores que estuvimos del otro lado. Levantamos agencias. Operamos marketplaces. Construimos productos tech. Desarrollamos software para empresas paraguayas durante años, y aprendimos por dentro cómo se compra, cómo se decide, cómo se rompe la confianza, cómo se gana.',
  },
  {
    type: 'paragraph',
    text: 'Sabemos lo que es estar sentado del lado del emprendedor, escuchando una presentación impecable, queriendo creer, pero sabiendo que probablemente nada de eso se va a entregar. Y sabemos lo que es estar del otro lado, ejecutando, y entregando exactamente lo que se prometió.',
  },
  {
    type: 'paragraph',
    text: 'Lo que construimos en Morben funciona sobre los sistemas que ya tenés hoy en tu empresa. No reemplazamos nada. No migramos nada. No te vendemos potencial. Cerramos plazo, cerramos precio, y cerramos métrica de éxito, simple y sin vueltas.',
  },
  {
    type: 'paragraph',
    text: 'En dos a siete semanas, tu equipo deja de hacer tareas repetitivas y empieza a dedicarle sus horas a tareas que muevan la aguja. En seis meses, podés decir que tenés una empresa automatizada con un SOP sólido. En doce, la operación de tu empresa se potencia diez veces.',
  },
  { type: 'heading', text: 'No vendemos IA. Vendemos lo que la IA habilita.' },
  {
    type: 'paragraph',
    text: 'Si lo que querés es ser el que toma la decisión correcta antes que el resto, sentate a hablar con nosotros. Sin venderte nada. Solo para entender si tu empresa está lista y si nosotros somos los indicados.',
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
        heading="Cuarenta y cinco minutos. Una sola pregunta: ¿estás listo?"
        secondary={{ label: 'Conocer al equipo', href: '/equipo' }}
      />
    </>
  )
}
