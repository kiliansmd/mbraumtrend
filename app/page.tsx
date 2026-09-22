import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustBar } from "@/components/landing/trust-bar"
import { USPShowcase } from "@/components/landing/usp-showcase"
import { DesignHarmonySection } from "@/components/landing/design-harmony-section"
import { GreenlineSection } from "@/components/landing/greenline-section"
import { PartnerLogos } from "@/components/landing/partner-logos"
import { SectionCTA } from "@/components/landing/section-cta"
import { QuickQuoteWizard } from "@/components/landing/quick-quote-wizard"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { TipsGlossary } from "@/components/landing/tips-glossary"
import { ProcessSection } from "@/components/landing/process-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { TestimonialHighlight } from "@/components/landing/testimonial-highlight"
import { GoogleReviewsSection } from "@/components/landing/google-reviews-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CooperationHint } from "@/components/landing/cooperation-hint"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { FloatingTrustBadge } from "@/components/landing/floating-trust-badge"
import { StickyCTABar } from "@/components/landing/sticky-cta-bar"

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero with integrated social proof */}
        <HeroSection />
        
        {/* Trust indicators directly after hero */}
        <TrustBar />
        
        {/* USP Showcase - Interactive service presentation */}
        <USPShowcase />
        
        {/* Design Harmony - Visual showcase of wall/floor combinations */}
        <DesignHarmonySection />
        
        {/* Greenline - Ecological flooring for health-conscious customers */}
        <GreenlineSection />
        
        {/* Why Us - Versprechen & Ansprechpartner Marcel Brischke */}
        <WhyUsSection />
        
        {/* Tips & Glossary - Anklickbare Expertentipps */}
        <TipsGlossary />
        
        {/* Primary CTA - Quick Quote Wizard (high priority conversion) */}
        <QuickQuoteWizard />
        
        {/* Mid-page CTA after services */}
        <SectionCTA 
          title="Interesse geweckt?"
          subtitle="Kostenlose Vor-Ort-Beratung in Bonn, Sankt Augustin und Umgebung"
          variant="accent"
        />
        
        {/* Process explanation */}
        <ProcessSection />
        
        {/* Partner logos for credibility */}
        <PartnerLogos />
        
        {/* Testimonial highlight for social proof */}
        <TestimonialHighlight />
        
        {/* Visual proof - Gallery */}
        <GallerySection />
        
        {/* CTA after gallery */}
        <SectionCTA 
          title="Ihr Projekt starten"
          subtitle="Kostenloses Beratungsgespräch in Bonn, Sankt Augustin & dem Rhein-Sieg-Kreis"
        />
        
        {/* More social proof - Google Reviews */}
        <GoogleReviewsSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Subtle cooperation partners hint */}
        <CooperationHint />
        
        {/* Final contact section */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingTrustBadge />
      <StickyCTABar />
    </>
  )
}
