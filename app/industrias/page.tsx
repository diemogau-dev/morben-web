import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { Reveal } from '@/components/motion/Reveal'
import { IndustryTile } from '@/components/sections/IndustryTile'
import { industries } from '@/lib/content/industries'

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
        title="Trabajamos con empresas de estos rubros."
        subtitle="Estos son los rubros donde estamos viendo el mejor encaje entre dolor operativo, capacidad de inversión y velocidad de decisión. Si tu empresa está acá, lo más probable es que tengamos algo que decirte."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
