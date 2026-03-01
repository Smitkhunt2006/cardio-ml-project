import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

export default function ErrorAlert({ message, onDismiss }) {
  return (
    <motion.div className="relative flex items-start gap-3 px-4 py-3.5 rounded-xl overflow-hidden"
      style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.22)', boxShadow: '0 2px 12px rgba(239,68,68,0.08)' }}
      initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }}
      exit={{ opacity: 0, y: -10, height: 0 }} transition={{ duration: 0.3 }}>

      <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
      <p className="flex-1 font-dm-mono text-[11px] leading-relaxed tracking-wide" style={{ color: 'rgba(185,28,28,0.85)' }}>{message}</p>

      {onDismiss && (
        <motion.button onClick={onDismiss} className="transition-colors" style={{ color: 'rgba(185,28,28,0.4)' }}
          whileHover={{ scale: 1.1, color: 'rgba(185,28,28,0.8)' }} whileTap={{ scale: 0.9 }}>
          <X size={13} />
        </motion.button>
      )}
    </motion.div>
  );
}