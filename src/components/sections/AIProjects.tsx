import { motion } from 'framer-motion';
import { Github, Sparkles } from 'lucide-react';
import { aiProjects } from '@/data/projects';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

const statusTone = {
  'In Development': 'violet',
  'Case Study': 'cyan',
  Live: 'green',
} as const;

/** Line-by-line animated code snippet — an agent tool-use loop. */
const codeLines: { indent: number; content: React.ReactNode }[] = [
  { indent: 0, content: <><span className="text-violet-400">const</span> <span className="text-sky-300">response</span> = <span className="text-violet-400">await</span> anthropic.messages.<span className="text-yellow-200">create</span>({'{'}</> },
  { indent: 1, content: <><span className="text-sky-300">model</span>: <span className="text-emerald-300">'claude-sonnet-5'</span>,</> },
  { indent: 1, content: <><span className="text-sky-300">system</span>: <span className="text-emerald-300">'Resolve support tickets using tools.'</span>,</> },
  { indent: 1, content: <><span className="text-sky-300">tools</span>: [lookupOrder, refundPolicy, escalate],</> },
  { indent: 1, content: <><span className="text-sky-300">messages</span>: conversation,</> },
  { indent: 0, content: <>{'}'});</> },
  { indent: 0, content: <>&nbsp;</> },
  { indent: 0, content: <><span className="text-violet-400">if</span> (response.stop_reason === <span className="text-emerald-300">'tool_use'</span>) {'{'}</> },
  { indent: 1, content: <><span className="text-violet-400">const</span> result = <span className="text-violet-400">await</span> <span className="text-yellow-200">runTool</span>(response); <span className="text-faint">// typed & validated</span></> },
  { indent: 1, content: <>conversation.<span className="text-yellow-200">push</span>(toolResult(result));</> },
  { indent: 0, content: <>{'}'}</> },
];

export function AIProjects() {
  return (
    <section id="ai-projects" className="section-shell">
      <SectionHeading
        eyebrow="AI Projects"
        title="Where backends meet intelligence"
        highlight="intelligence"
        subtitle="Production-minded AI engineering: retrieval pipelines, tool-using agents, and infrastructure that language models can operate safely."
      />

      {/* Animated code snippet */}
      <Reveal className="mx-auto mb-14 max-w-2xl">
        <div className="border-gradient overflow-hidden rounded-2xl bg-[#0A0C14]/90 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
            <span className="font-mono text-xs text-faint">support-agent.ts</span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-violet-300">
              <Sparkles className="h-3 w-3" />
              agent loop
            </span>
          </div>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-300"
          >
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                }}
                style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                className="whitespace-pre"
              >
                {line.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 lg:grid-cols-3"
      >
        {aiProjects.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <GlassCard className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <Badge tone={statusTone[project.status]}>{project.status}</Badge>
              </div>
              <p className="mt-1 text-sm text-accent-soft">{project.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-violet" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                {project.stack.map((tech) => (
                  <Badge key={tech} tone="violet">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
