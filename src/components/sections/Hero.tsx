import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { fadeUp, stagger } from '@/lib/motion';
import { rotatingTitles, site, stats } from '@/data/site';
import { TypeWriter } from '@/components/effects/TypeWriter';
import { Terminal, type TerminalLine } from '@/components/effects/Terminal';
import { CountUp } from '@/components/effects/CountUp';
import { ButtonLink } from '@/components/ui/Button';

const terminalLines: TerminalLine[] = [
  { type: 'cmd', text: 'node server.js' },
  { type: 'ok', text: 'PostgreSQL pool established' },
  { type: 'ok', text: 'Redis cache connected' },
  { type: 'ok', text: 'JWT auth middleware mounted' },
  { type: 'ok', text: 'AI service initialized — claude + openai' },
  { type: 'info', text: 'API ready on :8080' },
  { type: 'cmd', text: 'curl localhost:8080/health' },
  { type: 'out', text: '{ "status": "ok", "latency": "12ms" }' },
];

const socials = [
  { icon: Github, href: site.github, label: 'GitHub' },
  { icon: Linkedin, href: site.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: site.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-1.5 text-xs font-medium text-emerald-300">
                <span className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400" />
                Available for new opportunities
              </span>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-faint sm:inline-flex">
                {site.location}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I'm <span className="text-gradient">Milen Alebel</span>
              <span className="mt-3 block min-h-[1.2em] text-3xl font-bold text-slate-200 sm:text-4xl lg:text-5xl">
                <TypeWriter words={[...rotatingTitles]} />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {site.tagline} I turn complex requirements into clean, secure,
              well-architected Node.js systems — from database schema to
              deployed API.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3.5">
              <ButtonLink href="#projects" variant="gradient" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={site.resume} download variant="secondary" size="lg">
                <FileDown className="h-4 w-4" />
                Download Resume
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost" size="lg">
                Let's Work Together
              </ButtonLink>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-9 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-white hover:shadow-[0_8px_24px_-8px_rgb(59_130_246/0.5)]"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <span className="ml-2 hidden font-mono text-xs text-faint sm:block">
                press <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5">⌘K</kbd> to navigate
              </span>
            </motion.div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden md:block"
          >
            <div className="animate-float">
              <Terminal lines={terminalLines} />
            </div>
            {/* Glow under terminal */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl"
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="glass mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 bg-white/[0.015] px-4 py-6 text-center">
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="text-3xl font-bold text-white sm:text-4xl"
              />
              <span className="text-xs text-faint sm:text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
