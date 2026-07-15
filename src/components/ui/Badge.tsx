import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'blue' | 'violet' | 'cyan' | 'neutral' | 'green';
};

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  blue: 'border-accent/25 bg-accent/10 text-accent-soft',
  violet: 'border-brand-violet/25 bg-brand-violet/10 text-violet-300',
  cyan: 'border-brand-cyan/25 bg-brand-cyan/10 text-cyan-300',
  green: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  neutral: 'border-white/10 bg-white/[0.04] text-muted',
};

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs tracking-tight',
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
