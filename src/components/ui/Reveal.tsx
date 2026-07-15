import { motion, type HTMLMotionProps } from 'framer-motion';
import { viewport } from '@/lib/motion';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  y?: number;
};

/** Fades content up into view when it enters the viewport. */
export function Reveal({ delay = 0, y = 28, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
