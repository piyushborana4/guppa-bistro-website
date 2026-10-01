import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Sparkles, Plus, Check } from 'lucide-react';
import imgColdCoffee from '../assets/images/dish_classic_cold_coffee_1790871035981.jpg';
import { useTheme } from '../context/ThemeContext';

interface CoffeeSectionProps {
  onBookClick: () => void;
}

export const CoffeeSection: React.FC<CoffeeSectionProps> = ({ onBookClick }) => {
  const [orderedBrews, setOrderedBrews] = useState<string[]>([]);
  const { theme } = useTheme();

  const coffeeList = [
    { name: 'Bistro Cappuccino', desc: 'Double espresso & velvety micro-foam', price: '₹220', hot: true },
    { name: 'Café Mocha', desc: 'Melted dark chocolate & espresso', price: '₹250', hot: true },
    { name: 'Toffee Cappuccino', desc: 'House buttery toffee & Arabica shots', price: '₹260', hot: true, special: true },
    { name: 'Belgian Hot Chocolate', desc: '70% pure Belgian chocolate & sea salt', price: '₹280', hot: true },
    { name: 'Classic Cold Coffee', desc: 'Chilled espresso, milk & vanilla bean ice cream', price: '₹260', hot: false, special: true },
    { name: 'Iced Latte', desc: 'Double espresso over chilled milk & artisan ice', price: '₹240', hot: false },
    { name: 'Iced Mocha', desc: 'Chilled espresso, dark cocoa & cold foam', price: '₹270', hot: false },
    { name: 'Iced Americano', desc: 'Double shot poured over sparkling iced water', price: '₹210', hot: false },
  ];

  const handleOrderAnother = (brewName: string) => {
    setOrderedBrews((prev) => [...prev, brewName]);
  };

  return (
    <section
      className={`py-16 sm:py-24 lg:py-36 relative overflow-hidden transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#0E0C0A] text-white' : 'bg-[#181513] text-white'
      }`}
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#E86034]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with animated steam */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-4/5 group cursor-view w-full" data-cursor="VIEW">
              <img
                src={imgColdCoffee}
                alt="Freshly pulled coffee at Guppa Bistro"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Steam overlays */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none flex gap-2.5">
                <div className="w-1.5 h-12 sm:h-16 bg-white/40 rounded-full blur-[2px] animate-steam-1" />
                <div className="w-2 h-16 sm:h-20 bg-white/30 rounded-full blur-[2px] animate-steam-2" />
                <div className="w-1.5 h-10 sm:h-14 bg-white/40 rounded-full blur-[2px] animate-steam-3" />
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#FFB703] uppercase tracking-widest block">
                    ARABICA ROASTS
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                    Freshly Pulled All Day
                  </h4>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E86034] text-white flex items-center justify-center shadow-lg">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Menu & Order Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FFB703] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE COFFEE BAR</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-3 sm:mb-4"
            >
              COFFEE FIRST?
            </motion.h2>

            <p className="text-[#C5BCB1] text-xs sm:text-base mb-6 sm:mb-8 max-w-lg">
              Brewed from premium estate beans with pure Arabica notes. From steaming toffee cappuccinos to thick chilled cold coffee with vanilla ice cream.
            </p>

            {/* Coffee Item List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {coffeeList.map((brew) => {
                const isOrdered = orderedBrews.includes(brew.name);

                return (
                  <div
                    key={brew.name}
                    className={`p-3 rounded-xl sm:rounded-2xl border transition-all ${
                      brew.special
                        ? 'bg-[#2A241F] border-[#E86034]/40 hover:border-[#E86034]'
                        : 'bg-[#211D1A] border-[#38322C] hover:border-[#4E463E]'
                    } flex items-center justify-between group`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFB703] transition-colors">
                          {brew.name}
                        </h4>
                        {brew.special && (
                          <span className="text-[8px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-[#E86034] text-white">
                            Fav
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[#9A9184] mt-0.5">{brew.desc}</p>
                    </div>

                    <div className="text-right shrink-0 ml-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-xs sm:text-sm font-bold font-display text-white tabular-nums">
                        {brew.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOrderAnother(brew.name)}
                        title="Add to wishlist"
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                          isOrdered
                            ? 'bg-[#2D6A4F] text-white'
                            : 'bg-white/10 hover:bg-[#E86034] text-white/80 hover:text-white'
                        }`}
                      >
                        {isOrdered ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Another Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#38322C]">
              <button
                type="button"
                onClick={onBookClick}
                data-cursor="BOOK"
                className="cursor-book w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E86034] hover:bg-[#D55026] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                <span>ORDER ANOTHER / BOOK TABLE</span>
              </button>

              {orderedBrews.length > 0 && (
                <span className="text-xs text-[#FFB703] font-medium text-center sm:text-left">
                  ★ {orderedBrews.length} coffee{orderedBrews.length > 1 ? 's' : ''} added to your wishlist
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
