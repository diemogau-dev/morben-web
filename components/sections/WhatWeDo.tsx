import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading, displayM } from '@/components/ui/SectionHeading'

const pillars = [
  {
    number: '01',
    title: 'Operación de la empresa',
    body: [
      'Tu equipo pierde horas todos los días buscando información que vive en archivos dispersos, planillas, correos viejos y la cabeza de alguien.',
      'Construimos agentes y sistemas RAG que centralizan el conocimiento de tu empresa y lo entregan al equipo en segundos. La normativa, los procesos, los datos de clientes, la historia de cada operación — todo accesible desde donde tu equipo ya trabaja.',
    ],
    footnote:
      'Aplicable a oficiales de crédito, asesores comerciales, atención al cliente, contadores, equipo legal interno, agentes de seguros.',
  },
  {
    number: '02',
    title: 'Gestión de clientes y ventas',
    body: [
      'Estás contactando a toda tu base por igual. A los que no van a comprar y a los que sí. A los que van a pagar y a los que no. El costo lo pagás siempre — el resultado, no.',
      'Construimos sistemas que priorizan, segmentan y actúan. Quién contactar primero, qué decirle, por qué canal, en qué momento. Cobranza inteligente, recuperación de clientes dormidos, follow-up que no se cae.',
    ],
    footnote:
      'Aplicable a cooperativas, financieras, retail con cuenta corriente, importadoras, aseguradoras, empresas de servicio recurrente.',
  },
  {
    number: '03',
    title: 'Procesamiento de datos y documentos',
    body: [
      'Pilas de PDFs. Carpetas crediticias. Pólizas. Facturas. Expedientes. Tu equipo dedica horas a leer, copiar, validar y trasladar información de un lado a otro.',
      'Construimos sistemas que extraen, estructuran y analizan documentos automáticamente. Scoring asistido, detección de red flags, redacción de informes. Lo que tomaba horas pasa a minutos — y los datos quedan estructurados para tomar decisiones.',
    ],
    footnote:
      'Aplicable a análisis de carpetas crediticias, evaluación de pólizas, due diligence jurídica, procesamiento de facturas, gestión de expedientes.',
  },
]

export function WhatWeDo() {
  return (
    <section className="bg-surface/40 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Tres frentes donde tu empresa pierde plata sin verla."
          subtitle="No vendemos paquetes cerrados. Diagnosticamos primero, construimos después. Pero la mayoría de los problemas operativos caen en alguno de estos tres frentes."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-10 lg:gap-16">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.08}>
              <div className="flex flex-col">
                <span className="font-mono text-[13px] text-orange">{pillar.number}</span>
                <h3 className={`mt-4 ${displayM}`}>{pillar.title}</h3>
                <div className="mt-5 space-y-4">
                  {pillar.body.map((p, j) => (
                    <p
                      key={j}
                      className="font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <p className="mt-6 font-sans text-[14px] leading-[1.6] text-hint">
                  {pillar.footnote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
