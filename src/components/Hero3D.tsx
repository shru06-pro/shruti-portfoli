import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkle } from './Sparkle';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn, isTouchDevice } from '@/lib/utils';

const Render3D = lazy(() => import('./Hero3DCanvas'));

interface Hero3DProps {
  className?: string;
}

export function Hero3D({ className = '' }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [glbExists, setGlbExists] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // Parallax layers
  const sparkleY1 = useTransform(springRotateX, [-10, 10], [8, -8]);
  const sparkleX1 = useTransform(springRotateY, [-10, 10], [-8, 8]);
  const chipY1 = useTransform(springRotateX, [-10, 10], [15, -15]);
  const chipX1 = useTransform(springRotateY, [-10, 10], [-15, 15]);
  const chipY2 = useTransform(springRotateX, [-10, 10], [-12, 12]);
  const chipX2 = useTransform(springRotateY, [-10, 10], [12, -12]);
  const blobY = useTransform(springRotateX, [-10, 10], [5, -5]);
  const blobX = useTransform(springRotateY, [-10, 10], [-5, 5]);

  useEffect(() => {
    setIsMobile(isTouchDevice() || window.innerWidth < 768);
    fetch('/me.glb', { method: 'HEAD' })
      .then((r) => setGlbExists(r.ok))
      .catch(() => setGlbExists(false));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 8);
    rotateX.set(-dy * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // GLB 3D tier
  if (glbExists && !reduced && !isMobile) {
    return (
      <div className={cn('perspective-1000', className)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative h-full w-full"
        >
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-12 w-12 animate-spin-slow rounded-full border-2 border-accent-soft border-t-transparent" />
              </div>
            }
          >
            <Render3D />
          </Suspense>
        </motion.div>
      </div>
    );
  }

  // Pseudo-3D layered tier (tier B / C)
  return (
    <div
      ref={containerRef}
      className={cn('perspective-1000', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="preserve-3d relative mx-auto aspect-[4/5] w-full max-w-sm"
        style={{
          rotateX: reduced ? 0 : springRotateX,
          rotateY: reduced ? 0 : springRotateY,
        }}
      >
        {/* Background blob */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent-tint via-accent-soft/20 to-accent/10"
          style={{ y: reduced ? 0 : blobY, x: reduced ? 0 : blobX }}
        >
          <div className="absolute inset-0 rounded-[2.5rem] border border-border/50" />
        </motion.div>

        {/* Arch shape */}
        <div className="absolute inset-x-8 top-4 bottom-0 rounded-t-[10rem] rounded-b-[2rem] bg-gradient-to-b from-white/60 to-accent-tint/40 backdrop-blur-sm" />

        {/* Placeholder cutout — silhouette with initial */}
        <motion.div
          className="absolute inset-x-10 top-8 bottom-0 flex items-end justify-center"
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative flex h-full w-full items-end justify-center">
            {/* Avatar circle */}
            <div className="mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft shadow-diffuse-lg sm:h-48 sm:w-48">
              <span className="font-script text-7xl text-white sm:text-8xl">S</span>
            </div>

            {/* Floating glass chips */}
            <motion.div
              className="absolute left-0 top-6 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 text-xs font-mono font-medium text-accent shadow-diffuse-sm backdrop-blur-md"
              style={{ y: reduced ? 0 : chipY1, x: reduced ? 0 : chipX1 }}
            >
              AI
            </motion.div>
            <motion.div
              className="absolute right-0 top-16 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 text-xs font-mono font-medium text-accent shadow-diffuse-sm backdrop-blur-md"
              style={{ y: reduced ? 0 : chipY2, x: reduced ? 0 : chipX2 }}
            >
              React
            </motion.div>
            <motion.div
              className="absolute -left-2 bottom-24 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 text-xs font-mono font-medium text-accent shadow-diffuse-sm backdrop-blur-md"
              style={{ y: reduced ? 0 : chipY2, x: reduced ? 0 : chipX2 }}
            >
              Node
            </motion.div>
          </div>
        </motion.div>

        {/* Sparkles */}
        <motion.div
          className="absolute -right-2 top-4"
          style={{ y: reduced ? 0 : sparkleY1, x: reduced ? 0 : sparkleX1 }}
        >
          <Sparkle size={28} delay={0} />
        </motion.div>
        <motion.div
          className="absolute -left-3 top-1/3"
          style={{ y: reduced ? 0 : sparkleY1, x: reduced ? 0 : sparkleX1 }}
        >
          <Sparkle size={18} delay={0.8} />
        </motion.div>
        <motion.div
          className="absolute right-8 bottom-8"
          style={{ y: reduced ? 0 : sparkleY1, x: reduced ? 0 : sparkleX1 }}
        >
          <Sparkle size={22} delay={1.5} />
        </motion.div>

        {/* Highlight shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </motion.div>
    </div>
  );
}
