import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { NewsletterForm } from '@/components/forms/NewsletterForm'

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Cómo se hace, contado por los que lo hacen. Una vez por quincena.',
}

const expect = [
  {
    number: '01',
    title: 'Un caso real',
    body: 'Cada quincena, un cliente, un problema, un sistema construido. Con números cuando los tenemos.',
  },
  {
    number: '02',
    title: 'Un framework',
    body: 'Una forma concreta de pensar tu operación. Aplicable la misma semana que lo leés.',
  },
  {
    number: '03',
    title: 'Cero ruido',
    body: 'No vamos a contarte qué pasó con OpenAI esta semana. No hace falta.',
  },
]

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Cómo se hace, contado por los que lo hacen."
        subtitle="Una vez por quincena. Un caso real, un framework operativo, cero humo. Pensado para dueños y gerentes de empresas medianas que ya están cansados del ruido."
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[480px]">
              <NewsletterForm label="Tu email de trabajo" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border/60 py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Qué esperar</Eyebrow>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {expect.map((item, i) => (
              <Reveal key={item.number} delay={i * 0.08}>
                <div>
                  <span className="font-mono text-[13px] text-orange">{item.number}</span>
                  <h3 className="mt-3 font-display text-[22px] font-semibold tracking-[-0.01em] text-offwhite">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-[16px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border/60 py-20 md:py-28">
        <Container>
          <Eyebrow>Ediciones anteriores</Eyebrow>
          <p className="mt-6 max-w-xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
            Pronto. La primera edición sale este mes.
          </p>
        </Container>
      </section>
    </>
  )
}
