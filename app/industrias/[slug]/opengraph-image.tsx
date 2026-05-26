import { renderOgImage, ogSize, ogContentType } from '@/lib/og'
import { industries, getIndustry } from '@/lib/content/industries'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Industria Morben'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export default function Image({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug)
  return renderOgImage({
    eyebrow: 'Industria',
    title: industry?.headline ?? 'Trabajamos con empresas de estos rubros.',
  })
}
