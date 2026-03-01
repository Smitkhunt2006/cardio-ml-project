import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ShieldAlert, ShieldCheck } from 'lucide-react';

function RiskMeter({ risk }) {
  const isHigh = risk === 'High Risk';
  const percentage = isHigh ? 82 : 18;
  const color = isHigh ? '#ef4444' : '#10b981';
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-dm-mono text-[10px] uppercase tracking-wider" style={{ color: 'rgba(46,16,60,0.45)' }}>Risk Level</span>
        <motion.span className="font-dm-mono text-xs font-medium" style={{ color }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          {percentage}%
        </motion.span>
      </div>
      <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(46,16,60,0.08)' }}>
        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.15) 0%, rgba(239,68,68,0.15) 100%)' }} />
        <motion.div className="absolute top-0 left-0 h-full rounded-full"
          style={{ background: isHigh ? 'linear-gradient(90deg,#f87171,#ef4444)' : 'linear-gradient(90deg,#34d399,#10b981)', boxShadow: `0 0 8px ${color}` }}
          initial={{ width: 0 }} animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }} />
      </div>
    </div>
  );
}

export default function ResultCard({ result, onReset }) {
  const isHigh = result === 'High Risk';
  const color = isHigh ? '#ef4444' : '#10b981';
  const Icon = isHigh ? ShieldAlert : ShieldCheck;

  const recommendations = isHigh
    ? ['Consult a cardiologist immediately', 'Monitor blood pressure daily', 'Adopt a low-sodium diet', 'Begin supervised exercise program']
    : ['Maintain current healthy habits', 'Annual cardiovascular check-up', 'Stay physically active', 'Continue balanced nutrition'];

  return (
    <motion.div key="result"
      initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }} transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`relative rounded-2xl p-6 overflow-hidden ${isHigh ? 'result-high' : 'result-low'}`}
      style={{ background: isHigh ? 'rgba(254,242,242,0.9)' : 'rgba(240,253,244,0.9)', backdropFilter: 'blur(16px)' }}>

      <motion.div className="absolute inset-0 pointer-events-none"
        style={{ background: isHigh ? 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.08), transparent)' : 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.07), transparent)' }}
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} />

      <div className="relative flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <motion.div className="relative flex items-center justify-center w-14 h-14 rounded-2xl"
            style={{ background: isHigh ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.1)', border: `1px solid ${isHigh ? 'rgba(239,68,68,0.25)' : 'rgba(16,185,129,0.25)'}` }}
            animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Icon size={26} color={color} strokeWidth={1.5} />
            <motion.div className="absolute inset-0 rounded-2xl" style={{ border: `1px solid ${color}` }}
              animate={{ scale: [1, 1.3], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </motion.div>
          <div>
            <p className="label-tag mb-1">Prediction Result</p>
            <motion.h2 className="font-syne text-xl font-bold" style={{ color }}
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {result}
            </motion.h2>
          </div>
        </div>
        <motion.div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-dm-mono font-medium tracking-wider uppercase`}
          style={{ background: isHigh ? 'rgba(239,68,68,0.08)' : 'rgba(16,185,129,0.08)', border: `1px solid ${isHigh ? 'rgba(239,68,68,0.25)' : 'rgba(16,185,129,0.25)'}`, color }}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}>
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: color }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          {result}
        </motion.div>
      </div>

      <div className="mb-5"><RiskMeter risk={result} /></div>

      <div className="h-px w-full mb-5" style={{ background: `linear-gradient(90deg, transparent, ${isHigh ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}, transparent)` }} />

      <div className="mb-6">
        <p className="label-tag mb-3">Clinical Recommendations</p>
        <div className="space-y-2">
          {recommendations.map((rec, i) => (
            <motion.div key={i} className="flex items-center gap-3 py-2 px-3 rounded-xl"
              style={{ background: isHigh ? 'rgba(239,68,68,0.05)' : 'rgba(16,185,129,0.05)' }}
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="font-dm-sans text-sm font-light" style={{ color: 'rgba(46,16,60,0.75)' }}>{rec}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="mb-5 px-3 py-2.5 rounded-xl" style={{ background: 'rgba(46,16,60,0.04)', border: '1px solid rgba(46,16,60,0.08)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="font-dm-mono text-[10px] leading-relaxed tracking-wide" style={{ color: 'rgba(46,16,60,0.45)' }}>
          ⚠ This prediction is for educational purposes only. Always consult a certified medical professional.
        </p>
      </motion.div>

      <motion.button onClick={onReset}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-syne text-sm font-semibold tracking-wide"
        style={{ background: 'rgba(46,16,60,0.05)', border: '1px solid rgba(46,16,60,0.1)', color: 'rgba(46,16,60,0.5)' }}
        whileHover={{ background: 'rgba(190,24,93,0.07)', borderColor: 'rgba(190,24,93,0.2)', color: 'rgba(190,24,93,0.8)', y: -1 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <RotateCcw size={14} strokeWidth={2} />
        Run New Analysis
      </motion.button>
    </motion.div>
  );
}