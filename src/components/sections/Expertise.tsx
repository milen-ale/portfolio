import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { skillCategories } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

const accentStyles = {
  blue: { icon: 'bg-accent/12 text-accent-soft', chip: 'hover:border-accent/40 hover:text-accent-soft' },
  violet: { icon: 'bg-brand-violet/12 text-violet-300', chip: 'hover:border-brand-violet/40 hover:text-violet-300' },
  cyan: { icon: 'bg-brand-cyan/12 text-cyan-300', chip: 'hover:border-brand-cyan/40 hover:text-cyan-300' },
  green: { icon: 'bg-emerald-400/12 text-emerald-300', chip: 'hover:border-emerald-400/40 hover:text-emerald-300' },
} as const;

export function Expertise() {
  return (
    <section id="expertise" className="section-shell">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="A toolbox built for production"
        highlight="production"
        subtitle="Deep backend specialization, sharpened by AI engineering and enough frontend to ship complete products."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 md:grid-cols-2"
      >
        {skillCategories.map((cat) => {
          const accent = accentStyles[cat.accent];
          return (
            <motion.div key={cat.id} variants={fadeUp}>
              <GlassCard className="h-full p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className={cn('flex h-11 w-11 items-center justify-center rounded-xl', accent.icon)}>
                    <cat.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                    <p className="text-sm text-faint">{cat.blurb}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors duration-200',
                        accent.chip
                      )}
                    >
                      {skill.icon && <skill.icon className="h-3.5 w-3.5 opacity-80" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
