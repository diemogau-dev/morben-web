import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'

const paragraphs: { text: string; emphasis?: boolean }[] = [
  { text: 'Una empresa que crece. Un equipo que empuja. Números que cierran.' },
  {
    text: 'Pero los procesos críticos viven en la cabeza de tres personas. Si una falta, algo se atrasa. Los reportes salen los domingos a la noche. Vos seguís aprobando cosas por WhatsApp los fines de semana.',
  },
  {
    text: 'Mientras tanto, afuera, el mundo cambió. Lo que hace dos años costaba doscientos mil dólares hoy cuesta dos mil. La barrera técnica colapsó. Y eso significa una sola cosa: durante los próximos tres años se va a definir quién, en Paraguay, sale adelante con esto, y quién mira desde afuera cómo otros toman la delantera.',
  },
  {
    text: 'Y en el medio, lo que aparece es ruido. Gente que vende "soluciones de IA" que son menúes de WhatsApp con cuatro respuestas. Agencias que se rebrandearon "AI-first" porque enchufaron ChatGPT al final de sus servicios de siempre. Consultoras que entregan business plans para el cajón de algún gerente.',
  },
  {
    text: 'Morben es lo que falta en el medio. Una Operational AI Company: gente que se sienta con vos, entiende cómo funciona tu empresa de verdad, y construye operación nueva donde realmente duele. Plazo cerrado, precio cerrado, métrica de éxito cerrada antes de cotizar.',
    emphasis: true,
  },
]

export function ManifestoExcerpt() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <Eyebrow>Por qué Morben</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className={`mt-5 ${displayL}`}>
              Construiste algo que funciona. Adentro, el caos está cerca.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p
                  className={`font-sans text-[18px] leading-[1.65] md:text-[20px] ${
                    p.emphasis ? 'text-offwhite' : 'text-muted'
                  }`}
                >
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/sobre-nosotros"
              className="mt-12 inline-flex items-center gap-2 font-sans text-[16px] text-orange transition-colors hover:text-orange-light"
            >
              Leer el manifesto completo
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
