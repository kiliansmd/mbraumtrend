import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { CookieSettingsButton } from "@/components/cookie-banner"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 pb-24 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo 
                variant="white"
                className="h-12 w-auto"
              />
            </Link>
            <p className="font-script text-lg text-primary-foreground/80 mt-2">Ihr Spezialist für Innenraumgestaltung</p>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              Bodenbeläge, Wandgestaltung und Raumausstattung 
              in Bonn, Sankt Augustin & dem Rhein-Sieg-Kreis.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-primary-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:022418664342"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  02241-8664342
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mb-raumtrend.de"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@mb-raumtrend.de
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                Bonn, Sankt Augustin & Umgebung
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-primary-foreground mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#leistungen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bodenbeläge
                </Link>
              </li>
              <li>
                <Link href="#leistungen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Wandgestaltung & Tapeten
                </Link>
              </li>
              <li>
                <Link href="#leistungen" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Raumausstattung
                </Link>
              </li>
              <li>
                <Link href="#schnellanfrage" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Beratung vor Ort
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-medium text-primary-foreground mb-4">Termine</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Mo - Fr: Nach Vereinbarung</li>
              <li>Sa: Nach Vereinbarung</li>
              <li className="pt-2 text-primary-foreground/50 text-sm">
                Termine auch abends & am Wochenende möglich
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} mb.Raumtrend. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/impressum" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              Datenschutz
            </Link>
            <CookieSettingsButton />
          </div>
        </div>

        {/* Digital Agency Badge */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://meindigitalerbetrieb.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/8 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/15 transition-all duration-300"
          >
            <span className="text-xs text-primary-foreground/35 group-hover:text-primary-foreground/55 transition-colors">
              Digitale Strategie & Umsetzung von
            </span>
            <span className="text-xs font-semibold text-primary-foreground/50 group-hover:text-primary-foreground/75 transition-colors">
              meindigitalerbetrieb.de
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
