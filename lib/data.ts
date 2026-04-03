export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const categories: string[] = [
  'Vitamins & Supplements',
  'Pain Relief',
  'Cold & Flu',
  'Skin Care',
  'Digestive Health',
  'First Aid',
  'Baby Care',
  'Eye Care',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Vitamin C 1000mg',
    description: 'High-potency Vitamin C supplement for immune support and antioxidant protection.',
    price: 14.99,
    originalPrice: 19.99,
    category: 'Vitamins & Supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    badge: 'Sale',
    inStock: true,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Ibuprofen 200mg',
    description: 'Fast-acting pain relief for headaches, muscle aches, and fever reduction.',
    price: 8.99,
    category: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    name: 'DayQuil Cold & Flu',
    description: 'Non-drowsy daytime relief for cold and flu symptoms.',
    price: 12.49,
    category: 'Cold & Flu',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    badge: 'Popular',
    inStock: true,
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 4,
    name: 'Moisturizing Lotion SPF 30',
    description: 'Daily moisturizer with broad spectrum SPF 30 sun protection.',
    price: 18.99,
    originalPrice: 24.99,
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    badge: 'Sale',
    inStock: true,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 5,
    name: 'Probiotic 50 Billion CFU',
    description: 'Advanced probiotic formula for digestive health and gut balance.',
    price: 29.99,
    category: 'Digestive Health',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.9,
    reviews: 421,
  },
  {
    id: 6,
    name: 'First Aid Kit Deluxe',
    description: 'Comprehensive 100-piece first aid kit for home and travel emergencies.',
    price: 34.99,
    category: 'First Aid',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop',
    badge: 'New',
    inStock: true,
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 7,
    name: 'Baby Diaper Rash Cream',
    description: 'Gentle zinc oxide formula to prevent and treat diaper rash.',
    price: 9.99,
    category: 'Baby Care',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.7,
    reviews: 267,
  },
  {
    id: 8,
    name: 'Lubricating Eye Drops',
    description: 'Soothing eye drops for dry, irritated eyes with long-lasting relief.',
    price: 11.99,
    category: 'Eye Care',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.4,
    reviews: 143,
  },
  {
    id: 9,
    name: 'Omega-3 Fish Oil 1200mg',
    description: 'Premium fish oil supplement supporting heart, brain, and joint health.',
    price: 22.99,
    originalPrice: 27.99,
    category: 'Vitamins & Supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    badge: 'Sale',
    inStock: true,
    rating: 4.6,
    reviews: 198,
  },
  {
    id: 10,
    name: 'Acetaminophen Extra Strength',
    description: 'Extra strength pain reliever and fever reducer for adults.',
    price: 7.99,
    category: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.5,
    reviews: 345,
  },
  {
    id: 11,
    name: 'NyQuil Nighttime Relief',
    description: 'Nighttime cold and flu medicine for symptom relief while you sleep.',
    price: 13.99,
    category: 'Cold & Flu',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
    inStock: false,
    rating: 4.7,
    reviews: 289,
  },
  {
    id: 12,
    name: 'Hydrocortisone Cream 1%',
    description: 'Anti-itch cream for temporary relief of minor skin irritations.',
    price: 6.99,
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    inStock: true,
    rating: 4.3,
    reviews: 112,
  },
];

export const featuredProducts = products.filter((p) => p.badge !== undefined).slice(0, 4);
