import { renderOgImage, ogSize, ogContentType } from '@/lib/og'
import { cases, getCase } from '@/lib/content/cases'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Caso Morben'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const study = getCase(params.slug)
  return renderOgImage({
    eyebrow: `Caso · ${study?.client ?? 'Morben'}`,
    title: study?.preview.headline ?? 'Empresas que ya están operando distinto.',
  })
}
