import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Command, Menu, X } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { openCommandPalette } from '@/lib/palette';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-500',
          scrolled ? 'border-b border-white/[0.06] bg-void/75 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Back to top">
            <span className="border-gradient flex h-9 w-9 items-center justify-center rounded-xl bg-surface font-mono text-sm font-bold text-white">
              MA
            </span>
            <span className="hidden text-sm font-semibold text-white sm:block">
              Milen<span className="text-muted"> Alebel</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openCommandPalette}
              className="hidden cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-faint transition-colors hover:border-accent/40 hover:text-muted md:flex"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="font-mono">K</span>
            </button>
            <ButtonLink href="#contact" size="sm" className="hidden sm:inline-flex">
              Let's Talk
            </ButtonLink>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-muted hover:text-white lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Scroll progress */}
        <motion.div
          className="h-px origin-left bg-gradient-to-r from-accent via-brand-violet to-brand-cyan"
          style={{ scaleX: progress }}
        />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/[0.06] bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.resume}
                download
                className="mt-2 rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-medium text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
