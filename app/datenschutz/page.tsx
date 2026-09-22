import Link from "next/link"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/datenschutz" },
  openGraph: { title: "Datenschutzerklärung | mb.Raumtrend", description: "Datenschutzerklärung von mb.Raumtrend - Informationen zum Umgang mit Ihren personenbezogenen Daten.", url: "/datenschutz" },
  twitter: { card: "summary_large_image", title: "Datenschutzerklärung | mb.Raumtrend", description: "Datenschutzerklärung von mb.Raumtrend - Informationen zum Umgang mit Ihren personenbezogenen Daten." },
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von mb.Raumtrend - Informationen zum Umgang mit Ihren personenbezogenen Daten.",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
        </div>
      </header>

      {/* Content */}
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto prose prose-slate">

          {/* 1. Verantwortliche Stelle */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Verantwortliche Stelle</h2>
            <p className="text-muted-foreground mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="font-semibold text-foreground">mb.Raumtrend</p>
              <p className="text-muted-foreground">Inhaber: Marcel Brischke</p>
              <p className="text-muted-foreground">Wellenstraße 5</p>
              <p className="text-muted-foreground">53757 Sankt Augustin</p>
              <div className="mt-4 space-y-2">
                <a href="tel:022418664342" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  02241 8664342
                </a>
                <a href="mailto:info@mb-raumtrend.de" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  info@mb-raumtrend.de
                </a>
              </div>
              <p className="text-muted-foreground mt-4">Website: www.mb-raumtrend.de</p>
            </div>
            <p className="text-muted-foreground mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          {/* 2. Allgemeine Hinweise */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-muted-foreground">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-muted-foreground mt-3">
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können (z. B. Name, E-Mail-Adresse, Telefonnummer).
            </p>
            <p className="text-muted-foreground mt-3">
              Beim Besuch dieser Website werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wofür wir sie nutzen und wie dies geschieht.
            </p>
          </section>

          {/* 3. Hosting */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Hosting</h2>
            <p className="text-muted-foreground">
              Diese Website wird bei Vercel Inc. gehostet.
            </p>
            <p className="text-muted-foreground mt-3">
              Beim Aufruf unserer Website werden durch Vercel automatisch folgende Daten erfasst:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>aufgerufene Seiten</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Diese Daten werden in sogenannten Server-Logfiles gespeichert.
            </p>
            <p className="text-muted-foreground mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung unserer Website.
            </p>
            <p className="text-muted-foreground mt-3">
              Es wurde ein Vertrag zur Auftragsverarbeitung mit dem Hosting-Anbieter abgeschlossen.
            </p>
          </section>

          {/* 4. Erhebung und Verarbeitung */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Erhebung und Verarbeitung personenbezogener Daten</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.1 Zugriffsdaten</h3>
            <p className="text-muted-foreground">
              Beim Besuch unserer Website werden automatisch technische Daten erfasst (Server-Logs). Diese dienen der Systemsicherheit, Fehleranalyse und Optimierung der Website.
            </p>
            <p className="text-muted-foreground mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.2 Kontaktformulare und Anfragen</h3>
            <p className="text-muted-foreground">
              Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, werden folgende Daten verarbeitet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Name</li>
              <li>Telefonnummer</li>
              <li>E-Mail-Adresse</li>
              <li>Terminwunsch</li>
              <li>Projektbeschreibung</li>
              <li>sonstige freiwillige Angaben</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Anbahnung oder Durchführung eines Vertrags.
            </p>
            <p className="text-muted-foreground mt-3">
              <strong>Rechtsgrundlage:</strong><br />
              Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, sofern erteilt)
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.3 Kontaktaufnahme per Telefon, E-Mail & WhatsApp</h3>
            <p className="text-muted-foreground">
              Zur Terminvereinbarung und Beratung kontaktieren Sie uns direkt per Telefon, E-Mail oder WhatsApp.
            </p>
            <p className="text-muted-foreground mt-3">
              Bei einer Kontaktaufnahme werden insbesondere folgende Daten verarbeitet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Name</li>
              <li>Telefonnummer bzw. E-Mail-Adresse</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>ggf. Projektangaben</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p className="text-muted-foreground mt-3">
              Bei Nutzung von WhatsApp werden Daten durch die Meta Platforms Ireland Ltd. verarbeitet. Es gelten die Datenschutzbestimmungen von WhatsApp.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4.4 Kalendersynchronisation mit Google Calendar</h3>
            <p className="text-muted-foreground">
              Zur Verwaltung von Terminen nutzen wir Google Calendar.
            </p>
            <p className="text-muted-foreground mt-3">
              Gebuchte Termine werden in unserem Google-Kalender gespeichert. Dabei werden folgende Informationen verarbeitet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Name</li>
              <li>Terminzeitpunkt</li>
              <li>Kontaktdaten</li>
              <li>ggf. Projekthinweise</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="text-muted-foreground mt-3">
              Auch hierbei kann es zu Datenübertragungen in Drittstaaten kommen. Diese erfolgen auf Basis geeigneter Garantien.
            </p>
          </section>

          {/* 5. Kontaktaufnahme */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Kontaktaufnahme durch mb.Raumtrend</h2>
            <p className="text-muted-foreground">
              Im Rahmen Ihrer Anfrage oder Angebotsanfrage behalten wir uns vor, Sie über die von Ihnen angegebenen Kontaktdaten (Telefon, E-Mail-Adresse, WhatsApp) zu kontaktieren, um:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Termine zu bestätigen, zu verschieben oder abzustimmen,</li>
              <li>Rückfragen zu Ihrem Projekt zu klären,</li>
              <li>Angebote zu erstellen und zu erläutern,</li>
              <li>weitere mit Ihrer Anfrage zusammenhängende Informationen bereitzustellen.</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Die Kontaktaufnahme erfolgt ausschließlich zu Zwecken der Vertragsvorbereitung, Vertragsdurchführung und Kundenbetreuung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie — sofern erforderlich — Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p className="text-muted-foreground mt-3">
              Eine Nutzung Ihrer Kontaktdaten zu allgemeinen Werbezwecken erfolgt nicht ohne Ihre ausdrückliche Einwilligung.
            </p>
            <p className="text-muted-foreground mt-3">
              Sie können der Kontaktaufnahme jederzeit widersprechen.
            </p>
          </section>

          {/* 6. Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies und ähnliche Technologien</h2>
            <p className="text-muted-foreground">
              Unsere Website verwendet technisch notwendige Cookies, um grundlegende Funktionen bereitzustellen.
            </p>
            <p className="text-muted-foreground mt-3">
              Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert.
            </p>
            <p className="text-muted-foreground mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <p className="text-muted-foreground mt-3">
              Sofern zukünftig Analyse- oder Marketing-Cookies eingesetzt werden, erfolgt dies nur mit Ihrer vorherigen Einwilligung.
            </p>
            <p className="text-muted-foreground mt-3">
              Sie können Cookies jederzeit über Ihren Browser löschen oder deaktivieren.
            </p>
          </section>

          {/* 7. Externe Inhalte */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Einbindung externer Inhalte (z. B. Social Media)</h2>
            <p className="text-muted-foreground">
              Auf unserer Website können Inhalte externer Anbieter (z. B. Instagram) eingebunden sein.
            </p>
            <p className="text-muted-foreground mt-3">
              Beim Laden dieser Inhalte wird Ihre IP-Adresse an den jeweiligen Anbieter übertragen.
            </p>
            <p className="text-muted-foreground mt-3">
              Wenn Sie bei diesem Anbieter eingeloggt sind, kann Ihr Besuch Ihrem Benutzerkonto zugeordnet werden.
            </p>
            <p className="text-muted-foreground mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
          </section>

          {/* 8. Speicherdauer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Speicherdauer</h2>
            <p className="text-muted-foreground">
              Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist.
            </p>
            <p className="text-muted-foreground mt-3">
              Darüber hinaus speichern wir Daten nur, wenn gesetzliche Aufbewahrungsfristen bestehen (z. B. steuer- und handelsrechtliche Pflichten).
            </p>
            <p className="text-muted-foreground mt-3">
              Nach Wegfall des Zwecks oder Ablauf der Frist werden die Daten gelöscht.
            </p>
          </section>

          {/* 9. Ihre Rechte */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Ihre Rechte als betroffene Person</h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.
            </p>
            <p className="text-muted-foreground mt-3">
              Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          {/* 10. Datensicherheit */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Datensicherheit</h2>
            <p className="text-muted-foreground">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Verlust, Manipulation, unbefugten Zugriff oder Missbrauch zu schützen.
            </p>
            <p className="text-muted-foreground mt-3">
              Unsere Sicherheitsmaßnahmen werden entsprechend der technischen Entwicklung fortlaufend angepasst.
            </p>
          </section>

          {/* 11. Widerruf */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Widerruf Ihrer Einwilligung</h2>
            <p className="text-muted-foreground">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer Einwilligung möglich.
            </p>
            <p className="text-muted-foreground mt-3">
              Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="text-muted-foreground mt-3">
              Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
            </p>
          </section>

          {/* 12. Aktualität */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Aktualität und Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-muted-foreground">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026.
            </p>
            <p className="text-muted-foreground mt-3">
              Durch Weiterentwicklungen der Website, neue Dienste oder gesetzliche Änderungen kann eine Anpassung erforderlich werden.
            </p>
            <p className="text-muted-foreground mt-3">
              Die jeweils aktuelle Version finden Sie jederzeit auf unserer Website.
            </p>
            <p className="text-muted-foreground mt-6 text-sm">
              Stand: Januar 2026
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
            2026 mb.Raumtrend. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
