import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import type { CartItem as CartItemType } from "../../types";

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Image */}
      <div className="w-[72px] h-[72px] shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name + controls */}
      <div className="flex-1 min-w-0">
        <p className="font-inter text-sm font-medium text-gray-900 leading-snug line-clamp-2">
          {item.name}
        </p>

        <div className="flex items-center gap-2 mt-2">
          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
            >
              <FiMinus size={11} />
            </button>
            <span className="font-inter text-sm font-semibold text-gray-900 w-4 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
            >
              <FiPlus size={11} />
            </button>
          </div>

          <span className="text-gray-300 text-sm">×</span>

          {/* Total price */}
          <span className="font-inter text-sm font-semibold text-gray-800">
            ৳{(item.price * item.quantity).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none"
        aria-label="Remove item"
      >
        ×
      </button>
    </div>
  );
}
