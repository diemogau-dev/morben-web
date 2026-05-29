import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy } from '@/lib/content/cases'

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/casos/${study.slug}`}
      className="group flex h-full flex-col rounded-xl bg-surface p-8 transition-colors duration-300 hover:bg-card md:p-10"
    >
      <div className="flex h-8 items-center">
        {study.logo ? (
          <Image
            src={study.logo}
            alt={study.client}
            width={200}
            height={64}
            className="h-6 w-auto opacity-70 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <span className="font-display text-lg font-semibold tracking-[-0.02em] text-offwhite/80">
            {study.client}
          </span>
        )}
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-hint">
        {study.preview.category}
      </p>

      <h3 className="mt-4 font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] text-offwhite md:text-[24px]">
        {study.preview.headline}
      </h3>

      <div className="mt-8 flex flex-1 flex-col justify-end">
        <p className="font-sans text-[15px] leading-[1.5] text-muted">
          {study.preview.result}
        </p>

        <span className="mt-8 inline-flex items-center gap-2 font-sans text-[15px] text-offwhite transition-colors group-hover:text-orange">
          Leer caso completo
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
