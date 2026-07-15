import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeading
        eyebrow="Services"
        title="What I can build for you"
        highlight="build for you"
        subtitle="From a single endpoint to a full platform — engineered, tested, documented, and deployed."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeUp}>
            <GlassCard className="group h-full p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-brand-violet/15 text-accent-soft transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                Start a project
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
