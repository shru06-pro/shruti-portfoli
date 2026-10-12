import { ArrowUp } from 'lucide-react';
import { content } from '@/data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-pad relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
            {content.initial}
          </span>
          <span className="font-script text-xl text-ink">{content.wordmark}</span>
        </div>

        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          Built with care · {new Date().getFullYear()}
        </p>

        <button
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
