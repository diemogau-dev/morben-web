import { renderOgImage, ogSize, ogContentType } from '@/lib/og'
import { site } from '@/lib/site'

export const size = ogSize
export const contentType = ogContentType
export const alt = `Morben · ${site.heroTitle}`

export default function Image() {
  return renderOgImage({
    title: site.heroTitle,
  })
}
