import { createContext } from 'react';
import type { Product } from '../types';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
