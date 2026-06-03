import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { CaseSection } from '@/components/cases/CaseSection'
import { CaseCard } from '@/components/cases/CaseCard'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { industries, getIndustry } from '@/lib/content/industries'
import { getCase } from '@/lib/content/cases'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug)
  if (!industry) return {}
  return {
    title: industry.name,
    description: industry.subtitle,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug)
  if (!industry) notFound()

  const relatedCases = industry.relatedCases
    .map((slug) => getCase(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <>
      <PageHero
        eyebrow={`Industria · ${industry.name}`}
        title={industry.headline}
        subtitle={industry.subtitle}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[800px]">
            <CaseSection
              section={{
                eyebrow: 'Cómo se ve hoy',
                heading: industry.statusQuo.heading,
                body: [industry.statusQuo.body],
              }}
            />
            <CaseSection
              section={{
                eyebrow: 'Qué automatizamos',
                heading: industry.whatWeAutomate.heading,
                body: [industry.whatWeAutomate.body],
                bullets: industry.whatWeAutomate.bullets,
              }}
            />
          </div>
        </Container>
      </section>

      {relatedCases.length > 0 && (
        <section className="border-t border-border/60 py-20 md:py-28">
          <Container>
            <Reveal>
              <Eyebrow>Caso relacionado</Eyebrow>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCases.map((study) => (
                <Reveal key={study.slug} className="h-full">
                  <CaseCard study={study} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBlock heading={`¿Operás en ${industry.name.toLowerCase()}? Hablemos.`} />
    </>
  )
}
