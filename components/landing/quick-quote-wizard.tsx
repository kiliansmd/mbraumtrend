"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Wallpaper, 
  Layers, 
  Sofa, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Calendar,
  Phone,
  User,
  Mail,
  CheckCircle2,
  Zap
} from "lucide-react"
import { sendLeadEmail } from "@/app/actions/send-lead-email"

type ProjectType = "boden" | "wand" | "raum" | "komplett" | ""
type RoomSize = "klein" | "mittel" | "gross" | "mehrere" | ""
type Timeframe = "dringend" | "monat" | "quartal" | "flexibel" | ""

const projectTypes = [
  { 
    id: "boden" as ProjectType, 
    label: "Bodenbeläge", 
    icon: Layers,
    description: "Parkett, Vinyl & mehr"
  },
  { 
    id: "wand" as ProjectType, 
    label: "Wandgestaltung", 
    icon: Wallpaper,
    description: "Tapeten & Oberflächen"
  },
  { 
    id: "raum" as ProjectType, 
    label: "Raumausstattung", 
    icon: Sofa,
    description: "Einrichtungsberatung"
  },
  { 
    id: "komplett" as ProjectType, 
    label: "Komplettlösung", 
    icon: Sparkles,
    description: "Alles aus einer Hand"
  },
]

const roomSizes = [
  { id: "klein" as RoomSize, label: "Klein", description: "Bis 20 m²", example: "z.B. Bad, Flur" },
  { id: "mittel" as RoomSize, label: "Mittel", description: "20-40 m²", example: "z.B. Schlafzimmer" },
  { id: "gross" as RoomSize, label: "Groß", description: "40-80 m²", example: "z.B. Wohnzimmer" },
  { id: "mehrere" as RoomSize, label: "Mehrere Räume", description: "80+ m²", example: "z.B. Wohnung" },
]

const timeframes = [
  { id: "dringend" as Timeframe, label: "So schnell wie möglich", icon: Zap, color: "text-accent" },
  { id: "monat" as Timeframe, label: "In den nächsten Wochen", icon: Clock, color: "text-primary" },
  { id: "quartal" as Timeframe, label: "In 1-3 Monaten", icon: Calendar, color: "text-primary" },
  { id: "flexibel" as Timeframe, label: "Zeitlich flexibel", icon: Check, color: "text-muted-foreground" },
]

