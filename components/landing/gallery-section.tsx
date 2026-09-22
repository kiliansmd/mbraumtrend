"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Camera } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Elegantes Schlafzimmer mit geometrischer Tapete und moderner Beleuchtung",
    category: "Tapeten",
    description: "Schlafzimmer in Bonn-Beuel",
    details: "Geometrische Vliestapete, indirektes Lichtkonzept",
    projectType: "Renovierung Altbauwohnung",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Stilvolles Esszimmer mit salbeigrünen Wänden und Parkett",
    category: "Parkett",
    description: "Esszimmer in Siegburg",
    details: "Eichenparkett Fischgrät, Farbkonzept Salbeigrün",
    projectType: "Komplettgestaltung Neubau",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Modernes Büro mit 3D-Wandstruktur und Designboden",
    category: "Business",
    description: "Praxis in Sankt Augustin",
    details: "Design-Vinyl Betonoptik, 3D-Wandpaneele",
    projectType: "Gewerbliche Raumgestaltung",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Gemütliches Wohnzimmer mit Strukturtapete und Korkboden",
    category: "Greenline",
    description: "Wohnbereich in Troisdorf",
    details: "Ökologischer Korkboden, Naturfaser-Strukturtapete",
    projectType: "Nachhaltige Sanierung",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Eleganter Eingangsbereich mit klassischer Mustertapete",
    category: "Tapeten",
    description: "Flur in Bonn-Bad Godesberg",
    details: "Premium-Designtapete Art Deco, Sockelleisten",
    projectType: "Sanierung Altbauvilla",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Moderne Küche mit grauer Akzentwand",
    category: "Wandgestaltung",
    description: "Küche in Hennef",
    details: "Spachteltechnik Betonoptik, Design-Vinyl",
    projectType: "Küchenrenovierung",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section id="galerie" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-3">
            <Camera className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Referenzen</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Projekte aus Bonn, Sankt Augustin & Umgebung
          </h2>
          <p className="text-lg text-muted-foreground">
            Einblicke in unsere Arbeit — von der ersten Idee bis zum fertigen Raum.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-semibold text-sm mb-1">
                    {image.description}
                  </p>
                  <p className="text-primary-foreground/80 text-xs">
                    {image.details}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-card border-border">
          <VisuallyHidden>
            <DialogTitle>{selectedImage?.description || "Projektbild"}</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <div className="relative">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  quality={90}
                  priority
                />
              </div>
              <div className="p-5 bg-card">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedImage.projectType}
                  </span>
                </div>
                <p className="font-bold text-lg text-foreground">{selectedImage.description}</p>
                <p className="text-sm text-muted-foreground mt-1">{selectedImage.details}</p>
                <p className="text-xs text-muted-foreground/70 mt-2 italic">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
