"use client"

import { useState } from "react"
import { Paintbrush, Layers, Building2, ChevronDown, Lightbulb, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "farben" | "boden" | "business"

interface Tip {
  title: string
  content: string
  highlight?: boolean
}

interface GlossaryCategory {
  id: Category
  icon: typeof Paintbrush
  title: string
  subtitle: string
  color: string
  tips: Tip[]
}

const glossaryData: GlossaryCategory[] = [
  {
    id: "farben",
    icon: Paintbrush,
    title: "Farben & Tapeten",
    subtitle: "Wandgestaltung mit System",
    color: "from-rose-500 to-orange-500",
    tips: [
      {
        title: "Die richtige Tapetenwahl",
        content: "Vliestapeten sind ideal für Anfänger: Sie werden direkt auf die eingekleisterte Wand aufgebracht und lassen sich bei Bedarf trocken abziehen. Strukturtapeten kaschieren kleine Unebenheiten, während Satintapeten für einen eleganten Glanz sorgen.",
        highlight: true,
      },
      {
        title: "Farbwirkung verstehen",
        content: "Helle Farben lassen Räume größer wirken, dunkle schaffen Gemütlichkeit. Warme Töne (Gelb, Orange, Rot) aktivieren, kühle Töne (Blau, Grün) beruhigen. Tipp: Testen Sie Farben immer mit großen Mustern an der Wand - Tageslicht verändert die Wirkung erheblich.",
      },
      {
        title: "Untergrund vorbereiten",
        content: "Ein perfektes Ergebnis beginnt mit dem Untergrund. Alte Tapeten vollständig entfernen, Löcher und Risse spachteln, Wand grundieren. Bei stark saugenden Untergründen empfiehlt sich eine Tiefengrundierung für optimale Haftung.",
      },
      {
        title: "Akzentwände richtig setzen",
        content: "Eine einzelne Akzentwand mit auffälliger Tapete oder kräftiger Farbe kann einen Raum komplett verwandeln. Wählen Sie die Wand hinter dem Sofa, dem Bett oder gegenüber dem Eingang - dort wo der Blick natürlich hinfällt.",
      },
      {
        title: "Fototapeten & 3D-Effekte",
        content: "Moderne Fototapeten schaffen optische Tiefe und können kleine Räume größer wirken lassen. 3D-Tapeten mit geometrischen Mustern sind ein Blickfang, sollten aber sparsam eingesetzt werden, um nicht zu überwältigen.",
      },
    ],
  },
  {
    id: "boden",
    icon: Layers,
    title: "Bodenbeläge",
    subtitle: "Von bodenständig bis extravagant",
    color: "from-amber-500 to-yellow-500",
    tips: [
      {
        title: "Den richtigen Belag wählen",
        content: "Parkett ist langlebig und kann mehrfach abgeschliffen werden. Laminat ist pflegeleicht und preiswert. Designbeläge (Vinyl) sind wasserfest und ideal für Küche und Bad. Kork ist warm, leise und nachhaltig.",
        highlight: true,
      },
      {
        title: "Untergrund prüfen",
        content: "Vor der Verlegung muss der Untergrund eben, trocken und tragfähig sein. Unebenheiten über 3mm pro Meter müssen ausgeglichen werden. Bei Fußbodenheizung sind nicht alle Beläge geeignet - fragen Sie uns nach kompatiblen Optionen.",
      },
      {
        title: "Trittschalldämmung nicht vergessen",
        content: "Eine gute Trittschalldämmung reduziert Gehgeräusche um bis zu 50% und erhöht den Wohnkomfort erheblich. Bei Laminat und Parkett ist sie Pflicht, bei Designbelägen empfohlen.",
      },
      {
        title: "Dehnungsfugen einplanen",
        content: "Holz und Laminat arbeiten - sie dehnen sich bei Wärme aus und ziehen sich bei Kälte zusammen. Lassen Sie an Wänden 10-15mm Abstand und planen Sie bei großen Flächen Dehnungsfugen ein.",
      },
      {
        title: "Pflege & Langlebigkeit",
        content: "Parkett nur nebelfeucht wischen, nie nass. Laminat verträgt keine stehende Feuchtigkeit. Filzgleiter unter Möbeln schützen jeden Boden. Regelmäßiges Saugen mit Parkettdüse verhindert Kratzer durch Schmutzpartikel.",
      },
    ],
  },
  {
    id: "business",
    icon: Building2,
    title: "Business-Lösungen",
    subtitle: "Professionell & diskret",
    color: "from-blue-500 to-indigo-500",
    tips: [
      {
        title: "Renovierung ohne Betriebsunterbrechung",
        content: "Wir arbeiten außerhalb Ihrer Geschäftszeiten - abends, nachts oder am Wochenende. So können Sie Ihren Betrieb normal weiterführen, während wir Ihre Räume verwandeln. Planung und Koordination übernehmen wir.",
        highlight: true,
      },
      {
        title: "Corporate Design umsetzen",
        content: "Ihre Geschäftsräume sind Teil Ihrer Marke. Wir setzen Ihre Unternehmensfarben professionell um und achten auf ein stimmiges Gesamtbild - vom Empfangsbereich bis zum Konferenzraum.",
      },
      {
        title: "Strapazierfähige Materialien",
        content: "Für gewerbliche Räume empfehlen wir besonders robuste Materialien: Objektlaminat mit höherer Nutzungsklasse, kratzfeste Wandfarben oder pflegeleichte Vliestapeten, die auch häufiges Reinigen vertragen.",
      },
      {
        title: "Arbeitsschutz & Hygiene",
        content: "Wir arbeiten staubarm und mit schadstoffarmen Materialien. In sensiblen Bereichen wie Arztpraxen achten wir auf Hygienevorschriften und verwenden antibakterielle Beschichtungen auf Wunsch.",
      },
      {
        title: "Festpreisgarantie",
        content: "Bei gewerblichen Projekten erhalten Sie von uns einen verbindlichen Festpreis. Keine versteckten Kosten, keine Überraschungen. Das Angebot erstellen wir nach einem kostenfreien Aufmaß vor Ort.",
      },
    ],
  },
]

export function TipsGlossary() {
  const [activeCategory, setActiveCategory] = useState<Category>("farben")
  const [expandedTip, setExpandedTip] = useState<string | null>(null)

  const activeData = glossaryData.find((cat) => cat.id === activeCategory)!

  return (
    <section id="tipps" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Lightbulb className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Expertenwissen</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tipps & Best Practices
          </h2>
          <p className="text-lg text-muted-foreground">
            Profitieren Sie von über 20 Jahren Erfahrung. Unsere Experten-Tipps helfen Ihnen, 
            die richtigen Entscheidungen für Ihr Projekt zu treffen.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {glossaryData.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id)
                setExpandedTip(null)
              }}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <category.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-4xl mx-auto">
          {/* Category Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {activeData.title}
            </h3>
            <p className="text-muted-foreground">{activeData.subtitle}</p>
          </div>

          {/* Tips Accordion */}
          <div className="space-y-3">
            {activeData.tips.map((tip, index) => {
              const isExpanded = expandedTip === `${activeData.id}-${index}`
              
              return (
                <div
                  key={`${activeData.id}-${index}`}
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    tip.highlight 
                      ? "border-accent/30 bg-accent/5" 
                      : "border-border bg-background",
                    isExpanded && "shadow-md"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedTip(isExpanded ? null : `${activeData.id}-${index}`)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      {tip.highlight && (
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                        </div>
                      )}
                      <span className={cn(
                        "font-semibold",
                        tip.highlight ? "text-foreground" : "text-foreground/90"
                      )}>
                        {tip.title}
                      </span>
                      {tip.highlight && (
                        <span className="hidden sm:inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          Top-Tipp
                        </span>
                      )}
                    </div>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-muted-foreground leading-relaxed pl-0 sm:pl-11">
                        {tip.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 p-6 bg-secondary rounded-2xl">
            <p className="text-foreground font-medium mb-2">
              Haben Sie Fragen zu Ihrem konkreten Projekt?
            </p>
            <p className="text-muted-foreground text-sm">
              Marcel Brischke berät Sie gerne persönlich.{" "}
              <a href="#kontakt" className="text-accent font-medium hover:underline">
                Jetzt Kontakt aufnehmen
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
