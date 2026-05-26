import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  size?: 'l' | 'm'
  className?: string
  subtitleClassName?: string
}

export const displayL =
  'font-display font-semibold text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.02em] text-offwhite text-balance'
export const displayM =
  'font-display font-semibold text-[clamp(28px,3.5vw,40px)] leading-[1.1] tracking-[-0.01em] text-offwhite text-balance'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  size = 'l',
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto flex max-w-3xl flex-col items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={cn(size === 'l' ? displayL : displayM, eyebrow && 'mt-5')}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'mt-6 max-w-2xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]',
              align === 'center' && 'mx-auto',
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
