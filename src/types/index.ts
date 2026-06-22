import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

// ── Domain ────────────────────────────────────────────────────────────────────

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
  icon: ReactNode;
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

export interface CategoryItem {
  id: number;
  name: string;
  image: string;
  bg: string;
  featuredImage?: string;
}

export interface HeroBannerItem {
  id: number;
  name: string;
  image: string;
  objectPosition?: string;
}

// ── Context ───────────────────────────────────────────────────────────────────

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export interface WishlistContextType {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
}

// ── Checkout ──────────────────────────────────────────────────────────────────

export type PaymentMethod = "card" | "mobile" | "cod";

export type CheckoutFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  mobileNumber: string;
};

// ── UI Components ─────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "pink" | "outline" | "ghost" | "success";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface BadgeProps {
  label: string;
  variant?: "sale" | "new" | "best-seller" | "top-rated";
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

// ── Checkout Components ───────────────────────────────────────────────────────

export interface CheckoutFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

export interface PaymentOptionProps {
  id: string;
  active: boolean;
  icon: ReactNode;
  label: string;
  sublabel?: string;
  onSelect: () => void;
}

// ── Product Components ────────────────────────────────────────────────────────

export interface ProductCardProps {
  product: Product;
}

export interface StarRatingProps {
  rating: number;
  size?: number;
}

export interface ProductGridProps {
  products: Product[];
}

export interface ProductFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

// ── Layout Components ─────────────────────────────────────────────────────────

export interface Crumb {
  label: string;
  to?: string;
}

export interface PageHeroProps {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
}
