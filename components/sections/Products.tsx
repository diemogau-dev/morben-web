import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading, displayM } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'

const products = [
  {
    number: '01',
    name: 'Atención y captura comercial',
    subtitle: 'Cada cliente que escribe queda atendido, calificado y agendado. Sin pasar por una persona.',
    body: 'Tu equipo se la pasa contestando lo mismo todo el día. ¿Cuánto cuesta? ¿Tienen turno? ¿Cuándo me atienden? ¿Está disponible? Y los leads que sí van a comprar se mezclan con los curiosos, los que ya preguntaron mil veces y los que no van a cerrar nunca. Construimos un agente que atiende veinticuatro horas por WhatsApp, web o el canal que tu cliente ya usa. Filtra, califica, responde con la información de tu empresa y agenda directo en la agenda del que tiene que vender. Cuando el caso necesita un humano, escala automáticamente.',
    para: 'Para: filtrado y captación de leads, atención al cliente 24/7, agendamiento de turnos y visitas. Inmobiliarias, concesionarias, clínicas, servicios profesionales, ecommerce.',
  },
  {
    number: '02',
    name: 'Inteligencia comercial',
    subtitle: 'Dejá de tratar a todos tus clientes por igual.',
    body: 'Estás contactando a toda tu base de la misma forma. A los que no van a comprar y a los que sí. A los que van a pagar y a los que no. El costo lo pagás siempre, el resultado no. Construimos sistemas que priorizan, segmentan y actúan sobre tu base: a quién contactar primero, qué decirle, por qué canal, en qué momento. Cobranza inteligente, recuperación de clientes dormidos, follow-up que no se cae, campañas que apuntan a quien sí va a responder.',
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
          title="Tres frentes donde tu operación pierde plata todos los días."
          subtitle="Cada implementación es a medida, pero la mayoría de los casos cae en uno de estos tres frentes. Diagnosticamos primero, construimos después."
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
