import { GalleryItem } from '../types';

import imgTableSpread from '../assets/images/hero_guppa_bistro_table_1790870985605.jpg';
import imgInterior from '../assets/images/intro_bandra_bistro_interior_1790870999997.jpg';
import imgParsiPoro from '../assets/images/dish_parsi_poro_1790871013741.jpg';
import imgStreetStack from '../assets/images/dish_bombay_street_stack_1790871025661.jpg';
import imgColdCoffee from '../assets/images/dish_classic_cold_coffee_1790871035981.jpg';
import imgMisalPao from '../assets/images/dish_misal_pao_1790871049430.jpg';
import imgShakshuka from '../assets/images/dish_bombay_shakshuka_1790871063154.jpg';
import imgHummusPoee from '../assets/images/dish_hummus_poee_1790871075451.jpg';
import imgBandraColada from '../assets/images/dish_bandra_colada_1790871087979.jpg';
import imgRanwarStreet from '../assets/images/gallery_ranwar_street_1790871098765.jpg';

export const GUPPA_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Sunday Morning Breakfast Spread',
    category: 'Food',
    image: imgTableSpread,
    spanClass: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Ranwar Waroda Road Heritage Charm',
    category: 'Vibe',
    image: imgRanwarStreet,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Parsi Poro with Sourdough & Green Chillies',
    category: 'Food',
    image: imgParsiPoro,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Sunlit Bistro Interior & Warm Woods',
    category: 'Interior',
    image: imgInterior,
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Artisanal Bombay Street Stack Toastie',
    category: 'Food',
    image: imgStreetStack,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Chilled Classic Cold Coffee with Foam',
    category: 'Coffee',
    image: imgColdCoffee,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-7',
    title: 'Fiery Misal Pao with Crunchy Farsan',
    category: 'Food',
    image: imgMisalPao,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-8',
    title: 'Goan Poee Pocket with Grilled Halloumi',
    category: 'Food',
    image: imgHummusPoee,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-9',
    title: 'Bandra Colada Tropical Refresher',
    category: 'Coffee',
    image: imgBandraColada,
    spanClass: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-10',
    title: 'Bombay Shakshuka with Buttered Pav',
    category: 'Food',
    image: imgShakshuka,
    spanClass: 'col-span-1 md:col-span-2 row-span-1',
  },
];
