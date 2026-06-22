import { useState } from "react";
import { products } from "../data/products";
import { calcDiscount } from "../utils/priceUtils";
import { useCart } from "./useCart";
import { useWishlist } from "./useWishlist";

export const useProductDetails = (name: string | undefined) => {
  const { addToCart, openDrawer } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = products.find((pd) => pd.name === name);

  const discount = product ? calcDiscount(product.price, product.originalPrice) : null;

  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const imageGallery = product ? [product.image, product.image, product.image] : [];

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    openDrawer();


  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  return {
    product,
    discount,
    relatedProducts,
    imageGallery,
    quantity,
    wishlisted: product ? isWishlisted(product.id) : false,

    activeThumb,
    setActiveThumb,
    handleAddToCart,
    handleQuantityChange,
    toggleWishlist: () => product && toggleWishlist(product),
  };
};
