import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import Button from "../ui/Button";

export default function OrderSuccess() {
  return (
    <div className="section">
      <div className="section-wrap py-24 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <FiCheck size={28} className="text-emerald-500" />
        </div>
        <h2 className="font-abigeta text-3xl text-gray-900">Order Placed!</h2>
        <p className="font-inter text-gray-400 max-w-sm">
          Thank you for your order. We'll send you a confirmation shortly.
        </p>
        <Link to="/" className="mt-2">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
