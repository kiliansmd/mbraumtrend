import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 pb-28 md:pb-24 lg:pb-28 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Bereit für Ihre schönsten Räume?
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground/90 mb-10 leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Zuhause oder Ihre 
            Geschäftsräume in etwas Besonderes verwandeln können. Der erste Schritt 
            ist ein kurzes Gespräch mit Marcel Brischke — völlig unverbindlich.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <a href="#schnellanfrage">
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-accent-foreground/60">oder direkt:</span>
              <a
                href="tel:022418664342"
                className="flex items-center gap-2 text-accent-foreground hover:text-white transition-colors font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                02241-8664342
              </a>
            </div>
          </div>

          <p className="mt-12 font-script text-2xl text-accent-foreground/80">
            "Wir freuen uns auf Sie!"
          </p>
        </div>
      </div>
    </section>
  )
}
