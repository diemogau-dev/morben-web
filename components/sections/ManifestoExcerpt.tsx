import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'

const paragraphs: { text: string; emphasis?: boolean }[] = [
  {
    text: 'Los procesos críticos viven en la cabeza de tres personas. Los reportes salen los domingos a la noche. Vos seguís aprobando cosas por WhatsApp los fines de semana.',
  },
  {
    text: 'Y afuera, el mundo cambió: lo que hace dos años costaba doscientos mil dólares hoy cuesta dos mil. En los próximos tres años se define quién, en Paraguay, sale adelante con esto y quién mira desde afuera.',
  },
  {
    text: 'Morben es lo que falta en el medio. Nos sentamos con vos, entendemos cómo funciona tu empresa de verdad, y construimos operación nueva donde realmente duele. Plazo, precio y métrica de éxito cerrados antes de cotizar.',
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
