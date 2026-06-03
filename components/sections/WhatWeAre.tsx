import { Check, X } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const rows: { not: string; yes: string }[] = [
  {
    not: 'Agencia de chatbots de WhatsApp con cuatro respuestas guionadas',
    yes: 'Operación nueva construida con IA, sobre tus sistemas',
  },
  {
    not: 'Consultora que entrega PowerPoints y desaparece',
    yes: 'Sistemas en producción con métrica acordada antes de cotizar',
  },
  {
    not: 'Software factory que cobra por hora con scope abierto',
    yes: 'Plazo cerrado, precio cerrado, alcance cerrado',
  },
  {
    not: 'Freelancer que se aprendió tres prompts',
    yes: 'Cuatro fundadores con equipo, metodología y accountability',
  },
  {
    not: 'Proveedor remoto sin contexto local',
    yes: 'Sentados en Asunción. Conocemos el mercado.',
  },
]

export function WhatWeAre() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Diferencia"
          title="Lo que NO somos. Lo que sí somos."
          subtitle="La mayoría dice cosas parecidas. Esto es lo que nos separa, sin diplomacia."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border md:mt-16">
            <div className="grid grid-cols-1 border-b border-border md:grid-cols-2">
              <p className="bg-surface/40 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-hint md:px-8">
                No somos
              </p>
              <p className="hidden bg-surface/40 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-orange md:block md:px-8">
                Sí somos
              </p>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 border-b border-border last:border-b-0 md:grid-cols-2"
              >
                <div className="flex items-start gap-3 px-6 py-6 md:border-r md:border-border md:px-8">
                  <X
                    className="mt-0.5 h-5 w-5 shrink-0 text-hint"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[16px] leading-[1.5] text-muted line-through decoration-hint/40 md:text-[17px]">
                    {row.not}
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-surface/20 px-6 py-6 md:bg-transparent md:px-8">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[16px] font-medium leading-[1.5] text-offwhite md:text-[17px]">
                    {row.yes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
