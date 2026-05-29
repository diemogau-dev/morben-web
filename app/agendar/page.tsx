import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { QualificationForm } from '@/components/forms/QualificationForm'

export const metadata: Metadata = {
  title: 'Agendar diagnóstico',
  description:
    'Antes de agendar, necesitamos entender tu empresa. Solo trabajamos con empresas medianas y grandes en proyectos serios.',
}

export default function AgendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Agendar diagnóstico"
        title="Antes de agendar, necesitamos entender tu empresa."
        subtitle="Solo trabajamos con empresas medianas y grandes en proyectos serios. Estas preguntas nos permiten saber si tiene sentido que nos sentemos."
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
