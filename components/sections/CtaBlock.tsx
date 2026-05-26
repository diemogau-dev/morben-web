import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { displayM } from '@/components/ui/SectionHeading'
import { site, cta } from '@/lib/site'

interface CtaBlockProps {
  heading: string
  body?: string
  secondary?: { label: string; href: string }
  bordered?: boolean
}

export function CtaBlock({ heading, body, secondary, bordered = true }: CtaBlockProps) {
  return (
    <section className={bordered ? 'border-t border-border/60' : undefined}>
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-24 text-center md:py-32">
          <Reveal>
            <h2 className={displayM}>{heading}</h2>
          </Reveal>
          {body && (
            <Reveal delay={0.05}>
              <p className="mt-6 max-w-2xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
                {body}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <ButtonLink href={site.agendar} variant="primary" size="lg">
                {cta.primary}
                <span aria-hidden="true">→</span>
              </ButtonLink>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center gap-2 font-sans text-[16px] text-muted transition-colors hover:text-orange"
                >
                  {secondary.label}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
