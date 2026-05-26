'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ButtonLink } from '@/components/ui/Button'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { site } from '@/lib/site'

const EMPLEADOS = ['Menos de 10', '10 a 50', '50 a 200', '200 a 500', 'Más de 500']
const FACTURACION = [
  'Menos de Gs. 500 millones',
  'Gs. 500 a 2.000 millones',
  'Gs. 2.000 a 10.000 millones',
  'Gs. 10.000 a 50.000 millones',
  'Más de Gs. 50.000 millones',
]
const PRESUPUESTO = [
  'Menos de Gs. 50 millones',
  'Gs. 50 a 150 millones',
  'Gs. 150 a 500 millones',
  'Más de Gs. 500 millones',
  'Lo necesario para optimizar operaciones',
]

const PERSONAL_EMAIL = /@(gmail|hotmail|yahoo)\./i

const schema = z.object({
  nombre: z.string().min(1, { message: 'Ingresá tu nombre completo.' }),
  cargo: z.string().min(1, { message: 'Ingresá tu cargo.' }),
  empresa: z.string().min(1, { message: 'Ingresá el nombre de tu empresa.' }),
  email: z
    .string()
    .min(1, { message: 'Ingresá tu email.' })
    .email({ message: 'Ese email no parece válido.' }),
  whatsapp: z.string().min(6, { message: 'Ingresá tu WhatsApp con código de país.' }),
  empleados: z.string().min(1, { message: 'Elegí una opción.' }),
  facturacion: z.string().min(1, { message: 'Elegí una opción.' }),
  presupuesto: z.string().min(1, { message: 'Elegí una opción.' }),
  mensaje: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-[15px] text-offwhite placeholder:text-hint focus:border-orange focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-carbon'
const labelClass = 'mb-2 block font-sans text-[14px] text-offwhite'
const errorClass = 'mt-1.5 font-sans text-[13px] text-orange-light'

type Result = 'qualified' | 'rejected'

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

export function QualificationForm() {
  const [result, setResult] = useState<Result | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      empleados: '',
      facturacion: '',
      presupuesto: '',
    },
  })

  const email = watch('email')
  const showEmailWarning = email && PERSONAL_EMAIL.test(email)

  const onSubmit = async (values: FormValues) => {
    const califica = !(
      values.empleados === EMPLEADOS[0] &&
      values.facturacion === FACTURACION[0] &&
      values.presupuesto === PRESUPUESTO[0]
    )

    setSubmitting(true)
    try {
      await fetch('/api/agendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, califica }),
      })
    } catch {
      /* la notificación es best-effort; igual mostramos el resultado */
    } finally {
      setSubmitting(false)
      setResult(califica ? 'qualified' : 'rejected')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (result === 'qualified') {
    return (
      <div>
        <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.1] tracking-[-0.01em] text-offwhite text-balance">
          Listo. Elegí el horario que te quede mejor.
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-[17px] leading-[1.6] text-muted md:text-[18px]">
          Uno de nuestros fundadores te va a recibir personalmente en la llamada.
          Cuarenta y cinco minutos. Sin venderte nada, solo para entender tu
          operación y ver si tenemos algo construible juntos.
        </p>
        <div className="mt-10 overflow-hidden rounded-xl border border-border/60 bg-surface">
          <iframe
            src={site.calendly}
            title="Agendar diagnóstico con Morben"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  if (result === 'rejected') {
    return (
      <div className="max-w-2xl">
        <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.1] tracking-[-0.01em] text-offwhite text-balance">
          Gracias por completar el formulario.
        </h2>
        <div className="mt-6 space-y-5 font-sans text-[17px] leading-[1.65] text-muted md:text-[18px]">
          <p>
            En este momento, Morben trabaja con empresas en proyectos de
            implementación de operaciones con IA. Por el tamaño de operación que
            describiste, probablemente nuestro enfoque no es el más adecuado para
            vos hoy.
          </p>
          <p>
            Si querés contarnos más sobre tu caso, podés escribirnos directamente a{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-orange transition-colors hover:text-orange-light"
            >
              {site.email}
            </a>
            . Lo leemos personalmente y te respondemos en 48 horas hábiles.
          </p>
          <p>
            También podés suscribirte al newsletter para mantenerte cerca y volver
            cuando tenga sentido.
          </p>
        </div>
        <div className="mt-8">
          <NewsletterForm />
        </div>
        <div className="mt-8">
          <ButtonLink href="/" variant="ghost">
            Volver al sitio
          </ButtonLink>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-2xl space-y-6">
      <Field label="Nombre completo" htmlFor="nombre" error={errors.nombre?.message}>
        <input id="nombre" type="text" autoComplete="name" className={inputClass} {...register('nombre')} />
      </Field>

      <Field label="Cargo" htmlFor="cargo" error={errors.cargo?.message}>
        <input id="cargo" type="text" autoComplete="organization-title" className={inputClass} {...register('cargo')} />
      </Field>

      <Field label="Empresa" htmlFor="empresa" error={errors.empresa?.message}>
        <input id="empresa" type="text" autoComplete="organization" className={inputClass} {...register('empresa')} />
      </Field>

      <Field label="Email corporativo" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="tu@empresa.com.py"
          className={inputClass}
          {...register('email')}
        />
        {showEmailWarning && !errors.email && (
          <p className="mt-1.5 font-sans text-[13px] text-orange-light">
            Preferimos email corporativo. Si solo tenés Gmail, podés continuar.
          </p>
        )}
      </Field>

      <Field
        label="WhatsApp con código país"
        htmlFor="whatsapp"
        error={errors.whatsapp?.message}
      >
        <input
          id="whatsapp"
          type="tel"
          autoComplete="tel"
          placeholder="+595 9XX XXX XXX"
          className={inputClass}
          {...register('whatsapp')}
        />
      </Field>

      <Field
        label="¿Cuántos empleados tiene tu empresa?"
        htmlFor="empleados"
        error={errors.empleados?.message}
      >
        <select id="empleados" className={inputClass} defaultValue="" {...register('empleados')}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {EMPLEADOS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="¿Cuál es la facturación anual estimada de tu empresa?"
        htmlFor="facturacion"
        error={errors.facturacion?.message}
      >
        <select id="facturacion" className={inputClass} defaultValue="" {...register('facturacion')}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {FACTURACION.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="¿Qué presupuesto estás dispuesto a invertir en automatización en los próximos 6 meses?"
        htmlFor="presupuesto"
        error={errors.presupuesto?.message}
      >
        <select id="presupuesto" className={inputClass} defaultValue="" {...register('presupuesto')}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {PRESUPUESTO.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="¿Qué te trae a Morben? (opcional)" htmlFor="mensaje">
        <textarea
          id="mensaje"
          rows={3}
          className={inputClass}
          placeholder="Contanos en dos o tres líneas qué querés resolver."
          {...register('mensaje')}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-7 py-3.5 font-sans text-[16px] font-medium text-white transition-colors hover:bg-orange-light disabled:opacity-60"
      >
        {submitting ? 'Enviando...' : 'Continuar'}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
