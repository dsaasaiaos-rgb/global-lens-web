/**
 * Navigation Component — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Minimal, elegant header with logo and CTA
 * - Warm amber-gold accent line beneath
 * - Sticky positioning for accessibility
 * - Responsive: hamburger menu on mobile
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-muted">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Global Lens
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#comparison" className="text-foreground hover:text-primary transition-colors">
              Comparison
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-muted pt-4 space-y-3">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#comparison" className="block text-foreground hover:text-primary transition-colors">
              Comparison
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <Button className="w-full bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        )}
      </div>
      
      {/* Accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </nav>
  );
}
