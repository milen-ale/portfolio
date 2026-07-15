import { useRef, useState, type HTMLAttributes, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Enables the cursor-tracking glow overlay */
  glow?: boolean;
  hover?: boolean;
};

/**
 * Core surface of the design system: frosted glass, gradient border,
 * and an optional radial glow that follows the cursor.
 */
export function GlassCard({
  className,
  children,
  glow = true,
  hover = true,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [active, setActive] = useState(false);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!glow || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        'glass border-gradient group relative overflow-hidden rounded-2xl transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgb(59_130_246/0.25)]',
        className
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, rgb(59 130 246 / 0.10), transparent 65%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
