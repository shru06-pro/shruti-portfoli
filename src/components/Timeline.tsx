import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkle } from './Sparkle';
import { content } from '@/data/content';
import { fadeUp, fadeUpStagger, viewportOnce } from '@/lib/animations';

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  });

  return (
    <div ref={ref} className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2">
      <motion.div
        className="absolute top-0 left-0 w-full origin-top bg-accent"
        style={{ scaleY: scrollYProgress, height: '100%' }}
      />
    </div>
  );
}

export function Timeline() {
  return (
    <section
      id="experience"
      className="section-pad relative py-24 sm:py-32"
      aria-labelledby="timeline-heading"
    >
      <Sparkle className="absolute right-[15%] top-12" size={20} delay={0.6} />
      <Sparkle className="absolute left-[8%] bottom-24" size={16} delay={1.3} />

      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Experience & Leadership</p>
          <h2 id="timeline-heading" className="font-serif text-display-sm text-ink">
            My <span className="italic text-accent">journey</span> so far
          </h2>
        </motion.div>

        <div className="relative pb-4">
          <TimelineLine />

          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            {content.timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-4 ring-canvas md:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <div className="rounded-3xl border border-border bg-surface/80 p-5 shadow-diffuse-sm transition-all duration-300 hover:shadow-diffuse">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-muted">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <h3 className="mb-6 font-serif text-2xl text-ink">
            <span className="italic text-accent">Education</span>
          </h3>
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {content.education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-3xl border border-border bg-surface/80 p-6 shadow-diffuse-sm"
              >
                <h4 className="font-serif text-lg text-ink">{edu.school}</h4>
                <p className="mt-2 text-sm text-muted">{edu.degree}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {edu.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10"
        >
          <p className="eyebrow mb-3">Coursework</p>
          <div className="flex flex-wrap gap-2">
            {content.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-ink"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
