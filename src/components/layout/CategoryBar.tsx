import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { categoriesData } from "../../data/Categories";

export default function CategoryBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="section-wrap flex items-center gap-2 py-2">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm"
        >
          <BsChevronLeft size={12} />
        </button>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoriesData.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name}`}
              className="flex-shrink-0 flex items-center gap-2 pl-1 pr-3.5 py-1 rounded-full border border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50 transition-all text-sm text-gray-700 font-medium whitespace-nowrap"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-7 h-7 rounded-full object-cover bg-gray-100"
              />
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all shadow-sm"
        >
          <BsChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
