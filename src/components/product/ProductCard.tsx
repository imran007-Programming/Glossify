import { useInView } from "react-intersection-observer";
import { BsHandbag, BsFire, BsTag } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { MdNewReleases } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { calcDiscount } from "../../utils/priceUtils";

const badges: Record<string, { className: string; icon: React.ReactNode }> = {
  "Best Seller": {
    className: "bg-amber-400 text-white",
    icon: <RiAwardFill size={10} />,
  },
  Sale: {
    className: "bg-rose-500 text-white",
    icon: <BsTag size={10} />,
  },
  Hot: {
    className: "bg-pink-500 text-white",
    icon: <BsFire size={10} />,
  },
  New: {
    className: "bg-emerald-500 text-white",
    icon: <MdNewReleases size={11} />,
  },
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPrice = calcDiscount(product.price, product.originalPrice);

  const productBadges = product.badge ? badges[product.badge] : null;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Link key={product.id} to={`/product/${product.name}`}>
      <div
        ref={ref}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all"
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

          {/* Discount badge */}
          {discountPrice && (
            <span className="absolute top-2 left-2 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F9EBEA] text-red-500">
              <BsTag size={10} />-{discountPrice}% OFF
            </span>
          )}

          {/* Label badge */}
          {productBadges && (
            <span
              className={`absolute left-2 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm ${productBadges.className} ${discountPrice ? "top-8" : "top-2"}`}
            >
              {productBadges.icon}
              {product.badge}
            </span>
          )}

          {/* Wishlist */}
          <button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-pink-500 transition-colors opacity-0 group-hover:opacity-100">
            <HiOutlineHeart size={15} />
          </button>
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col gap-1.5">
          <p className="font-inter text-[10px] text-gray-400 font-medium uppercase tracking-wide">
            {product.brand}
          </p>
          <p className="font-inter text-sm text-gray-800 font-semibold leading-snug line-clamp-2">
            {product.name}
          </p>
          {/* rateings */}
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={11} />
            <span className="font-inter text-[10px] text-gray-400">
              ({product.reviews})
            </span>
          </div>
          {/* product prices */}
          <div className="flex items-center gap-1.5">
            <span className="font-inter text-base font-bold text-gray-900">
              ৳{product.price}
            </span>
            {product.originalPrice && (
              <span className="font-inter text-xs text-gray-400 line-through">
                ৳{product.originalPrice}
              </span>
            )}
          </div>

          <button className="mt-1 w-full flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-pink-500 text-white text-xs font-semibold font-inter py-2 rounded-xl transition-colors">
            <BsHandbag size={12} />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
