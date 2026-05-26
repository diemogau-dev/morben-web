import { renderOgImage, ogSize, ogContentType } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Morben — Sistemas IA y automatizaciones'

export default function Image() {
  return renderOgImage({
    title: 'Automatizamos tus operaciones sobre los sistemas que ya tenés.',
  })
}
