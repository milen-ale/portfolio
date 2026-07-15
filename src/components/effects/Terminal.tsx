import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export type TerminalLine = {
  type: 'cmd' | 'ok' | 'out' | 'info';
  text: string;
};

const linePrefix: Record<TerminalLine['type'], string> = {
  cmd: '$',
  ok: '✓',
  out: ' ',
  info: '▲',
};

const lineColor: Record<TerminalLine['type'], string> = {
  cmd: 'text-slate-200',
  ok: 'text-emerald-400',
  out: 'text-muted',
  info: 'text-accent-soft',
};

type TerminalProps = {
  title?: string;
  lines: TerminalLine[];
  className?: string;
};

/** macOS-style terminal that types its lines when scrolled into view. */
export function Terminal({ title = 'milen@backend — zsh', lines, className }: TerminalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [progress, setProgress] = useState(0); // total chars revealed

  const totalChars = lines.reduce((sum, l) => sum + l.text.length, 0);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= totalChars) {
          clearInterval(timer);
          return p;
        }
        return p + 2;
      });
    }, 24);
    return () => clearInterval(timer);
  }, [inView, totalChars]);

  // Distribute revealed chars across lines in order
  let remaining = progress;
  const rendered = lines.map((line) => {
    const shown = Math.max(0, Math.min(line.text.length, remaining));
    remaining -= line.text.length;
    return { ...line, shown };
  });

  return (
    <div
      ref={ref}
      className={cn(
        'border-gradient overflow-hidden rounded-2xl bg-[#0A0C14]/90 shadow-[0_24px_80px_-24px_rgb(59_130_246/0.25)] backdrop-blur-xl',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-faint">{title}</span>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {rendered.map(
          (line, i) =>
            line.shown > 0 && (
              <div key={i} className={cn('flex gap-2', lineColor[line.type])}>
                <span className="select-none opacity-60">{linePrefix[line.type]}</span>
                <span>
                  {line.text.slice(0, line.shown)}
                  {line.shown < line.text.length && (
                    <span className="animate-caret inline-block h-[1em] w-[6px] translate-y-[0.15em] bg-slate-400" />
                  )}
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
}
