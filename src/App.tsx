/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { FavouritesParallax } from './components/FavouritesParallax';
import { HorizontalStory } from './components/HorizontalStory';
import { FlavoursSection } from './components/FlavoursSection';
import { MenuSection } from './components/MenuSection';
import { OurStory } from './components/OurStory';
import { CoffeeSection } from './components/CoffeeSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

function MainApp() {
  const [loading, setLoading] = useState(true);
  const [selectedDishFilter, setSelectedDishFilter] = useState<string | undefined>(undefined);
  const { theme } = useTheme();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleBookClick = () => {
    const bookSec = document.getElementById('book');
    if (bookSec) {
      bookSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    setSelectedDishFilter(undefined);
    const menuSec = document.getElementById('menu');
    if (menuSec) {
      menuSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDishFromFavourites = (dishName: string) => {
    setSelectedDishFilter(dishName);
    const menuSec = document.getElementById('menu');
    if (menuSec) {
      menuSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCategory = (category: string) => {
    setSelectedDishFilter(undefined);
    const menuSec = document.getElementById('menu');
    if (menuSec) {
      menuSec.scrollIntoView({ behavior: 'smooth' });
      const catButton = document.querySelector(`[data-category="${category}"]`) as HTMLButtonElement | null;
      if (catButton) {
        catButton.click();
      }
    }
  };

  return (
    <div
      className={`relative min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 selection:bg-[#E86034] selection:text-white ${
        theme === 'dark' ? 'bg-[#141210] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1E1B18]'
      }`}
    >
      {/* Elegant Branded Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Desktop Contextual Custom Cursor */}
      <CustomCursor />

      {/* Sticky Top Navbar */}
      <Navbar onBookClick={handleBookClick} />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* Full-Screen Hero */}
        <Hero onMenuClick={handleMenuClick} onBookClick={handleBookClick} />

        {/* Editorial Introduction */}
        <Introduction />

        {/* Signature Favourites with Parallax */}
        <FavouritesParallax
          onSelectDish={handleSelectDishFromFavourites}
          onBookClick={handleBookClick}
        />

        {/* Horizontal Storytelling */}
        <HorizontalStory onExplore={handleExploreCategory} />

        {/* Bombay Flavours Spectrum */}
        <FlavoursSection />

        {/* Interactive Menu Section */}
        <MenuSection
          onBookClick={handleBookClick}
          selectedDishFilter={selectedDishFilter}
          onClearDishFilter={() => setSelectedDishFilter(undefined)}
        />

        {/* Bandra Neighbourhood Story */}
        <OurStory />

        {/* Dedicated Coffee Bar Section */}
        <CoffeeSection onBookClick={handleBookClick} />

        {/* Asymmetric Masonry Gallery with Lightbox */}
        <GallerySection />

        {/* Guest Reviews & Testimonials */}
        <ReviewsSection />

        {/* Instagram Grid Feed */}
        <InstagramSection />

        {/* Interactive Reservation / Booking Form */}
        <BookingSection />

        {/* Bandra Waroda Road Location & Stylized Map */}
        <LocationSection />
      </main>

      {/* Bold Editorial Footer */}
      <Footer />

      {/* Mobile Floating Quick Bar (Call | Directions | Book) */}
      <MobileBottomBar onBookClick={handleBookClick} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
