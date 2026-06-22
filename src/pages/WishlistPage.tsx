import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../hooks/useCart";
import Button from "../components/ui/Button";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart, openDrawer } = useCart();

  const handleAddToCart = (product: (typeof items)[0]) => {
    addToCart(product);
    openDrawer();
  };

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="section-wrap py-24 text-center">
          <HiOutlineHeart size={48} className="text-gray-200 mx-auto mb-4" />
          <h2 className="font-abigeta text-3xl text-gray-900">
            Your wishlist is empty
          </h2>
          <p className="font-inter text-gray-400 mt-2 mb-6">
            Save products you love and come back to them anytime.
          </p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-wrap py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-abigeta text-3xl md:text-4xl text-gray-900">
            My Wishlist
          </h1>
          <p className="font-inter text-sm text-gray-400 mt-1">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              {/* Image */}
              <Link to={`/product/${product.name}`} className="block">
                <div className="relative bg-gray-50 aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {/* Remove button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-red-400 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <FiTrash2 size={13} />
                  </button>
                </div>
              </Link>

              {/* Info */}
              <div className="p-3 flex flex-col gap-1.5">
                <p className="font-inter text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                  {product.brand}
                </p>
                <p className="font-inter text-sm text-gray-800 font-semibold leading-snug line-clamp-2">
                  {product.name}
                </p>
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

                <Button
                  size="sm"
                  fullWidth
                  icon={<BsHandbag size={12} />}
                  disabled={!product.inStock}
                  onClick={() => handleAddToCart(product)}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
