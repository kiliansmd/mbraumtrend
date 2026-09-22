import { ArrowRight, Leaf, Heart, TreePine, Recycle, Droplet, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const sustainabilityPillars = [
  { 
    icon: Heart, 
    title: "Wohngesund", 
    desc: "Schadstofffreie Materialien für ein gesundes Raumklima und Ihr Wohlbefinden" 
  },
  { 
    icon: TreePine, 
    title: "Nachhaltig", 
    desc: "Nachwachsende Rohstoffe aus verantwortungsvoller, zertifizierter Quelle" 
  },
  { 
    icon: Recycle, 
    title: "Recyclebar", 
    desc: "Umweltfreundliche Entsorgung und Kreislaufwirtschaft am Lebensende" 
  },
  { 
    icon: Sparkles, 
    title: "Langlebig", 
    desc: "Hochwertige Qualität für jahrzehntelange Nutzung ohne Kompromisse" 
  },
]

const ecoMaterials = [
  {
    category: "Böden",
    icon: "🌳",
    examples: ["Korkböden", "FSC-zertifiziertes Echtholzparkett", "Naturlinoleum", "Bambus"]
  },
  {
    category: "Farben & Lacke",
    icon: "🎨",
    examples: ["Mineralfarben", "Lehmfarben", "Lösungsmittelfreie Lacke", "Naturharzfarben"]
  },
  {
    category: "Wandgestaltung",
    icon: "🖼️",
    examples: ["Naturfasertapeten", "Lehm- & Kalkputz", "Holzverkleidungen", "Textiltapeten"]
  },
]

export function GreenlineSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#F0F5F3] via-background to-[#EDF2F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-success/15 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Leaf className="h-4 w-4" />
            Ökologisch & Wohngesund
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nachhaltigkeit 
            <span className="block text-success">aus Überzeugung</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Für alle, die Wert auf <strong className="text-foreground">Nachhaltigkeit</strong> und ein{" "}
            <strong className="text-foreground">gesundes Wohnklima</strong> legen: Wir bieten Ihnen die 
            Möglichkeit, ausschließlich <strong className="text-success">biologische und ökologische Materialien</strong> für 
            Böden, Farben und Wandgestaltung zu verwenden — emissionsarm, recyclebar und frei von Schadstoffen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left - Sustainability Pillars */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Unsere Nachhaltigkeitsprinzipien
            </h3>
            <div className="grid gap-4">
              {sustainabilityPillars.map((pillar) => (
                <div 
                  key={pillar.title} 
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/40 hover:border-success/30 hover:bg-success/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-success/15 flex items-center justify-center shrink-0 group-hover:bg-success/25 transition-colors">
                    <pillar.icon className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 group-hover:text-success transition-colors">
                      {pillar.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Eco Materials by Category */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/5 border border-border/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/15 flex items-center justify-center">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Ökologische Materialien
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Auf Wunsch verwenden wir ausschließlich biologische und ökologische Materialien 
              aus allen Bereichen der Raumausstattung.
            </p>
            <div className="space-y-6">
              {ecoMaterials.map((material) => (
                <div key={material.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{material.icon}</span>
                    <h4 className="font-semibold text-foreground">{material.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {material.examples.map((example) => (
                      <span 
                        key={example}
                        className="px-3 py-1.5 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Sprechen Sie uns an — wir beraten Sie gerne zu nachhaltigen Alternativen für Ihr Projekt.
          </p>
          <Button asChild size="lg" className="bg-success hover:bg-success/90 text-success-foreground shadow-lg shadow-success/20 transition-all duration-300">
            <a href="#schnellanfrage">
              Nachhaltigkeits-Beratung anfragen
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
