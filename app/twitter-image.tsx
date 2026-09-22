import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'mb.Raumtrend - Raumausstattung & Innenraumgestaltung'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a2332',
          backgroundImage: 'linear-gradient(135deg, #1a2332 0%, #0f1621 100%)',
          position: 'relative',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(139, 26, 26, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 26, 26, 0.08) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              mb
            </span>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#dc9292',
              }}
            >
              .
            </span>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Raumtrend
            </span>
          </div>
          
          {/* Tagline */}
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Raumausstattung & Innenraumgestaltung in Bonn
          </p>
        </div>
        
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #dc9292 0%, #8b1a1a 50%, #dc9292 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
