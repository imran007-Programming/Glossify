import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../hooks/useCart";
import Button from "../components/ui/Button";
import { ImCross } from "react-icons/im";
import FreeShippingBar from "../components/cart/FreeShippingBar";
import BreadCrumb from "../components/layout/Breadcrumb";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="section-wrap py-24 text-center">
          <h2 className="font-abigeta text-3xl text-gray-900">
            Your cart is empty
          </h2>
          <p className="font-inter text-gray-400 mt-2 mb-6">
            Add some products and come back here.
          </p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BreadCrumb
        crumbs={[{ label: "Home", to: "/" }, { label: "Cart" }]}
        title="Shopping Cart"
        subtitle={`${totalItems} ${totalItems === 1 ? "item" : "items"} in your cart`}
      />
      <div className="section">
      <div className="section-wrap py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Left: Items ── */}
          <div className="flex-1">
            {/* Header */}
            <h1 className="font-abigeta text-3xl text-gray-900 mb-6">
              Shopping Cart{" "}
              <span className="text-gray-400">({totalItems})</span>
            </h1>

            <div className="-mx-6 mb-4">
              <FreeShippingBar total={totalPrice} />
            </div>

            <div className="border-t border-gray-100">
              {items.map((item) => {
                const saved = item.originalPrice
                  ? (item.originalPrice - item.price) * item.quantity
                  : null;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 py-6 border-b border-gray-100"
                  >
                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors text-xl leading-none"
                      aria-label="Remove"
                    >
                      <ImCross size={12} />
                    </button>

                    {/* Image */}
                    <div className="w-20 h-20 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.name}`}
                        className="font-inter text-sm font-medium text-blue-500 hover:underline leading-snug line-clamp-2"
                      >
                        {item.name}
                      </Link>

                      {/* Price row */}
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="font-inter text-sm font-semibold text-gray-900">
                          ৳{item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="font-inter text-xs text-gray-400 line-through">
                            ৳{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                        {saved && saved > 0 && (
                          <span className="font-inter text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                            Saved ৳{saved.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
                        >
                          <FiMinus size={11} />
                        </button>
                        <span className="font-inter text-sm font-semibold text-gray-900 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
                        >
                          <FiPlus size={11} />
                        </button>
                      </div>
                    </div>

                    {/* Item total */}
                    <p className="shrink-0 font-inter text-base font-bold text-gray-900">
                      ৳{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Order Summary ── */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-6 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
              {/* Quantity row */}
              <div className="flex items-center justify-between">
                <span className="font-inter text-sm text-gray-500">
                  Quantity
                </span>
                <span className="font-inter text-sm font-semibold text-gray-900">
                  {totalItems} pcs
                </span>
              </div>

              {/* Subtotal row */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-inter text-sm text-gray-500">
                  Sub-Total
                </span>
                <span className="font-inter text-base font-bold text-gray-900">
                  ৳{totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Checkout */}
              <Link to="/checkout">
                <Button fullWidth size="lg">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
