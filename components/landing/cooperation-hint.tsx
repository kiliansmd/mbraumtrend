const partners = ["Fassade & Gerüstbau", "Schreinerei", "Fenster & Türen"]

export function CooperationHint() {
  return (
    <section className="py-12 md:py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <p className="text-sm text-muted-foreground">
            Außerhalb unseres Leistungsbereichs? Wir vermitteln an geschätzte Partner:
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {partners.map((partner, index) => (
              <span key={partner} className="text-sm text-foreground/70">
                {partner}
                {index < partners.length - 1 && <span className="ml-6 text-border">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
