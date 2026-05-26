interface IsotypeProps {
  size?: number
  color?: string
  className?: string
  title?: string
}

/**
 * Isótopo Morben, el "punto final" de la marca.
 * SVG fiel al brand kit: círculo + dos elipses rotadas ±45° + punto central.
 */
export function Isotype({
  size = 24,
  color = '#FF5722',
  className,
  title = 'Morben',
}: IsotypeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="6" />
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="20"
        fill="none"
        stroke={color}
        strokeWidth="6"
        transform="rotate(45 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="20"
        fill="none"
        stroke={color}
        strokeWidth="6"
        transform="rotate(-45 50 50)"
      />
      <circle cx="50" cy="50" r="9" fill={color} />
    </svg>
  )
}
