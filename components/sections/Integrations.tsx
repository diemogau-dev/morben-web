import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const chips = [
  'ERPs locales',
  'WhatsApp Business API',
  'Bancard',
  'DNIT',
  'IPS',
  'SET',
  'SIFEN',
  'Cores bancarios',
  'Sistemas contables',
  'Drive',
  'Notion',
  'Email',
  'Calendars',
  'PDFs',
  'Excel',
  'Bases SQL',
  'APIs REST y GraphQL',
]

export function Integrations() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Integraciones"
            title="Sin reemplazos. Sobre los sistemas que ya tenés."
            subtitle="No te vendemos un software más. Construimos arriba de lo que ya pagaste y ya funciona — tu ERP, tu CRM, tu WhatsApp, tus planillas, tu canal de cobros. Conectamos con APIs cuando existen y trabajamos sobre los datos cuando no."
          />

          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-3 lg:pt-4">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-lg bg-surface px-4 py-2.5 font-mono text-[13px] text-muted"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
