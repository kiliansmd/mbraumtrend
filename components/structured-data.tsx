export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
    "@id": "https://mb-raumtrend.de/#business",
    name: "mb.Raumtrend - Raumausstattung & Innenraumgestaltung",
    alternateName: ["mb.Raumtrend", "mb Raumtrend Bonn", "mb Raumtrend Sankt Augustin", "Marcel Brischke Raumausstatter"],
    description: "Ihr Spezialist für Innenraumgestaltung in Bonn, Sankt Augustin & Rhein-Sieg-Kreis. Bodenbeläge, Wandgestaltung, Tapeten und ganzheitliche Raumausstattung. Kostenlose Vor-Ort-Beratung mit Mustern und Farbkarten. Festpreisgarantie. 20+ Jahre Erfahrung. 5.0 Google Bewertung.",
    url: "https://mb-raumtrend.de",
    telephone: "+49-2241-8664342",
    email: "info@mb-raumtrend.de",
    image: [
      "https://mb-raumtrend.de/og-image.jpg",
      "https://mb-raumtrend.de/logo.png",
      "https://mb-raumtrend.de/images/hero-interior.jpg"
    ],
    logo: "https://mb-raumtrend.de/logo.png",
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer, Invoice",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wellenstraße 5",
      addressLocality: "Sankt Augustin",
      postalCode: "53757",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7705,
      longitude: 7.1861
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bonn"
      },
      {
        "@type": "City", 
        name: "Sankt Augustin"
      },
      {
        "@type": "City",
        name: "Siegburg"
      },
      {
        "@type": "City",
        name: "Troisdorf"
      },
      {
        "@type": "City",
        name: "Hennef"
      },
      {
        "@type": "City",
        name: "Köln"
      },
      {
        "@type": "AdministrativeArea",
        name: "Rhein-Sieg-Kreis"
      }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1"
    },
    founder: {
      "@type": "Person",
      name: "Marcel Brischke",
      jobTitle: "Inhaber & Gründer"
    },
    foundingDate: "2003",
    sameAs: [
      "https://wa.me/4917623100265",
      "https://share.google/9EDWArteaFyrGohsJ"
    ],
    slogan: "Ihr Spezialist für Innenraumgestaltung",
    knowsAbout: [
      "Bodenbeläge",
      "Wandgestaltung",
      "Tapeten",
      "Plissees",
      "Sonnenschutz",
      "Fensterdekoration",
      "Raumausstattung",
      "Einrichtungsberatung",
      "Innenraumgestaltung",
      "Parkett verlegen",
      "Vinyl Bodenbelag",
      "Designbeläge"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bodenbeläge Bonn & Sankt Augustin",
            description: "Professionelle Verlegung von Parkett, Vinyl, Designbelägen, Laminat und Kork in Bonn, Sankt Augustin und Rhein-Sieg-Kreis"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wandgestaltung Bonn",
            description: "Moderne Wandbeläge, Tapeten und kreative Oberflächentechniken für individuelle Raumgestaltung"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Raumausstattung Rhein-Sieg-Kreis",
            description: "Ganzheitliche Innenraumgestaltung mit Einrichtungsberatung und kompletten Raumkonzepten"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plissees & Sonnenschutz Bonn",
            description: "Maßgefertigte Plissees für perfekte Licht- und Sichtschutzkontrolle. Vielfältige Stoffe, Transparenzgrade und Bedienoptionen."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "mb.Raumtrend - Raumausstattung",
    url: "https://mb-raumtrend.de",
    description: "Ihr Spezialist für Innenraumgestaltung in Bonn, Sankt Augustin & Rhein-Sieg-Kreis. Bodenbeläge, Wandgestaltung und Raumausstattung.",
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: "mb.Raumtrend",
      logo: {
        "@type": "ImageObject",
        url: "https://mb-raumtrend.de/logo.png",
        width: 200,
        height: 60
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mb-raumtrend.de/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://mb-raumtrend.de"
      }
    ]
  };

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet die Verlegung von Bodenbelägen in Bonn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten für Bodenbeläge variieren je nach Material und Fläche. Bei mb.Raumtrend erhalten Sie nach einer kostenlosen Vor-Ort-Beratung einen transparenten Festpreis ohne versteckte Kosten. Wir zeigen Ihnen verschiedene Optionen von Parkett bis Vinyl und beraten Sie zur besten Lösung für Ihr Budget."
        }
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Verlegung von Bodenbelägen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Dauer hängt von der Fläche und dem gewählten Belag ab. Ein durchschnittliches Wohnzimmer (ca. 30qm) kann oft an einem Tag verlegt werden. Bei der kostenlosen Beratung nennen wir Ihnen den genauen Zeitrahmen für Ihr Projekt."
        }
      },
      {
        "@type": "Question",
        name: "Bietet mb.Raumtrend eine kostenlose Beratung an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir bieten eine komplett kostenlose und unverbindliche Erstberatung direkt bei Ihnen vor Ort an. Dabei bringen wir Muster und Farbkarten mit, damit Sie die Materialien anfassen und vergleichen können. Termine sind innerhalb von 48 Stunden verfügbar."
        }
      },
      {
        "@type": "Question",
        name: "Was umfasst die Raumausstattung bei mb.Raumtrend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unsere Raumausstattung umfasst alles für Ihren Innenbereich: Bodenbeläge (Parkett, Vinyl, Laminat), Wandgestaltung (Tapeten, Farben, Spachteltechniken) sowie Einrichtungsberatung. Wir arbeiten ausschließlich im Innenbereich und bieten ganzheitliche Raumkonzepte aus einer Hand."
        }
      },
      {
        "@type": "Question",
        name: "In welchen Gebieten ist mb.Raumtrend tätig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir sind im gesamten Rhein-Sieg-Kreis, in Bonn, Köln und Umgebung tätig. Dazu gehören Sankt Augustin, Siegburg, Troisdorf, Hennef und weitere Orte. Bei größeren Projekten kommen wir auch gerne weiter."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
