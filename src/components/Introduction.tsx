import React from 'react';
import { motion } from 'motion/react';
import { HandDrawnUnderline, BandraBadgeStamp } from './SvgDoodles';
import interiorImg from '../assets/images/intro_bandra_bistro_interior_1790870999997.jpg';
import { Clock, MapPin, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Introduction: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="intro"
      className={`py-16 sm:py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#141210] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1E1B18]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Kicker */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>WELCOME TO GUPPA</span>
            </motion.div>

            {/* Large Heading with Line-by-Line Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h2
                className={`text-2xl sm:text-4xl lg:text-6xl font-black font-display tracking-tight leading-[1.12] mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
                }`}
              >
                A LITTLE BIT OF BOMBAY.{' '}
                <span className="text-[#E86034] inline-block">A LOT OF GOOD FOOD.</span>
              </h2>
              <HandDrawnUnderline className="w-40 sm:w-60 h-4 sm:h-5 text-[#E86034] -mt-1 mb-4 sm:mb-6" />
            </motion.div>

            {/* Editorial Body Prose */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-sans ${
                theme === 'dark' ? 'text-[#C5BCB1]' : 'text-[#4A453E]'
              }`}
            >
              Guppa Bistro is a neighbourhood spot in Bandra where familiar Bombay flavours meet playful new ideas. Come for breakfast, stay for coffee, lunch, conversations and whatever you're craving next.
            </motion.p>

            {/* Highlighted neighbourhood notes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t ${
                theme === 'dark' ? 'border-[#2C2621]' : 'border-[#E8E2D7]'
              }`}
            >
              <div
                className={`flex items-start gap-3 p-3 rounded-2xl ${
                  theme === 'dark' ? 'bg-[#1C1815]' : 'bg-[#F2ECE1]'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#E86034]/15 flex items-center justify-center shrink-0 text-[#E86034]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'}`}>
                    Ranwar Village Vibes
                  </h4>
                  <p className="text-[11px] text-[#8E867A] mt-0.5">Tucked inside the heritage lanes of Waroda Road</p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 p-3 rounded-2xl ${
                  theme === 'dark' ? 'bg-[#1C1815]' : 'bg-[#F2ECE1]'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/15 flex items-center justify-center shrink-0 text-[#2D6A4F]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'}`}>
                    8:30 AM – 10:00 PM
                  </h4>
                  <p className="text-[11px] text-[#8E867A] mt-0.5">Early breakfast to late night dessert cravings</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clipped Image Reveal */}
          <div className="lg:col-span-5 relative w-full">
            <div
              className={`absolute -inset-2 sm:-inset-4 rounded-3xl -rotate-1 -z-10 transition-colors ${
                theme === 'dark' ? 'bg-[#221D19]' : 'bg-[#EFE9DF]'
              }`}
            />

            <motion.div
              initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.03 }}
              whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 group cursor-view w-full"
              data-cursor="VIEW"
            >
              <img
                src={interiorImg}
                alt="Inside Guppa Bistro Bandra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <p className="text-white text-xs font-semibold uppercase tracking-wider">
                  Ranwar Heritage • Warm Wood & Sunlight
                </p>
              </div>
            </motion.div>

            {/* Bandra Stamp Accent (Desktop only) */}
            <div className="absolute -bottom-6 -right-4 hidden md:block pointer-events-none opacity-80">
              <BandraBadgeStamp className={`w-24 h-24 ${theme === 'dark' ? 'text-[#FFB703]' : 'text-[#1E1B18]'}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
