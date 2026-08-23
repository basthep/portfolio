import { Layout, Server, Cloud, Wrench, type LucideIcon } from 'lucide-react';
import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Cloud,
  Wrench,
};

function SkillCard({ category, icon, items, index }: { category: string; icon: string; items: string[]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = iconMap[icon] ?? Layout;

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} glass-card rounded-2xl p-6 glow-border`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="relative">
          <div className="absolute inset-0 bg-accent-400/30 blur-lg rounded-lg" />
          <div className="relative p-2.5 bg-base-700 rounded-lg border border-white/5">
            <Icon className="w-6 h-6 text-accent-400" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-base-700/60 border border-white/5 rounded-lg hover:border-accent-400/40 hover:text-accent-400 transition-all duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="02 / Skills"
          title="My"
          highlight="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
