import { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { products } from "../../data/products";
import { categoriesData } from "../../data/Categories";
import ProductCard from "../product/ProductCard";

const allTab = "All";
const tabs = [allTab, ...categoriesData.map((c) => c.name)];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(allTab);
  // filter top ratings products
  const topRatedProducts = products.filter((p) => p.rating >= 4.5);

  const filtered =
    activeTab === allTab
      ? topRatedProducts
      : topRatedProducts.filter((p) => p.category === activeTab);

  return (
    <section className="section">
      <div className="section-wrap">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <IoBagHandleOutline size={28} className="text-pink-500" />
            <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight">
              Featured Products
            </h2>
          </div>
          {/* <a
            href="/shop"
            className="hidden sm:block font-inter text-sm font-medium text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            View all
          </a> */}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium font-inter border transition-all ${
                activeTab === tab
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