export function QuickQuoteWizard() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>("")
  const [roomSize, setRoomSize] = useState<RoomSize>("")
  const [timeframe, setTimeframe] = useState<Timeframe>("")
  const [contact, setContact] = useState({ name: "", phone: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const canProceed = () => {
    switch (step) {
      case 1: return projectType !== ""
      case 2: return roomSize !== ""
      case 3: return timeframe !== ""
      case 4: return contact.name.trim() !== "" && (contact.phone.trim() !== "" || contact.email.trim() !== "")
      default: return false
    }
  }

  const handleNext = () => {
    if (step < totalSteps && canProceed()) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) return
    
    setIsSubmitting(true)
    
    // Build WhatsApp message with all wizard data
    const projectLabel = projectTypes.find(p => p.id === projectType)?.label || ""
    const sizeLabel = roomSizes.find(r => r.id === roomSize)?.label || ""
    const sizeDesc = roomSizes.find(r => r.id === roomSize)?.description || ""
    const timeLabel = timeframes.find(t => t.id === timeframe)?.label || ""
    
    const message = [
      `Hallo Herr Brischke,`,
      ``,
      `ich möchte gerne eine Beratung anfragen:`,
      ``,
      `Projekt: ${projectLabel}`,
      `Größe: ${sizeLabel} (${sizeDesc})`,
      `Zeitrahmen: ${timeLabel}`,
      ``,
      `Name: ${contact.name}`,
      contact.phone ? `Telefon: ${contact.phone}` : "",
      contact.email ? `E-Mail: ${contact.email}` : "",
      ``,
      `Ich freue mich auf Ihre Rückmeldung!`,
    ].filter(Boolean).join("\n")
    
    const whatsappUrl = `https://wa.me/4917623100265?text=${encodeURIComponent(message)}`
    
    // Send lead email to info@mb-raumtrend.de in parallel
    const emailPromise = sendLeadEmail({
      source: "Quick Quote Wizard - Website",
      projectType: projectLabel,
      roomSize: `${sizeLabel} (${sizeDesc})`,
      timeframe: timeLabel,
      contact: {
        name: contact.name,
        phone: contact.phone || undefined,
        email: contact.email || undefined,
      },
      timestamp: new Date().toLocaleString('de-DE', { 
        dateStyle: 'medium', 
        timeStyle: 'short' 
      }),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    })
    
    // Wait for email to be sent (don't block on it)
    emailPromise.catch(error => {
      console.error('[v0] E-Mail-Versand fehlgeschlagen:', error)
      // Continue anyway - WhatsApp is primary channel
    })
    
    // Small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const resetWizard = () => {
    setStep(1)
    setProjectType("")
    setRoomSize("")
    setTimeframe("")
    setContact({ name: "", phone: "", email: "" })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <section id="schnellanfrage" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Anfrage erfolgreich gesendet!
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-4">
              Vielen Dank, {contact.name.split(" ")[0]}! Ihre Anfrage wurde an WhatsApp weitergeleitet.
            </p>
            <p className="text-base text-primary-foreground/60 mb-8">
              Marcel Brischke meldet sich innerhalb von 24 Stunden persönlich bei Ihnen. 
              Falls WhatsApp nicht geöffnet wurde, erreichen Sie uns auch direkt unter{" "}
              <a href="tel:022418664342" className="underline text-primary-foreground/80 hover:text-primary-foreground">02241-8664342</a> oder{" "}
              <a href="mailto:info@mb-raumtrend.de" className="underline text-primary-foreground/80 hover:text-primary-foreground">info@mb-raumtrend.de</a>.
            </p>
            
            <div className="bg-primary-foreground/10 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4 text-lg">Ihre Anfrage im Überblick:</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p><span className="text-primary-foreground">Projekt:</span> {projectTypes.find(p => p.id === projectType)?.label}</p>
                <p><span className="text-primary-foreground">Größe:</span> {roomSizes.find(r => r.id === roomSize)?.label} ({roomSizes.find(r => r.id === roomSize)?.description})</p>
                <p><span className="text-primary-foreground">Zeitrahmen:</span> {timeframes.find(t => t.id === timeframe)?.label}</p>
              </div>
            </div>
            
            <Button 
              onClick={resetWizard}
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Neue Anfrage stellen
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="schnellanfrage" className="py-16 md:py-24 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              In nur 1 Minute zur Anfrage
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Schnellanfrage starten
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Beantworten Sie 4 kurze Fragen und erhalten Sie eine kostenlose, 
              unverbindliche Ersteinschätzung.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-primary-foreground/80 font-medium">Schritt {step} von {totalSteps}</span>
              <span className="text-accent font-semibold">{Math.round(progress)}% abgeschlossen</span>
            </div>
            <div className="h-3 bg-primary-foreground/15 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500 ease-out shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Step indicators */}
            <div className="flex justify-between mt-2">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s}
                  className={`text-xs font-medium ${s <= step ? 'text-accent' : 'text-primary-foreground/40'}`}
                >
                  {s === 1 ? 'Projekt' : s === 2 ? 'Größe' : s === 3 ? 'Zeitrahmen' : 'Kontakt'}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
            <div className="bg-primary-foreground/5 rounded-3xl p-6 md:p-10 border border-primary-foreground/10">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                  Was möchten Sie umgestalten?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all text-left group ${
                        projectType === type.id
                          ? "border-accent bg-accent/10"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
                      }`}
                    >
                      <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl mb-2 md:mb-3 transition-colors ${
                        projectType === type.id ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10 text-primary-foreground"
                      }`}>
                        <type.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="font-semibold text-sm md:text-base mb-0.5 md:mb-1">{type.label}</div>
                      <div className="text-xs md:text-sm text-primary-foreground/60">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Room Size */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                  Wie groß ist der Bereich?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {roomSizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setRoomSize(size.id)}
                      className={`p-4 md:p-5 rounded-xl md:rounded-2xl border-2 transition-all text-left ${
                        roomSize === size.id
                          ? "border-accent bg-accent/10"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
                      }`}
                    >
                      <div className="font-semibold text-base md:text-lg mb-0.5 md:mb-1">{size.label}</div>
                      <div className="text-accent font-medium text-sm md:text-base mb-0.5 md:mb-1">{size.description}</div>
                      <div className="text-xs md:text-sm text-primary-foreground/60">{size.example}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Timeframe */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                  Wann soll es losgehen?
                </h3>
                <div className="space-y-3">
                  {timeframes.map((tf) => (
                    <button
                      key={tf.id}
                      onClick={() => setTimeframe(tf.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                        timeframe === tf.id
                          ? "border-accent bg-accent/10"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        timeframe === tf.id ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10"
                      }`}>
                        <tf.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-lg">{tf.label}</span>
                      {timeframe === tf.id && (
                        <Check className="h-5 w-5 ml-auto text-accent" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
                  Wie können wir Sie erreichen?
                </h3>
                <p className="text-primary-foreground/70 text-center mb-6">
                  Wir melden uns innerhalb von 24 Stunden
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ihr Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/40" />
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon (bevorzugt)</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/40" />
                      <input
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        placeholder="0228 123456"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">oder E-Mail</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/40" />
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        placeholder="max@beispiel.de"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-primary-foreground/50 mt-4 text-center">
                  Ihre Daten werden vertraulich behandelt. 
                  <a href="/datenschutz" className="underline hover:text-primary-foreground ml-1">Datenschutz</a>
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-primary-foreground/10">
              {step > 1 ? (
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück
                </Button>
              ) : (
                <div />
              )}
              
              {step < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                >
                  Weiter
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 min-w-[160px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Senden...
                    </span>
                  ) : (
                    <>
                      Anfrage senden
                      <Check className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>100% kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Unverbindlich</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span>Antwort in 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
