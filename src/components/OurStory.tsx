import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import interiorImg from '../assets/images/intro_bandra_bistro_interior_1790870999997.jpg';
import ranwarImg from '../assets/images/gallery_ranwar_street_1790871098765.jpg';
import { HandDrawnCircle } from './SvgDoodles';
import { useTheme } from '../context/ThemeContext';

export const OurStory: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="story"
      className={`py-16 sm:py-24 lg:py-36 relative overflow-hidden border-t transition-colors duration-300 w-full ${
        theme === 'dark'
          ? 'bg-[#181513] text-[#FAF7F2] border-[#2C2621]'
          : 'bg-[#F4EDE2] text-[#1E1B18] border-[#E8E2D7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4">
              {/* Primary Interior Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-4/5 cursor-view w-full"
                data-cursor="VIEW"
              >
                <img
                  src={interiorImg}
                  alt="Guppa Bistro interior ambiance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Secondary Ranwar Street Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className={`col-span-6 -mt-12 sm:-mt-20 ml-auto rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 aspect-square cursor-view ${
                  theme === 'dark' ? 'border-[#181513]' : 'border-[#FAF7F2]'
                }`}
                data-cursor="VIEW"
              >
                <img
                  src={ranwarImg}
                  alt="Ranwar heritage lanes in Bandra West"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Hand-drawn circle badge (hidden on small mobile to avoid overflow) */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:block pointer-events-none">
              <div className="relative">
                <HandDrawnCircle className="w-20 h-20 text-[#E86034]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-hand text-xs font-bold text-center leading-tight ${
                      theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
                    }`}
                  >
                    Waroda Rd<br />Ranwar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE NEIGHBOURHOOD SPIRIT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`text-2xl sm:text-4xl lg:text-6xl font-black font-display tracking-tight mb-4 sm:mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              MADE FOR THE NEIGHBOURHOOD.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`text-base sm:text-xl font-medium leading-relaxed mb-4 sm:mb-6 font-sans ${
                theme === 'dark' ? 'text-[#E8E2D7]' : 'text-[#3A352E]'
              }`}
            >
              Guppa is a Bandra neighbourhood bistro bringing together the comfort of Bombay favourites, café culture and flavours inspired by the city's many communities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-sans ${
                theme === 'dark' ? 'text-[#A89F91]' : 'text-[#686054]'
              }`}
            >
              Set inside Ben O Lil Haven in Ranwar village, we believe the best meals happen when great ingredients meet warmth and zero pretension. Whether you are grabbing a quick morning Akuri Pao, working through an Iced Latte, or winding down with friends over a spicy Frankie, Guppa is your everyday home away from home.
            </motion.p>

            {/* Three key pillars */}
            <div
              className={`grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t ${
                theme === 'dark' ? 'border-[#2E2721]' : 'border-[#DDD5C7]'
              }`}
            >
              <div>
                <span className="block text-xl sm:text-3xl font-black font-display text-[#E86034]">
                  100%
                </span>
                <span className={`text-[10px] sm:text-xs font-medium ${theme === 'dark' ? 'text-[#8E867A]' : 'text-[#686054]'}`}>
                  Bandra Soul
                </span>
              </div>
              <div>
                <span className={`block text-xl sm:text-3xl font-black font-display ${theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'}`}>
                  8:30 AM
                </span>
                <span className={`text-[10px] sm:text-xs font-medium ${theme === 'dark' ? 'text-[#8E867A]' : 'text-[#686054]'}`}>
                  Breakfast Daily
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-3xl font-black font-display text-[#2D6A4F]">
                  Warm
                </span>
                <span className={`text-[10px] sm:text-xs font-medium ${theme === 'dark' ? 'text-[#8E867A]' : 'text-[#686054]'}`}>
                  No Pretension
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
