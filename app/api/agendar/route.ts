import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nombre: z.string().min(1),
  cargo: z.string().min(1),
  empresa: z.string().min(1),
  email: z.string().email(),
  whatsapp: z.string().min(1),
  empleados: z.string().min(1),
  facturacion: z.string().min(1),
  presupuesto: z.string().min(1),
  mensaje: z.string().optional(),
  califica: z.boolean(),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // TODO: enviar cada respuesta (califique o no) por email a hola@morben.com.py
  // cuando se defina el proveedor (Resend / Brevo). Esto da telemetría de quién
  // intentó agendar. Por ahora validamos y devolvemos ok.

  return NextResponse.json({ ok: true })
}
