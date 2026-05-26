import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'
import { CaseSection } from '@/components/cases/CaseSection'
import { BigNumber } from '@/components/cases/BigNumber'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { cases, getCase } from '@/lib/content/cases'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCase(params.slug)
  if (!study) return {}
  return {
    title: study.meta.title,
    description: study.meta.description,
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug)
  if (!study) notFound()

  return (
    <>
      <section className="pt-36 md:pt-44">
        <Container>
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow>{study.eyebrowTag}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className={cn('mt-5', displayL)}>{study.headline}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl font-sans text-[18px] leading-[1.6] text-muted md:text-[20px]">
                {study.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-[0.1em] text-hint">
                {study.chips.map((chip, i) => (
                  <span key={chip} className="flex items-center gap-3">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[800px]">
            {study.sections.map((section, i) => (
              <CaseSection key={i} section={section} />
            ))}
          </div>
        </Container>
      </section>

      {/* Resultado */}
      <section className="border-t border-border/60 bg-surface/40 py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>{study.resultEyebrow}</Eyebrow>
          </Reveal>
          <div
            className={cn(
              'mt-10 grid grid-cols-1 gap-x-10 gap-y-12',
              study.results.length === 1 && 'md:grid-cols-1',
              study.results.length === 3 && 'md:grid-cols-3',
              study.results.length === 4 && 'grid-cols-2 lg:grid-cols-4',
            )}
          >
            {study.results.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <BigNumber value={r.value} description={r.description} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 max-w-[680px] space-y-4">
            {study.resultBody.map((p, i) => (
              <Reveal key={i}>
                <p className="font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock heading={study.closing.heading} body={study.closing.body} />
    </>
  )
}
