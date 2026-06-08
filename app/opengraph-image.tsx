import { ImageResponse } from 'next/og'
import { ogSize, ogContentType, isotypeDataUri } from '@/lib/og'

export const size = ogSize
export const contentType = ogContentType
export const alt = 'Morben'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span
            style={{
              fontSize: 240,
              fontWeight: 700,
              color: '#0E0E10',
              letterSpacing: '-14px',
              lineHeight: 1,
            }}
          >
            morben
          </span>
          <img
            src={isotypeDataUri}
            width={40}
            height={40}
            alt=""
            style={{ marginLeft: 10, marginBottom: 18 }}
          />
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
