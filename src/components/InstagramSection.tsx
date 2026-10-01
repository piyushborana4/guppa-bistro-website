import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import imgTableSpread from '../assets/images/hero_guppa_bistro_table_1790870985605.jpg';
import imgInterior from '../assets/images/intro_bandra_bistro_interior_1790870999997.jpg';
import imgParsiPoro from '../assets/images/dish_parsi_poro_1790871013741.jpg';
import imgStreetStack from '../assets/images/dish_bombay_street_stack_1790871025661.jpg';
import imgColdCoffee from '../assets/images/dish_classic_cold_coffee_1790871035981.jpg';
import imgMisalPao from '../assets/images/dish_misal_pao_1790871049430.jpg';
import { useTheme } from '../context/ThemeContext';

export const InstagramSection: React.FC = () => {
  const { theme } = useTheme();

  const posts = [
    { image: imgParsiPoro, caption: 'Sunday eggs don’t get better than our Parsi Poro 🍳 #GuppaBistro #Bandra', likes: 248 },
    { image: imgStreetStack, caption: 'Layers on layers. The Bombay Street Stack in all its glory 🥪', likes: 312 },
    { image: imgColdCoffee, caption: 'Beat the Mumbai heat with our thick vanilla cold coffee ☕️', likes: 419 },
    { image: imgInterior, caption: 'Sunlight filtering through Waroda Road shutters. Pull up a chair ✨', likes: 189 },
    { image: imgMisalPao, caption: 'Spicy, crunchy, buttery. Real Bombay comfort on a plate 🔥', likes: 367 },
    { image: imgTableSpread, caption: 'Bandra mornings look like this. When are you visiting? 🥐', likes: 520 },
  ];

  return (
    <section
      className={`py-16 sm:py-24 border-t transition-colors duration-300 w-full ${
        theme === 'dark'
          ? 'bg-[#141210] text-[#FAF7F2] border-[#2C2621]'
          : 'bg-[#FAF7F2] text-[#1E1B18] border-[#E8E2D7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E86034] mb-2 sm:mb-3">
              <Instagram className="w-4 h-4" />
              <span>COMMUNITY STORIES</span>
            </div>
            <h2
              className={`text-2xl sm:text-5xl font-black font-display tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1E1B18]'
              }`}
            >
              SEE YOU ON THE ’GRAM.
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#8E867A] mt-1 font-mono">
              @guppabistro • Ranwar, Bandra West
            </p>
          </div>

          <a
            href="https://instagram.com/guppabistro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E86034] hover:bg-[#D55026] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md group self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @guppabistro</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com/guppabistro"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square group shadow-xs border block ${
                theme === 'dark' ? 'border-[#2C2621]' : 'border-[#E8E2D7]'
              }`}
            >
              <img
                src={post.image}
                alt={`Guppa Bistro Instagram post ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2 sm:p-3 text-white text-center">
                <div className="flex items-center gap-2.5 text-xs font-bold mb-1.5">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current text-[#E86034]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{Math.floor(post.likes / 15)}</span>
                  </div>
                </div>
                <p className="text-[10px] text-white/90 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
