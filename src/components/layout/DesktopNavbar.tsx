import { useState, useEffect, useRef } from "react";
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import { BsHandbag, BsMic } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { products } from "../../data/products";
import type { Product } from "../../types";

export default function DesktopNavbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [searching, setSearching] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { totalItems, openDrawer } = useCart();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();

  // Debounced live search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowDrop(false);
      setSearching(false);
      return;
    }
    setSearching(true);
    const t = setTimeout(() => {
      const q = query.toLowerCase();
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q),
        )
        .slice(0, 6);
      setResults(filtered);
      setSearching(false);
      setShowDrop(true);
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setShowDrop(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const clearSearch = () => { setQuery(""); setResults([]); setShowDrop(false); };

  const goToProduct = (product: Product) => {
    clearSearch();
    navigate(`/product/${product.name}`);
  };

  return (
    <nav className="hidden md:block w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="section-wrap h-[72px] flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="flex flex-col leading-none">
            <span className="font-abigeta text-[26px] tracking-tight bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Glossify
            </span>
            <span className="font-inter text-[9px] tracking-[0.2em] uppercase text-gray-400 mt-0.5">
              skincare
            </span>
          </div>
        </Link>

        {/* Search bar */}
        <div className="flex-1 flex justify-center" ref={containerRef}>
          <div className="relative w-full max-w-[560px]">
            <div className="flex items-center border border-gray-200 rounded-full bg-white overflow-hidden shadow-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories…"
                className="flex-1 px-5 py-2.5 text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
                onFocus={() => results.length > 0 && setShowDrop(true)}
                onKeyDown={(e) => e.key === "Escape" && clearSearch()}
              />
              {searching ? (
                <div className="p-2.5">
                  <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
                </div>
              ) : query ? (
                <button onClick={clearSearch} className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Clear">
                  <FiX size={16} />
                </button>
              ) : (
                <button className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Voice search">
                  <BsMic size={18} />
                </button>
              )}
              <div className="m-1.5 bg-blue-500 text-white rounded-full p-2.5 flex items-center justify-center">
                <FiSearch size={16} strokeWidth={2.5} />
              </div>
            </div>

            {/* Results dropdown */}
            {showDrop && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden z-50">
                {results.length > 0 ? (
                  results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => goToProduct(p)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-50 last:border-0"
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-contain bg-gray-50 rounded-lg p-1 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-medium text-gray-800 line-clamp-1">{p.name}</p>
                        <p className="font-inter text-xs text-gray-400">{p.brand} · {p.category}</p>
                      </div>
                      <p className="font-inter text-sm font-semibold text-gray-900 shrink-0">৳{p.price}</p>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center">
                    <p className="font-inter text-sm text-gray-400">No results for "{query}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={openDrawer} className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors" aria-label="Cart">
            <BsHandbag size={24} strokeWidth={0.3} />
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </button>

          <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors" aria-label="Wishlist">
            <AiOutlineHeart size={26} />
            {wishlistItems.length > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors" aria-label="Account">
            <FiUser size={24} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </nav>
  );
}
