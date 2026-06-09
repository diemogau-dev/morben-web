import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IndustryTile } from '@/components/sections/IndustryTile'
import { industries, verticals } from '@/lib/content/industries'

export const metadata: Metadata = {
  title: 'Industrias',
  description:
    'Trabajamos con empresas paraguayas de servicios financieros, aseguradoras, retail, agronegocios, bienes raíces, servicios profesionales y salud.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrias"
        title="Distinto rubro, los mismos tres frentes."
        subtitle="Cambia la industria, pero el dolor operativo casi siempre cae en uno de estos tres frentes. Primero te mostramos cuáles son; después, cómo se ven en tu rubro."
      />

      {/* Las tres verticales — fondo claro para romper el negro */}
      <section className="mt-24 bg-offwhite py-24 text-carbon md:mt-32 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>En qué trabajamos</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-carbon text-balance">
              Tres frentes donde casi siempre está la plata.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl font-sans text-[16px] leading-[1.65] text-[#3A3A3A] md:text-[17px]">
              Cada implementación es a medida, pero la mayoría de los proyectos
              arranca por uno de estos tres frentes. Diagnosticamos primero,
              construimos después.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3">
            {verticals.map((vertical, i) => (
              <Reveal key={vertical.index} delay={i * 0.08}>
                <div className="flex h-full flex-col border-t border-carbon/15 pt-7">
                  <span className="font-mono text-[13px] text-orange">{vertical.index}</span>
                  <h3 className="mt-4 font-display text-[22px] font-semibold leading-[1.15] tracking-[-0.01em] text-carbon md:text-[24px]">
                    {vertical.name}
                  </h3>
                  <p className="mt-3 font-display text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-orange-deep">
                    {vertical.tagline}
                  </p>
                  <p className="mt-4 font-sans text-[15px] leading-[1.6] text-[#3A3A3A] md:text-[16px]">
                    {vertical.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Listado de rubros */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Rubros"
            title="Y así se ven en tu industria."
            subtitle="Estos son los rubros donde estamos viendo el mejor encaje entre dolor operativo, capacidad de inversión y velocidad de decisión. Entrá al tuyo y mirá los problemas concretos que resolvemos."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 0.06} className="h-full">
                <IndustryTile industry={industry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock heading="¿Tu rubro está acá? Hablemos." />
    </>
  )
}
