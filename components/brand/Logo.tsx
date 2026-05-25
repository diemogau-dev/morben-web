type LogoVariant = 'default' | 'mono' | 'orange'

interface LogoProps {
  /** Font-size del wordmark en px. */
  size?: number
  variant?: LogoVariant
  className?: string
}

const PALETTE: Record<LogoVariant, { word: string; iso: string }> = {
  default: { word: '#F5F5F5', iso: '#FF5722' },
  mono: { word: '#F5F5F5', iso: '#F5F5F5' },
  orange: { word: '#FFFFFF', iso: '#FFFFFF' },
}

/**
 * Lockup oficial: wordmark "morben" + isótopo como punto final.
 * El isótopo mide 0.16em y se ancla a la baseline (réplica del brand kit).
 * Nunca se superpone al wordmark.
 */
export function Logo({ size = 28, variant = 'default', className }: LogoProps) {
  const { word, iso } = PALETTE[variant]

  return (
    <span
      className={`inline-flex items-baseline whitespace-nowrap font-display font-bold leading-none tracking-[-0.045em] ${className ?? ''}`}
      style={{ fontSize: size, color: word }}
      aria-label="morben"
    >
      morben
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '0.16em',
          height: '0.16em',
          marginLeft: '-0.24em',
          verticalAlign: 'baseline',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '100%' }}
        >
          <circle cx="50" cy="50" r="44" fill="none" stroke={iso} strokeWidth="6" />
          <ellipse cx="50" cy="50" rx="44" ry="20" fill="none" stroke={iso} strokeWidth="6" transform="rotate(45 50 50)" />
          <ellipse cx="50" cy="50" rx="44" ry="20" fill="none" stroke={iso} strokeWidth="6" transform="rotate(-45 50 50)" />
          <circle cx="50" cy="50" r="9" fill={iso} />
        </svg>
      </span>
    </span>
  )
}
