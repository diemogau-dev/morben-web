import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ButtonLink } from '@/components/ui/Button'
import { displayL, displayM } from '@/components/ui/SectionHeading'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { site, cta } from '@/lib/site'

export function ClosingCTA() {
  return (
    <section className="bg-surface py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <h2 className={displayL}>
              ¿Querés ser el que toma la decisión correcta antes que el resto?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-2xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
              Sentate a hablar con nosotros. Cuarenta y cinco minutos. Sin venderte
              nada. Solo para entender si tu empresa está lista — y si nosotros
              somos los indicados.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <ButtonLink href={site.calendly} variant="primary" size="lg" external>
                {cta.primary}
                <span aria-hidden="true">→</span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto my-20 h-px w-[60px] bg-orange" aria-hidden="true" />

        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Newsletter</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className={`mt-5 ${displayM}`}>
              Cómo se hace, contado por los que lo hacen.
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]">
              Una vez por quincena. Un caso real, un framework operativo, cero humo.
              Pensado para dueños y gerentes de empresas medianas.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 w-full">
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
