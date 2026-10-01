import React from 'react';
import { Phone, Navigation, Utensils } from 'lucide-react';

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookClick }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Guppa Bistro Waroda Road Ranwar Bandra West Mumbai 400050')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#181513]/95 backdrop-blur-md border-t border-[#2F2923] px-3 py-2 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href="tel:+919324895968"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#24201C] active:bg-[#332D27] text-white text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#E86034]" />
          <span>Call</span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#24201C] active:bg-[#332D27] text-white text-xs font-bold uppercase tracking-wider transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>Directions</span>
        </a>

        {/* BOOK */}
        <button
          type="button"
          onClick={onBookClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#E86034] active:bg-[#D55026] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};
