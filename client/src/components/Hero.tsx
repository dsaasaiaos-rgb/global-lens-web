/**
 * Hero Section — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Asymmetric layout: headline + supporting text on left, world map visualization on right
 * - Large, bold Playfair Display headline
 * - Warm amber-gold accent line above headline
 * - World map background image with overlay
 * - Responsive: stacked on mobile
 */

import { Button } from '@/components/ui/button';
import { Counter } from '@/components/StatsCounter';

export default function Hero() {
  const heroMapUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446372045/kfGC772WjLttDiT3R6FAm8/hero-world-map-HiJqoGG55sDwGumLhMtttY.webp';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroMapUrl}
          alt="World map visualization"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Headline and CTA */}
          <div className="space-y-8">
            {/* Accent line */}
            <div className="w-16 h-1 bg-primary" />

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                See the World Through Every Lens
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Global Lens aggregates and compares news from five major regions to reveal how different countries frame the same global events.
              </p>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-muted">
              <Counter end={1450} label="Verified Sources" suffix="+" />
              <Counter end={5} label="Global Regions" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground mt-2">min Auto-Refresh</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
              >
                Start Exploring
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/5"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right column: Decorative element (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96">
              {/* Subtle decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute w-48 h-48 rounded-full border-2 border-primary/10" />
              </div>
              
              {/* Center accent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
