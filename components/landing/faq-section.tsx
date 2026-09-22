"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Wie läuft die Beratung vor Ort ab?",
    answer: "Bei der kostenlosen Erstberatung besuchen wir Sie direkt vor Ort. Wir nehmen Maß, besprechen Ihre Wünsche und zeigen Ihnen passende Muster und Materialproben. Anschließend erhalten Sie ein transparentes Festpreis-Angebot — unverbindlich und ohne versteckte Kosten."
  },
  {
    question: "Wie lange dauert eine typische Renovierung?",
    answer: "Die Dauer hängt vom Umfang ab: Ein einzelner Raum (z.B. Schlafzimmer mit Boden und Tapete) ist in 2-3 Tagen fertig. Eine komplette Wohnung planen wir in der Regel innerhalb von 1-2 Wochen. Genaue Zeitpläne erhalten Sie im Angebot."
  },
  {
    question: "Welche Materialien empfehlen Sie für Allergiker?",
    answer: "Für Allergiker empfehlen wir unsere Greenline-Produkte: Korkböden, Naturlinoleum oder emissionsarmes Design-Vinyl. Diese Materialien sind schadstoffgeprüft, antistatisch und leicht zu reinigen. Gerne beraten wir Sie individuell."
  },
  {
    question: "Was ist in der Festpreisgarantie enthalten?",
    answer: "Unser Festpreis umfasst alle Materialien, sämtliche Arbeitsleistungen, Untergrundvorbereitung, Entsorgung alter Beläge sowie die finale Abnahme. Der vereinbarte Preis ist verbindlich — keine Nachforderungen, keine Überraschungen."
  },
  {
    question: "Bieten Sie auch abends oder am Wochenende Termine an?",
    answer: "Ja, wir sind flexibel. Beratungstermine sind auch abends und samstags möglich. Sprechen Sie uns einfach an — per Telefon, WhatsApp oder E-Mail finden wir einen passenden Zeitpunkt für Sie."
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer: "Wir sind in Bonn, Sankt Augustin, Siegburg, Troisdorf, Hennef und dem gesamten Rhein-Sieg-Kreis tätig. Für größere Projekte kommen wir auch gerne in angrenzende Regionen."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Häufige Fragen</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Ihre Fragen — unsere Antworten
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles Wichtige zur Zusammenarbeit mit mb.Raumtrend
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-accent/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-foreground text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180 text-accent"
                    )}
                  />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional help CTA */}
          <div className="mt-10 text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-foreground font-medium mb-2">
              Noch Fragen? Wir helfen gerne!
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Persönliche Beratung auch abends & am Wochenende möglich
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:022418664342" 
                className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                02241-8664342
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a 
                href="mailto:info@mb-raumtrend.de" 
                className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                info@mb-raumtrend.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
