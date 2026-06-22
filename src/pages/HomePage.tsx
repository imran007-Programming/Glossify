import Hero from "../components/hero/Hero";
import FeaturedCategories from "../components/FeaturesCategories/FeaturedCategories";
import BestSellers from "../components/BestSellers/BestSellers";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import Newsletter from "../components/Newsletter/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <BestSellers />
      <SpecialOffers />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
    </main>
  );
}
