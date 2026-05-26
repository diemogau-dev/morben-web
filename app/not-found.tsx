import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { displayL } from '@/components/ui/SectionHeading'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-36 pb-24 md:pt-44">
      <Container>
        <div className="max-w-2xl">
          <h1 className={displayL}>Acá no hay nada todavía.</h1>
          <p className="mt-6 max-w-xl font-sans text-[18px] leading-[1.6] text-muted md:text-[20px]">
            La página que buscás no existe o se movió. Pero como ya estás acá, capaz
            te interese ver lo que sí.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/" variant="primary" size="lg">
              Volver al inicio
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 self-center font-sans text-[16px] text-muted transition-colors hover:text-orange"
            >
              Ver casos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
