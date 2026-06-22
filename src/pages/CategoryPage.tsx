import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import BreadCrumb from "../components/Breadcrumb/Breadcrumb";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const filtered = products.filter((p) => p.category === categoryName);

  return (
    <div>
      <BreadCrumb
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Category", to: "/" },
          { label: categoryName ?? "" },
        ]}
        title={categoryName ?? ""}
        subtitle={`${filtered.length} products found`}
      />

      <section className="section">
        <div className="section-wrap">
          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-inter text-gray-400 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
