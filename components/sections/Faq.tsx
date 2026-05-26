'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'

const faqs = [
  {
    q: '¿Mis datos están seguros? ¿A dónde van?',
    a: 'Tus datos son tuyos y se quedan dentro de tu empresa. Trabajamos dentro de tus propios sistemas y entornos, con accesos controlados y todo auditable: queda registro de qué se consultó, cuándo y para qué. No usamos la información de tu empresa para entrenar modelos de terceros, y definimos juntos qué datos toca cada automatización y quién puede verlos.',
  },
  {
    q: '¿Tienen que reemplazar los sistemas que ya usamos?',
    a: 'No. Construimos sobre lo que ya tenés y ya funciona: tu ERP, tu CRM, tu WhatsApp, tus planillas, tu canal de cobros. Nos conectamos por API cuando existe y trabajamos sobre los datos cuando no. No migramos nada que no haga falta.',
  },
  {
    q: '¿Cuánto tarda en estar funcionando?',
    a: 'La mayoría de las automatizaciones entran en producción en dos a siete semanas. Trabajamos en sprints cortos con demos en vivo, así ves avances reales cada semana, no una entrega gigante dentro de tres meses.',
  },
  {
    q: '¿Qué pasa si no funciona como esperábamos?',
    a: 'Antes de empezar cerramos juntos la métrica de éxito. Medimos contra eso en producción y ajustamos hasta que la automatización está impecable. Recién ahí pasamos a la siguiente. Si algo no mueve el número, no seguimos por seguir.',
  },
  {
    q: '¿Necesitamos un equipo técnico interno para usar esto?',
    a: 'No. Diseñamos cada sistema para que tu equipo lo use desde donde ya trabaja, sin aprender herramientas nuevas. Nosotros nos encargamos de la parte técnica, del mantenimiento y de la mejora continua.',
  },
  {
    q: '¿Cómo es el primer paso y cuánto cuesta?',
    a: 'El primer paso es una reunión de diagnóstico de cuarenta y cinco minutos, sin costo y sin venderte nada. Si tiene sentido avanzar, hacemos un workshop donde cerramos alcance, plazo y precio antes de escribir una sola línea de código. Sin sorpresas.',
  },
  {
    q: '¿La IA va a reemplazar a mi equipo?',
    a: 'No es el objetivo. Automatizamos lo repetitivo para que tu equipo dedique sus horas a lo que mueve la aguja: vender, decidir, atender bien al cliente que lo necesita. La gente queda para lo que la gente hace mejor.',
  },
]

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-carbon/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[18px] font-medium tracking-[-0.01em] text-carbon md:text-[20px]">
          {q}
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-2xl font-light text-orange transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 font-sans text-[16px] leading-[1.65] text-[#424242] md:text-[17px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="bg-offwhite py-24 text-carbon md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-carbon text-balance">
                Lo que casi todos preguntan antes de empezar.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div>
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
