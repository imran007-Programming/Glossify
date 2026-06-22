import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BsHandbag,
  BsTag,
  BsShieldCheck,
  BsTruck,
  BsArrowCounterclockwise,
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import BreadCrumb from "../components/Breadcrumb/Breadcrumb";
import StarRating from "../components/product/StarRating";
import { calcDiscount } from "../utils/priceUtils";

export default function ProductDetailsPage() {
  const { name } = useParams<{ name: string }>();
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = products.find((pd) => pd.name === name);

  if (!product) {
    return (
      <div className="section">
        <div className="section-wrap py-24 text-center">
          <h2 className="font-abigeta text-3xl text-gray-900">
            Product not found
          </h2>
          <p className="font-inter text-gray-400 mt-2 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="font-inter text-sm bg-gray-900 text-white px-6 py-2.5 rounded-xl hover:bg-pink-500 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const discount = calcDiscount(product.price, product.originalPrice);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const imageGallery = [product.image, product.image, product.image];

  return (
    <div>
      <BreadCrumb
        crumbs={[
          { label: "Home", to: "/" },
          { label: product.category, to: `/category/${product.category}` },
          { label: product.name },
        ]}
        title={product.name}
        subtitle={product.brand}
      />

      {/* Main Content */}
      <div className="section">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            {/* LEFT — Image Gallery */}
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="relative bg-gray-50 rounded-3xl overflow-hidden aspect-square">
                <img
                  src={imageGallery[activeThumb]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 transition-opacity duration-300"
                />
                {discount && (
                  <span className="absolute top-4 left-4 flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F9EBEA] text-red-500">
                    <BsTag size={11} />-{discount}% OFF
                  </span>
                )}
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-colors ${
                    wishlisted
                      ? "text-pink-500"
                      : "text-gray-400 hover:text-pink-500"
                  }`}
                >
                  <HiOutlineHeart size={18} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {imageGallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-gray-50 transition-all ${
                      activeThumb === i
                        ? "border-gray-900"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain p-1.5"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Product Info */}
            <div className="flex flex-col gap-5">
              {/* Brand */}
              <div className="flex items-center gap-2">
                <span className="font-inter text-xs font-semibold uppercase tracking-widest text-pink-500">
                  {product.brand}
                </span>
                <MdVerified size={14} className="text-pink-400" />
              </div>

              {/* Name */}
              <h1 className="font-abigeta text-3xl md:text-4xl text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} size={15} />
                <span className="font-inter text-sm font-semibold text-gray-800">
                  {product.rating}
                </span>
                <span className="font-inter text-sm text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-inter text-3xl font-bold text-gray-900">
                  ৳{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-inter text-lg text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>
                    {discount && (
                      <span className="font-inter text-sm font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        Save {discount}%
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Stock status */}
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    product.inStock ? "bg-emerald-500" : "bg-red-400"
                  }`}
                />
                <span
                  className={`font-inter text-sm font-medium ${
                    product.inStock ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <p className="font-inter text-gray-500 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits */}
              {product.benefits.length > 0 && (
                <div>
                  <h3 className="font-inter text-sm font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        </span>
                        <span className="font-inter text-sm text-gray-600">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity + Cart */}
              <div className="flex items-center gap-3 pt-2">
                {/* Quantity selector */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="w-10 text-center font-inter text-sm font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 h-11 rounded-xl font-inter text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    addedToCart
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-900 hover:bg-pink-500 text-white"
                  }`}
                >
                  <BsHandbag size={14} />
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </button>

                {/* Wishlist button */}
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                    wishlisted
                      ? "bg-pink-50 border-pink-300 text-pink-500"
                      : "border-gray-200 text-gray-400 hover:border-pink-300 hover:text-pink-500"
                  }`}
                >
                  <HiOutlineHeart size={18} />
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-100">
                {[
                  {
                    icon: <BsTruck size={16} />,
                    label: "Free Delivery",
                    sub: "Orders over ৳999",
                  },
                  {
                    icon: <BsArrowCounterclockwise size={16} />,
                    label: "Easy Returns",
                    sub: "7-day return",
                  },
                  {
                    icon: <BsShieldCheck size={16} />,
                    label: "100% Genuine",
                    sub: "Verified products",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-gray-50"
                  >
                    <span className="text-gray-600">{item.icon}</span>
                    <span className="font-inter text-xs font-semibold text-gray-800">
                      {item.label}
                    </span>
                    <span className="font-inter text-[10px] text-gray-400">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <div className="mb-8">
                <h2 className="font-abigeta text-3xl md:text-4xl text-gray-900">
                  You May Also Like
                </h2>
                <p className="font-inter text-sm text-gray-400 mt-1">
                  More from {product.category}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
