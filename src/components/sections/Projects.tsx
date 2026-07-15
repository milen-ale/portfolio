import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ChevronDown,
  Target,
  Lightbulb,
  Boxes,
  Mountain,
  Gauge,
} from 'lucide-react';
import { projects, type Project, type ProjectCategory } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const filters: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'API Integration', value: 'api' },
];

const caseStudyRows = [
  { key: 'architecture', label: 'Architecture', icon: Boxes },
  { key: 'challenges', label: 'Challenges', icon: Mountain },
  { key: 'performance', label: 'Performance', icon: Gauge },
] as const;

function ProjectLinks({ project, size = 'md' }: { project: Project; size?: 'sm' | 'md' }) {
  const cls = cn(
    'inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] font-medium text-slate-200 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white',
    size === 'md' ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'
  );
  return (
    <div className="flex flex-wrap gap-2.5">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={cls}>
          <ExternalLink className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
          Live Demo
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={cls}>
          <Github className={size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
          GitHub
        </a>
      )}
    </div>
  );
}

function FeaturedCaseStudy({ project, flip }: { project: Project; flip: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal>
      <GlassCard className="overflow-hidden p-0" hover={false}>
        <div className={cn('grid lg:grid-cols-2', flip && 'lg:[direction:rtl]')}>
          {/* Image */}
          <div className="group relative min-h-64 overflow-hidden lg:[direction:ltr]">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <ProjectLinks project={project} size="sm" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:[direction:ltr]">
            <p className="font-mono text-xs tracking-widest text-accent-soft uppercase">
              Featured Case Study
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} tone="blue">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Problem</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{project.problem}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Solution</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{project.solution}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-accent-soft transition-colors hover:text-white"
              aria-expanded={open}
            >
              {open ? 'Hide full case study' : 'Read full case study'}
              <ChevronDown className={cn('h-4 w-4 transition-transform duration-300', open && 'rotate-180')} />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 space-y-4 border-t border-white/[0.06] pt-5">
                    {caseStudyRows.map((row) => (
                      <div key={row.key} className="flex gap-3">
                        <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                        <div>
                          <h4 className="text-sm font-semibold text-white">{row.label}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {project[row.key]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter(
    (p) => !p.featured && (filter === 'all' || p.category === filter)
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Case studies, not just screenshots"
        highlight="Case studies"
        subtitle="Each project below is a real system with real trade-offs — problem, architecture, and the engineering decisions in between."
      />

      <div className="space-y-10">
        {featured.map((project, i) => (
          <FeaturedCaseStudy key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      {/* More projects + filtering */}
      <div className="mt-20">
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">More Projects</h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all duration-300',
                  filter === f.value
                    ? 'border-accent/50 bg-accent/15 text-white'
                    : 'border-white/10 bg-white/[0.03] text-muted hover:border-white/25 hover:text-white'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="flex h-full flex-col p-0">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-semibold text-white">{project.title}</h4>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-faint">
                      {project.tagline}. {project.solution}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-white/[0.06] pt-4">
                      <ProjectLinks project={project} size="sm" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
