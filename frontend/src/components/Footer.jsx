import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer className="relative z-10 flex flex-col items-center gap-3 pb-10 px-4 mt-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <div className="w-32 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(190,24,93,0.2), transparent)' }} />
      <div className="flex items-center gap-2">
        <span className="font-dm-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(46,16,60,0.35)' }}>Built with</span>
        <Heart size={10} style={{ color: 'rgba(190,24,93,0.55)' }} fill="rgba(190,24,93,0.45)" />
        <span className="font-dm-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(46,16,60,0.35)' }}>for educational research</span>
      </div>
      <p className="font-dm-mono text-[9px] tracking-wider text-center" style={{ color: 'rgba(46,16,60,0.28)' }}>
        CardioAI — A University ML Portfolio Project<br />
        React · Flask · Scikit-Learn · Tailwind CSS
      </p>
    </motion.footer>
  );
}