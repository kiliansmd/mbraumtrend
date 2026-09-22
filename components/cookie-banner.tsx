"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setIsVisible(false)
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
  }

  if (!isVisible) return null

  // Compact bottom bar design - less intrusive
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-3 md:p-4 animate-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg border border-border">
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="h-5 w-5 text-accent shrink-0" />
            <p className="text-sm text-muted-foreground">
              Wir nutzen Cookies für eine bessere Nutzererfahrung.{" "}
              <Link href="/datenschutz" className="text-accent underline underline-offset-2">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              onClick={rejectAll}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Ablehnen
            </Button>
            <Button
              onClick={acceptAll}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Small button to reopen cookie settings
export function CookieSettingsButton() {
  const openSettings = () => {
    localStorage.removeItem("cookie-consent")
    window.location.reload()
  }

  return (
    <button
      type="button"
      onClick={openSettings}
      className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm flex items-center gap-1"
    >
      <Cookie className="h-3 w-3" />
      Cookie-Einstellungen
    </button>
  )
}
