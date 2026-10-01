import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils } from 'lucide-react';
import { ChilliDoodle, PlateDoodle } from './SvgDoodles';
import { useTheme } from '../context/ThemeContext';

export const FlavoursSection: React.FC = () => {
  const { theme } = useTheme();

  const flavourPillars = [
    {
      title: 'PARSI',
      desc: 'Poro omelettes, creamy akuri with warm pao, and nostalgic Irani café warmth.',
      badge: 'Heritage',
    },
    {
      title: 'GOAN',
      desc: 'Freshly baked poee bread pockets stuffed with grilled halloumi & aromatic herbs.',
      badge: 'Coastal',
    },
    {
      title: 'MAHARASHTRIAN',
      desc: 'Fiery sprouted misal with tarri gravy, crispy sabudana vadas & zesty chutneys.',
      badge: 'Street Soul',
    },
    {
      title: 'STREET FOOD',
      desc: 'Layered Bombay street sandwiches, crunchy frankies, and bold local masalas.',
      badge: 'Iconic',
    },
    {
      title: 'CAFÉ CULTURE',
      desc: 'Specialty cold coffees, whipped toffee frappes, and conversations that linger.',
      badge: 'Bandra Vibe',
    },
    {
      title: 'HOME COMFORTS',
      desc: 'Poee bread puddings, spiced chai, and comforting morning bowls made with love.',
      badge: 'Warmth',
    },
  ];

  return (
    <section
      className={`py-16 sm:py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#100E0C] text-[#FAF7F2]' : 'bg-[#1E1B18] text-[#FAF7F2]'
      }`}
    >
      {/* Decorative SVG motifs */}
      <div className="absolute top-12 right-12 opacity-15 hidden md:block pointer-events-none">
        <PlateDoodle className="w-28 h-28 text-white" />
      </div>
      <div className="absolute bottom-12 left-12 opacity-15 hidden md:block pointer-events-none">
        <ChilliDoodle className="w-20 h-20 text-[#E86034]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CULINARY TAPESTRY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-4 leading-tight"
          >
            BOMBAY HAS MANY FLAVOURS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[#C5BCB1] text-sm sm:text-base max-w-xl mx-auto px-2"
          >
            Our menu is an ode to the communities that built this city’s unforgettable food culture.
          </motion.p>
        </div>

        {/* 6 Flavour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {flavourPillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-[#1C1815] border-[#2E2721] hover:border-[#E86034]'
                  : 'bg-[#282420] border-[#3D3732] hover:border-[#E86034]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono tracking-widest text-[#FFB703] uppercase">
                  0{index + 1}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/90">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white mb-2 group-hover:text-[#E86034] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C5BCB1] leading-relaxed font-sans">
                {item.desc}
              </p>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-[#8E867A] group-hover:text-white transition-colors">
                <Utensils className="w-3.5 h-3.5 text-[#E86034]" />
                <span>Featured in Daily Specials</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
