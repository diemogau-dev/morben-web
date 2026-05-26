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

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-orange">
                Newsletter Morben
              </p>
              <p className="mt-4 font-sans text-[16px] leading-[1.6] text-muted">
                Una vez por semana. Un caso real, un framework operativo, cero humo.
                Pensado para dueños y gerentes que están construyendo operación nueva.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-carbon/40 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-hint">
                Lead magnet
              </p>
              <p className="mt-4 font-sans text-[16px] leading-[1.6] text-muted">
                ¿Querés un anticipo? Descargá el{' '}
                <span className="text-offwhite">Diagnóstico de Madurez Operativa</span>:
                27 preguntas para saber si tu empresa está lista para automatizar — y
                por dónde empezar.
              </p>
              <div className="mt-auto pt-6">
                <ButtonLink href="/diagnostico" variant="primary">
                  Descargar gratis
                  <span aria-hidden="true">→</span>
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
