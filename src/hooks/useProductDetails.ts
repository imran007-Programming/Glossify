import { useState } from "react";
import { products } from "../data/products";
import { calcDiscount } from "../utils/priceUtils";

export const useProductDetails = (name: string | undefined) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = products.find((pd) => pd.name === name);

  const discount = product ? calcDiscount(product.price, product.originalPrice) : null;

  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const imageGallery = product ? [product.image, product.image, product.image] : [];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const toggleWishlist = () => setWishlisted((w) => !w);

  return {
    product,
    discount,
    relatedProducts,
    imageGallery,
    quantity,
    wishlisted,
    addedToCart,
    activeThumb,
    setActiveThumb,
    handleAddToCart,
    handleQuantityChange,
    toggleWishlist,
  };
};
