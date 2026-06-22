import { useState } from "react";
import { BsSendFill } from "react-icons/bs";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="section bg-gray-900">
      <div className="section-wrap">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-abigeta text-3xl md:text-4xl text-white leading-tight mb-2">
              Get Exclusive Offers
            </h2>
            <p className="font-inter text-gray-400 text-sm md:text-base max-w-md">
              Subscribe to our newsletter and be the first to know about new arrivals, flash sales, and skincare tips.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto">
            {submitted ? (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-inter text-sm px-6 py-4 rounded-2xl">
                <BsSendFill size={16} />
                You're subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 min-w-[280px] bg-white/10 border border-white/20 text-white placeholder-gray-500 font-inter text-sm px-4 py-3 rounded-xl outline-none focus:border-pink-400 transition-colors"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  <BsSendFill size={14} />
                  Subscribe
                </button>
              </form>
            )}
            <p className="font-inter text-gray-600 text-xs mt-2 text-center sm:text-left">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
