import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

/**
 * Soft radial glow that trails the cursor across the whole page.
 * Springs give it a premium, weighted feel; hidden on touch devices.
 */
export function Spotlight() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgb(59 130 246 / 0.055), transparent 70%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{ background }}
    />
  );
}
