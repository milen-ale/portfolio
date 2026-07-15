import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="What collaborators say"
        highlight="collaborators"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={fadeUp}>
            <GlassCard className="flex h-full flex-col p-6">
              <Quote className="h-6 w-6 text-accent/50" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                “{t.quote}”
              </p>
              <div className="mt-5 border-t border-white/[0.06] pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-faint">{t.role}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
