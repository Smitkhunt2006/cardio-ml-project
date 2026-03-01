import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 65% at 50% -5%, #fce7f3 0%, #f7f4f9 55%, #f0ebf8 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 scan-line opacity-40" />

      {/* Rose orb top-left */}
      <motion.div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(251,207,232,0.65) 0%, rgba(252,231,243,0.3) 50%, transparent 70%)', top: '-180px', left: '-120px' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Violet orb bottom-right */}
      <motion.div className="orb" style={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(221,214,254,0.6) 0%, rgba(237,233,254,0.25) 50%, transparent 70%)', bottom: '-130px', right: '-100px' }}
        animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Warm pink accent centre */}
      <motion.div className="orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(249,168,212,0.35) 0%, transparent 70%)', top: '38%', left: '58%' }}
        animate={{ x: [0, -18, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(190,24,93,0.3) 40%, rgba(168,85,247,0.3) 60%, transparent)' }} />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: Math.random() * 4 + 2, height: Math.random() * 4 + 2, background: `rgba(190,24,93,${Math.random() * 0.3 + 0.08})`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -(Math.random() * 60 + 20), 0], opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
          transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 8, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}