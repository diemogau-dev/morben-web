import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const isotypeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="#FF5722" stroke-width="7"/><ellipse cx="50" cy="50" rx="44" ry="20" fill="none" stroke="#FF5722" stroke-width="7" transform="rotate(45 50 50)"/><ellipse cx="50" cy="50" rx="44" ry="20" fill="none" stroke="#FF5722" stroke-width="7" transform="rotate(-45 50 50)"/><circle cx="50" cy="50" r="10" fill="#FF5722"/></svg>`

const isotypeDataUri = `data:image/svg+xml;base64,${Buffer.from(isotypeSvg).toString('base64')}`

export function renderOgImage({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0E0E10',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#F5F5F5',
              letterSpacing: '-3px',
            }}
          >
            morben
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={isotypeDataUri} width={20} height={20} alt="" style={{ marginLeft: 4 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow ? (
            <div
              style={{
                fontSize: 22,
                color: '#FF5722',
                textTransform: 'uppercase',
                letterSpacing: '5px',
                marginBottom: 28,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: 'flex',
              fontSize: 58,
              fontWeight: 600,
              color: '#F5F5F5',
              lineHeight: 1.08,
              letterSpacing: '-2px',
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
