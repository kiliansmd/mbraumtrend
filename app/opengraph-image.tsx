import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
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
          gap: '0px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0d1829',
          backgroundImage: 'linear-gradient(135deg, #0d1829 0%, #162d4a 100%)',
          position: 'relative',
          padding: '52px 64px',
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
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(139, 26, 26, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 26, 26, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(139, 26, 26, 0.15)',
            border: '2px solid rgba(139, 26, 26, 0.3)',
            borderRadius: '999px',
            padding: '12px 28px',
            marginBottom: '24px',
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
            marginBottom: '20px',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: '82px',
              fontWeight: 700,
              color: '#dc9292',
              letterSpacing: '-0.02em',
            }}
          >
            mb
          </span>
          <span
            style={{
              fontSize: '82px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            .
          </span>
          <span
            style={{
              fontSize: '82px',
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
            fontSize: '34px',
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
            fontSize: '25px',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.5,
            maxWidth: '900px',
            margin: '0 0 28px 0',
            flexShrink: 0,
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fbbf24"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z" /></svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc9292" strokeWidth="3"><path d="m4 12 5 5L20 6" /></svg>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc9292" strokeWidth="3"><path d="m4 12 5 5L20 6" /></svg>
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
