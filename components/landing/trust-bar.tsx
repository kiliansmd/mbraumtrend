import { Star, Shield, Clock, Home } from "lucide-react"

const stats = [
  {
    icon: Star,
    value: "5.0",
    label: "Google Bewertung",
    sublabel: "100% Zufriedenheit",
  },
  {
    icon: Clock,
    value: "20+",
    label: "Jahre Erfahrung",
    sublabel: "Raumgestaltung seit 2004",
  },
  {
    icon: Home,
    value: "100%",
    label: "Innenbereich",
    sublabel: "Spezialisiert auf Innenräume",
  },
  {
    icon: Shield,
    value: "Festpreis",
    label: "Transparente Kosten",
    sublabel: "Keine versteckten Posten",
  },
]

export function TrustBar() {
  return (
    <section className="py-8 md:py-10 bg-card border-y border-border/50 shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center group relative"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 mb-3 md:mb-4 group-hover:bg-accent/15 transition-colors duration-300 shadow-sm">
                <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-foreground">{stat.value}</div>
              <div className="font-semibold text-sm md:text-base text-foreground">{stat.label}</div>
              <div className="text-xs md:text-sm text-muted-foreground hidden sm:block mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
