import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { isTouchDevice } from '@/lib/utils';

export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 150, damping: 18 });
  const ringY = useSpring(y, { stiffness: 150, damping: 18 });

  useEffect(() => {
    if (isTouchDevice()) return;

    setVisible(true);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, textarea')
      );
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden md:block">
      <motion.div
        className="fixed h-2 w-2 rounded-full bg-accent"
        style={{ left: x, top: y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed rounded-full border border-accent/40"
        style={{
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
        }}
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          backgroundColor: hovering ? 'rgba(238,234,247,0.3)' : 'rgba(255,255,255,0)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
    </div>
  );
}
