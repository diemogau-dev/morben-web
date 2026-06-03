import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

const logos = [
  { src: '/logos/bristol.png', alt: 'Bristol', w: 600, h: 171 },
  { src: '/logos/codas-vuyk.png', alt: 'Codas Vuyk', w: 479, h: 102 },
  { src: '/logos/incentiva.png', alt: 'Incentiva', w: 355, h: 200 },
  { src: '/logos/loops.png', alt: 'Loops', w: 600, h: 194 },
  { src: '/logos/morado.png', alt: 'Morado', w: 319, h: 200 },
  { src: '/logos/pulsak.png', alt: 'Pulsak', w: 532, h: 200 },
  { src: '/logos/salon-market.png', alt: 'Salon Market', w: 600, h: 138 },
  { src: '/logos/codas-broker.png', alt: 'Codas Broker', w: 151, h: 86 },
  { src: '/logos/vagos.png', alt: 'Vagos', w: 600, h: 134 },
]

function LogoRow() {
  return (
    <ul
      className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
      aria-hidden="true"
    >
      {logos.map((logo) => (
        <li key={logo.src} className="shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-7 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
          />
        </li>
      ))}
    </ul>
  )
}

export function LogoMarquee() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Confianza</Eyebrow>
          <h2 className="mt-3 font-sans text-[15px] text-muted">
            Empresas con las que trabajamos.
          </h2>
        </div>
      </Container>

      <div className="marquee-mask group relative mt-12 flex overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  )
}
