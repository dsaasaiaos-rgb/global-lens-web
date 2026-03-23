/**
 * Comparison Section — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Showcases the core value proposition: how different regions cover the same story
 * - Mockup-style card layout with country flags and headlines
 * - Warm amber-gold accent lines separating sections
 * - Responsive: stacked on mobile
 */

import { Button } from '@/components/ui/button';

const comparisonExample = {
  topic: 'Global Economic Slowdown',
  perspectives: [
    {
      country: 'United States',
      flag: '🇺🇸',
      headline: 'U.S. Economy Slows: Is a Recession Coming?',
      sentiment: 'Negative',
      angle: 'Focuses on domestic impact and Fed policy decisions',
    },
    {
      country: 'European Union',
      flag: '🇪🇺',
      headline: 'Europe Faces Economic Headwinds Amid Global Uncertainty',
      sentiment: 'Neutral',
      angle: 'Emphasizes regional coordination and recovery plans',
    },
    {
      country: 'China',
      flag: '🇨🇳',
      headline: 'Global Economic Slowdown: How China Responds',
      sentiment: 'Positive',
      angle: 'Highlights domestic resilience and strategic opportunities',
    },
  ],
};

export default function Comparison() {
  const comparisonImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446372045/kfGC772WjLttDiT3R6FAm8/comparison-interface-GvPEQcjbVZQ685C29t54ko.webp';

  return (
    <section id="comparison" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            See the Same Story, Different Angles
          </h2>
          <p className="text-lg text-muted-foreground">
            Global Lens reveals how the same event is covered differently across regions, helping you understand the full picture.
          </p>
        </div>

        {/* Comparison visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Example comparison */}
          <div className="space-y-6">
            <div className="bg-card border border-muted rounded-lg p-8">
              <div className="mb-6 pb-6 border-b border-muted">
                <h3 className="text-2xl font-bold text-foreground">
                  {comparisonExample.topic}
                </h3>
              </div>

              {/* Perspectives */}
              <div className="space-y-6">
                {comparisonExample.perspectives.map((perspective, index) => (
                  <div key={index} className="pb-6 border-b border-muted last:border-b-0 last:pb-0">
                    {/* Country header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{perspective.flag}</span>
                      <div>
                        <h4 className="font-bold text-foreground">{perspective.country}</h4>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          perspective.sentiment === 'Positive' ? 'bg-green-100 text-green-800' :
                          perspective.sentiment === 'Negative' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {perspective.sentiment}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <p className="font-semibold text-foreground mb-2">
                      {perspective.headline}
                    </p>

                    {/* Angle */}
                    <p className="text-sm text-muted-foreground italic">
                      {perspective.angle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className="hidden lg:block">
            <img
              src={comparisonImageUrl}
              alt="Comparison interface mockup"
              className="w-full rounded-lg shadow-lg border border-muted"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-muted">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore thousands of stories from different perspectives. Understand the narratives that shape global events.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Comparing Now
          </Button>
        </div>
      </div>
    </section>
  );
}
