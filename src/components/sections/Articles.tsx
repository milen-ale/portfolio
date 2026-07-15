import { motion } from 'framer-motion';
import { BookOpen, Clock, PenLine } from 'lucide-react';
import { articles } from '@/data/articles';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export function Articles() {
  return (
    <section id="articles" className="section-shell">
      <SectionHeading
        eyebrow="Latest Articles"
        title="Writing about the craft"
        highlight="craft"
        subtitle="Deep dives on backend engineering and AI integration — currently in the drafts folder."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-6 md:grid-cols-3"
      >
        {articles.map((article) => (
          <motion.div key={article.title} variants={fadeUp}>
            <GlassCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <Badge tone="cyan">{article.tag}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-faint">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-semibold text-white">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
              <div className="mt-5 border-t border-white/[0.06] pt-4">
                {article.href ? (
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft hover:text-white"
                  >
                    <BookOpen className="h-4 w-4" />
                    Read article
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-faint">
                    <PenLine className="h-4 w-4" />
                    Coming soon
                  </span>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
