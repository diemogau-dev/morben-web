import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium rounded-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-carbon'

const variants: Record<Variant, string> = {
  primary: 'bg-orange text-white hover:bg-orange-light',
  outline: 'border border-orange/40 text-offwhite hover:border-orange hover:text-orange',
  ghost: 'text-offwhite hover:text-orange',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-7 py-3.5 text-[16px]',
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
