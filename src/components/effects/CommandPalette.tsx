import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Hash,
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileDown,
  Search,
  CornerDownLeft,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { allSections, site } from '@/data/site';
import { cn } from '@/lib/utils';
import { OPEN_PALETTE_EVENT } from '@/lib/palette';

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  run: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = allSections.map((s) => ({
      id: s.href,
      label: s.label,
      hint: 'Jump to section',
      icon: Hash,
      run: () => document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth' }),
    }));
    const actions: Command[] = [
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'Social',
        icon: Github,
        run: () => window.open(site.github, '_blank'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'Social',
        icon: Linkedin,
        run: () => window.open(site.linkedin, '_blank'),
      },
      {
        id: 'twitter',
        label: 'Open Twitter / X',
        hint: 'Social',
        icon: Twitter,
        run: () => window.open(site.twitter, '_blank'),
      },
      {
        id: 'email',
        label: 'Send an Email',
        hint: 'Contact',
        icon: Mail,
        run: () => (window.location.href = `mailto:${site.email}`),
      },
      {
        id: 'resume',
        label: 'Download Resume',
        hint: 'Contact',
        icon: FileDown,
        run: () => window.open(site.resume, '_blank'),
      },
    ];
    return [...nav, ...actions];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
  }, []);

  // Global shortcuts + open event
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') close();
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && filtered[active]) {
      filtered[active].run();
      close();
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-void/70 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-gradient w-full max-w-lg overflow-hidden rounded-2xl bg-surface/95 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4">
              <Search className="h-4 w-4 shrink-0 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search sections and actions…"
                className="w-full bg-transparent py-4 text-sm text-white placeholder-faint outline-none"
              />
              <kbd className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-faint">
                ESC
              </kbd>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-faint">No results found.</p>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    cmd.run();
                    close();
                  }}
                  className={cn(
                    'flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors',
                    i === active ? 'bg-accent/15 text-white' : 'text-muted hover:text-white'
                  )}
                >
                  <cmd.icon
                    className={cn('h-4 w-4', i === active ? 'text-accent-soft' : 'text-faint')}
                  />
                  <span className="flex-1">{cmd.label}</span>
                  <span className="font-mono text-[10px] tracking-wide text-faint uppercase">
                    {cmd.hint}
                  </span>
                  {i === active && <CornerDownLeft className="h-3.5 w-3.5 text-faint" />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
