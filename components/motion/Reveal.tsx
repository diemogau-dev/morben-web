'use client'

import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

const MotionTag = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  p: motion.p,
} as const

const EASE = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Tag = (MotionTag as Record<string, typeof motion.div>)[as as string] ?? motion.div

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}
