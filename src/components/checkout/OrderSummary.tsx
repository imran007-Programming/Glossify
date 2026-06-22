import type { CartItem } from "../../types";
import Button from "../ui/Button";

type Props = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  shipping: number;
  grandTotal: number;
  freeShippingThreshold: number;
};

export default function OrderSummary({ items, totalItems, totalPrice, shipping, grandTotal, freeShippingThreshold }: Props) {
  return (
    <div className="lg:w-80 shrink-0">
      <div className="sticky top-6 border border-gray-200 rounded-2xl overflow-hidden">

        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-abigeta text-xl text-gray-900">Order Summary</h2>
          <p className="font-inter text-xs text-gray-400 mt-0.5">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="px-5 py-3 flex flex-col gap-3 max-h-64 overflow-y-auto" data-lenis-prevent>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter text-xs font-medium text-gray-800 line-clamp-2 leading-snug">{item.name}</p>
                <p className="font-inter text-[11px] text-gray-400 mt-0.5">Qty: {item.quantity}</p>
              </div>
              <p className="font-inter text-sm font-semibold text-gray-900 shrink-0">
                ৳{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-2.5">
          <div className="flex justify-between font-inter text-sm text-gray-500">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-900">৳{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-inter text-sm text-gray-500">
            <span>Shipping</span>
            <span className={shipping === 0 ? "text-emerald-500 font-semibold" : "font-semibold text-gray-900"}>
              {shipping === 0 ? "Free" : `৳${shipping}`}
            </span>
          </div>
          {shipping > 0 && (
            <p className="font-inter text-[11px] text-gray-400">
              Free shipping on orders over ৳{freeShippingThreshold}
            </p>
          )}
          <div className="flex justify-between font-inter text-base font-bold text-gray-900 border-t border-gray-100 pt-3 mt-1">
            <span>Total</span>
            <span>৳{grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="px-5 pb-5">
          <Button type="submit" fullWidth size="lg">Place Order</Button>
        </div>

      </div>
    </div>
  );
}
