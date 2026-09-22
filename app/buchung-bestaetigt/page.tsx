import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Camera, Ruler, FileText, MessageCircle, Calendar, Clock, Lightbulb } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { WhatsAppButtonClient } from "./whatsapp-button-client"

export const metadata: Metadata = {
  title: "Buchung bestätigt | mb.Raumtrend",
  description: "Vielen Dank für Ihre Terminbuchung bei mb.Raumtrend. Hier finden Sie Tipps zur Vorbereitung auf Ihr Beratungsgespräch.",
  robots: "noindex, nofollow",
}

export default function BuchungBestaetigtPage() {
  const preparationTips = [
    {
      icon: Camera,
      title: "Fotos vorbereiten",
      description: "Machen Sie ein paar Fotos der Räume, die Sie umgestalten möchten. Das hilft uns, uns vorab ein Bild zu machen.",
      effort: "2 Min.",
    },
    {
      icon: Ruler,
      title: "Raumgrößen schätzen",
      description: "Eine grobe Schätzung der Quadratmeterzahl genügt völlig. Wir messen vor Ort alles genau aus.",
      effort: "1 Min.",
    },
    {
      icon: Lightbulb,
      title: "Inspirationen sammeln",
      description: "Haben Sie Bilder von Farben, Tapeten oder Stilen, die Ihnen gefallen? Screenshots oder Links sind sehr hilfreich.",
      effort: "Optional",
    },
    {
      icon: FileText,
      title: "Fragen notieren",
      description: "Schreiben Sie sich Fragen auf, die Ihnen wichtig sind - zu Material, Ablauf oder Kosten.",
      effort: "Optional",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-success-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Buchung bestätigt!</h1>
              <p className="text-primary-foreground/80 text-sm md:text-base">Ihr Beratungstermin wurde erfolgreich gebucht</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Thank You Message */}
          <section className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Vielen Dank für Ihr Vertrauen!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wir freuen uns auf das persönliche Gespräch mit Ihnen. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrem Termin.
            </p>
          </section>

          {/* What Happens Next */}
          <section className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-10">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              So geht es weiter
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-accent">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Bestätigungs-E-Mail</p>
                  <p className="text-sm text-muted-foreground">Sie erhalten eine E-Mail mit Termindetails und Kalender-Einladung.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-accent">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Erinnerung vor dem Termin</p>
                  <p className="text-sm text-muted-foreground">Wir erinnern Sie einen Tag vorher per E-Mail an Ihren Termin.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-accent">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Ihr persönliches Beratungsgespräch</p>
                  <p className="text-sm text-muted-foreground">Marcel Brischke freut sich auf das Kennenlernen zum vereinbarten Termin.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Preparation Tips */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                Optimal vorbereitet in 5 Minuten
              </h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Optional</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Diese Tipps sind völlig optional, können aber helfen, das Gespräch noch produktiver zu gestalten:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {preparationTips.map((tip) => (
                <div 
                  key={tip.title}
                  className="bg-card rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <tip.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{tip.title}</h4>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">
                          {tip.effort}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Info */}
          <section className="bg-muted/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Fragen oder Terminänderung?
            </h3>
            <p className="text-muted-foreground mb-6">
              Falls Sie Fragen haben oder den Termin verschieben müssen, erreichen Sie uns jederzeit:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <a href="tel:022418664342">
                  02241-8664342 anrufen
                </a>
              </Button>
              <WhatsAppButtonClient />
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center mt-10">
            <Button asChild variant="ghost" size="lg">
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo-white.png"
              alt="mb.Raumtrend - Raumausstattung"
              width={160}
              height={45}
              className="h-10 w-auto mx-auto"
            />
          </Link>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/impressum" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
              Datenschutz
            </Link>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/50">
            2026 mb.Raumtrend. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
