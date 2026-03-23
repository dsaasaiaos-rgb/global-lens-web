/**
 * Features Section — Diplomatic Dispatch Style
 * 
 * Design Notes:
 * - Staggered, asymmetric grid layout (not uniform)
 * - Feature cards with subtle shadows and hover effects
 * - Warm amber-gold accent elements
 * - Icons from lucide-react
 * - Responsive: single column on mobile
 */

import { Globe, BarChart3, Zap, Shield, TrendingUp, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Multi-Country Feed',
    description: 'Real-time articles from 1,450+ verified sources across 5 regions: US, China, Russia, India, and EU.',
  },
  {
    icon: BarChart3,
    title: 'Perspective Comparison',
    description: 'Side-by-side analysis showing how each country frames the same global events.',
  },
  {
    icon: TrendingUp,
    title: 'Sentiment Analysis',
    description: 'Automatic classification of positive, negative, and neutral coverage across regions.',
  },
  {
    icon: Zap,
    title: 'Topic Tracking',
    description: 'Monitor coverage trends across Politics, Economy, Technology, Military, Climate, and more.',
  },
  {
    icon: Clock,
    title: 'Auto-Refresh',
    description: 'News updates every 15 minutes with zero manual intervention—always stay current.',
  },
  {
    icon: Shield,
    title: 'Premium Insights',
    description: 'Access to exclusive analysis and deep dives into geopolitical narratives.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Features for Global Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to understand how the world's news is shaped by different perspectives.
          </p>
        </div>

        {/* Features grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-card border border-muted rounded-lg hover:shadow-lg hover:border-primary/30 transition-all ${
                  index === 1 ? 'lg:col-span-1 lg:row-span-2' : ''
                } ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />

                {/* Icon */}
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/10 group-hover:border-primary/30 rounded-bl-lg transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
