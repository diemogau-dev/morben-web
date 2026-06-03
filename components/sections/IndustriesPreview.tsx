import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IndustryTile } from '@/components/sections/IndustryTile'
import { industries } from '@/lib/content/industries'

export function IndustriesPreview() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Industrias"
          title="Trabajamos con empresas de estos rubros."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 3) * 0.06} className="h-full">
              <IndustryTile industry={industry} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
