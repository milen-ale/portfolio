import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  /** Word(s) inside the title to render with the gradient */
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(
        'mb-14 flex flex-col gap-4 lg:mb-20',
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-1.5 font-mono text-xs tracking-widest text-accent-soft uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gradient">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
