/**
 * Footer Component — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Minimal, editorial footer with essential links
 * - Warm amber-gold accent line above
 * - Deep navy background with light text
 * - Responsive: stacked on mobile
 */

import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-lg">Global Lens</span>
            </div>
            <p className="text-background/70 text-sm">
              See the world through every lens. Understanding global narratives, one story at a time.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-primary transition-colors">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-background/70">
            © 2026 Global Lens. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
