'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'

const faqs = [
  {
    q: '¿Por qué confiar en ustedes si son nuevos como marca?',
    a: 'Morben es nuevo. Los cuatro fundadores no. Llevamos más de una década construyendo software, marketplaces, agencias y plataformas para empresas paraguayas. Sabemos por dentro cómo se decide, cómo se compra y dónde se rompe la confianza. Lo que cambia con Morben es el foco: dejamos de hacer software a medida y nos dedicamos a construir operación nueva con IA.',
  },
  {
    q: '¿Cuánto cuesta empezar?',
    a: 'Cada operación es distinta. La llamada de diagnóstico es gratuita y filtrada: solo trabajamos con empresas medianas y grandes en proyectos serios, no atendemos consultas puntuales. En esa primera conversación entendemos tu operación y, si tiene sentido para ambos, te proponemos un alcance con plazo cerrado y precio cerrado. Sin sorpresas, sin scope abierto, sin facturación por hora.',
  },
  {
    q: '¿Cuánto tarda en estar funcionando?',
    a: 'Nuestro ciclo de construcción es de cuatro a siete semanas, dependiendo del producto. El calendario total de kick-off a producción depende también de tu equipo: disponibilidad de datos, accesos de IT, decisiones internas. Eso lo medimos por separado y lo dejamos claro antes de empezar.',
  },
  {
    q: '¿Tengo que reemplazar los sistemas que ya uso?',
    a: 'No. Construimos arriba de lo que ya tenés. Tu ERP, tu CRM, tu WhatsApp, tus planillas, tu canal de cobros. Conectamos con APIs cuando existen y trabajamos sobre los datos cuando no. La regla es: cero migraciones, cero reemplazos.',
  },
  {
    q: '¿Qué pasa si mi equipo de IT no nos da los accesos a tiempo?',
    a: 'Es una de las trabas más comunes. Por eso separamos dos cronogramas: nuestro ciclo de construcción (lo que dependemos de nosotros) y el calendario total (lo que depende de tu equipo). Te ayudamos a desbloquear a IT desde la fase de diagnóstico, pero esos plazos los manejás vos. Sin esa claridad arriba de la mesa, prometer "4 semanas a producción" sería deshonesto.',
  },
  {
    q: '¿Necesito un equipo técnico interno para usar esto?',
    a: 'No. Todo lo que entregamos lo usa tu equipo operativo desde donde ya trabaja: WhatsApp, navegador, herramientas que ya conocen. Tu IT participa solo en accesos e integraciones, no en mantenimiento diario.',
  },
  {
    q: '¿Mis datos están seguros? ¿A dónde van?',
    a: 'Tus datos son tuyos y se quedan dentro de tu empresa. Trabajamos dentro de tus propios sistemas y entornos, con accesos controlados y todo auditable. No usamos la información de tu empresa para entrenar modelos de terceros. Definimos juntos qué datos toca cada automatización y quién puede verlos.',
  },
  {
    q: '¿La IA va a reemplazar a mi equipo?',
    a: 'No. Tu equipo deja de hacer lo repetitivo y se dedica a lo que mueve la aguja. La gente que hoy carga datos a mano pasa a tomar decisiones con datos limpios. La gente que hoy persigue información pasa a usarla. Lo que se elimina son las tareas, no las personas.',
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
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[18px] font-medium tracking-[-0.01em] text-offwhite md:text-[20px]">
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
            <p className="max-w-2xl pb-6 font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]">
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
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Preguntas</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-offwhite text-balance">
                Lo que la mayoría se pregunta antes de empezar.
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
