"use client"

import { useState, useEffect } from "react"
import { Star, X } from "lucide-react"

export function FloatingTrustBadge() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("trust-badge-dismissed")
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000) // Show after 5 seconds

    // Auto-hide after 10 seconds of being visible
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 15000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    sessionStorage.setItem("trust-badge-dismissed", "true")
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-24 md:bottom-6 left-4 z-30 animate-in slide-in-from-left-4 duration-500 hidden md:block">
      <div className="bg-card rounded-xl shadow-lg border border-border p-3 max-w-[280px] relative">
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
          aria-label="Schließen"
        >
          <X className="h-3 w-3 text-muted-foreground" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
            F
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-foreground leading-snug">
              "Wurden geduldig beraten und das Ergebnis war wie versprochen."
            </p>
            <p className="text-[10px] text-muted-foreground mt-1">Felix P. · Bonn</p>
          </div>
        </div>
      </div>
    </div>
  )
}
