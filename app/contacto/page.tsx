import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ContactChannels } from '@/components/contact/ContactChannels'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Cuarenta y cinco minutos. Sin venderte nada.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuarenta y cinco minutos. Sin venderte nada."
        subtitle="Agendá una reunión de diagnóstico para entender si tu empresa está lista, y si nosotros somos los indicados. Te vamos a hacer algunas preguntas previas para asegurarnos de que el tiempo de los dos esté bien invertido."
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-xl border border-border/60 bg-surface">
              <iframe
                src={site.calendly}
                title="Agendar reunión de diagnóstico con Morben"
                className="h-[700px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border/60 py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Otros canales</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10">
              <ContactChannels />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
