import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { StructuredData } from '@/components/structured-data'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});
const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});
const _caveat = Caveat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#162D4A' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mb-raumtrend.de'),
  title: {
    default: 'mb.Raumtrend | Raumausstattung Bonn & Sankt Augustin',
    template: '%s | mb.Raumtrend',
  },
  description: 'Ihr Spezialist für Innenraumgestaltung in Bonn, Sankt Augustin & Rhein-Sieg-Kreis. Bodenbeläge, Wandgestaltung, Plissees, Tapeten & Raumausstattung. Kostenlose Vor-Ort-Beratung. 20+ Jahre Erfahrung. 5.0 Google Bewertung.',
  keywords: [
    'Raumausstattung Bonn',
    'Raumausstattung Sankt Augustin',
    'Raumausstatter Bonn',
    'Raumausstatter Sankt Augustin',
    'Bodenbeläge Bonn',
    'Bodenbeläge Sankt Augustin',
    'Bodenbeläge verlegen Bonn',
    'Tapeten Bonn',
    'Wandgestaltung Bonn',
    'Plissees Bonn',
    'Plissees Sankt Augustin',
    'Sonnenschutz Bonn',
    'Fensterdekoration Bonn',
    'Innenraumgestaltung Bonn',
    'Innenraumgestaltung Sankt Augustin',
    'Raumgestaltung Bonn',
    'Parkett verlegen Bonn',
    'Vinyl Bodenbelag Bonn',
    'Designbeläge Bonn',
    'Einrichtungsberatung Bonn',
    'Raumausstatter Rhein-Sieg-Kreis',
    'mb.Raumtrend',
    'Marcel Brischke',
  ],
  authors: [{ name: 'Marcel Brischke', url: 'https://mb-raumtrend.de' }],
  creator: 'mb.Raumtrend - Raumausstattung & Innenraumgestaltung',
  publisher: 'mb.Raumtrend',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mb-raumtrend.de',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://mb-raumtrend.de',
    siteName: 'mb.Raumtrend - Raumausstattung',
    title: 'mb.Raumtrend | Raumausstattung Bonn & Sankt Augustin',
    description: 'Ihr Spezialist für Innenraumgestaltung in Bonn, Sankt Augustin & Rhein-Sieg-Kreis. Bodenbeläge, Wandgestaltung & Raumausstattung. Kostenlose Beratung vor Ort.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'mb.Raumtrend - Raumausstattung in Bonn & Sankt Augustin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mb.Raumtrend | Raumausstattung Bonn & Sankt Augustin',
    description: 'Bodenbeläge, Wandgestaltung & Raumausstattung in Bonn & Sankt Augustin. Kostenlose Beratung. 5.0 Google Bewertung.',
    images: ['/og-image.jpg'],
    creator: '@mbraumtrend',
  },
  // TODO: Echten Google Search Console Verification-Token eintragen
  verification: {
    google: 'verification-token',
  },
  category: 'Handwerk',
  classification: 'Raumausstattung',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'DE-NW',
    'geo.placename': 'Sankt Augustin',
    'geo.position': '50.7667;7.1833',
    'ICBM': '50.7667, 7.1833',
    'business:contact_data:locality': 'Sankt Augustin',
    'business:contact_data:region': 'Nordrhein-Westfalen',
    'business:contact_data:postal_code': '53757',
    'business:contact_data:country_name': 'Deutschland',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
