import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Utensils, BookOpen, MapPin } from 'lucide-react';
import { HandDrawnArrow, HandDrawnCircle, ChilliDoodle, CoffeeCupDoodle } from './SvgDoodles';
import heroImg from '../assets/images/hero_guppa_bistro_table_1790870985605.jpg';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onMenuClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onMenuClick, onBookClick }) => {
  const { theme } = useTheme();
  const words = ['BOMBAY,', 'ON', 'A', 'PLATE.'];

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#181513] w-full max-w-full">
      {/* Background Image with 1.08 -> 1.0 scale animation */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 will-change-transform w-full h-full"
      >
        <img
          src={heroImg}
          alt="Guppa Bistro table spread in Bandra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.68] contrast-[1.08]"
        />
        {/* Editorial gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/45 to-[#141210]/65" />
      </motion.div>

      {/* Floating Decorative Doodles (hidden or constrained on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute top-24 left-4 sm:left-12 z-10 hidden md:block animate-float-subtle"
      >
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white/90 text-xs font-medium">
          <CoffeeCupDoodle className="w-4 h-4 text-[#FFB703]" />
          <span>Ranwar Village Mornings</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute top-28 right-6 sm:right-16 z-10 hidden lg:block animate-float-reverse"
      >
        <div className="relative">
          <HandDrawnCircle className="w-20 h-20 text-[#E86034]" />
          <div className="absolute inset-0 flex items-center justify-center -rotate-6">
            <span className="font-hand text-lg font-bold text-white tracking-wide">Parsi • Goan</span>
          </div>
        </div>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 sm:pt-28 flex flex-col items-center w-full">
        {/* Small Location Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm"
        >
          <MapPin className="w-3 h-3 text-[#E86034]" />
          <span>BANDRA WEST • MUMBAI</span>
        </motion.div>

        {/* Main Heading Revealed Word-by-Word */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-4 sm:mb-6 leading-[1.08] flex flex-wrap justify-center gap-x-2 sm:gap-x-4 max-w-full">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.45 + index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={word === 'PLATE.' ? 'text-[#E86034] inline-block' : 'inline-block'}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-sm sm:text-xl md:text-2xl text-[#E8E2D7] font-normal max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans px-2"
        >
          Good food, strong coffee, old favourites and new cravings in Ranwar.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <button
            type="button"
            onClick={onMenuClick}
            data-cursor="EXPLORE"
            className="cursor-explore w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#1E1B18] hover:bg-[#FAF7F2] font-bold text-xs uppercase tracking-widest rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center justify-center gap-2 group"
          >
            <BookOpen className="w-4 h-4 text-[#E86034] transition-transform group-hover:rotate-6" />
            <span>SEE THE MENU</span>
          </button>

          <button
            type="button"
            onClick={onBookClick}
            data-cursor="BOOK"
            className="cursor-book w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E86034] text-white hover:bg-[#D55026] font-bold text-xs uppercase tracking-widest rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            <span>BOOK A TABLE</span>
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 sm:mt-14 flex flex-col items-center cursor-pointer text-white/70 hover:text-white transition-colors"
          onClick={() => {
            const intro = document.getElementById('intro');
            if (intro) intro.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-1 font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#E86034]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom organic curve matching active theme */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-6 sm:h-8 rounded-t-[2rem] z-20 pointer-events-none transition-colors duration-300 ${
          theme === 'dark' ? 'bg-[#141210]' : 'bg-[#FAF7F2]'
        }`}
      />
    </section>
  );
};
