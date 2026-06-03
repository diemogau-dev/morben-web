import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Casos, frameworks operativos y aprendizajes de implementar IA en empresas paraguayas.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Pronto."
        subtitle="Estamos por publicar los primeros artículos. Mientras tanto, suscribite al newsletter para recibirlos primero."
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <ButtonLink href="/newsletter" variant="outline" size="lg">
              Suscribirme al newsletter
              <span aria-hidden="true">→</span>
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
