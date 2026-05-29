import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { displayL } from '@/components/ui/SectionHeading'

const groups: { label: string; items: string[] }[] = [
  {
    label: 'Sistemas locales',
    items: [
      'ERPs locales',
      'Cores bancarios',
      'Sistemas contables',
      'Bancard',
      'DNIT',
      'IPS',
      'SET',
      'SIFEN',
    ],
  },
  {
    label: 'Canales',
    items: ['WhatsApp Business API', 'Email', 'Calendars'],
  },
  {
    label: 'Datos y archivos',
    items: ['Bases SQL', 'PDFs', 'Excel', 'Drive', 'Notion'],
  },
]

export function Integrations() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface/50 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow>Integraciones</Eyebrow>
                <h2 className={`mt-5 ${displayL}`}>
                  Sin reemplazos. Sobre los sistemas que ya tenés.
                </h2>
                <p className="mt-6 max-w-xl font-sans text-[18px] leading-[1.55] text-muted md:text-[20px]">
                  No te vendemos un software más. Construimos arriba de lo que ya
                  pagaste y ya funciona. Conectamos con APIs cuando existen y trabajamos
                  sobre los datos cuando no.
                </p>
              </div>

              <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border/60 bg-border/40">
                {groups.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-1 gap-4 bg-carbon px-6 py-6 sm:grid-cols-[140px_1fr] sm:gap-6 sm:py-7"
                  >
                    <p className="pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-orange">
                      {group.label}
                    </p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-[14px] text-muted transition-colors hover:text-offwhite"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
