import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { items, totalItems, totalPrice, isDrawerOpen, closeDrawer } =
    useCart();

  // hide the body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* black overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/55  0 z-40 transition-opacity duration-500 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-7 pb-5">
          <h2 className="font-abigeta text-2xl text-gray-900">
            Shopping Cart <span className="text-gray-400">({totalItems})</span>
          </h2>
          <button
            onClick={closeDrawer}
            className="text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto overscroll-y-contain px-6"
        >
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <p className="font-inter text-sm font-medium text-gray-400">
                Your cart is empty
              </p>
              <button
                onClick={closeDrawer}
                className="font-inter text-sm text-pink-500 hover:underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 pb-8 pt-4 flex flex-col gap-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <span className="font-inter text-sm text-gray-400">Subtotal</span>
              <span className="font-inter text-base font-bold text-gray-900">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            {/* Checkout  button*/}
            <Link
              to="/checkout"
              onClick={closeDrawer}
              className="w-full flex items-center justify-center h-12 rounded-2xl bg-gray-900 hover:bg-pink-500 text-white font-inter text-sm font-semibold transition-colors"
            >
              Checkout
            </Link>

            {/* View Cart button */}
            <Link
              to="/cart"
              onClick={closeDrawer}
              className="w-full flex items-center justify-center h-12 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-500 font-inter text-sm font-semibold transition-colors"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
