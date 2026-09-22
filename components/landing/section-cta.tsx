import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionCTAProps {
  title?: string
  subtitle?: string
  variant?: "default" | "accent" | "subtle"
}

export function SectionCTA({ 
  title = "Bereit für Ihre Raumverwandlung?",
  subtitle = "Kostenlose Beratung — unverbindlich — direkt bei Ihnen vor Ort",
  variant = "default"
}: SectionCTAProps) {
  return (
    <div className="py-14 md:py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#edb0b0] mb-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Kostenlos & unverbindlich</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {title}
            </h3>
            <p className="text-primary-foreground/80">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 shadow-lg shadow-accent/30">
              <a href="#kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
              <a href="tel:022418664342" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                02241-8664342
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
