import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 md:py-32 pb-32 md:pb-36 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2.5 text-accent mb-5">
            <Phone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Kontakt
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
            Sprechen Sie direkt
            <span className="text-accent"> mit Marcel</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kein Callcenter, kein Kontaktformular. Bei mb.Raumtrend erreichen Sie
            immer direkt den Inhaber und Raumausstatter Marcel Brischke.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - Marcel Card */}
            <div className="lg:col-span-2">
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground h-full flex flex-col">
                {/* Portrait */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-primary-foreground/10 mb-6">
                  <Image
                    src="/images/marcel-brischke.png"
                    alt="Marcel Brischke - Inhaber mb.Raumtrend"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">Marcel Brischke</h3>
                <p className="text-primary-foreground/75 text-sm mb-6">
                  Inhaber & Raumausstatter
                </p>

                {/* Google Rating */}
                <a
                  href="https://share.google/9EDWArteaFyrGohsJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl px-4 py-3 transition-colors mb-6"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-primary-foreground/75">Google Bewertungen</p>
                  </div>
                </a>

                <p className="text-primary-foreground/80 text-sm leading-relaxed italic font-serif flex-1">
                  {'"'}Meine Kunden schätzen den direkten Draht. Rufen Sie mich einfach an
                  oder schreiben Sie mir -- ich berate Sie persönlich und ehrlich.{'"'}
                </p>
              </div>
            </div>

            {/* Right - Contact Options */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              {/* Phone - Primary CTA */}
              <a
                href="tel:022418664342"
                className="group bg-card rounded-2xl border border-border/60 p-6 md:p-8 flex items-center gap-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="h-6 w-6 md:h-7 md:w-7 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Telefon (bevorzugt)</p>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">02241-8664342</p>
                  <p className="text-sm text-muted-foreground mt-1">Direkter Draht zu Marcel</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/4917623100265?text=Hallo%20Herr%20Brischke%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Beratung."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl border border-border/60 p-6 md:p-8 flex items-center gap-6 hover:border-[#25D366]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/20 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</p>
                  <p className="text-xl md:text-2xl font-bold text-foreground">Nachricht schreiben</p>
                  <p className="text-sm text-muted-foreground mt-1">Auch am Wochenende erreichbar</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[#25D366] group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@mb-raumtrend.de"
                className="group bg-card rounded-2xl border border-border/60 p-6 md:p-8 flex items-center gap-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">E-Mail</p>
                  <p className="text-xl md:text-2xl font-bold text-foreground">info@mb-raumtrend.de</p>
                  <p className="text-sm text-muted-foreground mt-1">Antwort innerhalb von 24 Stunden</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 hidden md:block" />
              </a>

              {/* Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-5 flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Einsatzgebiet</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Bonn, Sankt Augustin & der gesamte Rhein-Sieg-Kreis
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-xl p-5 flex items-start gap-4">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Erreichbarkeit</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Mo-Fr 8-18 Uhr, Sa nach Absprache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-14 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Kostenlose Erstberatung</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">100% unverbindlich</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-medium">Beratung vor Ort bei Ihnen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
