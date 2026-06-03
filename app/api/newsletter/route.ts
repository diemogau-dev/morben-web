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

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          // Ignora duplicados (requiere índice único en email) y no devuelve la fila.
          Prefer: 'resolution=ignore-duplicates,return=minimal',
        },
        body: JSON.stringify({ email: parsed.data.email }),
      })

      if (!res.ok && res.status !== 409) {
        console.error('newsletter: fallo al guardar en Supabase', res.status, await res.text())
      }
    } catch (err) {
      console.error('newsletter: error al guardar en Supabase', err)
    }
  } else {
    // Mientras no estén las env vars, el form funciona pero el email no se almacena.
    console.warn('newsletter: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY sin configurar; email no almacenado')
  }

  // Devolvemos ok igual para no romper la UX del visitante.
  return NextResponse.json({ ok: true })
}
