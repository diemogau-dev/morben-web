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
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div variants={item} custom={0} initial="hidden" animate="show">
            <Eyebrow>Sistemas con IA para empresas paraguayas</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            custom={0.2}
            initial="hidden"
            animate="show"
            className="mt-6 font-display font-semibold text-[clamp(40px,8vw,96px)] leading-[1.04] tracking-[-0.03em] text-offwhite text-balance"
          >
            {site.heroTitle}
          </motion.h1>

          <motion.p
            variants={item}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-2xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]"
          >
            Creamos soluciones a medida para eliminar trabajo manual, conectar
            información y acelerar procesos críticos sin reemplazar nada de lo
            que hoy funciona.
          </motion.p>

          <motion.div
            variants={item}
            custom={0.6}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row sm:justify-center"
          >
            <ButtonLink
              href={site.agendar}
              variant="primary"
              size="lg"
              className="shadow-lg shadow-orange/25"
            >
              {cta.primary}
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink
              href="#como-trabajamos"
              variant="ghost"
              size="lg"
              className="text-muted hover:text-offwhite"
            >
              Cómo trabajamos
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
