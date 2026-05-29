import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBlock } from '@/components/sections/CtaBlock'
import { FounderCard } from '@/components/team/FounderCard'
import { team } from '@/lib/content/team'

export const metadata: Metadata = {
  title: 'Equipo',
  description:
    'Cuatro fundadores ejecutando. El que te vende es el que ejecuta. Sin equipo junior intermediando.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="El equipo Morben."
        subtitle={
          <>
            Morben está fundada por cuatro operadores con más de cuarenta años
            combinados construyendo, vendiendo y operando negocios en Paraguay y la
            región. Pasamos por agencias, marketplaces, fintech, retail y software
            enterprise. Vimos por dentro lo que cuesta hacer crecer una empresa con
            sistemas que no se hablan, equipos que no escalan, y proveedores que
            prometen más de lo que entregan.
          </>
        }
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {team.map((founder, i) => (
              <FounderCard key={founder.slug} founder={founder} reversed={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="¿Querés sentarte con nosotros?"
        body="Cuarenta y cinco minutos. Sin venderte nada. Solo para entender si tu empresa está lista, y si nosotros somos los indicados."
      />
    </>
  )
}
