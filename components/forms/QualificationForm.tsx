'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { site } from '@/lib/site'

const RUBROS = [
  'Servicios financieros',
  'Aseguradoras',
  'Servicios profesionales',
  'Agronegocios y ganaderas',
  'Bienes raíces',
  'Retail e importadoras',
  'Clínicas y salud',
  'Otro',
]

const EMPLEADOS = ['Menos de 10', '10 a 50', '50 a 200', '200 a 500', 'Más de 500']

const FACTURACION = [
  'Menos de Gs. 500 millones',
  'Gs. 500 a 2.000 millones',
  'Gs. 2.000 a 10.000 millones',
  'Gs. 10.000 a 50.000 millones',
  'Más de Gs. 50.000 millones',
]

const AREAS = [
  'Administración',
  'Finanzas',
  'Contabilidad',
  'Ventas / Comercial',
  'Marketing',
  'Operaciones / Logística',
  'Atención al cliente',
  'Otro',
]

const schema = z.object({
  cargo: z.string().min(1, { message: 'Ingresá tu cargo.' }),
  empresa: z.string().min(1, { message: 'Ingresá el nombre de tu empresa.' }),
  rubro: z.string().min(1, { message: 'Elegí una opción.' }),
  whatsapp: z.string().min(6, { message: 'Ingresá tu WhatsApp con código de país.' }),
  empleados: z.string().min(1, { message: 'Elegí una opción.' }),
  facturacion: z.string().min(1, { message: 'Elegí una opción.' }),
  area: z.array(z.string()).min(1, { message: 'Elegí al menos un área.' }),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-[15px] text-offwhite placeholder:text-hint focus:border-orange focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-carbon'
const labelClass = 'mb-2 block font-sans text-[14px] text-offwhite'
const errorClass = 'mt-1.5 font-sans text-[13px] text-orange-light'

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor?: string
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

// Construye la URL del Calendly con los datos del form pre-cargados en las
// preguntas personalizadas (a1..a7). El orden debe coincidir con el orden de
// las preguntas configuradas en Calendly. Nombre y email los pide Calendly.
function buildCalendlyUrl(values: FormValues): string {
  const params = new URLSearchParams({
    a1: values.empresa,
    a2: values.cargo,
    a3: values.rubro,
    a4: values.empleados,
    a5: values.facturacion,
    a6: values.area.join(', '),
    a7: values.whatsapp,
    hide_gdpr_banner: '1',
  })
  return `${site.calendly}?${params.toString()}`
}

export function QualificationForm() {
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      rubro: '',
      empleados: '',
      facturacion: '',
      area: [],
    },
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    try {
      await fetch('/api/agendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
    } catch {
      /* la notificación es best-effort; igual llevamos al calendario */
    } finally {
      setSubmitting(false)
      setCalendlyUrl(buildCalendlyUrl(values))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (calendlyUrl) {
    return (
      <div>
        <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-semibold leading-[1.1] tracking-[-0.01em] text-offwhite text-balance">
          Estás a un paso de la conversación que puede cambiar cómo opera tu
          empresa.
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-[17px] leading-[1.6] text-muted md:text-[18px]">
          Te recibe uno de nuestros fundadores, en persona. Cuarenta y cinco
          minutos para mirar tu operación y salir con ideas concretas, no con una
          propuesta de venta. Elegí el horario que mejor te quede.
        </p>
        <div className="mt-10 overflow-hidden rounded-xl border border-border/60 bg-surface">
          <iframe
            src={calendlyUrl}
            title="Agendar diagnóstico con Morben"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-2xl space-y-6">
      <Field label="Cargo" htmlFor="cargo" error={errors.cargo?.message}>
        <input id="cargo" type="text" autoComplete="organization-title" className={inputClass} {...register('cargo')} />
      </Field>

      <Field label="Empresa" htmlFor="empresa" error={errors.empresa?.message}>
        <input id="empresa" type="text" autoComplete="organization" className={inputClass} {...register('empresa')} />
      </Field>

      <Field label="¿En qué rubro está tu empresa?" htmlFor="rubro" error={errors.rubro?.message}>
        <select id="rubro" className={inputClass} defaultValue="" {...register('rubro')}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {RUBROS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field label="WhatsApp con código país" htmlFor="whatsapp" error={errors.whatsapp?.message}>
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
        label="¿En qué área de tu empresa necesitás automatizar?"
        error={errors.area?.message}
      >
        <p className="mb-3 -mt-1 font-sans text-[13px] text-hint">
          Podés elegir más de una.
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {AREAS.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 font-sans text-[15px] text-offwhite transition-colors hover:border-orange/50 has-[:checked]:border-orange has-[:checked]:bg-orange/5"
            >
              <input
                type="checkbox"
                value={opt}
                className="h-4 w-4 shrink-0 accent-orange"
                {...register('area')}
              />
              {opt}
            </label>
          ))}
        </div>
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
