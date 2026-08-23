import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personal } from '../data/portfolio';

const roles = [
  'Full Stack Developer',
  'React Engineer',
  'Node.js Expert',
  'Open Source Contributor',
  'Problem Solver',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-400/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-900/50 via-transparent to-base-900 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-fade-down">
          <Sparkles className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-slate-300">Available for new opportunities</span>
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
        </div>

        {/* Greeting */}
        <p className="text-lg sm:text-xl text-slate-400 mb-3 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Hi, I'm {personal.name.split(' ')[0]} —
        </p>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Typing role */}
        <div
          className="h-10 sm:h-12 mb-6 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 font-mono">
            <span>{text}</span>
            <span className="text-accent-400 animate-blink">|</span>
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 text-balance animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 font-semibold text-base-900 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-xl hover:shadow-xl hover:shadow-accent-400/30 transition-all duration-300 hover:scale-105"
          >
            View my work
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 font-semibold text-slate-200 glass-card rounded-xl hover:text-white transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            GitHub Profile
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          {[
            { icon: FaGithub, href: personal.github, label: 'GitHub' },
            { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: FaTwitter, href: personal.twitter, label: 'Twitter' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 text-slate-400 glass-card rounded-xl hover:text-accent-400 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
 
    </section>
  );
}
