import { RiAwardFill } from "react-icons/ri";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

// filter best best seller products from Produts array
const bestSellersProducts = products.filter((p) => p.badge === "Best Seller");

export default function BestSellers() {
  return (
    <section className="section">
      <div className="section-wrap">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <RiAwardFill size={28} className="text-amber-400" />
            <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight">
              Best Sellers Products
            </h2>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {bestSellersProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
