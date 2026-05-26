'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { ButtonLink } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { site, cta } from '@/lib/site'

const EASE = [0.16, 1, 0.3, 1] as const

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
}

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center pt-32 pb-24 md:min-h-[88vh]">
      <Container>
        <div className="max-w-4xl">
          <motion.div variants={item} custom={0} initial="hidden" animate="show">
            <Eyebrow>Operational AI Company · Paraguay</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="mt-6 font-display font-semibold text-[clamp(48px,7vw,96px)] leading-[1.02] tracking-[-0.03em] text-offwhite text-balance"
          >
            Automatizamos tu operación sobre los sistemas que ya tenés.
          </motion.h1>

          <motion.p
            variants={item}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-2xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]"
          >
            Tu equipo deja de cargar datos a mano, perseguir información y aprobar
            todo sobre la hora. Sin reemplazar nada de lo que ya funciona.
          </motion.p>

          <motion.div
            variants={item}
            custom={0.6}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <ButtonLink href={site.agendar} variant="primary" size="lg">
              {cta.primary}
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href="#como-trabajamos" variant="ghost" size="lg">
              Cómo trabajamos
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
