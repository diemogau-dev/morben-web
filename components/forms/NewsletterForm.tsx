'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Necesitamos tu email para suscribirte.' })
    .email({ message: 'Ese email no parece válido. ¿Lo querés revisar?' }),
})

type FormValues = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

interface NewsletterFormProps {
  label?: string
  className?: string
}

export function NewsletterForm({ label, className }: NewsletterFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (values: FormValues) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('max-w-md', className)}>
        <p className="font-sans text-[16px] text-offwhite">
          Listo. Te vamos a escribir pronto.
        </p>
      </div>
    )
  }

  return (
    <div className={cn('w-full max-w-md', className)}>
      {label && (
        <label
          htmlFor="newsletter-email"
          className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-hint"
        >
          {label}
        </label>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="flex-1">
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="tu@empresa.com.py"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email')}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-[15px] text-offwhite placeholder:text-hint focus:border-orange focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-xl bg-orange px-6 py-3 font-sans text-[15px] font-medium text-white transition-colors hover:bg-orange-light disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
        </button>
      </form>

      <div className="mt-3 min-h-[20px]" aria-live="polite">
        {errors.email && (
          <p className="font-sans text-[13px] text-orange-light">
            {errors.email.message}
          </p>
        )}
        {status === 'error' && !errors.email && (
          <p className="font-sans text-[13px] text-orange-light">
            Algo salió mal. Probá de nuevo en un minuto.
          </p>
        )}
        {status === 'idle' && !errors.email && (
          <p className="font-sans text-[13px] text-hint">
            Sin spam. Te podés dar de baja cuando quieras.
          </p>
        )}
      </div>
    </div>
  )
}
