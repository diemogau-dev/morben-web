import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'

const paragraphs: { text: string; emphasis: boolean }[] = [
  { text: 'Construiste algo que funciona.', emphasis: true },
  { text: 'Una empresa que crece. Un equipo que empuja. Números que cierran.', emphasis: false },
  {
    text: 'Pero adentro, el caos está cerca. Los procesos críticos viven en la cabeza de tres personas. Si una falta, algo se atrasa. Los reportes salen los domingos a la noche.',
    emphasis: false,
  },
  {
    text: 'El problema no es que falte tecnología. Tecnología sobra. Lo que falta es alguien que se siente con vos, entienda cómo funciona tu empresa de verdad, y construya automatizaciones donde realmente duele.',
    emphasis: true,
  },
]

export function ManifestoExcerpt() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <Eyebrow>Por qué Morben</Eyebrow>
          </Reveal>

          <div className="mt-8 space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={`font-display text-[clamp(22px,3vw,30px)] font-medium leading-[1.3] tracking-[-0.01em] ${
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
              Leer el manifiesto completo
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
