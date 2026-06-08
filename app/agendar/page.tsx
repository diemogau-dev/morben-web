import type { Metadata } from 'next'
import { AgendarClient } from './AgendarClient'

export const metadata: Metadata = {
  title: 'Agendar diagnóstico',
  description:
    'Construyamos tu operación con IA. Empecemos por entenderla: unos pocos datos para que la llamada arranque enfocada en lo que mueve la aguja en tu empresa.',
}

export default function AgendarPage() {
  return <AgendarClient />
}
