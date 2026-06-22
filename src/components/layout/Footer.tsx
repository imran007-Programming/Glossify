import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube, BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";

const quickLinks = ["Home", "Shop", "Best Sellers", "Special Offers", "About Us", "Contact"];
const categories = ["Moisturizers", "Facewash", "Toner", "Serum", "Sunscreens", "Hair Care", "Makeup", "Baby Care"];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 font-inter">
      {/* Main footer */}
      <div className="section-wrap py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="font-abigeta text-2xl text-white">Glossify</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Your trusted destination for authentic Korean and international skincare in Bangladesh. Glow with confidence.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[BsFacebook, BsInstagram, BsTwitterX, BsYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-pink-500 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Categories</h4>
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <BsGeoAlt size={15} className="mt-0.5 shrink-0 text-pink-400" />
                House 12, Road 4, Dhanmondi, Dhaka-1205, Bangladesh
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <BsTelephone size={14} className="shrink-0 text-pink-400" />
                +880 1700-000000
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <BsEnvelope size={14} className="shrink-0 text-pink-400" />
                hello@glossify.com.bd
              </li>
            </ul>

            <div className="mt-2">
              <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider">Business Hours</p>
              <p className="text-sm text-gray-500">Sat – Thu: 9AM – 9PM</p>
              <p className="text-sm text-gray-500">Friday: 2PM – 9PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="section-wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Glossify. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-600 hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-600 hover:text-pink-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
