import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { QualificationForm } from '@/components/forms/QualificationForm'

export const metadata: Metadata = {
  title: 'Agendar diagnóstico',
  description:
    'Construyamos tu operación con IA. Empecemos por entenderla: unos pocos datos para que la llamada arranque enfocada en lo que mueve la aguja en tu empresa.',
}

export default function AgendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Agendar diagnóstico"
        title="Construyamos tu operación con IA. Empecemos por entenderla."
        subtitle="Unos pocos datos sobre tu empresa para que la llamada arranque enfocada en lo que de verdad te mueve la aguja. Te toma menos de un minuto."
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <QualificationForm />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
