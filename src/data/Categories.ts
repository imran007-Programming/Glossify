import moisturizer    from "../assets/categorysvg/moisturizer.webp";
import facewash       from "../assets/categorysvg/facewash.webp";
import toner          from "../assets/categorysvg/tooner.webp";
import serum          from "../assets/categorysvg/serum.webp";
import sunscreen      from "../assets/categorysvg/sunscreen.webp";
import haircare       from "../assets/categorysvg/haircare.webp";
import eyecare        from "../assets/categorysvg/eyecare.webp";
import lipcare        from "../assets/categorysvg/lipcare.webp";
import makeup         from "../assets/categorysvg/makeup.svg";
import makeupRemover  from "../assets/categorysvg/Fascewash.webp";
import babycare       from "../assets/categorysvg/babycare.webp";
import discount       from "../assets/categorysvg/Discount.webp";

import skincareF   from "../assets/Features_category/authentic-skincare-shop-in-bangladesh.webp";
import makeupF     from "../assets/Features_category/makeup.webp";
import babycareF   from "../assets/Features_category/babycare.webp";
import bodycareF   from "../assets/Features_category/kundal-cool-clear-ice-boosting-body-wash-aqua-mist-500ml.jpg";
import haircareF   from "../assets/Features_category/haircare.jpg";
import discountF   from "../assets/Features_category/Discount.jpg";
import supplementF from "../assets/Features_category/supliment.webp";

import type { CategoryItem } from "../types";

export const categoriesData: CategoryItem[] = [
  { id: 1,  name: "Moisturizers",   image: moisturizer,   bg: "#fdf2f4", featuredImage: skincareF   },
  { id: 2,  name: "Facewash",       image: facewash,      bg: "#eff6ff", featuredImage: bodycareF   },
  { id: 3,  name: "Toner",          image: toner,         bg: "#f5f0ff"                              },
  { id: 4,  name: "Serum",          image: serum,         bg: "#fdf4ff"                              },
  { id: 5,  name: "Sunscreens",     image: sunscreen,     bg: "#fffbeb", featuredImage: supplementF  },
  { id: 6,  name: "Hair Care",      image: haircare,      bg: "#f0fdf4", featuredImage: haircareF    },
  { id: 7,  name: "Eye Care",       image: eyecare,       bg: "#f0f9ff"                              },
  { id: 8,  name: "Lip Care",       image: lipcare,       bg: "#fff0f3"                              },
  { id: 9,  name: "Makeup",         image: makeup,        bg: "#fdf2f8", featuredImage: makeupF      },
  { id: 10, name: "Makeup Remover", image: makeupRemover, bg: "#f0fdf4"                              },
  { id: 11, name: "Baby Care",      image: babycare,      bg: "#eff6ff", featuredImage: babycareF    },
  { id: 12, name: "Discounts",      image: discount,      bg: "#fefce8", featuredImage: discountF    },
];
