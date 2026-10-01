export type DietaryType = 'veg' | 'egg' | 'non-veg';

export type MenuCategory =
  | 'ALL'
  | 'BREAKFAST'
  | 'BOMBAY SPECIALS'
  | 'SANDWICHES'
  | 'BOWLS'
  | 'SMALL PLATES'
  | 'COFFEE'
  | 'ICED COFFEE'
  | 'SMOOTHIES'
  | 'DESSERTS';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'ALL'>;
  description: string;
  price: number;
  dietary: DietaryType;
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  date: string;
  favouriteDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Coffee' | 'Interior' | 'Vibe';
  image: string;
  spanClass: string;
}
