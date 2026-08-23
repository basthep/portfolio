import { MapPin, Mail, Download } from 'lucide-react';
import { personal } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 / About"
          title="About"
          highlight="Me"
          subtitle="Get to know the developer behind the code."
        />

        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid md:grid-cols-5 gap-10 items-start`}>
          {/* Left: bio */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">{personal.bio}</p>
            <p className="text-slate-400 leading-relaxed">
              My approach blends technical rigor with product thinking — I care about
              performance budgets, accessibility, and shipping features that users actually
              need. I thrive in fast-paced environments where ownership and impact go hand in hand.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-accent-400" />
                {personal.location}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm text-slate-300">
                <Mail className="w-4 h-4 text-accent-400" />
                {personal.email}
              </div>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-base-900 bg-gradient-to-r from-accent-400 to-secondary-400 hover:shadow-lg hover:shadow-accent-400/25 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {personal.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center glow-border"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text-static mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
