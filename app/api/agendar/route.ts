import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  cargo: z.string().min(1),
  empresa: z.string().min(1),
  rubro: z.string().min(1),
  whatsapp: z.string().min(1),
  empleados: z.string().min(1),
  facturacion: z.string().min(1),
  area: z.array(z.string()).min(1),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // TODO: enviar cada respuesta por email a hola@morben.com.py cuando se defina
  // el proveedor (Resend / Brevo). Esto da telemetría de quién intentó agendar,
  // incluso si después no completa la reserva en Calendly. Por ahora validamos
  // y devolvemos ok. El filtro de quién califica lo hace el equipo a mano.

  return NextResponse.json({ ok: true })
}
