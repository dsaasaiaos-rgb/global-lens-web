/**
 * CTA Banner Component — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Eye-catching call-to-action banner
 * - Warm amber-gold background with deep navy text
 * - Positioned before footer
 * - Responsive: stacked on mobile
 */

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Headline and description */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to See the Full Picture?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of journalists, analysts, and decision-makers who use Global Lens to understand global narratives.
            </p>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
