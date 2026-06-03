import type { BigNumber as BigNumberData } from '@/lib/content/cases'

export function BigNumber({ value, description }: BigNumberData) {
  return (
    <div>
      <p className="font-display text-[clamp(48px,7vw,88px)] font-semibold leading-none tracking-[-0.04em] text-offwhite">
        {value}
      </p>
      <p className="mt-4 max-w-xs font-sans text-[16px] leading-[1.5] text-muted">
        {description}
      </p>
    </div>
  )
}
