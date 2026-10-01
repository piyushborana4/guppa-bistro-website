import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import imgTableSpread from '../assets/images/hero_guppa_bistro_table_1790870985605.jpg';
import imgStreetStack from '../assets/images/dish_bombay_street_stack_1790871025661.jpg';
import imgColdCoffee from '../assets/images/dish_classic_cold_coffee_1790871035981.jpg';
import imgInterior from '../assets/images/intro_bandra_bistro_interior_1790870999997.jpg';
import imgBandraColada from '../assets/images/dish_bandra_colada_1790871087979.jpg';
import { useTheme } from '../context/ThemeContext';

interface HorizontalStoryProps {
  onExplore: (category: string) => void;
}

export const HorizontalStory: React.FC<HorizontalStoryProps> = ({ onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const storySlides = [
    {
      id: 'slide-breakfast',
      label: 'BREAKFAST',
      subtitle: 'Sunlit Mornings & Buttered Pav',
      description: 'Slow mornings in Ranwar starting with Parsi poro, creamy spiced akuri, and fresh hot sourdough toasts.',
      image: imgTableSpread,
      category: 'BREAKFAST',
      tag: '08:30 AM',
    },
    {
      id: 'slide-bombay',
      label: 'BOMBAY',
      subtitle: 'Street Spirit & Heritage Flavours',
      description: 'Generously layered street stacks, spiced frankies, and Maharashtrian misal bursting with crunch.',
      image: imgStreetStack,
      category: 'BOMBAY SPECIALS',
      tag: 'Street Soul',
    },
    {
      id: 'slide-coffee',
      label: 'COFFEE',
      subtitle: 'Espresso Alchemy & Cold Brews',
      description: 'Velvety South Indian Arabica roasts, toffee frappes, and iconic Bombay cold coffee with thick foam.',
      image: imgColdCoffee,
      category: 'COFFEE',
      tag: 'Arabica Blends',
    },
    {
      id: 'slide-sweet',
      label: 'SWEET',
      subtitle: 'Ranwar Puddings & Mava Cakes',
      description: 'Goan poee bread custards, cardamom sponge cake, and rose chia bowls crafted for slow afternoons.',
      image: imgBandraColada,
      category: 'DESSERTS',
      tag: 'Comfort Desserts',
    },
    {
      id: 'slide-goodtimes',
      label: 'GOOD TIMES',
      subtitle: 'Conversations That Linger',
      description: 'No rushing, no formality. Just good food, great friends, and the lively pulse of Bandra West.',
      image: imgInterior,
      category: 'ALL',
      tag: 'Ranwar Village',
    },
  ];

  return (
    <section
      className={`py-16 sm:py-24 overflow-hidden border-y transition-colors duration-300 w-full ${
        theme === 'dark'
          ? 'bg-[#141210] text-[#FAF7F2] border-[#2C2621]'
          : 'bg-[#FAF7F2] text-[#1E1B18] border-[#E8E2D7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE GUPPA JOURNEY</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-2xl sm:text-4xl lg:text-6xl font-black font-display tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              FROM BOMBAY TO THE TABLE.
            </motion.h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous story slide"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                theme === 'dark'
                  ? 'border-[#3D352D] bg-[#221D19] text-white hover:bg-[#E86034]'
                  : 'border-[#D5CCC0] bg-white text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next story slide"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                theme === 'dark'
                  ? 'border-[#3D352D] bg-[#221D19] text-white hover:bg-[#E86034]'
                  : 'border-[#D5CCC0] bg-white text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white'
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Rail */}
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-6 pt-2 scroll-smooth snap-x snap-mandatory w-full max-w-full"
      >
        {storySlides.map((slide, idx) => (
          <div
            key={slide.id}
            className="w-[82vw] sm:w-[360px] md:w-[420px] shrink-0 snap-start group"
          >
            <div
              className={`relative h-[420px] sm:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border bg-[#181513] text-white cursor-explore ${
                theme === 'dark' ? 'border-[#332C25]' : 'border-[#E8E2D7]'
              }`}
              data-cursor="EXPLORE"
              onClick={() => onExplore(slide.category)}
            >
              <img
                src={slide.image}
                alt={slide.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                {slide.tag}
              </div>

              {/* Content */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFB703] block mb-1">
                  0{idx + 1} // CHAPTER
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-1.5">
                  {slide.label}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#E86034] mb-1.5 font-display">
                  {slide.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#E0D7CC] line-clamp-2 leading-relaxed mb-3">
                  {slide.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#E86034] transition-colors">
                  <span>Explore in Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
