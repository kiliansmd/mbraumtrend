import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'mb.Raumtrend - Exklusive Bodenbeläge, Wandgestaltung & Plissees'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0d1829',
          backgroundImage: 'linear-gradient(135deg, #0d1829 0%, #162d4a 100%)',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(194, 101, 58, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(194, 101, 58, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(194, 101, 58, 0.15)',
            border: '2px solid rgba(194, 101, 58, 0.3)',
            borderRadius: '999px',
            padding: '12px 28px',
            marginBottom: '32px',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: '24px' }}>⏱</span>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            Beratungstermin innerhalb von 48 Stunden
          </span>
        </div>
        
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '28px',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: '96px',
              fontWeight: 700,
              color: '#c2653a',
              letterSpacing: '-0.02em',
            }}
          >
            mb
          </span>
          <span
            style={{
              fontSize: '96px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            .
          </span>
          <span
            style={{
              fontSize: '96px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            Raumtrend
          </span>
        </div>
        
        {/* Tagline in script font style */}
        <p
          style={{
            fontSize: '38px',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '24px',
            position: 'relative',
          }}
        >
          Exklusive Bodenbeläge, Wandgestaltung & Plissees
        </p>
        
        {/* Description */}
        <p
          style={{
            fontSize: '26px',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.5,
            maxWidth: '900px',
            marginBottom: '40px',
            position: 'relative',
          }}
        >
          Design-Vinyl, Parkett, Tapeten, Plissees & kreative Oberflächen für stilvolle Wohn- und Geschäftsräume in Bonn, Sankt Augustin & dem Rhein-Sieg-Kreis.
        </p>
        
        {/* Trust badges */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            <span style={{ color: '#fbbf24', fontSize: '26px' }}>★</span>
            5.0 Google Bewertung
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            <span style={{ color: '#c2653a', fontSize: '26px' }}>✓</span>
            20+ Jahre Erfahrung
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            <span style={{ color: '#c2653a', fontSize: '26px' }}>✓</span>
            Kostenlose Beratung
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #c2653a 0%, #d4845f 50%, #c2653a 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
