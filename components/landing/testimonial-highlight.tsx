"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"

export function TestimonialHighlight() {
  return (
    <section className="py-16 md:py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border relative">
            {/* Quote icon */}
            <div className="absolute -top-5 left-8 md:left-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Quote className="h-5 w-5 md:h-6 md:w-6 text-accent-foreground" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="shrink-0">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-4 ring-primary/10 shadow-xl">
                  <Image
                    src="/images/testimonials/kilian-schmidt.png"
                    alt="Kilian Schmidt - Geschäftsführer getexperts GmbH"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote text */}
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                  "Mit mb.Raumtrend haben wir einen Partner gefunden, der versteht, was modernes Arbeiten bedeutet. 
                  Unsere neuen Büroräume spiegeln jetzt unsere Unternehmenskultur wider — 
                  <span className="text-accent font-medium">professionell umgesetzt, termingerecht und mit echtem Verständnis für unsere Anforderungen.</span>"
                </blockquote>
                
                {/* Author with Logo */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-lg text-foreground">Kilian Schmidt</p>
                    <p className="text-sm text-muted-foreground">Geschäftsführer</p>
                  </div>
                  <div className="hidden md:block w-px h-10 bg-border" />
                  <div className="relative h-8 w-32">
                    <Image
                      src="/images/testimonials/getexperts-logo.png"
                      alt="getexperts GmbH"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="hidden md:block w-px h-10 bg-border" />
                  <a 
                    href="https://share.google/9EDWArteaFyrGohsJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Auf Google ansehen
                  </a>
                </div>
              </div>
              
              {/* Project info card */}
              <div className="shrink-0 w-full lg:w-auto">
                <div className="bg-primary/5 rounded-2xl p-5 md:p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">Projekt</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span className="text-sm text-foreground">Bürogestaltung</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span className="text-sm text-foreground">Farbkonzept</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span className="text-sm text-foreground">Bodenbeläge</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">Branche</p>
                    <p className="text-sm font-medium text-foreground">Tech / Recruiting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
