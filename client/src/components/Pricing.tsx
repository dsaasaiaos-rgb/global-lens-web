/**
 * Pricing Section — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Three-tier pricing with highlighted premium tier
 * - Warm amber-gold accent for recommended plan
 * - Clear feature comparison
 * - Responsive: stacked on mobile
 */

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingTiers = [
  {
    name: 'Explorer',
    price: 'Free',
    description: 'Perfect for casual readers',
    features: [
      'Access to all 5 regions',
      '50 articles per day',
      'Basic topic filtering',
      'Sentiment analysis',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Analyst',
    price: '$29',
    period: '/month',
    description: 'For active researchers',
    features: [
      'Everything in Explorer',
      'Unlimited articles',
      'Advanced filtering & search',
      'Custom alerts',
      'Data export (CSV)',
      'Priority support',
      'Topic deep-dives',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Intelligence',
    price: 'Custom',
    description: 'For enterprises',
    features: [
      'Everything in Analyst',
      'API access',
      'Custom integrations',
      'Real-time webhooks',
      'Dedicated account manager',
      'SLA guarantee',
      'On-premise deployment',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your intelligence needs. All plans include access to our full news database.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-lg border transition-all ${
                tier.highlighted
                  ? 'border-primary shadow-lg scale-105 md:scale-100 bg-card'
                  : 'border-muted bg-card hover:border-primary/30'
              }`}
            >
              {/* Highlighted badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}

              {/* Top accent line */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent rounded-t-lg" />
              )}

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="py-6 border-y border-muted">
                  <div className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </div>
                  {tier.period && (
                    <div className="text-muted-foreground text-sm">
                      {tier.period}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-foreground text-foreground hover:bg-foreground/5'
                  }`}
                  variant={tier.highlighted ? 'default' : 'outline'}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ hint */}
        <div className="text-center mt-16 pt-8 border-t border-muted">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.{' '}
            <a href="#" className="text-primary hover:underline font-semibold">
              See detailed comparison
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
