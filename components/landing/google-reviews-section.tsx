"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Helper Components
function ReviewHeader({ review, isLocalGuide = false }: { review: typeof reviews[0], isLocalGuide?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold shrink-0">
        {review.initial}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-sm md:text-base truncate">{review.name}</p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {isLocalGuide && <span className="text-accent font-medium">Local Guide</span>}
          {isLocalGuide && <span>·</span>}
          <span>{review.date}</span>
        </div>
      </div>
    </div>
  )
}

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

const reviews = [
  {
    name: "John Locke (Funkensammler)",
    initial: "J",
    rating: 5,
    date: "vor 5 Monaten",
    text: "Die Beratung im Vorfeld war sehr gut. Man merkt gleich, hier ist jemand vom Fach. Die Arbeiten sind zeitnah und sehr akkurat ausgeführt worden. Alles in Allem: Perfekt! Vielen Dank, ich kann Sie anstandslos weiter empfehlen!",
    highlight: true,
  },
  {
    name: "Felix Probst",
    initial: "F",
    rating: 5,
    date: "vor 4 Monaten",
    text: "Firma mb. Raumtrend kann ich nur weiter empfehlen. Absolut zufrieden mit der Arbeit. Wurden geduldig von Marcel Brischke beraten und das Ergebnis war wie versprochen.",
    highlight: true,
  },
  {
    name: "Harald John",
    initial: "H",
    rating: 5,
    date: "vor 7 Jahren",
    text: "Das Angebot erhielten wir innerhalb von 24 Stunden nach erfolgtem Aufmaß. Zu Vergleichszwecken holten wir noch 3 Mitbeweberangebote ein, die wir erst nach 5-8 Tagen erhielten. Herr Brischke nahm sich 1 1/2 Stunden Zeit zur Erörterung unserer Fragen. Wir hatten bei ihm das Gefühl, am besten aufgehoben zu sein, da sein Fachwissen, sein sympathisches Auftreten und seine Freundlichkeit uns überzeugt hatten. In unserer oberen Etage (ca. 120 qm) wurde alter Teppichboden entfernt, Boden gespachtelt und ein neuer Vinylboden verlegt. Wir sind mit seiner Arbeit äußerst zufrieden und können ihn unbedingt weiterempfehlen.",
    highlight: true,
  },
  {
    name: "Micha Boenig",
    initial: "M",
    rating: 5,
    date: "vor 5 Jahren",
    text: "Super Praxis sehr sauber und Freundlich! Haben mir super geholfen!",
    highlight: false,
  },
  {
    name: "Morteza Sanati",
    initial: "M",
    rating: 5,
    date: "vor 4 Jahren",
    text: "Perfekt",
    isLocalGuide: true,
    highlight: false,
  },
]

export function GoogleReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with Google Rating */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-background rounded-full px-6 py-3 mb-6 shadow-sm border border-border">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-foreground">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground text-sm">Google Bewertungen</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte Bewertungen von echten Kunden aus Bonn, Sankt Augustin und Umgebung
          </p>
        </div>

        {/* Reviews Grid - Masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Featured Reviews - First Row */}
          <Card className="border-border/50 hover:shadow-lg transition-all duration-300 border-accent/20 bg-accent/5">
            <CardContent className="p-5 md:p-6">
              <ReviewHeader review={reviews[0]} />
              <ReviewStars rating={reviews[0].rating} />
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">"{reviews[0].text}"</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:shadow-lg transition-all duration-300 border-accent/20 bg-accent/5">
            <CardContent className="p-5 md:p-6">
              <ReviewHeader review={reviews[1]} />
              <ReviewStars rating={reviews[1].rating} />
              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">"{reviews[1].text}"</p>
            </CardContent>
          </Card>
          
          {/* Short Reviews - Stack on Desktop */}
          <div className="flex flex-col gap-4 md:gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-5 md:p-6">
                <ReviewHeader review={reviews[3]} />
                <ReviewStars rating={reviews[3].rating} />
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">"{reviews[3].text}"</p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-5 md:p-6">
                <ReviewHeader review={reviews[4]} isLocalGuide />
                <ReviewStars rating={reviews[4].rating} />
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base">"{reviews[4].text}"</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Long Review - Full Width */}
          <Card className="md:col-span-2 lg:col-span-3 border-border/50 hover:shadow-lg transition-all duration-300 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="p-5 md:p-6">
              <div className="lg:flex lg:gap-8 lg:items-start">
                <div className="lg:w-1/4 mb-4 lg:mb-0">
                  <ReviewHeader review={reviews[2]} />
                  <ReviewStars rating={reviews[2].rating} />
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm md:text-base lg:w-3/4">"{reviews[2].text}"</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="bg-transparent">
            <a 
              href="https://share.google/9EDWArteaFyrGohsJ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
