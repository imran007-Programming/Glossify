import banner1 from "../assets/Banner/Gemini_Generated_Image_6np37d6np37d6np3.png";
import banner2 from "../assets/Banner/Gemini_Generated_Image_pinmn2pinmn2pinm.png";
import banner3 from "../assets/Banner/Gemini_Generated_Image_xyi126xyi126xyi1.png";
import banner4 from "../assets/Banner/nirvana-hero-sliding-banner-1.webp";
import banner5 from "../assets/Banner/shop-by-concern-web-updated.webp";
import banner6 from "../assets/Banner/web.webp";

export interface HeroBannerItem {
  id: number;
  name: string;
  image: string;
  objectPosition?: string;
}

export const heroBanners: HeroBannerItem[] = [
  { id: 1, name: "Rose Glow Collection",  image: banner1, objectPosition: "center center" },
  { id: 2, name: "Bestseller Makeup",     image: banner2, objectPosition: "center center" },
  { id: 3, name: "Hair Care Essentials",  image: banner3, objectPosition: "center center" },
  { id: 4, name: "Nirvana Hero",          image: banner4, objectPosition: "center top" },
  { id: 5, name: "Shop By Concern",       image: banner5, objectPosition: "center center" },
  { id: 6, name: "New Arrivals",          image: banner6, objectPosition: "center center" },
];
