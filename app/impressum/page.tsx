import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/impressum" },
  openGraph: { title: "Impressum | mb.Raumtrend", description: "Impressum und rechtliche Informationen von mb.Raumtrend - Ihr Spezialist für Raumausstattung und Innenraumgestaltung in Bonn.", url: "/impressum" },
  twitter: { card: "summary_large_image", title: "Impressum | mb.Raumtrend", description: "Impressum und rechtliche Informationen von mb.Raumtrend - Ihr Spezialist für Raumausstattung und Innenraumgestaltung in Bonn." },
  title: "Impressum",
  description: "Impressum und rechtliche Informationen von mb.Raumtrend - Ihr Spezialist für Raumausstattung und Innenraumgestaltung in Bonn.",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Impressum</h1>
        </div>
      </header>

      {/* Content */}
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto prose prose-slate">
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="font-semibold text-lg text-foreground mb-2">mb.Raumtrend</p>
              <p className="text-muted-foreground">Inhaber: Marcel Brischke</p>
              <p className="text-muted-foreground">Wellenstraße 5</p>
              <p className="text-muted-foreground">53757 Sankt Augustin</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <div className="bg-card rounded-xl p-6 border border-border space-y-3">
              <a href="tel:022418664342" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                02241 8664342
              </a>
              <a href="mailto:info@mb-raumtrend.de" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                info@mb-raumtrend.de
              </a>
              <a href="https://www.mb-raumtrend.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <MapPin className="h-5 w-5 text-accent" />
                www.mb-raumtrend.de
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              <span className="text-foreground font-medium">DE311893766</span>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Kammerzugehörigkeit</h2>
            <p className="text-muted-foreground">
              Marcel Brischke ist Mitglied der{" "}
              <a 
                href="https://www.hwk-koeln.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Handwerkskammer Köln
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="text-muted-foreground">
              Marcel Brischke<br />
              Wellenstraße 5<br />
              53757 Sankt Augustin
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Online-Streitbeilegung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-muted-foreground mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte und Links</h2>
            <p className="text-muted-foreground">
              Wir bemühen uns, die Inhalte unserer Website stets aktuell, korrekt und vollständig zu halten, können dafür aber keine Gewähr übernehmen. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutz</h2>
            <p className="text-muted-foreground">
              Informationen zur Erhebung und Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link href="/" className="inline-block mb-4">
            <Logo 
              variant="white"
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
          <p className="mt-6 text-xs text-primary-foreground/75">
            © 2026 mb.Raumtrend. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
