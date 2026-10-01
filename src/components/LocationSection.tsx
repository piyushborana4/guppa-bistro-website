import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Sparkles, Compass } from 'lucide-react';
import ranwarImg from '../assets/images/gallery_ranwar_street_1790871098765.jpg';
import { useTheme } from '../context/ThemeContext';

export const LocationSection: React.FC = () => {
  const { theme } = useTheme();
  const addressText = 'Shop No. 3, Ben O Lil Haven, 14 Waroda Road, Ranwar, Bandra West, Mumbai, Maharashtra 400050';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Guppa Bistro Waroda Road Ranwar Bandra West Mumbai 400050')}`;

  return (
    <section
      id="location"
      className={`py-16 sm:py-24 lg:py-36 relative transition-colors duration-300 w-full ${
        theme === 'dark' ? 'bg-[#141210] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1E1B18]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE NEIGHBOURHOOD SPOT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              FIND US IN BANDRA.
            </motion.h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${theme === 'dark' ? 'text-[#B5ACA0]' : 'text-[#5E574D]'}`}>
              Tucked inside the iconic Portuguese heritage lanes of Ranwar village, right next to art murals and breezy street corners.
            </p>

            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {/* Address */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border shadow-xs flex items-start gap-3 sm:gap-4 ${
                  theme === 'dark' ? 'bg-[#1C1815] border-[#2C2621]' : 'bg-white border-[#E8E2D7]'
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF0EB] text-[#E86034] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8E867A] mb-0.5">
                    Address
                  </h4>
                  <p className={`text-xs sm:text-sm font-semibold leading-snug ${theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'}`}>
                    {addressText}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border shadow-xs flex items-start gap-3 sm:gap-4 ${
                  theme === 'dark' ? 'bg-[#1C1815] border-[#2C2621]' : 'bg-white border-[#E8E2D7]'
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF2ED] text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8E867A] mb-0.5">
                    Opening Hours
                  </h4>
                  <p className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'}`}>
                    Monday – Sunday: <strong className="text-[#2D6A4F]">8:30 AM – 10:00 PM</strong>
                  </p>
                  <p className="text-[11px] text-[#8E867A] mt-0.5">
                    Breakfast, lunch, coffee & late evening snacks
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border shadow-xs flex items-start gap-3 sm:gap-4 ${
                  theme === 'dark' ? 'bg-[#1C1815] border-[#2C2621]' : 'bg-white border-[#E8E2D7]'
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF0EB] text-[#E86034] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8E867A] mb-0.5">
                    Direct Contact
                  </h4>
                  <a
                    href="tel:+919324895968"
                    className={`text-xs sm:text-sm font-bold hover:text-[#E86034] transition-colors tabular-nums ${
                      theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
                    }`}
                  >
                    +91 93248 95968
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="MAP"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#E86034] hover:bg-[#D55026] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="tel:+919324895968"
                className={`w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-[#1C1815] text-white hover:bg-[#28221D] border border-[#332C25]'
                    : 'bg-[#EFEAE0] text-[#1E1B18] hover:bg-[#E4DDCF]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#E86034]" />
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Map Card */}
          <div className="lg:col-span-6 relative w-full">
            <div
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border group aspect-4/3 sm:aspect-16/11 w-full ${
                theme === 'dark' ? 'border-[#2C2621] bg-[#1C1815]' : 'border-[#E8E2D7] bg-[#EFE9DF]'
              }`}
            >
              <img
                src={ranwarImg}
                alt="Ranwar Waroda Road Bandra West location"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.85] contrast-[1.05]"
              />

              <div className="absolute inset-0 bg-[#1E1B18]/40 backdrop-blur-[1px] group-hover:bg-[#1E1B18]/25 transition-colors duration-300" />

              {/* Animated Location Pin Pinpoint */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E86034]/30 animate-ping absolute" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E86034] text-white flex items-center justify-center shadow-xl border-2 border-white relative z-10">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="mt-2.5 bg-[#FAF7F2] text-[#1E1B18] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-[#E8E2D7] text-center whitespace-nowrap">
                  <p className="text-[11px] sm:text-xs font-bold font-display leading-tight">
                    GUPPA BISTRO
                  </p>
                  <span className="text-[9px] sm:text-[10px] text-[#7A7265] block font-medium">
                    Waroda Road, Ranwar, Bandra West
                  </span>
                </div>
              </div>

              {/* Directions link badge */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md text-[#1E1B18] hover:text-[#E86034] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#E86034]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
