import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export function ResumeModal({ isOpen, onClose, resumeUrl }: ResumeModalProps) {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9995] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border bg-surface/95 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-tint text-accent">
                  <FileText size={18} />
                </div>
                <div>
                  <h3
                    id="resume-modal-title"
                    className="font-serif text-lg font-medium text-ink sm:text-xl"
                  >
                    Resume Preview
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    Shruti Kumari · PDF
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={resumeUrl}
                  download="Shruti_Kumari_Resume.pdf"
                  className="pill-solid gap-1.5 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
                  data-cursor="hover"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
                  title="Open in new tab"
                  aria-label="Open resume in new tab"
                  data-cursor="hover"
                >
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
                  title="Close preview"
                  aria-label="Close resume preview"
                  data-cursor="hover"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="relative flex-1 w-full bg-neutral-100">
              <iframe
                src={`${resumeUrl}#view=FitH`}
                className="h-full w-full border-0"
                title="Shruti Kumari Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
