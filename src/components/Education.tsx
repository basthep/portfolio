import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const isCert = item.type === 'certification';

  return (
    <div
      ref={ref}
      className={`reveal ${
        isVisible ? 'is-visible' : ''
      } glass-card rounded-2xl p-6 glow-border`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-accent-400/30 blur-lg rounded-lg" />

          <div className="relative p-3 bg-base-700 rounded-lg border border-white/5">
            {isCert ? (
              <Award className="w-6 h-6 text-secondary-400" />
            ) : (
              <GraduationCap className="w-6 h-6 text-accent-400" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">

            <h3 className="text-base font-bold text-white leading-snug">
              {item.degree}
            </h3>

            <span className="text-sm font-mono text-accent-400 shrink-0">
              {item.period}
            </span>

          </div>

          <div
            className={`text-sm font-semibold mb-2 ${
              isCert
                ? 'text-secondary-400'
                : 'text-accent-400'
            }`}
          >
            {item.school}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            {item.description}
          </p>

        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const educationItems = education.filter(
    (item) => item.type === 'education'
  );

  const certificationItems = education.filter(
    (item) => item.type === 'certification'
  );

  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 overflow-hidden"
    >

      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">

        {/* Keep this heading unchanged */}
        <SectionHeading
          eyebrow="05 / Education"
          title="Education &"
          highlight="Certifications"
          subtitle="Academic background and professional certifications."
        />

        {/* Education */}
        <div className="space-y-5">
          {educationItems.map((item, i) => (
            <EducationCard
              key={item.degree + item.school}
              item={item}
              index={i}
            />
          ))}
        </div>

        {/* Certifications - no additional heading */}
        <div className="space-y-5 mt-5">
          {certificationItems.map((item, i) => (
            <EducationCard
              key={item.degree + item.school}
              item={item}
              index={educationItems.length + i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}