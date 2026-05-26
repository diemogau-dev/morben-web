import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  // TODO: conectar proveedor de email (Resend / Brevo / Mailchimp) cuando Diego lo defina.
  // Por ahora solo validamos el email y devolvemos ok.

  return NextResponse.json({ ok: true })
}
