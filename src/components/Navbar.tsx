import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, Sun, Moon } from 'lucide-react';
import { PlateDoodle } from './SvgDoodles';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollPos / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#favourites' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#141210]/95 backdrop-blur-md shadow-md py-3 border-b border-[#2C2621]'
              : 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8E2D7]'
            : 'bg-transparent py-4 sm:py-6 text-white'
        }`}
      >
        {/* Subtle scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#E86034] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className={`flex items-center gap-2 group transition-colors ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-white'
                    : 'text-[#1E1B18]'
                  : 'text-white'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#E86034] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 shrink-0">
                <PlateDoodle className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap">
                GUPPA<span className="text-[#E86034]">.</span>
              </span>
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold tracking-wide transition-all relative py-1 hover:text-[#E86034] ${
                    isScrolled
                      ? theme === 'dark'
                        ? 'text-[#C5BCB1] hover:text-white'
                        : 'text-[#2D2A26]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions & Theme Switcher */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark/Light mode toggle button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'bg-[#24201C] text-[#FFB703] hover:bg-[#302B26]'
                      : 'bg-[#EFEAE0] text-[#1E1B18] hover:bg-[#E4DDCF]'
                    : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-xs'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#FFB703] transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* Call button */}
              <a
                href="tel:+919324895968"
                className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-colors ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-[#C5BCB1] hover:text-white bg-[#24201C]'
                      : 'text-[#4A453E] hover:text-[#1E1B18] bg-[#F1EBE1]'
                    : 'text-white/90 hover:text-white bg-white/10 backdrop-blur-xs'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#E86034]" />
                <span className="tabular-nums">+91 93248 95968</span>
              </a>

              {/* Book button */}
              <button
                type="button"
                onClick={onBookClick}
                data-cursor="BOOK"
                className="cursor-book px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E86034] hover:bg-[#D55026] rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5 whitespace-nowrap"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Book a Table</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* Mobile Hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className={`p-2 rounded-lg transition-colors lg:hidden ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-white hover:bg-[#24201C]'
                      : 'text-[#1E1B18] hover:bg-[#EFEAE0]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 lg:hidden pt-20 px-6 flex flex-col justify-between pb-24 overflow-y-auto animate-in fade-in duration-200 ${
            theme === 'dark' ? 'bg-[#141210] text-white' : 'bg-[#FAF7F2] text-[#1E1B18]'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-500/20">
              <p className="text-xs uppercase font-bold tracking-widest text-[#A89F91]">
                Explore Guppa Bistro
              </p>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-500/15"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#FFB703]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold font-display hover:text-[#E86034] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-500/20 space-y-3 mt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#E86034] rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Book a Table</span>
            </button>

            <a
              href="tel:+919324895968"
              className={`w-full py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 ${
                theme === 'dark' ? 'bg-[#24201C] text-white' : 'bg-[#EFEAE0] text-[#1E1B18]'
              }`}
            >
              <Phone className="w-4 h-4 text-[#E86034]" />
              <span>Call +91 93248 95968</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
