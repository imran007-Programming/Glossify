export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  description: string;
  benefits: string[];
  inStock: boolean;
  isSpecialOffer: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  icon: import('react').ReactNode;
  image: string;
  count: number;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
