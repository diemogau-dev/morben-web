import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.16em] text-orange',
        className,
      )}
    >
      {children}
    </span>
  )
}
