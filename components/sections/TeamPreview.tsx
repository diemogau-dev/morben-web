import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'
import { team } from '@/lib/content/team'

export function TeamPreview() {
  const featured = team[0]

  return (
    <section className="bg-surface/40 py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl">
              <Image
                src={featured.photo}
                alt={featured.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Equipo</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className={`mt-5 ${displayL}`}>Cuatro fundadores. Una sola mesa.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
                Operadores con más de cuarenta años combinados construyendo,
                vendiendo y operando empresas. Sin equipo junior intermediando. El
                que te vende es el que ejecuta.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4 border-t border-border/60 pt-8">
                {team.map((member) => (
                  <li
                    key={member.slug}
                    className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="font-display text-[17px] font-medium text-offwhite">
                      {member.firstName} {member.lastName}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-hint">
                      {member.role}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/equipo"
                className="mt-10 inline-flex items-center gap-2 font-sans text-[16px] text-orange transition-colors hover:text-orange-light"
              >
                Conocer al equipo
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
