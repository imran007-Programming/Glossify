import { useState, useEffect, useRef } from "react";
import { FiSearch, FiUser, FiX, FiMenu } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { products } from "../../data/products";
import type { Product } from "../../types";

export default function MobileNavbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [searching, setSearching] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
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
      if (!searchRef.current?.contains(e.target as Node)) setShowDrop(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const clearSearch = () => { setQuery(""); setResults([]); setShowDrop(false); };

  const goToProduct = (product: Product) => {
    clearSearch();
    setSearchOpen(false);
    setMenuOpen(false);
    navigate(`/product/${product.name}`);
  };

  return (
    <nav className="md:hidden w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">

      {/* ── Top bar ── */}
      <div className="px-4 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => { setMenuOpen(false); setSearchOpen(false); }}>
          <div className="flex flex-col leading-none">
            <span className="font-abigeta text-[22px] tracking-tight bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Glossify
            </span>
            <span className="font-inter text-[8px] tracking-[0.2em] uppercase text-gray-400 mt-0.5">
              skincare
            </span>
          </div>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-0.5">
          {/* Search toggle */}
          <button
            onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Search"
          >
            {searchOpen ? <FiX size={21} /> : <FiSearch size={21} />}
          </button>

          {/* Cart */}
          <button onClick={openDrawer} className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors" aria-label="Cart">
            <BsHandbag size={22} strokeWidth={0.3} />
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>
        </div>
      </div>

      {/* ── Search panel ── */}
      {searchOpen && (
        <div className="border-t border-gray-100 px-4 py-3" ref={searchRef}>
          <div className="relative">
            <div className="flex items-center border border-gray-200 rounded-full bg-white overflow-hidden shadow-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands…"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className="flex-1 px-4 py-2.5 text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
                onFocus={() => results.length > 0 && setShowDrop(true)}
                onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              />
              {searching ? (
                <div className="p-2.5">
                  <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
                </div>
              ) : query ? (
                <button onClick={clearSearch} className="p-2.5 text-gray-400" aria-label="Clear">
                  <FiX size={15} />
                </button>
              ) : null}
              <div className="m-1.5 bg-blue-500 text-white rounded-full p-2 flex items-center justify-center">
                <FiSearch size={14} strokeWidth={2.5} />
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
                      <img src={p.image} alt={p.name} className="w-9 h-9 object-contain bg-gray-50 rounded-lg p-1 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-medium text-gray-800 line-clamp-1">{p.name}</p>
                        <p className="font-inter text-xs text-gray-400">{p.brand} · {p.category}</p>
                      </div>
                      <p className="font-inter text-sm font-semibold text-gray-900 shrink-0">৳{p.price}</p>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-5 text-center">
                    <p className="font-inter text-sm text-gray-400">No results for "{query}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Hamburger menu ── */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 font-inter text-sm font-medium text-gray-700 transition-colors">
              Home
            </Link>
            <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 font-inter text-sm font-medium text-gray-700 transition-colors">
              <AiOutlineHeart size={18} />
              Wishlist
              {wishlistItems.length > 0 && (
                <span className="ml-auto bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 font-inter text-sm font-medium text-gray-700 transition-colors">
              <BsHandbag size={18} />
              Cart
              {totalItems > 0 && (
                <span className="ml-auto bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 font-inter text-sm font-medium text-gray-700 transition-colors text-left">
              <FiUser size={18} strokeWidth={1.5} />
              Account
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}
