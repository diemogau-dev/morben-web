import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { PageHero } from '@/components/sections/PageHero'
import { Reveal } from '@/components/motion/Reveal'
import { DiagnosticoForm } from '@/components/forms/DiagnosticoForm'

export const metadata: Metadata = {
  title: 'Diagnóstico de Madurez Operativa',
  description:
    '27 preguntas para saber si tu empresa está lista para automatizar — y por dónde empezar. Descarga gratuita.',
}

const incluye = [
  '27 preguntas en cinco áreas: operación, datos, clientes, cobranza y equipo.',
  'Un puntaje de madurez operativa de 0 a 100.',
  'Una recomendación concreta de por dónde empezar según tu puntaje.',
]

export default function DiagnosticoPage() {
  return (
    <>
      <PageHero
        eyebrow="Lead magnet"
        title="Diagnóstico de Madurez Operativa para Empresas Paraguayas."
        subtitle="27 preguntas para saber si tu empresa está lista para automatizar — y por dónde empezar."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="font-sans text-[18px] leading-[1.65] text-muted md:text-[19px]">
                  Son las mismas preguntas que hacemos en las primeras reuniones con
                  dueños y gerentes generales antes de cotizar cualquier proyecto. Te
                  las dejamos en formato self-service para que las uses sin nosotros.
                </p>
                <ul className="mt-8 space-y-4">
                  {incluye.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      <span className="font-sans text-[16px] leading-[1.6] text-muted md:text-[17px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-sans text-[14px] leading-[1.6] text-hint">
                  Tiempo estimado: 12 a 15 minutos. Honestidad recomendada: máxima.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-border bg-surface/40 p-7 md:p-9">
                <p className="font-display text-[22px] font-semibold tracking-[-0.01em] text-offwhite">
                  Descargalo gratis
                </p>
                <p className="mt-2 font-sans text-[15px] leading-[1.6] text-muted">
                  Dejanos tus datos y te lo enviamos al instante.
                </p>
                <div className="mt-7">
                  <DiagnosticoForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
