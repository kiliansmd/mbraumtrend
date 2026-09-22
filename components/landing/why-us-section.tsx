import Image from "next/image"
import { Home, Palette, Clock, Award, Sparkles, Ban, CheckCircle2, Star, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Termintreue",
    oldWay: "Wochenlange Wartezeiten, verschobene Termine",
    newWay: "Verbindliche Termine, die eingehalten werden. Pünktlicher Start, geplantes Ende.",
  },
  {
    icon: Award,
    title: "Transparente Preise",
    oldWay: "Überraschungen bei der Rechnung, versteckte Kosten",
    newWay: "Festpreisangebot vorab. Was wir sagen, gilt — ohne Nachforderungen.",
  },
  {
    icon: Home,
    title: "Saubere Baustelle",
    oldWay: "Dreck, Chaos und tagelange Aufräumarbeiten",
    newWay: "Tägliches Aufräumen, Staubschutz und besenreine Übergabe.",
  },
  {
    icon: Palette,
    title: "Klare Kommunikation",
    oldWay: "Unerreichbarkeit, keine Rückrufe, unklare Absprachen",
    newWay: "Persönlicher Ansprechpartner. Antworten innerhalb von 24h. Immer erreichbar.",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 text-accent mb-5">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">Unser Versprechen</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Handwerk, wie es sein sollte
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wir kennen die Vorurteile gegenüber Handwerkern. Deshalb machen wir es anders — mit klaren Standards, die Sie verdient haben.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-background rounded-2xl p-7 md:p-9 border border-border/60 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-500 shadow-lg shadow-primary/20 group-hover:shadow-accent/30">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-foreground pt-3">{feature.title}</h3>
              </div>
              
              {/* Old Way - crossed out */}
              <div className="flex items-start gap-3 mb-4 opacity-50 group-hover:opacity-60 transition-opacity">
                <Ban className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-muted-foreground line-through text-sm">{feature.oldWay}</p>
              </div>
              
              {/* New Way - highlighted */}
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <p className="text-foreground font-medium leading-relaxed">{feature.newWay}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 relative max-w-4xl mx-auto">
          {/* Subtle decorative border accent */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10" />
          <div className="relative bg-primary rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/25 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Photo */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-2 ring-primary-foreground/10 shadow-xl">
                    <Image
                      src="/images/marcel-brischke.png"
                      alt="Marcel Brischke - Inhaber mb.Raumtrend"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Google Rating Badge */}
                  <a
                    href="https://share.google/9EDWArteaFyrGohsJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-3 -right-3 bg-background rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5 hover:shadow-xl hover:scale-105 transition-all duration-200"
                    aria-label="Google Bewertungen ansehen"
                  >
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-foreground">5.0</span>
                  </a>
                </div>
              </div>
              
              {/* Bio & Quote */}
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                    Raumausstatter
                  </span>
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold">
                    20+ Jahre Erfahrung
                  </span>
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold">
                    Hunderte Projekte
                  </span>
                </div>
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed font-serif italic">
                  {'"'}Ihre Zufriedenheit ist meine Priorität. Bei uns kennen Sie die Menschen,
                  die Ihre Räume gestalten — und das merkt man am Ergebnis.{'"'}
                </p>
                <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
                  <div className="h-px w-8 bg-accent" />
                  <div>
                    <p className="text-primary-foreground font-bold text-lg">Marcel Brischke</p>
                    <p className="text-primary-foreground/60 text-sm">Inhaber & Gründer <span className="text-accent font-bold">mb.</span>Raumtrend</p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#schnellanfrage"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/30 text-sm"
                >
                  Kostenlose Beratung anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
