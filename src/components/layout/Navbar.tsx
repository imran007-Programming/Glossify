import { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsHandbag, BsMic } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = 1;
  const wishlistCount = 0;

  return (
    <nav className="w-full bg-white  border-b border-gray-100 shadow-sm">
      <div className="section-wrap h-[72px] flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 border-2 border-blue-400 rounded-full px-3 py-1.5">
            <div className="bg-orange-500 text-white rounded-full p-1.5 flex items-center justify-center">
              <BsHandbag size={16} />
            </div>
            <div className="leading-none">
              <div className="text-blue-500 font-bold text-[15px] tracking-tight">
                <span className="text-blue-600">Glossify</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-gray-500 text-[11px] font-medium">
                  skincare
                </span>
                <div className="flex gap-0.5">
                  <span className="w-2 h-2 bg-blue-500 rounded-sm inline-block"></span>
                  <span className="w-2 h-2 bg-blue-300 rounded-sm inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center w-full max-w-[560px] border border-gray-200 rounded-full bg-white overflow-hidden shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products"
              className="flex-1 px-5 py-2.5 text-sm text-gray-600 placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              className="p-2.5 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Voice search"
            >
              <BsMic size={18} />
            </button>
            <button
              className="m-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2.5 transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <FiSearch size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Cart */}
          <button
            className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Cart"
          >
            <BsHandbag size={24} strokeWidth={0.3} />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Wishlist */}
          <button
            className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Wishlist"
          >
            <AiOutlineHeart size={26} />
            {wishlistCount >= 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Account */}
          <button
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
            aria-label="Account"
          >
            <FiUser size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
