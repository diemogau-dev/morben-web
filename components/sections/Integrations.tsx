import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'

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
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface/50 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow>Integraciones</Eyebrow>
                <h2 className={`mt-5 ${displayL}`}>
                  Sin reemplazos. Sobre los sistemas que ya tenés.
                </h2>
                <p className="mt-6 max-w-xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
                  No te vendemos un software más. Construimos arriba de lo que ya
                  pagaste y ya funciona. Tu ERP, tu CRM, tu WhatsApp, tus planillas,
                  tu canal de cobros. Conectamos con APIs cuando existen y trabajamos
                  sobre los datos cuando no.
                </p>
              </div>

              <ul className="flex flex-wrap content-start gap-3 lg:pt-2">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-lg border border-border/60 bg-carbon px-4 py-2.5 font-mono text-[13px] text-muted"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
