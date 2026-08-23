import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import { useScrollSpy, useActiveScroll } from '../hooks/useScrollReveal';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useActiveScroll();
  const activeSection = useScrollSpy(navLinks.map((l) => l.href.replace('#', '')));

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base-900/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <button
          onClick={() => handleClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent-400 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
            <Code2 className="relative w-7 h-7 text-accent-400" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Basi<span className="gradient-text-static">.dev</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-0.5 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleClick('#contact');
          }}
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-base-900 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-lg hover:shadow-lg hover:shadow-accent-400/30 transition-all duration-300 hover:scale-105"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-200 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1 bg-base-800/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
