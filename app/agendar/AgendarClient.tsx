'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { QualificationForm } from '@/components/forms/QualificationForm'

export function AgendarClient() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {!submitted && (
        <PageHero
          eyebrow="Agendar diagnóstico"
          title="Construyamos tu operación con IA. Empecemos por entenderla."
          subtitle="Unos pocos datos sobre tu empresa para que la llamada arranque enfocada en lo que de verdad te mueve la aguja. Te toma menos de un minuto."
        />
      )}

      <section className={submitted ? 'pt-32 pb-16 md:pt-40 md:pb-24' : 'py-16 md:py-24'}>
        <Container>
          <Reveal>
            <QualificationForm onSubmitted={() => setSubmitted(true)} />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
