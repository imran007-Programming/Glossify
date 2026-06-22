import { useParams } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../components/ui/Button";
import { MdVerified } from "react-icons/md";
import ProductCard from "../components/product/ProductCard";
import BreadCrumb from "../components/layout/Breadcrumb";
import StarRating from "../components/product/StarRating";
import ProductNotFound from "../components/product/ProductNotFound";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductTrustBadges from "../components/product/ProductTrustBadges";
import { useProductDetails } from "../hooks/useProductDetails";

export default function ProductDetailsPage() {
  const { name } = useParams<{ name: string }>();
  const {
    product,
    discount,
    relatedProducts,
    imageGallery,
    quantity,
    wishlisted,

    activeThumb,
    setActiveThumb,
    handleAddToCart,
    handleQuantityChange,
    toggleWishlist,
  } = useProductDetails(name);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div>
      {/* top BreadCrumb */}
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
            {/* LEFT Side  Image Gallery  */}
            <ProductImageGallery
              images={imageGallery}
              productName={product.name}
              activeThumb={activeThumb}
              wishlisted={wishlisted}
              discount={discount}
              onThumbClick={setActiveThumb}
              onWishlistToggle={toggleWishlist}
            />

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

              {/*  Benefits */}
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

              {/* Quantity */}
              <div className="flex items-center gap-3 pt-2">
                {/* Quantity selector */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="w-10 text-center font-inter text-sm font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>

                {/* Add to Cart button */}
                <Button
                  icon={<BsHandbag size={14} />}
                  fullWidth
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>

              {/* Trust badges */}
              <ProductTrustBadges />
            </div>
          </div>

          {/* showing the related products  */}
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
