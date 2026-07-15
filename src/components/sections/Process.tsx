import { motion } from 'framer-motion';
import { processSteps } from '@/data/process';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Process() {
  return (
    <section id="process" className="section-shell">
      <SectionHeading
        eyebrow="Development Process"
        title="From requirement to running system"
        highlight="running system"
        subtitle="A disciplined loop that turns ambiguity into shipped, observable software."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {processSteps.map((step) => (
          <motion.div key={step.step} variants={fadeUp}>
            <GlassCard className="group h-full p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-soft">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-4xl font-bold text-white/[0.06] transition-colors duration-300 group-hover:text-accent/20">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
