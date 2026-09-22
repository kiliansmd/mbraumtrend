"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Menu, Phone, Mail, X } from "lucide-react"
import { WhatsAppChatButton } from "@/components/whatsapp-chat"

export function Header() {
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const panel = panelRef.current
    const background = [...document.querySelectorAll<HTMLElement>("main, footer, header, .mobile-contact-bar")]
    const previousInert = background.map((element) => element.inert)
    background.forEach((element) => { element.inert = true })
    panel?.querySelector<HTMLButtonElement>("button")?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
      if (event.key !== "Tab" || !panel) return
      const focusable = [...panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    const handleResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false) }
    document.addEventListener("keydown", handleKey)
    window.addEventListener("resize", handleResize)
    return () => {
      document.body.style.overflow = previousOverflow
      background.forEach((element, index) => { element.inert = previousInert[index] })
      document.removeEventListener("keydown", handleKey)
      window.removeEventListener("resize", handleResize)
      toggleRef.current?.focus({ preventScroll: true })
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ablauf", label: "So läuft es ab" },
    { href: "#galerie", label: "Galerie" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b ${
          isScrolled
            ? "bg-card shadow-xl border-border"
            : "bg-primary border-primary-foreground/10"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-18 md:h-22 items-center justify-between">
            {/* Logo - switches between white and colored version */}
            <Link href="/" aria-label="mb.Raumtrend – Startseite"
              className="relative flex items-center z-10 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] h-10 md:h-12"
            >
              {/* White logo - visible when not scrolled */}
              <Logo 
                variant="white"
                priority
                animated
                className={`h-10 md:h-12 w-auto absolute transition-opacity duration-500 ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Colored logo - visible when scrolled */}
              <Logo 
                variant="default"
                animated
                className={`h-10 md:h-12 w-auto transition-opacity duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-500 link-underline ${
                    isScrolled
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-primary-foreground/85 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Contact */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:022418664342"
                aria-label="02241-8664342 anrufen"
                className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">02241-8664342</span>
              </a>
              <WhatsAppChatButton />
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 hover:-translate-y-0.5 btn-press">
                <a href="#kontakt">Beratung anfragen</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-300 z-10 ${
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        inert={!isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop - full screen, blocks all content */}
        <div 
          className="absolute inset-0 bg-black/80"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-card shadow-2xl transition-transform duration-300 ease-out z-10 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header with Logo and Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Logo 
                variant="default"
                animated
                className="h-9 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full hover:bg-muted transition-colors"
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 flex-1 px-4 py-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium text-foreground py-3 px-4 rounded-lg hover:bg-muted active:bg-muted/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="border-t border-border px-6 py-6 space-y-3">
              <a
                href="tel:022418664342"
                aria-label="02241-8664342 anrufen"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">02241-8664342</div>
                  <div className="text-xs text-muted-foreground">Rufen Sie uns an</div>
                </div>
              </a>
              <a
                href="mailto:info@mb-raumtrend.de"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors py-2"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium">info@mb-raumtrend.de</div>
                  <div className="text-xs text-muted-foreground">Schreiben Sie uns</div>
                </div>
              </a>
              
              {/* CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={handleNavClick}
              >
                <a href="#schnellanfrage">Kostenlose Beratung</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
