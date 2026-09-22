import { MessageSquare, Lightbulb, Hammer, CheckCircle2, ArrowRight, Phone, Shield, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kostenlose Vor-Ort-Beratung",
    description: "Fundierte Bedarfsermittlung direkt bei Ihnen in Bonn, Sankt Augustin oder dem Rhein-Sieg-Kreis. Mit Farbmustern, Materialproben und anschaulichen Beispielen.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Transparentes Festpreis-Angebot",
    description: "Klare Kostenzusammenstellung mit Leistungsumfang und Zeitplan. Keine versteckten Posten — der Preis gilt.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Fachgerechte Umsetzung",
    description: "Saubere, termingerechte Ausführung durch qualifizierte Facharbeiter mit regelmäßigen Zwischenabnahmen.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Abnahme & Garantie",
    description: "Endabnahme, Dokumentation, Pflegehinweise und langfristige Betreuung. Volle Garantie auf unsere Arbeiten.",
    highlighted: true,
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Unsere Arbeitsweise — strukturiert & transparent
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der ersten Beratung bis zur finalen Abnahme — zuverlässig und termingerecht.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-accent/20 transition-all h-full border border-border/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-5">
                  <span className="font-bold text-xl text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Festpreisgarantie Badge */}
        <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-accent/20 shadow-lg shadow-accent/5">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-bold text-xl text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  Unsere Festpreisgarantie
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Alle Materialien inklusive</li>
                  <li>Sämtliche Arbeitsleistungen abgedeckt</li>
                  <li>Untergrundvorbereitung & Entsorgung inklusive</li>
                  <li>Keine Nachforderungen — garantiert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12 space-y-4">
          <p className="text-lg text-foreground/80">
            Klingt gut? Dann lassen Sie uns den ersten Schritt gemeinsam gehen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#schnellanfrage">
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <a href="tel:022418664342" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                02241-8664342
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
