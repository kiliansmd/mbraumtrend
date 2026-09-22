"use client"

import { useState } from "react"
import { Layers, Wallpaper, Sofa, Blinds, PaintBucket, ArrowRight, Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "maler",
    icon: PaintBucket,
    title: "Malerarbeiten",
    subtitle: "Perfekte Gestaltung für Ihre Räume",
    description: "Als erfahrener Raumausstatter bieten wir Ihnen hochwertige Malerarbeiten im Innenbereich, die Ihren Wohn- und Geschäftsräumen neuen Glanz verleihen. Mit fachmännischem Know-How, Sorgfalt und einem Auge fürs Detail schaffen wir individuelle Raumkonzepte, die genau zu Ihren Wünschen und Ihrem Stil passen.",
    features: [
      "Fachgerechtes Streichen von Wänden und Decken",
      "Kreative Wandgestaltungstechniken",
      "Tapezierarbeiten aller Art",
      "Spachtel- und Ausbesserungsarbeiten",
      "Schimmelbeseitigung und Untergrundvorbereitung",
      "Lackierarbeiten an Türen, Zargen und Heizkörpern",
    ],
    accent: "from-accent/20 to-accent/5",
  },
  {
    id: "boden",
    icon: Layers,
    title: "Bodenbeläge",
    subtitle: "Parkett, Vinyl & Designbeläge",
    description: "Professionelle Verlegung aller Bodenbeläge mit Untergrundvorbereitung, Ausgleich und Trittschalldämmung für ein perfektes Ergebnis.",
    features: [
      "Echtholz-Parkett & Mehrschichtparkett",
      "Modernes Vinyl & Designbeläge",
      "Kork, Linoleum & Laminat",
      "Treppenlösungen & Randabschlüsse",
    ],
    accent: "from-primary/15 to-primary/5",
  },
  {
    id: "wand",
    icon: Wallpaper,
    title: "Wandgestaltung",
    subtitle: "Tapeten & kreative Oberflächen",
    description: "Moderne Wandbeläge und kreative Oberflächentechniken verwandeln Ihre Räume. Von edlen Tapeten bis zu dekorativen Spachteltechniken.",
    features: [
      "Vlies-, Struktur- & Designtapeten",
      "Farbgestaltungskonzepte nach Maß",
      "Spachteltechniken & Effekte",
      "Akzentwände & Highlights",
    ],
    accent: "from-accent/15 to-accent/5",
  },
  {
    id: "raum",
    icon: Sofa,
    title: "Raumausstattung",
    subtitle: "Ganzheitliche Innenraumgestaltung",
    description: "Von der Einrichtungsberatung bis zur kompletten Raumausstattung. Wir gestalten Ihren Innenbereich als harmonisches Gesamtkonzept.",
    features: [
      "Individuelle Einrichtungsberatung",
      "Möbelauswahl & Raumkonzepte",
      "Farbliche Abstimmung",
      "Komplettlösungen aus einer Hand",
    ],
    accent: "from-primary/10 to-accent/10",
  },
  {
    id: "plissees",
    icon: Blinds,
    title: "Plissees & Sonnenschutz",
    subtitle: "Maßgefertigte Fensterdekoration",
    description: "Hochwertige Plissees vereinen Funktionalität mit zeitlosem Design. Perfekte Licht- und Sichtschutzkontrolle für jeden Raum – maßgefertigt nach Ihren Wünschen.",
    features: [
      "Maßgefertigte Plissees für jede Fenstergröße",
      "Vielfältige Stoffe & Transparenzgrade",
      "Tageslicht, Verdunkelung & Hitzeschutz",
      "Elektrische & manuelle Bedienung",
    ],
    accent: "from-success/15 to-success/5",
  },
]

export function USPShowcase() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="leistungen" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 text-accent mb-5">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Unsere Leistungen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Raumgestaltung{" "}
            <span className="text-accent">aus einer Hand</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wir arbeiten ausschließlich im Innenbereich und bieten Ihnen
            ganzheitliche Lösungen — von Bodenbelägen über Wandgestaltung bis
            zur kompletten Raumausstattung.
          </p>
        </div>

        {/* Service Tabs - Desktop */}
        <div className="hidden md:flex justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveService(service)}
              className={cn(
                "flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300",
                activeService.id === service.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/60"
              )}
            >
              <service.icon className="h-5 w-5" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Detail - Desktop */}
        <div className="hidden md:block">
          <div
            key={activeService.id}
            className={cn(
              "bg-gradient-to-br rounded-3xl p-10 md:p-14 border border-border/40 transition-all duration-300",
              activeService.accent
            )}
          >
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <activeService.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {activeService.title}
                    </h3>
                    <p className="text-accent font-semibold">
                      {activeService.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-xl">
                  {activeService.description}
                </p>
              </div>
              <div className="flex-1">
                <ul className="grid gap-4">
                  {activeService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#schnellanfrage"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                >
                  Jetzt beraten lassen
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards - Mobile */}
        <div className="md:hidden grid gap-5">
          {services.map((service) => (
            <a
              key={service.id}
              href="#schnellanfrage"
              className={cn(
                "bg-gradient-to-br rounded-2xl p-6 border border-border/40 block active:scale-[0.98] transition-all duration-200 hover:border-accent/40 hover:shadow-lg",
                service.accent
              )}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-accent font-semibold text-sm mt-0.5">
                    {service.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
