import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent"
      style={{
        transformOrigin: '0%',
        scaleX,
        boxShadow: '0 0 10px rgba(255,255,255,0.6)',
      }}
      aria-hidden="true"
    >
      <div className="h-full w-full bg-white" />
    </motion.div>
  );
}
