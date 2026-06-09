import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'

const benefits = [
  'Cada solución ordena y enriquece tus datos, y eso vuelve más valiosa a la próxima.',
  'Cada agente nuevo hereda el contexto de los que ya están andando: más ROI en toda la operación.',
  'Cada implementación toma menos tiempo, porque la base ya está construida y probada.',
]

// Posiciones de cada "solución" sobre la curva (porcentaje dentro del cuadro 4:3).
// Calculadas sobre la cubic-bezier M 50 250 C 150 250, 240 200, 380 30 en t = 0.2 / 0.45 / 0.7 / 0.9.
const nodes = [
  { rank: '1ra', x: 27.25, y: 81 },
  { rank: '2da', x: 46, y: 71 },
  { rank: '3ra', x: 66.5, y: 50.7 },
  { rank: '4ta', x: 84.75, y: 25.7 },
]

function CompoundingChart() {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl border border-carbon/10 bg-white p-2 shadow-[0_24px_60px_-30px_rgba(14,14,16,0.35)]">
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Grilla suave */}
        {[75, 150, 225].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#0E0E10" strokeOpacity="0.06" />
        ))}
        {[100, 200, 300].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#0E0E10" strokeOpacity="0.06" />
        ))}
        {/* Curva de crecimiento — arranca casi plana y se dispara arriba, como exponencial */}
        <path
          d="M 50 250 C 150 250, 240 200, 380 30"
          fill="none"
          stroke="#0E0E10"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Punta de flecha, alineada con la tangente final de la curva */}
        <path
          d="M 364 38 L 380 30 L 375 47"
          fill="none"
          stroke="#0E0E10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Nodos */}
      {nodes.map((node) => (
        <div
          key={node.rank}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-light to-orange-deep text-[15px] font-semibold text-white shadow-md md:h-12 md:w-12">
            {node.rank}
          </span>
          <span className="font-sans text-[11px] font-medium text-carbon/55">Solución</span>
        </div>
      ))}
    </div>
  )
}

export function Compounding() {
  return (
    <section className="bg-offwhite py-24 text-carbon md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Texto */}
          <div>
            <Reveal>
              <Eyebrow>La ventaja que se acumula</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-carbon text-balance">
                Cada caso de uso{' '}
                <span className="box-decoration-clone bg-gradient-to-r from-orange to-orange-deep bg-[length:100%_4px] bg-bottom bg-no-repeat pb-[6px]">
                  suma al siguiente
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl font-sans text-[17px] leading-[1.6] text-[#3A3A3A] md:text-[18px]">
                La primera solución toma semanas. La quinta, una fracción del
                tiempo. Cada una deja datos, conexiones y agentes que la siguiente
                reutiliza.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06}>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/12 text-orange">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-sans text-[16px] leading-[1.6] text-[#3A3A3A] md:text-[17px]">
                      {benefit}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Gráfico */}
          <Reveal delay={0.1}>
            <CompoundingChart />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
