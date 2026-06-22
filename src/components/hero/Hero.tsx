import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { heroBanners } from "../../data/HeroBanner";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="py-2">
      <div className="section-wrap">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="hero-swiper"
          >
            {heroBanners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <img
                  src={banner.image}
                  alt={banner.name}
                  className="w-full h-[680px] object-fill"
                  style={{
                    objectPosition: banner.objectPosition ?? "center center",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: rgba(100, 100, 100, 0.55);
          backdrop-filter: blur(6px);
          border-radius: 999px;
          padding: 5px 10px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
          width: 22px;
          height: 7px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
