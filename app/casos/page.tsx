import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { Reveal } from '@/components/motion/Reveal'
import { CaseCard } from '@/components/cases/CaseCard'
import { cases } from '@/lib/content/cases'

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Casos reales con números reales. Sin maquillar, sin promesas. Empresas paraguayas que ya están operando distinto con IA.',
}

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="Empresas que ya están operando distinto."
        subtitle="Casos reales con números reales. Sin maquillar, sin promesas."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cases.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.08} className="h-full">
                <CaseCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock heading="¿Tu empresa tiene un proceso similar?" />
    </>
  )
}
