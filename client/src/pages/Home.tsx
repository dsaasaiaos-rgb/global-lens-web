/**
 * Global Lens Landing Page
 * 
 * Design: Diplomatic Dispatch
 * - Editorial-premium aesthetic inspired by The Economist and Palantir
 * - Deep navy-charcoal primary with warm amber-gold accents
 * - Asymmetric, column-based layout
 * - Playfair Display headlines + Inter body text
 */

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
