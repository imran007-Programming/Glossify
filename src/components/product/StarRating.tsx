import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import type { StarRatingProps } from "../../types";

export default function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star)
          return (
            <BsStarFill key={star} size={size} className="text-amber-400" />
          );
        if (rating >= star - 0.5)
          return (
            <BsStarHalf key={star} size={size} className="text-amber-400" />
          );
        return <BsStar key={star} size={size} className="text-gray-300" />;
      })}
    </span>
  );
}
