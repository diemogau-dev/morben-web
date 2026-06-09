import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { CaseCard } from '@/components/cases/CaseCard'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayM } from '@/components/ui/SectionHeading'
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

      <section className="pt-16 md:pt-24">
        <Container>
          <div className="mx-auto max-w-[820px] space-y-16 md:space-y-20">
            <Reveal>
              <div>
                <Eyebrow>El problema</Eyebrow>
                <h2 className={`mt-5 ${displayM}`}>{industry.problem.heading}</h2>
                <p className="mt-6 font-sans text-[17px] leading-[1.7] text-muted md:text-[18px]">
                  {industry.problem.body}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-border border-l-2 border-l-orange bg-surface/40 p-8 md:p-10">
                <Eyebrow>Lo que aprendimos</Eyebrow>
                <h2 className="mt-4 font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-offwhite md:text-[26px]">
                  {industry.learned.heading}
                </h2>
                <p className="mt-5 font-sans text-[17px] leading-[1.7] text-muted md:text-[18px]">
                  {industry.learned.body}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <Eyebrow>Cómo lo resolvemos</Eyebrow>
                <h2 className={`mt-5 ${displayM}`}>{industry.solution.heading}</h2>
                <p className="mt-6 font-sans text-[17px] leading-[1.7] text-muted md:text-[18px]">
                  {industry.solution.body}
                </p>
                <ul className="mt-8 space-y-3">
                  {industry.solution.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 font-sans text-[17px] leading-[1.6] text-offwhite/90 md:text-[18px]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-20 bg-offwhite py-20 text-carbon md:mt-28 md:py-28">
        <Container>
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <Eyebrow>Resultados</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.1] tracking-[-0.01em] text-carbon text-balance">
                {industry.results.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl font-sans text-[17px] leading-[1.65] text-[#3A3A3A] md:text-[18px]">
                {industry.results.body}
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-carbon/10 border-y border-carbon/10">
              {industry.results.outcomes.map((outcome, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <li className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-[17px] font-medium leading-[1.5] text-carbon md:text-[18px]">
                      {outcome}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
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
