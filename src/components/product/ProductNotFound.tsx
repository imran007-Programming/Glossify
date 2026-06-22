import { Link } from "react-router-dom";

export default function ProductNotFound() {
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
