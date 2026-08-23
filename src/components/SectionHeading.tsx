import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, highlight, subtitle }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-16`}
    >
      <span className="inline-block text-sm font-mono font-semibold text-accent-400 tracking-widest uppercase mb-3">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title} {highlight && <span className="gradient-text-static">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto mt-4 text-slate-400 text-balance">{subtitle}</p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-1 w-12 bg-gradient-to-r from-transparent to-accent-400 rounded-full" />
        <span className="h-1 w-2 bg-accent-400 rounded-full" />
        <span className="h-1 w-12 bg-gradient-to-l from-transparent to-accent-400 rounded-full" />
      </div>
    </div>
  );
}
