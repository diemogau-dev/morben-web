import Image from 'next/image'
import { Reveal } from '@/components/motion/Reveal'
import type { Founder } from '@/lib/content/team'
import { cn } from '@/lib/utils'

export function FounderCard({ founder, reversed }: { founder: Founder; reversed: boolean }) {
  return (
    <Reveal>
      <div
        className={cn(
          'grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16',
          reversed && 'md:[&>*:first-child]:order-2',
        )}
      >
        <div className="group relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl md:max-w-none">
          <Image
            src={founder.photo}
            alt={founder.alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.05] tracking-[-0.02em] text-offwhite">
            {founder.firstName} <span className="text-orange">{founder.lastName}</span>
          </h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-hint">
            {founder.role}
          </p>

          <div className="mt-8 space-y-4">
            {founder.bio.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>

          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${founder.firstName} ${founder.lastName}`}
              className="mt-8 inline-flex items-center gap-2 font-sans text-[14px] text-muted transition-colors hover:text-orange"
            >
              LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}
