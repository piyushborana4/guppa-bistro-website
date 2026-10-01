import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CoffeeCupDoodle, PlateDoodle } from './SvgDoodles';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'guppa' | 'bistro' | 'exit'>('guppa');

  useEffect(() => {
    // Stage 1: GUPPA (0 - 450ms)
    const t1 = setTimeout(() => {
      setStage('bistro');
    }, 450);

    // Stage 2: BISTRO (450ms - 1000ms)
    const t2 = setTimeout(() => {
      setStage('exit');
    }, 1100);

    // Stage 3: Complete
    const t3 = setTimeout(() => {
      onComplete();
    }, 1450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] text-[#1E1B18] select-none"
        >
          {/* Animated food doodle icon */}
          <motion.div
            initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-4 relative flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#F3ECE0] flex items-center justify-center text-[#E86034] shadow-sm">
              <PlateDoodle className="w-9 h-9" />
            </div>
            <motion.div
              animate={{ y: [-2, 2, -2], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 text-[#2D6A4F]"
            >
              <CoffeeCupDoodle className="w-7 h-7" />
            </motion.div>
          </motion.div>

          {/* Guppa Bistro animated text */}
          <div className="flex items-center space-x-3 overflow-hidden">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-[#1E1B18]"
            >
              GUPPA
            </motion.span>

            {stage === 'bistro' && (
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-4xl sm:text-5xl font-light tracking-wider font-display text-[#E86034]"
              >
                BISTRO
              </motion.span>
            )}
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: stage === 'bistro' ? '180px' : '90px' }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="h-[2px] bg-[#E86034] mt-3 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 text-xs uppercase tracking-[0.25em] font-medium text-[#7A7265]"
          >
            Bandra West • Mumbai
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
