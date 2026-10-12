import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy } from 'lucide-react';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';
import { fadeUp, viewportOnce } from '@/lib/animations';

function ProjectCard({ project }: { project: typeof content.projects[0] }) {
  const isPlaceholder = (url: string) => url === '[PLACEHOLDER_URL]';

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-diffuse-sm transition-all duration-500 hover:shadow-diffuse-lg hover:-translate-y-1"
      data-cursor="hover"
    >
      {/* Image / gradient header */}
      <div className={cn('relative h-48 overflow-hidden bg-gradient-to-br sm:h-56', project.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-4xl text-ink/20 sm:text-5xl">
            {project.title}
          </span>
        </div>

        {/* Badges */}
        <div className="absolute left-4 top-4 flex gap-2">
          {project.badge && (
            <span
              className={cn(
                'flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md',
                project.isInProgress
                  ? 'border border-accent/30 bg-white/70 text-accent'
                  : 'bg-ink/80 text-canvas'
              )}
            >
              {project.isInProgress ? (
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              ) : (
                <Trophy size={12} />
              )}
              {project.badge}
            </span>
          )}
        </div>

        {/* Hover overlay with view hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/5 group-hover:opacity-100">
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-ink shadow-diffuse backdrop-blur-md">
            View details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl text-ink sm:text-3xl">{project.title}</h3>
        </div>
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {project.subtitle}
        </p>

        <p className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {project.highlights && (
          <div className="mb-4 rounded-2xl bg-accent-tint/40 px-4 py-3">
            <p className="text-sm text-ink">
              <span className="font-medium text-accent">Highlights: </span>
              {project.highlights}
            </p>
          </div>
        )}

        {project.role && (
          <p className="mb-4 text-sm text-muted">
            <span className="font-medium text-ink">Role: </span>
            {project.role}
          </p>
        )}

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-tint/50 px-3 py-1 text-xs font-medium text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {!isPlaceholder(project.github) ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-all hover:border-accent hover:bg-accent-tint focus-ring"
            >
              <Github size={16} />
              Code
            </a>
          ) : (
            <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted">
              <Github size={16} />
              Code
            </span>
          )}
          {project.live && !isPlaceholder(project.live) ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-all hover:border-accent hover:bg-accent-tint focus-ring"
            >
              <ExternalLink size={16} />
              Live
            </a>
          ) : project.live && isPlaceholder(project.live) ? (
            <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted">
              <ExternalLink size={16} />
              Live
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-accent-tint/30 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Projects</p>
          <h2 id="projects-heading" className="font-serif text-display-sm text-ink">
            Things I've <span className="italic text-accent">built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
