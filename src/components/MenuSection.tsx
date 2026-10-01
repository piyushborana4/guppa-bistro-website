import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, ArrowRight, Flame, Utensils, X, Eye } from 'lucide-react';
import { GUPPA_MENU, MENU_CATEGORIES } from '../data/menuData';
import { MenuItem, MenuCategory, DietaryType } from '../types';
import { useTheme } from '../context/ThemeContext';

interface MenuSectionProps {
  onBookClick: () => void;
  selectedDishFilter?: string;
  onClearDishFilter?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onBookClick,
  selectedDishFilter,
  onClearDishFilter,
}) => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('ALL');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModalDish, setSelectedModalDish] = useState<MenuItem | null>(null);

  const effectiveSearch = selectedDishFilter || searchQuery;

  const filteredItems = useMemo(() => {
    return GUPPA_MENU.filter((item) => {
      // Category filter
      if (activeCategory !== 'ALL' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter !== 'all' && item.dietary !== dietaryFilter) {
        return false;
      }
      // Search query
      if (effectiveSearch.trim() !== '') {
        const query = effectiveSearch.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, effectiveSearch]);

  const handleCategorySelect = (cat: MenuCategory) => {
    setActiveCategory(cat);
    if (selectedDishFilter && onClearDishFilter) {
      onClearDishFilter();
    }
  };

  return (
    <section
      id="menu"
      className={`py-16 sm:py-24 lg:py-36 relative transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#141210] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1E1B18]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEIGHBOURHOOD KITCHEN</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
            }`}
          >
            WHAT'S COOKING?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`text-sm sm:text-base px-2 ${theme === 'dark' ? 'text-[#B5ACA0]' : 'text-[#5E574D]'}`}
          >
            Parsi morning specials, street-inspired stacks, artisanal roasts and comforting sweets.
          </motion.p>
        </div>

        {/* Search & Dietary Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C8375] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, flavours..."
              value={effectiveSearch}
              onChange={(e) => {
                if (selectedDishFilter && onClearDishFilter) onClearDishFilter();
                setSearchQuery(e.target.value);
              }}
              className={`w-full pl-10 pr-10 py-2.5 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#E86034] transition-all ${
                theme === 'dark'
                  ? 'bg-[#1C1815] border border-[#332C25] text-white placeholder:text-[#685F54] focus:border-[#E86034]'
                  : 'bg-white border border-[#DDD5C7] text-[#1E1B18] placeholder:text-[#A49B8D] focus:border-[#E86034]'
              }`}
            />
            {effectiveSearch && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  if (onClearDishFilter) onClearDishFilter();
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C8375] hover:text-[#E86034]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filters */}
          <div
            className={`flex items-center gap-1 p-1 rounded-full w-full sm:w-auto justify-center ${
              theme === 'dark' ? 'bg-[#1C1815] border border-[#2E2721]' : 'bg-[#EFEAE0]'
            }`}
          >
            <button
              type="button"
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                dietaryFilter === 'all'
                  ? theme === 'dark'
                    ? 'bg-[#E86034] text-white shadow-xs'
                    : 'bg-white text-[#1E1B18] shadow-xs'
                  : theme === 'dark'
                  ? 'text-[#A89F91] hover:text-white'
                  : 'text-[#5E574D] hover:text-[#1E1B18]'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full flex items-center gap-1.5 transition-colors ${
                dietaryFilter === 'veg'
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'text-[#2D6A4F] hover:opacity-80'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
              <span>Veg</span>
            </button>
            <button
              type="button"
              onClick={() => setDietaryFilter('egg')}
              className={`px-3 py-1.5 text-xs font-bold rounded-full flex items-center gap-1.5 transition-colors ${
                dietaryFilter === 'egg'
                  ? 'bg-[#D97706] text-white shadow-xs'
                  : 'text-[#D97706] hover:opacity-80'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span>Egg</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b ${
            theme === 'dark' ? 'border-[#2C2621]' : 'border-[#E8E2D7]'
          }`}
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat && !selectedDishFilter;
            return (
              <button
                key={cat}
                type="button"
                data-category={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#E86034] text-white shadow-sm'
                    : theme === 'dark'
                    ? 'bg-[#1C1815] text-[#A89F91] hover:text-white border border-[#2E2721]'
                    : 'bg-white text-[#5E574D] hover:text-[#1E1B18] hover:bg-[#EFEAE0] border border-[#DDD5C7]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Selected dish filter alert */}
        {selectedDishFilter && (
          <div
            className={`mb-6 flex items-center justify-between p-3 rounded-xl border ${
              theme === 'dark'
                ? 'bg-[#1C1815] border-[#332C25] text-[#FAF7F2]'
                : 'bg-[#F4EDE2] border-[#DDD5C7] text-[#4A453E]'
            }`}
          >
            <span className="text-xs font-medium">
              Filtering for: <strong className="text-[#E86034]">{selectedDishFilter}</strong>
            </span>
            <button
              type="button"
              onClick={onClearDishFilter}
              className="text-xs font-bold text-[#E86034] hover:underline"
            >
              Show All Menu
            </button>
          </div>
        )}

        {/* Menu Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`text-center py-12 rounded-3xl border p-6 max-w-md mx-auto ${
                theme === 'dark' ? 'bg-[#1C1815] border-[#2E2721]' : 'bg-white border-[#E8E2D7]'
              }`}
            >
              <Utensils className="w-8 h-8 text-[#A49B8D] mx-auto mb-2" />
              <h3 className="text-base font-bold mb-1">No matching dishes found</h3>
              <p className="text-xs text-[#7A7265] mb-3">Try adjusting your search or dietary filter.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('ALL');
                  setDietaryFilter('all');
                  setSearchQuery('');
                  if (onClearDishFilter) onClearDishFilter();
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-[#E86034] rounded-full"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.25) }}
                  className={`group rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between cursor-view ${
                    theme === 'dark'
                      ? 'bg-[#1C1815] border-[#2C2621] hover:border-[#403730]'
                      : 'bg-white border-[#E8E2D7] hover:border-[#D5CCC0]'
                  }`}
                  data-cursor="VIEW"
                  onClick={() => setSelectedModalDish(item)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#181513]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <div className="bg-white/90 backdrop-blur-xs p-1 rounded-md border border-black/5 shadow-xs flex items-center justify-center">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.dietary === 'veg'
                              ? 'bg-[#2D6A4F]'
                              : item.dietary === 'egg'
                              ? 'bg-[#D97706]'
                              : 'bg-[#DC2626]'
                          }`}
                        />
                      </div>

                      {item.isSignature ? (
                        <span className="px-2 py-0.5 rounded-full bg-[#E86034] text-white text-[9px] font-extrabold uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Flame className="w-2.5 h-2.5" />
                          <span>Signature</span>
                        </span>
                      ) : item.isPopular ? (
                        <span className="px-2 py-0.5 rounded-full bg-[#1E1B18] text-white text-[9px] font-bold uppercase tracking-wider shadow-xs">
                          Popular
                        </span>
                      ) : null}
                    </div>

                    {/* Hover quick preview */}
                    <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#1E1B18] text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Eye className="w-3 h-3 text-[#E86034]" />
                      <span>Details</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h3
                          className={`text-lg sm:text-xl font-bold font-display group-hover:text-[#E86034] transition-colors leading-tight ${
                            theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
                          }`}
                        >
                          {item.name}
                        </h3>
                        <span
                          className={`text-sm sm:text-base font-black font-display tabular-nums shrink-0 ${
                            theme === 'dark' ? 'text-[#FFB703]' : 'text-[#1E1B18]'
                          }`}
                        >
                          ₹{item.price}
                        </span>
                      </div>

                      <p
                        className={`text-xs line-clamp-2 leading-relaxed font-sans mb-3 ${
                          theme === 'dark' ? 'text-[#9A9184]' : 'text-[#6A6256]'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div
                      className={`pt-2.5 border-t flex items-center justify-between text-xs ${
                        theme === 'dark' ? 'border-[#26201B]' : 'border-[#F2ECE3]'
                      }`}
                    >
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E867A]">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#E86034] font-bold text-[10px] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dish Detail Modal */}
      {selectedModalDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`max-w-md sm:max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl border relative ${
              theme === 'dark' ? 'bg-[#1C1815] border-[#332C25] text-white' : 'bg-[#FAF7F2] border-[#E8E2D7] text-[#1E1B18]'
            }`}
          >
            <button
              type="button"
              onClick={() => setSelectedModalDish(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-16/10 bg-[#181513]">
              <img
                src={selectedModalDish.image}
                alt={selectedModalDish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#FFB703]">
                  {selectedModalDish.category}
                </span>
                <span className="text-xl sm:text-2xl font-black font-display tabular-nums">
                  ₹{selectedModalDish.price}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    selectedModalDish.dietary === 'veg'
                      ? 'bg-[#2D6A4F]'
                      : selectedModalDish.dietary === 'egg'
                      ? 'bg-[#D97706]'
                      : 'bg-[#DC2626]'
                  }`}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E867A]">
                  {selectedModalDish.dietary === 'veg'
                    ? 'Vegetarian'
                    : selectedModalDish.dietary === 'egg'
                    ? 'Contains Egg'
                    : 'Non-Vegetarian'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display mb-2">
                {selectedModalDish.name}
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 font-sans ${
                  theme === 'dark' ? 'text-[#C5BCB1]' : 'text-[#4A453E]'
                }`}
              >
                {selectedModalDish.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedModalDish(null);
                    onBookClick();
                  }}
                  className="flex-1 py-3 bg-[#E86034] hover:bg-[#D55026] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm text-center"
                >
                  Reserve Table to Taste
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedModalDish(null)}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    theme === 'dark' ? 'bg-[#28221D] text-white hover:bg-[#332C26]' : 'bg-[#EFEAE0] text-[#1E1B18] hover:bg-[#E4DDCF]'
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
