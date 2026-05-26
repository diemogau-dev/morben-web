import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const phases = [
  {
    number: '01',
    title: 'Workshop',
    body: 'Empezamos por entender. Nos sentamos contigo y tu equipo. Mapeamos procesos, datos, sistemas y cuellos de botella reales. Salimos del workshop con un plan concreto: qué automatizar primero, las herramientas a utilizar, qué impacto esperar, en qué orden ejecutar.',
  },
  {
    number: '02',
    title: 'Desarrollo',
    body: 'Construimos lo acordado en sprints de una a dos semanas, con demos en vivo a tu equipo. Si algo cambia, lo ajustamos en el sprint siguiente — no en una nueva propuesta de tres meses. Velocidad sobre todo.',
  },
  {
    number: '03',
    title: 'Implementación',
    body: 'Subimos el sistema a producción controlado por tu equipo y ya siendo parte de tu operación. Medimos al detalle lo que acordamos como métrica de éxito en el workshop. Ajustamos lo que haga falta. Cuando una automatización está impecable, pasamos a la siguiente.',
  },
  {
    number: '04',
    title: 'Optimización',
    body: 'A partir del sistema operando entramos en modo optimización continua. Monitoreamos, mejoramos, agregamos casos de uso nuevos, nuevas LLMs, herramientas. Tu sistema deja de ser un proyecto y pasa a ser parte del proceso operativo de la empresa y la cultura.',
  },
]

export function HowWeWork() {
  return (
    <section className="bg-surface/40 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Cuatro fases. Plazo cerrado. Métrica acordada antes de empezar."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 md:mt-20 md:grid-cols-2">
          {phases.map((phase, i) => (
            <Reveal key={phase.number} delay={(i % 2) * 0.08}>
              <div className="flex gap-6 border-t border-border/60 pt-8">
                <span className="font-display text-[clamp(40px,5vw,56px)] font-semibold leading-none tracking-[-0.03em] text-orange/90">
                  {phase.number}
                </span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold tracking-[-0.01em] text-offwhite md:text-[28px]">
                    {phase.title}
                  </h3>
                  <p className="mt-4 max-w-md font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]">
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
