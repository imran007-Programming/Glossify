import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BsStarFill, BsChatQuote } from "react-icons/bs";
import { reviews } from "../../data/Reviews";

import "swiper/css";
import "swiper/css/pagination";

export default function CustomerReviews() {
  return (
    <section className="section bg-gray-50">
      <div className="section-wrap">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-abigeta text-3xl md:text-5xl text-gray-900 leading-tight mb-3">
            What Our Customers Say
          </h2>
          <p className="font-inter text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Thousands of happy customers trust Glossify for their skincare journey.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name}>
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100 hover:shadow-md transition-all h-full">
                {/* Quote icon */}
                <BsChatQuote size={22} className="text-pink-300" />

                {/* Review text */}
                <p className="font-inter text-gray-600 text-sm leading-relaxed flex-1">
                  "{r.review}"
                </p>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <BsStarFill
                      key={i}
                      size={12}
                      className={i < r.rating ? "text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>

                {/* Reviewer */}
                <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold font-inter shrink-0 ${r.color}`}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-gray-900 text-sm">{r.name}</p>
                    <p className="font-inter text-gray-400 text-[11px]">{r.location} · {r.product}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
