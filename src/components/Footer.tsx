import React from 'react';
import { ArrowUp, Instagram, Phone, MapPin, Heart, Sun, Moon } from 'lucide-react';
import { PlateDoodle } from './SvgDoodles';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`pt-14 sm:pt-20 pb-24 sm:pb-20 relative overflow-hidden border-t transition-colors duration-300 w-full ${
        theme === 'dark'
          ? 'bg-[#0A0908] text-[#FAF7F2] border-[#221D18]'
          : 'bg-[#12100E] text-[#FAF7F2] border-[#26221D]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Big Statement */}
        <div className="pb-10 sm:pb-16 border-b border-[#26221D] flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFB703] block mb-2">
              RANWAR • BANDRA WEST • MUMBAI
            </span>
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white max-w-2xl leading-tight">
              COME FOR THE FOOD.{' '}
              <span className="text-[#E86034] block">STAY FOR THE VIBE.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Dark mode switcher in footer */}
            <button
              type="button"
              onClick={toggleTheme}
              className="px-3.5 py-2.5 rounded-full bg-[#24201C] hover:bg-[#302B26] text-white flex items-center gap-2 text-xs border border-[#3A342C] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#FFB703]" /> : <Moon className="w-3.5 h-3.5 text-[#FFB703]" />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#24201C] hover:bg-[#E86034] text-white flex items-center justify-center transition-all border border-[#3A342C] shadow-lg group"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* 4 Column Info Grid */}
        <div className="py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-b border-[#26221D]">
          {/* Col 1: Brand Wordmark */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#E86034] flex items-center justify-center text-white shrink-0">
                <PlateDoodle className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                GUPPA<span className="text-[#E86034]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#9E9588] leading-relaxed mb-3">
              A neighbourhood café and bistro celebrating Bombay comfort food, Parsi morning classics, Goan poee pockets, and artisanal coffee.
            </p>
            <span className="text-[11px] text-[#FFB703] font-mono">
              Waroda Road • Ranwar Village
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#favourites" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Chef Specials
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#A89F91] hover:text-[#E86034] transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Timings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
              Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#A89F91]">
              <p className="text-white font-semibold">Everyday</p>
              <p className="text-xs sm:text-sm font-mono text-[#FFB703]">8:30 AM – 10:00 PM</p>
              <p className="text-[11px] text-[#7A7265] pt-1 leading-snug">
                Breakfast served from 8:30 AM.<br />All-day kitchen & coffee bar.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-3">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="tel:+919324895968"
                className="flex items-center gap-2 text-[#A89F91] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E86034]" />
                <span className="tabular-nums">+91 93248 95968</span>
              </a>

              <a
                href="https://instagram.com/guppabistro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A89F91] hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E86034]" />
                <span>@guppabistro</span>
              </a>

              <p className="flex items-start gap-2 text-[#7A7265] leading-snug pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#E86034] shrink-0 mt-0.5" />
                <span className="text-[11px]">Shop No. 3, Ben O Lil Haven, 14 Waroda Road, Ranwar, Bandra West, Mumbai</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6A6255] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Guppa Bistro. All rights reserved. Made for Bandra West.</p>
          <div className="flex items-center gap-1 justify-center">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E86034] fill-current" />
            <span>for Bombay food lovers</span>
          </div>
        </div>

        {/* Decorative Wordmark (responsive overflow safe) */}
        <div className="mt-6 text-center select-none pointer-events-none opacity-10 overflow-hidden max-w-full">
          <span className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tight text-white block truncate">
            GUPPA BISTRO
          </span>
        </div>
      </div>
    </footer>
  );
};
