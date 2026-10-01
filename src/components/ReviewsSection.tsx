import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { GUPPA_REVIEWS } from '../data/reviewsData';
import { useTheme } from '../context/ThemeContext';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GUPPA_REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % GUPPA_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + GUPPA_REVIEWS.length) % GUPPA_REVIEWS.length);
  };

  return (
    <section
      className={`py-16 sm:py-24 lg:py-36 relative overflow-hidden border-t transition-colors duration-300 w-full ${
        theme === 'dark'
          ? 'bg-[#181513] text-[#FAF7F2] border-[#2C2621]'
          : 'bg-[#F4EDE2] text-[#1E1B18] border-[#E8E2D7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMUNITY LOVE</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              PEOPLE SAY NICE THINGS.
            </motion.h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous testimonial"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                theme === 'dark'
                  ? 'bg-[#221D19] border-[#3D352D] text-white hover:bg-[#E86034]'
                  : 'bg-white border-[#D5CCC0] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next testimonial"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                theme === 'dark'
                  ? 'bg-[#221D19] border-[#3D352D] text-white hover:bg-[#E86034]'
                  : 'bg-white border-[#D5CCC0] text-[#1E1B18] hover:bg-[#1E1B18] hover:text-white'
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div
          className={`relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 border shadow-xl transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-[#1F1B17] border-[#332C25] text-white'
              : 'bg-white border-[#E8E2D7] text-[#1E1B18]'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="w-10 h-10 text-[#E86034]/20 absolute top-6 right-6 sm:top-8 sm:right-8" />

          {/* Star rating */}
          <div className="flex items-center gap-1 mb-4 sm:mb-6">
            {[...Array(GUPPA_REVIEWS[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB703] text-[#FFB703]" />
            ))}
            <span className="ml-2 text-[10px] sm:text-xs font-bold text-[#8E867A] uppercase tracking-wider">
              5.0 Verified Guest
            </span>
          </div>

          {/* Review text */}
          <p className="text-base sm:text-xl md:text-2xl font-serif-display italic leading-relaxed mb-6 sm:mb-8">
            “{GUPPA_REVIEWS[currentIndex].review}”
          </p>

          {/* Author info & favourite dish */}
          <div
            className={`pt-4 sm:pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              theme === 'dark' ? 'border-[#2D2620]' : 'border-[#F0EAE1]'
            }`}
          >
            <div>
              <h4 className="text-base sm:text-lg font-bold font-display">
                {GUPPA_REVIEWS[currentIndex].name}
              </h4>
              <p className="text-xs text-[#8E867A]">
                {GUPPA_REVIEWS[currentIndex].location} · {GUPPA_REVIEWS[currentIndex].date}
              </p>
            </div>

            <div
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border self-start sm:self-auto ${
                theme === 'dark' ? 'bg-[#181513] border-[#2D2620]' : 'bg-[#FAF7F2] border-[#E8E2D7]'
              }`}
            >
              <span className="text-xs">
                Fav:{' '}
                <strong className="text-[#E86034]">
                  {GUPPA_REVIEWS[currentIndex].favouriteDish}
                </strong>
              </span>
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="flex items-center gap-1.5 mt-6 sm:mt-8 justify-center">
            {GUPPA_REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 sm:w-8 bg-[#E86034]' : 'w-1.5 sm:w-2 bg-gray-400/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
