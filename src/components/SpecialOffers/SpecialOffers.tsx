import { BsLightningChargeFill } from "react-icons/bs";
import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

// Filtered specials products from product array
const specialOffers = products.filter((p) => p.isSpecialOffer);

export default function SpecialOffers() {
  return (
    <section className="section">
      <div className="section-wrap">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BsLightningChargeFill size={26} className="text-rose-500" />
            <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight">
              Special Offers
            </h2>
          </div>
          <a
            href="/shop"
            className="hidden sm:block font-inter text-sm font-medium text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
          >
            View all
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {specialOffers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
