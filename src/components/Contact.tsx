import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { content } from '@/data/content';
import { Sparkle } from './Sparkle';
import { fadeUp, fadeUpStagger, viewportOnce } from '@/lib/animations';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, []);

  const headline = content.contact.headline;
  const italicWord = content.contact.italicWord;
  const parts = headline.split(`*${italicWord}*`);

  return (
    <section
      id="contact"
      className="section-pad relative py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-accent-tint/30 blur-3xl" />
      <Sparkle className="absolute left-[20%] top-16" size={22} delay={0.4} />
      <Sparkle className="absolute right-[25%] bottom-20" size={18} delay={1.0} />
      <Sparkle className="absolute right-[15%] top-1/3" size={26} delay={0.7} />

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="eyebrow mb-6"
        >
          Get in touch
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          id="contact-heading"
          className="mb-10 font-serif text-display text-ink text-balance"
        >
          {parts[0]}
          <span className="italic text-accent">{italicWord}</span>
          {parts[1]}
        </motion.h2>

        {/* Email copy pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 flex justify-center"
        >
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-4 shadow-diffuse transition-all hover:border-accent hover:shadow-diffuse-lg focus-ring"
            aria-label="Copy email address to clipboard"
          >
            <Mail size={20} className="text-accent" />
            <span className="font-serif text-lg text-ink sm:text-xl">
              {content.contact.email}
            </span>
            <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint/50 text-accent transition-all group-hover:bg-accent group-hover:text-white">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </span>
          </button>
        </motion.div>

        {/* Copied toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-2 text-sm font-medium text-success"
              role="status"
            >
              <Check size={16} />
              Copied!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social links */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center gap-4"
        >
          <motion.a
            variants={fadeUp}
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            variants={fadeUp}
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            variants={fadeUp}
            href={`mailto:${content.contact.email}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
            aria-label="Send email"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
