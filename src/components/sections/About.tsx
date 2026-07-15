import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Zap, Users, ArrowRight } from 'lucide-react';
import portrait from '@/assets/last.jpg';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

const pillars = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    text: 'Layered services with clear boundaries — code that the next engineer can extend without fear.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    text: 'Query plans, caching layers, and profiling before guessing. Fast is a feature.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by Default',
    text: 'JWT auth, RBAC, input validation, and least-privilege access on every endpoint.',
  },
  {
    icon: Users,
    title: 'Team Multiplier',
    text: 'Readable PRs, honest estimates, and documentation that makes onboarding painless.',
  },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering the systems behind the screen"
        highlight="behind the screen"
        subtitle="The best backend is the one nobody notices — it's just fast, secure, and always up."
      />

      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="border-gradient relative overflow-hidden rounded-3xl">
            <img
              src={portrait}
              alt="Milen Alebel, Backend Software Engineer"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          </div>
          {/* Floating chip */}
          <div className="glass animate-float absolute -right-3 bottom-8 rounded-2xl px-4 py-3 sm:-right-6">
            <p className="font-mono text-xs text-accent-soft">while (alive) &#123;</p>
            <p className="pl-4 font-mono text-xs text-slate-300">ship(); learn();</p>
            <p className="font-mono text-xs text-accent-soft">&#125;</p>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I'm a backend software engineer who cares about what happens
              after the demo: the schema that still makes sense a year later,
              the API contract that doesn't break its consumers, the p95
              latency under real traffic. My work centers on{' '}
              <span className="text-white">Node.js, NestJS, and PostgreSQL</span>,
              designing REST and GraphQL APIs with authentication, caching, and
              observability treated as core requirements — not afterthoughts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Lately I've been building{' '}
              <span className="text-white">AI-powered applications</span>:
              RAG pipelines, tool-using agents on the OpenAI and Claude APIs,
              and MCP servers that expose real infrastructure to language
              models safely. I've shipped remotely with agile teams across
              three time zones, where clear written communication and small,
              reviewable pull requests aren't nice-to-haves — they're how the
              work gets done.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <GlassCard className="h-full p-5" hover={false}>
                  <p.icon className="mb-3 h-5 w-5 text-accent-soft" />
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-faint">{p.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.15} className="mt-8">
            <ButtonLink href="#contact" variant="secondary">
              Let's build something together
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
