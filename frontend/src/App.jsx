import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import PredictPage from './pages/PredictPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <motion.div className="relative z-10 flex flex-col items-center min-h-screen"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <Header />
        <StatsBar />
        <PredictPage />
        <Footer />
      </motion.div>
    </div>
  );
}