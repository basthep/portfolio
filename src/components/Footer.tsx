import { Code2, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personal, navLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-accent-400" />
            <span className="text-lg font-bold">
              Basi<span className="gradient-text-static">.dev</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: personal.github, label: 'GitHub' },
              { icon: FaLinkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: FaTwitter, href: personal.twitter, label: 'Twitter' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 text-slate-400 hover:text-accent-400 transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {personal.name}. Built with React, Vite & Tailwind CSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
