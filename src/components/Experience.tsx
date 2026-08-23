import { Briefcase, Check } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TimelineItem({ item, index }: { item: (typeof experience)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isLast = index === experience.length - 1;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} relative pl-12 sm:pl-20`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot + line */}
      <div className="absolute left-0 top-1 bottom-0 flex flex-col items-center">
        <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-base-700 border border-accent-400/30 shadow-lg shadow-accent-400/10">
          <Briefcase className="w-5 h-5 text-accent-400" />
        </div>
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-accent-400/40 to-transparent my-2" />
        )}
      </div>

      {/* Card */}
      <div className="glass-card rounded-2xl p-6 glow-border mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
          <h3 className="text-lg font-bold text-white">{item.role}</h3>
          <span className="text-sm font-mono text-accent-400">{item.period}</span>
        </div>
        <div className="text-sm font-semibold text-secondary-400 mb-3">@ {item.company}</div>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
        <ul className="space-y-2">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
              <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Work"
          highlight="Experience"
          subtitle="My professional journey building products at scale."
        />

        <div className="space-y-0">
          {experience.map((item, i) => (
            <TimelineItem key={item.role + item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
