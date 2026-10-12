import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { content } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const sectionIds = content.navLinks.map((l) => l.href.slice(1));
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="fixed left-0 right-0 top-3 z-[9990] flex justify-center px-4"
      >
        <nav
          className={cn(
            'flex items-center gap-2 rounded-full border border-border/80 px-3 py-2 transition-all duration-300',
            scrolled
              ? 'bg-white/70 shadow-diffuse backdrop-blur-md'
              : 'bg-white/40 backdrop-blur-sm'
          )}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 transition-colors hover:bg-accent-tint/50 focus-ring"
            aria-label="Go to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              {content.initial}
            </span>
            <span className="hidden font-script text-xl text-ink sm:inline">
              {content.wordmark}
            </span>
          </a>

          {/* Desktop links */}
          <div className="relative hidden items-center gap-1 md:flex">
            {content.navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-ring',
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent-tint"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-accent-tint/50 focus-ring md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9989] flex flex-col items-center justify-center bg-canvas/95 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-4" aria-label="Mobile navigation">
              {content.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    'rounded-full px-8 py-3 font-serif text-3xl transition-colors',
                    active === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-ink hover:text-accent'
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
