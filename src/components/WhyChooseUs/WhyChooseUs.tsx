import { BsShieldCheck, BsTruck, BsArrowCounterclockwise, BsLock } from "react-icons/bs";

const features = [
  {
    icon: <BsShieldCheck size={28} />,
    title: "100% Authentic",
    desc: "Every product is sourced directly from official brand distributors. No fakes, no compromises.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: <BsTruck size={28} />,
    title: "Fast Delivery",
    desc: "Same-day dispatch on orders placed before 2PM. Nationwide delivery within 48 hours.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <BsArrowCounterclockwise size={28} />,
    title: "Easy Returns",
    desc: "Not satisfied? Return within 7 days — no questions asked. Your trust means everything.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: <BsLock size={28} />,
    title: "Secure Payment",
    desc: "SSL-encrypted checkout with bKash, Nagad, card & COD. Your data stays private.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-gray-50">
      <div className="section-wrap">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight mb-3">
            Why Choose Us
          </h2>
          <p className="font-inter text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            We're committed to bringing you the best skincare experience — from browsing to your doorstep.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-inter font-bold text-gray-900 text-base mb-1">{f.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
