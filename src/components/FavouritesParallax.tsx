import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import imgParsiPoro from '../assets/images/dish_parsi_poro_1790871013741.jpg';
import imgStreetStack from '../assets/images/dish_bombay_street_stack_1790871025661.jpg';
import imgMisalPao from '../assets/images/dish_misal_pao_1790871049430.jpg';
import imgColdCoffee from '../assets/images/dish_classic_cold_coffee_1790871035981.jpg';
import { useTheme } from '../context/ThemeContext';

interface FavouritesParallaxProps {
  onSelectDish: (dishName: string) => void;
  onBookClick: () => void;
}

export const FavouritesParallax: React.FC<FavouritesParallaxProps> = ({ onSelectDish, onBookClick }) => {
  const { theme } = useTheme();

  const favourites = [
    {
      id: 'parsi-poro',
      name: 'Parsi Poro',
      subtitle: 'The Legendary Bandra Morning Fix',
      description: 'A vibrant, spiced egg omelette folded with charred onions, fragrant coriander, sharp green chillies, and melted cheese, paired with crusty sourdough toast.',
      price: '₹360',
      category: 'Parsi Breakfast Classic',
      image: imgParsiPoro,
      tag: 'Most Loved',
    },
    {
      id: 'bombay-street-stack',
      name: 'Bombay Street Stack',
      subtitle: 'Old-School Sandwich, Elevated',
      description: 'Thick toasted artisanal bread layered with roasted spiced potatoes, sliced ruby beets, cucumbers, onions, green bell pepper, Amul cheese and sharp mint chutney.',
      price: '₹350',
      category: 'Bombay Café Staple',
      image: imgStreetStack,
      tag: 'Chef Choice',
    },
    {
      id: 'misal-pao',
      name: 'Misal Pao',
      subtitle: 'Fiery Lentil Curry & Buttered Pav',
      description: 'Slow-simmered Maharashtrian sprouted moth bean curry served with fiery tarri gravy, extra-crunchy farsan, chopped raw onions, lemon wedge, and warm toasted pav.',
      price: '₹290',
      category: 'Maharashtrian Soul',
      image: imgMisalPao,
      tag: 'Spicy Favourite',
    },
    {
      id: 'classic-cold-coffee',
      name: 'Classic Cold Coffee',
      subtitle: 'Thick, Creamy & Chilled',
      description: 'Double-shot freshly pulled Arabica espresso whipped vigorously with whole milk and topped with rich vanilla bean ice cream. The quintessential Bombay café cooler.',
      price: '₹260',
      category: 'Signature Brew',
      image: imgColdCoffee,
      tag: 'House Special',
    },
  ];

  return (
    <section
      id="favourites"
      className={`py-16 sm:py-24 lg:py-36 relative overflow-hidden transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#0E0C0A] text-[#FAF7F2]' : 'bg-[#181513] text-[#FAF7F2]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#E86034]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ICONIC FLAVOURS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-4"
          >
            THE GUPPA FAVOURITES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#B5ACA0] text-sm sm:text-base px-4"
          >
            Dishes that define our tables. If it's your first time in Bandra, start right here.
          </motion.p>
        </div>

        {/* Favourites Stack */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {favourites.map((dish, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Large Photography */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}
                >
                  <div
                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group cursor-view aspect-16/10 border border-white/10 w-full"
                    data-cursor="VIEW"
                    onClick={() => onSelectDish(dish.name)}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#E86034]" />
                      <span>{dish.tag}</span>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                      <span className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
                        {dish.category}
                      </span>
                      <span className="text-xl sm:text-2xl font-black font-display text-white tabular-nums">
                        {dish.price}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E86034] mb-2">
                    0{index + 1} • {dish.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white mb-1.5">
                    {dish.name}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#FFB703] mb-3">
                    {dish.subtitle}
                  </h4>
                  <p className="text-[#C5BCB1] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectDish(dish.name)}
                      className="px-4 sm:px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/15 transition-all flex items-center gap-1.5 group"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={onBookClick}
                      className="px-4 sm:px-5 py-2.5 bg-[#E86034] hover:bg-[#D55026] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md"
                    >
                      Taste This
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
