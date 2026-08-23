import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personal } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socials = [
    { icon: FaGithub, label: 'GitHub', href: personal.github },
    { icon: FaLinkedin, label: 'LinkedIn', href: personal.linkedin },
    { icon: FaTwitter, label: 'Twitter', href: personal.twitter },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid md:grid-cols-2 gap-8`}>
          {/* Left: info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-accent-400/30 blur-lg rounded-lg" />
                    <div className="relative p-3 bg-base-700 rounded-lg border border-white/5">
                      <item.icon className="w-6 h-6 text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-mono">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 hover:text-accent-400 transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-slate-200 font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="text-sm text-slate-400 mb-3">Find me online</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 text-slate-400 glass-card rounded-xl hover:text-accent-400 transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-3">
              <span className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">Currently available for freelance & full-time roles</span>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-base-700/60 border border-white/5 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-400/50 focus:ring-2 focus:ring-accent-400/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-base-700/60 border border-white/5 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-400/50 focus:ring-2 focus:ring-accent-400/20 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-base-700/60 border border-white/5 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-400/50 focus:ring-2 focus:ring-accent-400/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-base-900 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-xl hover:shadow-xl hover:shadow-accent-400/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
