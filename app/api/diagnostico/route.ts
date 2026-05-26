import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nombre: z.string().min(1),
  email: z.string().email(),
  empresa: z.string().min(1),
  cargo: z.string().min(1),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // TODO: al definir el proveedor de email, sumar el lead a la lista del newsletter
  // con el tag "lead_magnet_diagnostico" y notificar a hola@morben.com.py.
  // Por ahora validamos y devolvemos ok; la descarga del PDF la dispara el cliente.

  return NextResponse.json({ ok: true })
}
