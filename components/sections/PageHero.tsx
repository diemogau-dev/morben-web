import type { ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  subtitleClassName?: string
}

export function PageHero({ eyebrow, title, subtitle, subtitleClassName }: PageHeroProps) {
  return (
    <section className="pt-36 md:pt-44">
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className={cn('mt-5', displayL)}>{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p
                className={cn(
                  'mt-8 max-w-2xl font-sans text-[18px] leading-[1.6] text-muted md:text-[20px]',
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
