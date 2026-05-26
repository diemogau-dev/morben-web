import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'

const phases = [
  {
    number: '01',
    title: 'Diagnóstico',
    body: 'Empezamos por entender. Nos sentamos con vos y tu equipo. Mapeamos procesos, datos, sistemas y cuellos de botella reales. Salimos del diagnóstico con un plan concreto: qué automatizar primero, qué impacto esperar, en qué orden ejecutar, con plazo y precio cerrado.',
  },
  {
    number: '02',
    title: 'Desarrollo',
    body: 'Construimos lo acordado en sprints de una a dos semanas, con demos en vivo. Si algo cambia, lo ajustamos en el sprint siguiente, no en una nueva propuesta de tres meses. Velocidad sobre todo.',
  },
  {
    number: '03',
    title: 'Implementación',
    body: 'Subimos el sistema a producción dentro de tu operación. Medimos la métrica de éxito acordada en el diagnóstico. Ajustamos lo que haga falta. Cuando una automatización está impecable, pasamos a la siguiente.',
  },
  {
    number: '04',
    title: 'Optimización',
    body: 'Tu sistema deja de ser un proyecto y pasa a ser parte de la operación. Monitoreamos, mejoramos, agregamos nuevos casos de uso, integramos nuevos modelos cuando aparecen. Tu operación se vuelve más rápida cada mes.',
  },
]

export function HowWeWork() {
  return (
    <section
      id="como-trabajamos"
      className="scroll-mt-20 bg-offwhite py-24 text-carbon md:py-32 lg:py-40"
    >
      <Container>
        <Reveal>
          <Eyebrow>Cómo trabajamos</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-carbon text-balance">
            Cuatro fases. Plazo cerrado. Métrica acordada antes de empezar.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 md:mt-20 md:grid-cols-2">
          {phases.map((phase, i) => (
            <Reveal key={phase.number} delay={(i % 2) * 0.08}>
              <div className="flex gap-6 border-t border-carbon/10 pt-8">
                <span className="font-display text-[clamp(40px,5vw,56px)] font-semibold leading-none tracking-[-0.03em] text-orange">
                  {phase.number}
                </span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold tracking-[-0.01em] text-carbon md:text-[28px]">
                    {phase.title}
                  </h3>
                  <p className="mt-4 max-w-md font-sans text-[16px] leading-[1.65] text-[#424242] md:text-[17px]">
                    {phase.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
