import Link from 'next/link'
import type { Industry } from '@/lib/content/industries'

export function IndustryTile({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industrias/${industry.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border/40 p-8 transition-colors duration-300 hover:border-border hover:bg-surface/60"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange">
        {industry.index} / Industria
      </span>
      <h3 className="mt-4 font-display text-[22px] font-semibold leading-[1.15] tracking-[-0.01em] text-offwhite md:text-[24px]">
        {industry.name}
      </h3>
      <p className="mt-4 flex-1 font-sans text-[15px] leading-[1.6] text-muted transition-colors group-hover:text-offwhite/80">
        {industry.pain}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 font-sans text-[14px] text-hint transition-colors group-hover:text-orange">
        Ver más
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  )
}
