import { useInView } from "react-intersection-observer";
import { BsHandbag, BsFire, BsTag } from "react-icons/bs";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdNewReleases } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import type { ProductCardProps } from "../../types";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { calcDiscount } from "../../utils/priceUtils";
import Button from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

const badges: Record<string, { className: string; icon: React.ReactNode }> = {
  "Best Seller": { className: "bg-amber-400 text-white", icon: <RiAwardFill size={10} /> },
  Sale:          { className: "bg-rose-500 text-white",  icon: <BsTag size={10} /> },
  Hot:           { className: "bg-pink-500 text-white",  icon: <BsFire size={10} /> },
  New:           { className: "bg-emerald-500 text-white", icon: <MdNewReleases size={11} /> },
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, openDrawer } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const discountPrice = calcDiscount(product.price, product.originalPrice);
  const productBadge = product.badge ? badges[product.badge] : null;
  const wishlisted = isWishlisted(product.id);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Link to={`/product/${product.name}`} className="flex flex-col h-full">
      <div
        ref={ref}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all flex flex-col h-full"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Image */}
        <div className="relative bg-gray-50 aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />

          {discountPrice && (
            <span className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F9EBEA] text-red-500">
              <BsTag size={10} />-{discountPrice}% OFF
            </span>
          )}

          {productBadge && (
            <span className={`absolute left-2 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm ${productBadge.className} ${discountPrice ? "top-8" : "top-2"}`}>
              {productBadge.icon}
              {product.badge}
            </span>
          )}

          {/* Wishlist button — always visible when wishlisted */}
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
            className={`absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center transition-all ${
              wishlisted
                ? "opacity-100 text-red-500"
                : "opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500"
            }`}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {wishlisted ? <HiHeart size={15} /> : <HiOutlineHeart size={15} />}
          </button>
        </div>

        {/* Info — flex-1 so it fills remaining card height */}
        <div className="p-3 flex flex-col gap-1.5 flex-1">
          <p className="font-inter text-[10px] text-gray-400 font-medium uppercase tracking-wide">
            {product.brand}
          </p>
          <p className="font-inter text-sm text-gray-800 font-semibold leading-snug line-clamp-2">
            {product.name}
          </p>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={11} />
            <span className="font-inter text-[10px] text-gray-400">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-inter text-base font-bold text-gray-900">৳{product.price}</span>
            {product.originalPrice && (
              <span className="font-inter text-xs text-gray-400 line-through">৳{product.originalPrice}</span>
            )}
          </div>

          {/* mt-auto pushes button to the bottom of every card */}
          <Button
            size="sm"
            fullWidth
            icon={<BsHandbag size={12} />}
            disabled={!product.inStock}
            className="mt-auto"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
              openDrawer();
            }}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </Link>
  );
}
