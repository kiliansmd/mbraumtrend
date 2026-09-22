import Image from "next/image"
import { Handshake } from "lucide-react"

interface Partner {
  name: string
  src: string
  category: string
}

const partners: Partner[] = [
  // Farben & Beschichtungen
  { name: "Caparol", src: "/images/partners/caparol.png", category: "Farben" },
  { name: "Sigma Coatings", src: "/images/partners/sigma.jpg", category: "Farben" },
  { name: "AkzoNobel", src: "/images/partners/akzonobel.png", category: "Farben" },
  { name: "Herbol", src: "/images/partners/herbol.png", category: "Farben" },
  { name: "Dinova", src: "/images/partners/dinova.png", category: "Farben" },
  { name: "KEIMFARBEN", src: "/images/partners/keimfarben.svg", category: "Farben" },
  // Bodenbeläge
  { name: "Gerflor", src: "/images/partners/gerflor.png", category: "Boden" },
  { name: "ObjectFlor", src: "/images/partners/objectflor.png", category: "Boden" },
  { name: "wineo", src: "/images/partners/wineo.jpg", category: "Boden" },
  { name: "Vorwerk", src: "/images/partners/vorwerk.svg", category: "Boden" },
  { name: "Infloor Girloon", src: "/images/partners/infloor.png", category: "Boden" },
  { name: "tretford", src: "/images/partners/tretford.jpg", category: "Boden" },
  // Tapeten & Wandgestaltung
  { name: "Rasch", src: "/images/partners/rasch.png", category: "Tapeten" },
  { name: "Grandeco", src: "/images/partners/grandeco.png", category: "Tapeten" },
  { name: "Erfurt", src: "/images/partners/erfurt.png", category: "Tapeten" },
  { name: "JAB Anstoetz", src: "/images/partners/jab-anstoetz.svg", category: "Tapeten" },
  // Sonnenschutz & Plissees
  { name: "MHZ", src: "/images/partners/mhz.svg", category: "Sonnenschutz" },
  // Farbberatung
  { name: "A.W. Farbkollektion", src: "/images/partners/aw.png", category: "Farbberatung" },
]

function PartnerLogo({ partner }: { partner: Partner }) {
  const isSvg = partner.src.endsWith(".svg")

  return (
    <div className="group relative flex items-center justify-center w-full h-20 md:h-24 px-4 py-3 rounded-xl bg-background border border-border/50 hover:border-border hover:shadow-md transition-all duration-300">
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.src}
          alt={partner.name}
          width={160}
          height={80}
          className="max-h-12 md:max-h-14 w-auto max-w-full object-contain opacity-70 grayscale-[40%] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <Image
          src={partner.src}
          alt={partner.name}
          width={160}
          height={80}
          className="max-h-12 md:max-h-14 w-auto max-w-full object-contain opacity-70 grayscale-[40%] group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
        />
      )}
      {/* Tooltip on hover */}
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-muted-foreground bg-background border border-border rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 shadow-sm"
        role="tooltip"
      >
        {partner.name}
      </span>
    </div>
  )
}

export function PartnerLogos() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="partner-heading">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Handshake className="h-4 w-4" />
            <span className="text-sm font-medium">Unsere Partner & Hersteller</span>
          </div>
          <h2
            id="partner-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Nur die besten Produkte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir arbeiten mit namhaften Herstellern zusammen und beraten Sie
            unabhängig -- denn Qualität kennt keine Kompromisse.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          Unabhängige Beratung -- wir empfehlen, was zu Ihrem Projekt passt,
          nicht was uns bezahlt wird.
        </p>
      </div>
    </section>
  )
}
