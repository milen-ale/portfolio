import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
};

/**
 * Infinite horizontal scroller. Children are duplicated once; the CSS
 * animation translates -50% for a seamless loop. Pauses on hover.
 */
export function Marquee({ children, reverse = false, className }: MarqueeProps) {
  return (
    <div
      className={cn('group relative flex overflow-hidden', className)}
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        className={cn(
          'flex w-max shrink-0 items-center gap-4 pr-4 group-hover:[animation-play-state:paused]',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
