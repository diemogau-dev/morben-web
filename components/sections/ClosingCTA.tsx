import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { displayL } from '@/components/ui/SectionHeading'
import { WhatsAppIcon } from '@/components/brand/WhatsAppIcon'
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
              Sentate a hablar con nosotros. Sin venderte nada. Solo para entender si
              tu empresa está lista, y si nosotros somos los indicados.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <ButtonLink href={site.agendar} variant="primary" size="lg">
                {cta.primary}
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${site.whatsapp}`}
                variant="outline"
                size="lg"
                external
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hablar por WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto my-20 h-px w-[60px] bg-orange" aria-hidden="true" />

        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-orange">
                Newsletter Morben
              </p>
              <p className="mt-4 font-sans text-[16px] leading-[1.6] text-muted">
                Una vez por semana. Un caso real, un framework operativo, cero humo.
                Pensado para dueños y gerentes que están construyendo operación nueva.
              </p>
              <div className="mt-6 flex justify-center">
                <NewsletterForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
