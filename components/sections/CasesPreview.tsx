import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CaseCard } from '@/components/cases/CaseCard'
import { cases } from '@/lib/content/cases'

export function CasesPreview() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Casos"
          title="Empresas que ya están operando distinto."
          subtitle="Casos reales, con números reales. Sin maquillar, sin promesas."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {cases.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08} className="h-full">
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
