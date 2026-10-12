import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Sparkle } from './Sparkle';
import { content } from '@/data/content';
import { fadeUp, fadeUpStagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function CountUp({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, reduced]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

function WordReveal({
  word,
  index,
  total,
  scrollYProgress,
  isHighlight,
  reduced,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isHighlight: boolean;
  reduced: boolean;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={reduced ? {} : { opacity }}
      className={isHighlight ? 'italic text-accent' : ''}
    >
      {word}{' '}
    </motion.span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const words = content.about.bio.split(' ');
  const highlights = content.about.highlights;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-pad relative py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <Sparkle className="absolute right-[8%] top-12" size={18} delay={0.3} />
      <Sparkle className="absolute left-[5%] bottom-20" size={22} delay={1} />

      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <p className="eyebrow mb-3">About</p>
          <h2 id="about-heading" className="font-serif text-display-sm text-ink">
            A bit <span className="italic text-accent">about me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl">
              {words.map((word, i) => {
                const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
                const isHighlight = highlights.some((h) => h.toLowerCase() === cleanWord);
                return (
                  <WordReveal
                    key={i}
                    word={word}
                    index={i}
                    total={words.length}
                    scrollYProgress={scrollYProgress}
                    isHighlight={isHighlight}
                    reduced={reduced}
                  />
                );
              })}
            </p>
          </div>

          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {content.about.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-3xl border border-border bg-surface/80 p-5 shadow-diffuse-sm"
              >
                <div className="font-serif text-3xl text-ink">
                  {stat.isText ? (
                    <span className="text-accent">{stat.suffix}</span>
                  ) : (
                    <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
