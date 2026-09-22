import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-interior.jpg"
          alt="Exklusive Innenraumgestaltung in Bonn und Sankt Augustin"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Promise Badge */}
          <div className="inline-flex items-center gap-2.5 bg-accent/95 text-accent-foreground px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium mb-8 shadow-xl shadow-accent/25 glow-accent">
            <Clock className="h-4 w-4 shrink-0" />
            Beratungstermin innerhalb von 48 Stunden
          </div>

          {/* Logo Style Header */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="text-[#dc9292]">mb.</span>
              <span className="text-primary-foreground">Raumtrend</span>
            </h1>
            <p className="font-script text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 mt-3 -rotate-1">
              Exklusive Bodenbeläge, Wandgestaltung & Plissees
            </p>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
            <strong className="text-primary-foreground">Design-Vinyl, Parkett, Tapeten, Plissees & kreative Oberflächen</strong> für stilvolle Wohn- und Geschäftsräume in Bonn, Sankt Augustin & dem Rhein-Sieg-Kreis. Handwerkliche Präzision trifft nachhaltiges Design.
          </p>

          {/* Service Icons Row */}
          

          {/* USP Pills */}
          

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button asChild size="lg" className="text-sm sm:text-base h-14 px-5 sm:px-10 bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 transition-all duration-500 hover:-translate-y-1 glow-accent btn-press">
              <a href="#schnellanfrage">
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-sm sm:text-base h-14 px-5 sm:px-10 bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-500 btn-press">
              <a href="tel:022418664342" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                02241-8664342
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-10 pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Google Rating */}
              <a 
                href="https://share.google/9EDWArteaFyrGohsJ" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="5.0 Kundenbewertungen auf Google ansehen"
                className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl px-4 py-3 transition-colors"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xl text-primary-foreground">5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/70">Kundenbewertungen auf Google</p>
                </div>
              </a>

              {/* Quick testimonial */}
              <div className="flex-1 bg-primary-foreground/5 rounded-xl px-4 py-3">
                <p className="text-sm text-primary-foreground/80 italic">
                  "Wurden geduldig beraten und das Ergebnis war wie versprochen."
                </p>
                <p className="text-xs text-primary-foreground/75 mt-1">— Felix Probst, Bonn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
