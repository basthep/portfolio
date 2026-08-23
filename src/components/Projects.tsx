import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${
        isVisible ? 'is-visible' : ''
      } group glass-card rounded-2xl overflow-hidden glow-border flex flex-col`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-base-900 bg-linear-to-r from-accent-400 to-secondary-400 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-base-700/60 border border-white/5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="relative z-20 flex items-center gap-4">
          {/* GitHub Code */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-accent-400 transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>

          {/* Live Demo */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-secondary-400 transition-colors cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="03 / Projects"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of things I've built. Each one taught me something new."
        />

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* GitHub Profile Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/basthep"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-2 px-7 py-3 font-semibold text-slate-200 glass-card rounded-xl hover:text-accent-400 transition-all duration-300 cursor-pointer"
          >
            <FaGithub className="w-5 h-5" />
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}