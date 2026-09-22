"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { WhatsAppTriggerButton } from "@/components/whatsapp-chat"

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 80vh)
      const scrollThreshold = window.innerHeight * 0.8
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary border-t border-primary-foreground/10 shadow-lg pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex">
        <a
          href="tel:022418664342"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-primary-foreground font-medium text-sm border-r border-primary-foreground/10 active:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </a>
        <WhatsAppTriggerButton className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-medium text-sm border-r border-primary-foreground/10 active:bg-[#25D366]/90 transition-colors">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </WhatsAppTriggerButton>
        <a
          href="#schnellanfrage"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-medium text-sm active:bg-accent/90 transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
          Anfrage
        </a>
      </div>
    </div>
  )
}
