import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { timeline } from '@/data/timeline';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function Timeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="The journey so far"
        highlight="journey"
        subtitle="Remote-first, async-friendly, and shipped across three time zones."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical line */}
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-accent/60 via-brand-violet/40 to-transparent sm:left-1/2"
        />

        {timeline.map((entry, i) => (
          <motion.div
            key={entry.period}
            variants={fadeUp}
            className={cn(
              'relative mb-10 pl-14 last:mb-0 sm:w-1/2 sm:pl-0',
              i % 2 === 0
                ? 'sm:mr-auto sm:pr-12 sm:text-right'
                : 'sm:ml-auto sm:pl-12'
            )}
          >
            {/* Node */}
            <span
              className={cn(
                'absolute top-1 left-[9px] flex h-[22px] w-[22px] items-center justify-center rounded-full border bg-void sm:left-auto',
                i % 2 === 0 ? 'sm:-right-[11px]' : 'sm:-left-[11px]',
                entry.current
                  ? 'animate-pulse-ring border-emerald-400/60 text-emerald-400'
                  : 'border-accent/50 text-accent-soft'
              )}
            >
              <Briefcase className="h-2.5 w-2.5" />
            </span>

            <GlassCard className="p-5 text-left" glow={false}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-accent-soft">{entry.period}</span>
                {entry.current && <Badge tone="green">Current</Badge>}
              </div>
              <h3 className="mt-2 font-semibold text-white">{entry.title}</h3>
              <p className="text-sm text-muted">{entry.org}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-faint">{entry.description}</p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
