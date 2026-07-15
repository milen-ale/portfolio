import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  Shield,
  Braces,
  Radio,
  Cog,
  Brain,
  Database,
  Zap,
  Search,
  ListOrdered,
  GitBranch,
  Repeat,
  Timer,
  Eye,
  Rocket,
  Scaling,
  type LucideIcon,
} from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type Node = { label: string; icon: LucideIcon; accent?: string };

const layers: { title: string; nodes: Node[] }[] = [
  {
    title: 'Clients',
    nodes: [
      { label: 'Web App', icon: Globe },
      { label: 'Mobile', icon: Smartphone },
      { label: 'AI Assistant', icon: Bot, accent: 'text-violet-300' },
    ],
  },
  {
    title: 'Edge',
    nodes: [{ label: 'API Gateway — auth · rate limiting · routing', icon: Shield, accent: 'text-accent-soft' }],
  },
  {
    title: 'Services',
    nodes: [
      { label: 'REST / GraphQL API', icon: Braces },
      { label: 'WebSocket Gateway', icon: Radio },
      { label: 'Background Workers', icon: Cog },
      { label: 'AI Service', icon: Brain, accent: 'text-violet-300' },
    ],
  },
  {
    title: 'Data',
    nodes: [
      { label: 'PostgreSQL', icon: Database },
      { label: 'Redis Cache', icon: Zap },
      { label: 'Elasticsearch', icon: Search },
      { label: 'Message Queue', icon: ListOrdered },
    ],
  },
];

const principles = [
  {
    icon: GitBranch,
    title: 'Event-Driven Design',
    text: 'Services communicate through queues and events — loose coupling that absorbs traffic spikes gracefully.',
  },
  {
    icon: Repeat,
    title: 'Idempotent APIs',
    text: 'Every mutation is safe to retry. Networks fail; well-designed endpoints shrug it off.',
  },
  {
    icon: Timer,
    title: 'Caching Strategy',
    text: 'Redis between the API and the database, with explicit invalidation rules — never stale, never slow.',
  },
  {
    icon: Eye,
    title: 'Observability',
    text: 'Structured logs, request tracing, and health checks — production issues are diagnosed, not guessed.',
  },
  {
    icon: Rocket,
    title: 'Zero-Downtime Deploys',
    text: 'Containerized services behind health checks, shipped through CI/CD with instant rollback.',
  },
  {
    icon: Scaling,
    title: 'Horizontal Scaling',
    text: 'Stateless services and connection pooling mean scaling out is a config change, not a rewrite.',
  },
];

function Connector() {
  return (
    <div aria-hidden className="relative mx-auto h-7 w-px bg-gradient-to-b from-accent/40 to-brand-cyan/40">
      <span className="animate-drop absolute top-0 -left-[2.5px] h-[5px] w-[5px] rounded-full bg-accent shadow-[0_0_8px_rgb(59_130_246/0.9)]" />
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="section-shell">
      <SectionHeading
        eyebrow="Backend Architecture"
        title="How I design systems that scale"
        highlight="systems that scale"
        subtitle="A reference architecture I reach for: clear layers, explicit contracts, and infrastructure that fails gracefully."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Diagram */}
        <Reveal>
          <GlassCard className="p-6 sm:p-8" hover={false}>
            {layers.map((layer, i) => (
              <div key={layer.title}>
                {i > 0 && <Connector />}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3">
                  <p className="mb-2.5 text-center font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                    {layer.title}
                  </p>
                  <div className={cn('grid gap-2', layer.nodes.length > 1 ? 'grid-cols-2' : 'grid-cols-1', layer.nodes.length === 3 && 'sm:grid-cols-3')}>
                    {layer.nodes.map((node) => (
                      <div
                        key={node.label}
                        className="group flex items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-surface/80 px-3 py-2.5 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-4px_rgb(59_130_246/0.4)]"
                      >
                        <node.icon className={cn('h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent-soft', node.accent)} />
                        <span className="text-xs font-medium text-slate-300 sm:text-[13px]">
                          {node.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <p className="mt-4 text-center font-mono text-[10px] text-faint">
              request flow · every arrow is a monitored, retryable boundary
            </p>
          </GlassCard>
        </Reveal>

        {/* Principles */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {principles.map((p) => (
            <motion.div key={p.title} variants={fadeUp}>
              <GlassCard className="h-full p-5" glow={false}>
                <p.icon className="mb-3 h-5 w-5 text-accent-soft" />
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-faint">{p.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
