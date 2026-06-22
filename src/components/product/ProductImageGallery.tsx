import { BsTag } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";

type Props = {
  images: string[];
  productName: string;
  activeThumb: number;
  wishlisted: boolean;
  discount: number | null;
  onThumbClick: (index: number) => void;
  onWishlistToggle: () => void;
};

export default function ProductImageGallery({
  images,
  productName,
  activeThumb,
  wishlisted,
  discount,
  onThumbClick,
  onWishlistToggle,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative bg-gray-50 rounded-3xl overflow-hidden aspect-square">
        <img
          src={images[activeThumb]}
          alt={productName}
          className="w-full h-full object-contain p-8 transition-opacity duration-300"
        />
        {discount && (
          <span className="absolute top-4 left-4 flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F9EBEA] text-red-500">
            <BsTag size={11} />-{discount}% OFF
          </span>
        )}
        <button
          onClick={onWishlistToggle}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-colors ${
            wishlisted ? "text-pink-500" : "text-gray-400 hover:text-pink-500"
          }`}
        >
          <HiOutlineHeart size={18} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onThumbClick(i)}
            className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-gray-50 transition-all ${
              activeThumb === i
                ? "border-gray-900"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
          </button>
        ))}
      </div>
    </div>
  );
}
