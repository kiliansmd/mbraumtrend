import { faqs } from "@/lib/faqs"

const base = "https://www.mb-raumtrend.de"

export function StructuredData() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": `${base}/#business`,
      name: "mb.Raumtrend",
      url: base,
      telephone: "+49-2241-8664342",
      email: "info@mb-raumtrend.de",
      image: `${base}/images/hero-interior.jpg`,
      logo: `${base}/images/logo-mb-09022026-rgb.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Wellenstraße 5",
        addressLocality: "Sankt Augustin",
        postalCode: "53757",
        addressCountry: "DE",
      },
      areaServed: ["Bonn", "Sankt Augustin", "Siegburg", "Troisdorf", "Hennef", "Rhein-Sieg-Kreis"],
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      }],
      founder: { "@type": "Person", name: "Marcel Brischke" },
      sameAs: ["https://share.google/9EDWArteaFyrGohsJ"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${base}/#website`,
      name: "mb.Raumtrend",
      url: base,
      inLanguage: "de-DE",
      publisher: { "@id": `${base}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${base}/#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
}
