import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayM } from '@/components/ui/SectionHeading'
import type { CaseSection as CaseSectionData } from '@/lib/content/cases'
import { cn } from '@/lib/utils'

export function CaseSection({ section }: { section: CaseSectionData }) {
  const isQuote = section.variant === 'quote'

  return (
    <Reveal>
      <section className="border-t border-border/60 py-14 md:py-20">
        <Eyebrow>{section.eyebrow}</Eyebrow>

        <h2
          className={cn(
            'mt-5',
            displayM,
            isQuote && 'border-l-2 border-orange pl-6 italic',
          )}
        >
          {section.heading}
        </h2>

        {section.body && (
          <div className="mt-6 max-w-[680px] space-y-4">
            {section.body.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[17px] leading-[1.7] text-muted md:text-[18px]"
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {section.bullets && (
          <ul className="mt-8 max-w-[680px] space-y-3">
            {section.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 font-sans text-[17px] leading-[1.6] text-offwhite/90 md:text-[18px]"
              >
                <span aria-hidden="true" className="text-orange">
                  —
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {section.closingLine && (
          <p className="mt-8 max-w-[680px] font-display text-[20px] font-medium leading-[1.3] tracking-[-0.01em] text-offwhite md:text-[22px]">
            {section.closingLine}
          </p>
        )}

        {section.subBlocks && (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {section.subBlocks.map((sub, i) => (
              <div key={i} className="rounded-xl bg-surface p-8">
                <h3 className="font-mono text-[13px] uppercase tracking-[0.1em] text-orange">
                  {sub.title}
                </h3>
                <p className="mt-4 font-sans text-[16px] leading-[1.65] text-muted">
                  {sub.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </Reveal>
  )
}
