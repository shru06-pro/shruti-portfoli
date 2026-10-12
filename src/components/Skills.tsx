import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { content } from '@/data/content';
import { Sparkle } from './Sparkle';
import { fadeUp, fadeUpStagger, popIn, viewportOnce } from '@/lib/animations';

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <Sparkle className="absolute left-[12%] top-16" size={20} delay={0.4} />
      <Sparkle className="absolute right-[10%] top-1/3" size={16} delay={1.1} />

      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Skills</p>
          <h2 id="skills-heading" className="font-serif text-display-sm text-ink">
            What I <span className="italic text-accent">work</span> with
          </h2>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.skills.map((group) => (
            <motion.div
              key={group.group}
              variants={fadeUp}
              className="rounded-3xl border border-border bg-surface/80 p-6 shadow-diffuse-sm transition-all duration-300 hover:shadow-diffuse hover:-translate-y-0.5"
            >
              <div className="mb-4 flex items-center gap-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                  {group.group}
                </h3>
                {group.isLearning && (
                  <span className="flex items-center gap-1 rounded-full border border-dashed border-accent/40 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                    learning
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={popIn}
                    className={group.isLearning
                      ? 'rounded-full border border-dashed border-accent/40 bg-accent-tint/30 px-3 py-1.5 text-sm text-ink'
                      : 'rounded-full bg-accent-tint/50 px-3 py-1.5 text-sm text-ink'
                    }
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="relative mt-16 overflow-hidden py-8">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-canvas to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-canvas to-transparent" />
          <div className="flex w-max animate-marquee gap-8">
            {[...content.marqueeTech, ...content.marqueeTech].map((tech, i) => (
              <span
                key={i}
                className="font-serif text-3xl text-muted/40 sm:text-4xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <GraduationCap size={18} className="text-accent" />
            <p className="eyebrow">Certifications</p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {content.certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink shadow-diffuse-sm"
              >
                {cert}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
