'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const PDF_PATH = '/diagnostico-madurez-operativa.pdf'

const schema = z.object({
  nombre: z.string().min(1, { message: 'Ingresá tu nombre.' }),
  email: z
    .string()
    .min(1, { message: 'Ingresá tu email.' })
    .email({ message: 'Ese email no parece válido.' }),
  empresa: z.string().min(1, { message: 'Ingresá el nombre de tu empresa.' }),
  cargo: z.string().min(1, { message: 'Ingresá tu cargo.' }),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-[15px] text-offwhite placeholder:text-hint focus:border-orange focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-carbon'
const labelClass = 'mb-2 block font-sans text-[14px] text-offwhite'
const errorClass = 'mt-1.5 font-sans text-[13px] text-orange-light'

function triggerDownload() {
  const a = document.createElement('a')
  a.href = PDF_PATH
  a.download = 'diagnostico-madurez-operativa.pdf'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export function DiagnosticoForm() {
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    try {
      await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
    } catch {
      /* best-effort: igual entregamos el PDF */
    } finally {
      setSubmitting(false)
      setDone(true)
      triggerDownload()
    }
  }

  if (done) {
    return (
      <div>
        <p className="font-sans text-[17px] leading-[1.6] text-offwhite">
          Listo. La descarga ya arrancó.
        </p>
        <p className="mt-3 font-sans text-[15px] leading-[1.6] text-muted">
          ¿No empezó?{' '}
          <button
            type="button"
            onClick={triggerDownload}
            className="text-orange transition-colors hover:text-orange-light"
          >
            Descargá el PDF acá.
          </button>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="d-nombre" className={labelClass}>
          Nombre
        </label>
        <input id="d-nombre" type="text" autoComplete="name" className={inputClass} {...register('nombre')} />
        {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
      </div>

      <div>
        <label htmlFor="d-email" className={labelClass}>
          Email
        </label>
        <input
          id="d-email"
          type="email"
          autoComplete="email"
          placeholder="tu@empresa.com.py"
          className={inputClass}
          {...register('email')}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="d-empresa" className={labelClass}>
          Empresa
        </label>
        <input id="d-empresa" type="text" autoComplete="organization" className={inputClass} {...register('empresa')} />
        {errors.empresa && <p className={errorClass}>{errors.empresa.message}</p>}
      </div>

      <div>
        <label htmlFor="d-cargo" className={labelClass}>
          Cargo
        </label>
        <input id="d-cargo" type="text" autoComplete="organization-title" className={inputClass} {...register('cargo')} />
        {errors.cargo && <p className={errorClass}>{errors.cargo.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-7 py-3.5 font-sans text-[16px] font-medium text-white transition-colors hover:bg-orange-light disabled:opacity-60"
      >
        {submitting ? 'Preparando...' : 'Descargar gratis'}
        <span aria-hidden="true">→</span>
      </button>

      <p className="font-sans text-[13px] text-hint">
        Te sumamos al newsletter para mandarte material como este. Te podés dar de baja
        cuando quieras.
      </p>
    </form>
  )
}
