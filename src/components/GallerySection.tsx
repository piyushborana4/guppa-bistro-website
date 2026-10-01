import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ZoomIn } from 'lucide-react';
import { GUPPA_GALLERY } from '../data/galleryData';
import { GalleryItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'Food' | 'Coffee' | 'Interior' | 'Vibe'>('ALL');
  const { theme } = useTheme();

  const filteredGallery = filterCategory === 'ALL'
    ? GUPPA_GALLERY
    : GUPPA_GALLERY.filter((item) => item.category === filterCategory);

  return (
    <section
      id="gallery"
      className={`py-16 sm:py-24 lg:py-36 relative transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#141210] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1E1B18]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VISUAL DIARY</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              MOMENTS AT GUPPA.
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {(['ALL', 'Food', 'Coffee', 'Interior', 'Vibe'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  filterCategory === cat
                    ? 'bg-[#E86034] text-white'
                    : theme === 'dark'
                    ? 'bg-[#1C1815] text-[#A89F91] hover:text-white border border-[#2E2721]'
                    : 'bg-white text-[#5E574D] hover:text-[#1E1B18] border border-[#DDD5C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 auto-rows-[200px] sm:auto-rows-[240px]"
        >
          {filteredGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              onClick={() => setSelectedImage(item)}
              data-cursor="VIEW"
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-view shadow-xs border bg-[#1E1B18] ${
                theme === 'dark' ? 'border-[#2C2621]' : 'border-[#E8E2D7]'
              } ${item.spanClass}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 text-white" />

              {/* Hover overlay details */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white pointer-events-none">
                <div className="self-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <h4 className="text-xs sm:text-base font-bold font-display leading-tight max-w-[80%] line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E86034] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-3 sm:p-4 bg-[#181513] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E86034]">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-display">{selectedImage.title}</h3>
                </div>
                <span className="text-[11px] text-[#8E867A]">Ranwar, Bandra West</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
