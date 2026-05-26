import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading, displayM } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'

const products = [
  {
    number: '01',
    name: 'Asistente operativo',
    subtitle: 'La información que tu equipo busca, en segundos.',
    body: 'Tu equipo pierde horas todos los días buscando información que vive dispersa en planillas, correos viejos, archivos compartidos y la cabeza de alguien. Construimos un asistente interno que centraliza el conocimiento de tu empresa y lo entrega en segundos. La normativa, los productos, los datos del cliente, el histórico de cada operación. Todo accesible desde donde tu equipo ya trabaja: WhatsApp, Teams, navegador.',
    para: 'Para: oficiales de crédito, asesores comerciales, atención al cliente, contadores, equipo legal interno, agentes de seguros.',
  },
  {
    number: '02',
    name: 'Inteligencia comercial',
    subtitle: 'Dejá de tratar a todos tus clientes por igual.',
    body: 'Estás contactando a toda tu base de la misma forma. A los que no van a comprar y a los que sí. A los que van a pagar y a los que no. El costo lo pagás siempre, el resultado no. Construimos sistemas que priorizan, segmentan y actúan: a quién contactar primero, qué decirle, por qué canal, en qué momento. Cobranza inteligente, recuperación de clientes dormidos, follow-up que no se cae.',
    para: 'Para: cooperativas, financieras, retail con cuenta corriente, importadoras, aseguradoras, ecommerce.',
  },
  {
    number: '03',
    name: 'Procesamiento documental',
    subtitle: 'Lo que tomaba horas, pasa a minutos.',
    body: 'Pilas de PDFs. Carpetas crediticias. Pólizas. Facturas. Planillas Excel. Tu equipo dedica horas a leer, copiar, validar y trasladar información de un lado a otro. Construimos sistemas que extraen, estructuran y analizan documentos automáticamente. Lo que antes tomaba un día, queda listo en minutos, con los datos estructurados para tomar decisiones.',
    para: 'Para: análisis de carpetas crediticias, evaluación de pólizas, due diligence jurídica, reportes, gestión de expedientes.',
  },
]

export function Products() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Productos"
          title="Tres operaciones nuevas. Tres formas de empezar."
          subtitle="Cada implementación es a medida, pero la mayoría de los casos cae en uno de estos tres productos. Diagnosticamos primero, construimos después."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-10 lg:gap-16">
          {products.map((product, i) => (
            <Reveal key={product.number} delay={i * 0.08}>
              <div className="flex h-full flex-col">
                <span className="font-mono text-[13px] text-orange">{product.number}</span>
                <h3 className={`mt-4 ${displayM}`}>{product.name}</h3>
                <p className="mt-3 font-display text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-orange-light md:text-[19px]">
                  {product.subtitle}
                </p>
                <p className="mt-5 font-sans text-[16px] leading-[1.65] text-muted md:text-[17px]">
                  {product.body}
                </p>
                <p className="mt-6 font-sans text-[14px] leading-[1.6] text-hint">
                  {product.para}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <ButtonLink href="/casos" variant="outline" size="lg">
              Ver casos reales
              <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
