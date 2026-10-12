import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { content } from '@/data/content';
import { Hero3D } from './Hero3D';
import { Magnetic } from './Magnetic';
import { Sparkle } from './Sparkle';
import { easeOutExpo } from '@/lib/animations';


export function Hero() {
  const headline = content.headline.text;
  const italicWord = content.headline.italicWord;
  const parts = headline.split(`*${italicWord}*`);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-12 sm:px-8 lg:px-16 xl:px-24"
      aria-labelledby="hero-heading"
    >
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent-soft/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent-tint/30 blur-3xl" />

      {/* Sparkles */}
      <Sparkle className="absolute left-[15%] top-[20%]" size={20} delay={0.5} />
      <Sparkle className="absolute right-[20%] top-[15%]" size={16} delay={1.2} />
      <Sparkle className="absolute left-[10%] bottom-[15%]" size={24} delay={0.8} />

      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
            className="pill-outline mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
            <span className="text-xs font-medium text-muted">{content.availability}</span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.6 }}
            className="mb-3 flex items-center gap-2"
          >
            <span className="font-sans text-lg text-muted">Hello, I am</span>
            <span className="font-script text-2xl text-accent">{content.name}</span>
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            >
              👋
            </motion.span>
          </motion.div>

          {/* Role eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="eyebrow mb-5"
          >
            {content.roleEyebrow}
          </motion.p>

          {/* Headline with masked reveal */}
          <h1 id="hero-heading" className="mb-6 max-w-2xl font-serif text-display text-ink text-balance">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.8 }}
              >
                {parts[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-accent"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.95 }}
              >
                {italicWord}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: easeOutExpo, delay: 1.1 }}
              >
                {parts[1]}
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 1.3 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {content.subtitle}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 1.45 }}
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Magnetic>
              <a href="#projects" className="pill-solid focus-ring">
                View my work
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={content.contact.resume} download className="pill-outline focus-ring">
                <Download size={16} />
                Resume
              </a>
            </Magnetic>
            <div className="flex gap-2">
              <Magnetic strength={0.4}>
                <a
                  href={content.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href={content.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-ink transition-all hover:border-accent hover:bg-accent-tint hover:text-accent focus-ring"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right column — 3D visual */}
        <div className="order-1 flex justify-center lg:order-2">
          <Hero3D className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
