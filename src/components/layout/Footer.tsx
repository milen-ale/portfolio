import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import { navLinks, site } from '@/data/site';

const socials = [
  { icon: Github, href: site.github, label: 'GitHub' },
  { icon: Linkedin, href: site.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: site.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="border-gradient flex h-9 w-9 items-center justify-center rounded-xl bg-surface font-mono text-sm font-bold text-white">
                MA
              </span>
              <span className="text-sm font-semibold text-white">
                Milen<span className="text-muted"> Alebel</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-faint">
              Backend Software Engineer crafting scalable systems, resilient
              APIs, and AI-powered applications.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest text-faint uppercase">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {navLinks.slice(0, 4).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest text-faint uppercase">
                More
              </h4>
              <ul className="space-y-2.5">
                {navLinks.slice(4).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-mono text-xs tracking-widest text-faint uppercase">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href={site.resume} download className="text-sm text-muted transition-colors hover:text-white">
                    Resume
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-faint">
            © {new Date().getFullYear()} Milen Alebel. Built with
            <Heart className="h-3 w-3 fill-accent text-accent" />
            React, TypeScript & TailwindCSS.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
