import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { CaseCard } from '@/components/cases/CaseCard'
import { cases } from '@/lib/content/cases'

export function CasesPreview() {
  const featured = cases.slice(0, 3)

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Casos"
          title="Empresas que ya están operando distinto."
          subtitle="Operación nueva, en producción, en empresas paraguayas reales."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          {featured.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08} className="h-full">
              <CaseCard study={study} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/casos" variant="outline" size="lg">
              Ver todos los casos
              <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
