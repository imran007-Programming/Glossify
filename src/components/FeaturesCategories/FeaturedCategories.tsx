import { motion } from "framer-motion";
import { BsGrid } from "react-icons/bs";
import { categoriesData } from "../../data/Categories";
import { Link } from "react-router-dom";

const featuredImages = categoriesData.filter((cat) => cat.featuredImage);

export default function FeaturedCategories() {
  return (
    <section className="section">
      <div className="section-wrap">
        {/* title */}
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-center gap-3">
            <BsGrid size={28} className="text-pink-500" />
            <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight">
              Features Categories
            </h2>
          </div>
          {/* <a
            href="/shop"
            className="font-inter text-sm font-medium text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors hidden sm:block"
          >
            View all
          </a> */}
        </div>

        {/* category card*/}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {featuredImages.map((cat, i) => (
            <Link key={cat.id} to={`/category/${cat.name}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.45,
                  ease: "easeOut" as const,
                }}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                {/* Image */}
                <div
                  className="w-full aspect-[3/4] rounded-2xl overflow-hidden"
                  style={{ backgroundColor: cat.bg }}
                >
                  <img
                    src={cat.featuredImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Label */}
                <span className="font-inter text-sm font-semibold text-gray-800 text-center">
                  {cat.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
