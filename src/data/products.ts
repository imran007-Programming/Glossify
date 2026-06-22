import type { Product } from "../types";

// Moisturizers
import neutrogena   from "../assets/products/moisturizers/neautrigine.jpg";
import cerave       from "../assets/products/moisturizers/cerave_-_moisturising_cream_for_normal_to_dry_skin_-_453g.jpg";
import cosrxSnail   from "../assets/products/moisturizers/Cosrx-Advanced-Snail-92-All-In-One-Cream.jpg";

// Facewash
import laRoche      from "../assets/products/Fashwashes/3337875545822.jpg";
import cosrxLowPh   from "../assets/products/Fashwashes/Low-Ph-Good-Morning-Gel-Cleanser-7423-1.jpg";
import innisfreeRice from "../assets/products/Fashwashes/Innisfree-Bija-trouble-facial-foam.jpg";

// Toners
import pyunkang     from "../assets/products/toners/images.jpg";
import thayers      from "../assets/products/toners/images (1).jpg";
import somebymi     from "../assets/products/toners/Some-By-Mi-AHA-BHA-PHA-30-Days-Miracle-Toner-150ml.png";

// Serums
import klairsVitC   from "../assets/products/serums/10. Vitamin C Brightening Serum — Klairs.jpg";
import cosrxMucin   from "../assets/products/serums/Snail Mucin Power Essence — COSRX.jpg";
import ordinary     from "../assets/products/serums/The-Ordinary-Niacinamide-10-Zinc-1-30ml-1-600x720.jpg";

// Sunscreens
import etudeSPF     from "../assets/products/sunscreen/Skin-Aqua-Tone-Up-UV-Essence-SPF50-PA-80g-Lavender.png";
import bioreSPF     from "../assets/products/sunscreen/uv_aqua.jpg";
import innisfreeSPF from "../assets/products/sunscreen/isnfree.webp";

// Hair Care
import moroccanoil  from "../assets/products/haircares/ANGEL FOODCAKE.webp";
import schwarzkopf  from "../assets/products/haircares/Keratin Repair Hair Mask — Schwarzkopf.avif";
import kundal       from "../assets/products/haircares/Bond Repair Leave-In Serum — Kundal.webp";

// Eye Care
import sulwhasoo    from "../assets/products/eyecare/512ZRTzYzXL._AC_UF894,1000_QL80_.jpg";
import roc          from "../assets/products/eyecare/product_1746615397_8260.jpg";
import tonymoly     from "../assets/products/eyecare/images.jpg";

// Lip Care
import laneigeLip   from "../assets/products/lipcare/1763053127163.webp";
import burtsBees    from "../assets/products/lipcare/images.jpg";
import dior         from "../assets/products/lipcare/images (1).jpg";

// Makeup
import laneigeCushion from "../assets/products/makeup/HQ__Neo_Cushion_neo_cushion_the_glow_product_artwork_Help_02_8700x8700_1017_copy_d3040d6d-8bcb-4943-8c15-e59133d4b923.webp";
import maybelline   from "../assets/products/makeup/images.jpg";
import etudePowder  from "../assets/products/makeup/etude-house-cloud-filter-cushion-spf42-pa23-beige-15gm_56.webp";

// Makeup Remover
import dhc          from "../assets/products/makeup_remover/DHC_Deep_Cleansing_Oil_210ml-Non_Brand-dd69a-467116.png";
import garnier      from "../assets/products/makeup_remover/Garnier_Skin_Active_Micellar_Cleansing_W-Garnier-03f19-429431.png";
import heimish      from "../assets/products/makeup_remover/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJtZWRpY2luZVwvNTdcLzU3NDMxLUhlaW1pc2gtQWxsLUNsZWFuLUJhbG0tMTIwbWwtMWludS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjox.jpg";

// Baby Care
import aveeno       from "../assets/products/baby_cares/images.jpg";
import johnsons     from "../assets/products/baby_cares/images (1).jpg";
import mustela      from "../assets/products/baby_cares/image_114d82bf-261f-4142-aa58-f41e5bd81365.webp";

// Discounts
import cosrxKit     from "../assets/products/discount/images (2).jpg";
import innisfreeSet from "../assets/products/discount/images.jpg";
import lanigeBundle from "../assets/products/discount/Product_01_3096d805-aba7-4708-a0b9-5443b01bb1bf.webp";

export const products: Product[] = [
  // Moisturizers
  { id: 1,  name: "Hydra Boost Gel Cream",        brand: "Neutrogena",    category: "Moisturizers",   subcategory: "Gel Cream",   price: 850,  originalPrice: 1100, image: neutrogena,     rating: 4.5, reviews: 312, badge: "Best Seller", description: "Lightweight gel cream for 24hr hydration.",              benefits: ["Oil-free", "Non-comedogenic", "Hyaluronic acid"],            inStock: true, isSpecialOffer: true },
  { id: 2,  name: "Ceramide Barrier Moisturizer", brand: "CeraVe",        category: "Moisturizers",   subcategory: "Lotion",      price: 720,  originalPrice: null, image: cerave,         rating: 4.7, reviews: 198, badge: null,          description: "Restores and strengthens the skin barrier.",             benefits: ["3 Essential ceramides", "Fragrance-free", "MVE technology"],  inStock: true, isSpecialOffer: false },
  { id: 3,  name: "Snail 92 All In One Cream",    brand: "COSRX",         category: "Moisturizers",   subcategory: "Cream",       price: 680,  originalPrice: 850,  image: cosrxSnail,     rating: 4.6, reviews: 445, badge: "Sale",        description: "92% snail secretion filtrate for healing.",              benefits: ["Snail mucin", "Soothing", "Lightweight"],                    inStock: true, isSpecialOffer: true },

  // Facewash
  { id: 4,  name: "Gentle Foaming Cleanser",      brand: "La Roche-Posay",category: "Facewash",       subcategory: "Foam",        price: 520,  originalPrice: null, image: laRoche,        rating: 4.4, reviews: 267, badge: "New",         description: "Soap-free cleanser for sensitive skin.",                 benefits: ["Soap-free", "pH balanced", "Niacinamide"],                   inStock: true, isSpecialOffer: false },
  { id: 5,  name: "Low pH Good Morning Cleanser", brand: "COSRX",         category: "Facewash",       subcategory: "Gel",         price: 480,  originalPrice: 600,  image: cosrxLowPh,     rating: 4.8, reviews: 631, badge: "Best Seller", description: "Gentle pH 5.0 cleanser for all skin types.",             benefits: ["pH 5.0", "Tea tree oil", "Betaine salicylate"],              inStock: true, isSpecialOffer: true },
  { id: 6,  name: "Rice Brightening Foam",        brand: "Innisfree",     category: "Facewash",       subcategory: "Foam",        price: 395,  originalPrice: null, image: innisfreeRice,  rating: 4.3, reviews: 189, badge: null,          description: "Rice extracts for brighter, clearer skin.",              benefits: ["Rice water", "Brightening", "Gentle foam"],                  inStock: true, isSpecialOffer: false },

  // Toner
  { id: 7,  name: "Essence Toner",                brand: "Pyunkang Yul",  category: "Toner",          subcategory: "Essence",     price: 650,  originalPrice: null, image: pyunkang,       rating: 4.6, reviews: 224, badge: "Hot",         description: "96% astragalus extract for deep hydration.",             benefits: ["Astragalus root", "Minimal ingredients", "Deep moisture"],   inStock: true, isSpecialOffer: false },
  { id: 8,  name: "Witch Hazel Balancing Toner",  brand: "Thayers",       category: "Toner",          subcategory: "Toner",       price: 590,  originalPrice: 720,  image: thayers,        rating: 4.5, reviews: 310, badge: "Sale",        description: "Alcohol-free witch hazel toner.",                        benefits: ["Witch hazel", "Aloe vera", "Alcohol-free"],                  inStock: true, isSpecialOffer: true },
  { id: 9,  name: "AHA/BHA Clarifying Toner",     brand: "Some By Mi",    category: "Toner",          subcategory: "Exfoliating", price: 720,  originalPrice: null, image: somebymi,       rating: 4.7, reviews: 158, badge: null,          description: "30-day miracle toner for clear skin.",                   benefits: ["AHA + BHA", "Tea tree", "Reduces acne"],                    inStock: true, isSpecialOffer: false },

  // Serum
  { id: 10, name: "Vitamin C Brightening Serum",  brand: "Klairs",        category: "Serum",          subcategory: "Vitamin C",   price: 980,  originalPrice: 1200, image: klairsVitC,     rating: 4.7, reviews: 412, badge: "Best Seller", description: "Stable vitamin C for a luminous complexion.",            benefits: ["5% Vitamin C", "Reduces dark spots", "Antioxidant"],         inStock: true, isSpecialOffer: true },
  { id: 11, name: "Snail Mucin Power Essence",     brand: "COSRX",         category: "Serum",          subcategory: "Essence",     price: 850,  originalPrice: null, image: cosrxMucin,     rating: 4.8, reviews: 567, badge: "Hot",         description: "96.3% snail secretion filtrate essence.",                benefits: ["Snail mucin", "Hydrating", "Repairing"],                     inStock: true, isSpecialOffer: false },
  { id: 12, name: "Niacinamide 10% + Zinc 1%",    brand: "The Ordinary",  category: "Serum",          subcategory: "Niacinamide", price: 420,  originalPrice: null, image: ordinary,       rating: 4.6, reviews: 893, badge: null,          description: "High-strength niacinamide for pores.",                   benefits: ["Pore minimizing", "Oil control", "Brightening"],             inStock: true, isSpecialOffer: false },

  // Sunscreens
  { id: 13, name: "Tone Up UV Essence SPF 50+",   brand: "Etude House",   category: "Sunscreens",     subcategory: "Essence",     price: 750,  originalPrice: null, image: etudeSPF,       rating: 4.5, reviews: 341, badge: "New",         description: "SPF 50+ with tone-up effect.",                           benefits: ["SPF 50+ PA++++", "Tone up", "Lightweight"],                  inStock: true, isSpecialOffer: false },
  { id: 14, name: "Invisible Sunscreen SPF 50",   brand: "Biore",         category: "Sunscreens",     subcategory: "Lotion",      price: 620,  originalPrice: 780,  image: bioreSPF,       rating: 4.4, reviews: 278, badge: "Sale",        description: "Ultra-light Japanese sunscreen.",                        benefits: ["SPF 50+ PA++++", "No white cast", "Water resistant"],        inStock: true, isSpecialOffer: false },
  { id: 15, name: "Airy Fit Sunscreen SPF 50+",   brand: "Innisfree",     category: "Sunscreens",     subcategory: "Cream",       price: 690,  originalPrice: null, image: innisfreeSPF,   rating: 4.6, reviews: 189, badge: null,          description: "Jeju green tea infused daily sunscreen.",                benefits: ["SPF 50+ PA++++", "Green tea", "Breathable"],                 inStock: true, isSpecialOffer: false },

  // Hair Care
  { id: 16, name: "Argan Oil Nourishing Shampoo", brand: "Moroccanoil",   category: "Hair Care",      subcategory: "Shampoo",     price: 1100, originalPrice: 1400, image: moroccanoil,    rating: 4.7, reviews: 215, badge: "Best Seller", description: "Sulfate-free shampoo with argan oil.",                   benefits: ["Sulfate-free", "Argan oil", "Color-safe"],                   inStock: true, isSpecialOffer: true },
  { id: 17, name: "Keratin Repair Hair Mask",      brand: "Schwarzkopf",   category: "Hair Care",      subcategory: "Mask",        price: 890,  originalPrice: null, image: schwarzkopf,    rating: 4.5, reviews: 167, badge: null,          description: "Intensive repair treatment for damaged hair.",           benefits: ["Keratin protein", "Deep repair", "Frizz control"],           inStock: true, isSpecialOffer: false },
  { id: 18, name: "Bond Repair Leave-In Serum",   brand: "Kundal",        category: "Hair Care",      subcategory: "Serum",       price: 760,  originalPrice: 950,  image: kundal,         rating: 4.6, reviews: 302, badge: "Sale",        description: "Leave-in treatment that repairs hair bonds.",            benefits: ["Bond repair", "Heat protection", "Softening"],               inStock: true, isSpecialOffer: false },

  // Eye Care
  { id: 19, name: "Gold Peptide Eye Cream",        brand: "Sulwhasoo",     category: "Eye Care",       subcategory: "Cream",       price: 1250, originalPrice: 1500, image: sulwhasoo,      rating: 4.8, reviews: 134, badge: "Hot",         description: "Gold-infused peptide cream for fine lines.",             benefits: ["24K gold", "Peptide complex", "Anti-aging"],                 inStock: true, isSpecialOffer: true },
  { id: 20, name: "Retinol Eye Serum",             brand: "RoC",           category: "Eye Care",       subcategory: "Serum",       price: 980,  originalPrice: null, image: roc,            rating: 4.5, reviews: 98,  badge: null,          description: "Clinical-strength retinol for eye area.",                benefits: ["Retinol", "Reduces wrinkles", "Brightening"],                inStock: true, isSpecialOffer: false },
  { id: 21, name: "Caffeine Eye Patches",          brand: "TONYMOLY",      category: "Eye Care",       subcategory: "Patches",     price: 450,  originalPrice: null, image: tonymoly,       rating: 4.3, reviews: 276, badge: "New",         description: "Caffeine hydrogel patches for puffy eyes.",              benefits: ["Caffeine", "De-puffing", "Hydrogel"],                        inStock: true, isSpecialOffer: false },

  // Lip Care
  { id: 22, name: "Honey Lip Sleeping Mask",       brand: "Laneige",       category: "Lip Care",       subcategory: "Mask",        price: 520,  originalPrice: 650,  image: laneigeLip,     rating: 4.9, reviews: 784, badge: "Best Seller", description: "Overnight honey lip mask for soft lips.",                benefits: ["Honey butter", "Overnight repair", "Vitamin C"],             inStock: true, isSpecialOffer: true },
  { id: 23, name: "Shea Butter Lip Balm SPF 15",  brand: "Burt's Bees",   category: "Lip Care",       subcategory: "Balm",        price: 280,  originalPrice: null, image: burtsBees,      rating: 4.6, reviews: 512, badge: null,          description: "Natural beeswax balm with SPF protection.",              benefits: ["Shea butter", "SPF 15", "Natural beeswax"],                  inStock: true, isSpecialOffer: false },
  { id: 24, name: "Tinted Lip Treatment Oil",      brand: "Dior",          category: "Lip Care",       subcategory: "Oil",         price: 1800, originalPrice: null, image: dior,           rating: 4.7, reviews: 223, badge: "Hot",         description: "Hydrating tinted oil for glossy lips.",                  benefits: ["Cherry oil", "Tinted glow", "Long lasting"],                 inStock: true, isSpecialOffer: false },

  // Makeup
  { id: 25, name: "Cushion Foundation SPF 50+",   brand: "Laneige",       category: "Makeup",         subcategory: "Foundation",  price: 1400, originalPrice: 1700, image: laneigeCushion, rating: 4.7, reviews: 389, badge: "Best Seller", description: "Buildable coverage cushion with SPF 50+.",               benefits: ["SPF 50+", "Buildable coverage", "Dewy finish"],               inStock: true, isSpecialOffer: true },
  { id: 26, name: "Fit Me Matte Foundation",       brand: "Maybelline",    category: "Makeup",         subcategory: "Foundation",  price: 680,  originalPrice: null, image: maybelline,     rating: 4.4, reviews: 467, badge: null,          description: "24-hour matte foundation for oily skin.",                benefits: ["24hr wear", "Matte finish", "Oil control"],                  inStock: true, isSpecialOffer: false },
  { id: 27, name: "Cloud Blur Setting Powder",     brand: "Etude House",   category: "Makeup",         subcategory: "Powder",      price: 750,  originalPrice: 900,  image: etudePowder,    rating: 4.5, reviews: 201, badge: "New",         description: "Micro-fine powder for flawless finish.",                 benefits: ["Blur effect", "Long lasting", "Lightweight"],                inStock: true, isSpecialOffer: false },

  // Makeup Remover
  { id: 28, name: "Cleansing Oil Waterproof",      brand: "DHC",           category: "Makeup Remover", subcategory: "Oil",         price: 720,  originalPrice: null, image: dhc,            rating: 4.7, reviews: 356, badge: "Best Seller", description: "Deep-cleansing olive oil removes all makeup.",           benefits: ["Olive oil", "Removes waterproof", "Gentle"],                 inStock: true, isSpecialOffer: false },
  { id: 29, name: "Micellar Cleansing Water",      brand: "Garnier",       category: "Makeup Remover", subcategory: "Water",       price: 380,  originalPrice: 480,  image: garnier,        rating: 4.5, reviews: 642, badge: "Sale",        description: "No-rinse micellar water for all skin types.",            benefits: ["No-rinse", "Micelles technology", "Gentle"],                 inStock: true, isSpecialOffer: true },
  { id: 30, name: "Cleansing Balm Rose Extract",  brand: "Heimish",       category: "Makeup Remover", subcategory: "Balm",        price: 560,  originalPrice: null, image: heimish,        rating: 4.6, reviews: 291, badge: null,          description: "Melt-away balm that dissolves makeup.",                  benefits: ["Rose extract", "Melt texture", "Pore cleansing"],            inStock: true, isSpecialOffer: false },

  // Baby Care
  { id: 31, name: "Gentle Baby Lotion",            brand: "Aveeno",        category: "Baby Care",      subcategory: "Lotion",      price: 480,  originalPrice: null, image: aveeno,         rating: 4.8, reviews: 523, badge: "Best Seller", description: "Daily lotion with oat extract for baby skin.",           benefits: ["Oat extract", "24hr moisture", "Dermatologist tested"],      inStock: true, isSpecialOffer: false },
  { id: 32, name: "Baby Shampoo & Wash 2-in-1",   brand: "Johnson's",     category: "Baby Care",      subcategory: "Shampoo",     price: 320,  originalPrice: 400,  image: johnsons,       rating: 4.7, reviews: 712, badge: "Sale",        description: "Tear-free gentle cleanser for babies.",                  benefits: ["Tear-free", "Hypoallergenic", "Paraben-free"],               inStock: true, isSpecialOffer: false },
  { id: 33, name: "Baby Diaper Rash Cream",        brand: "Mustela",       category: "Baby Care",      subcategory: "Cream",       price: 650,  originalPrice: null, image: mustela,        rating: 4.6, reviews: 187, badge: "New",         description: "Soothes and protects diaper area.",                      benefits: ["Zinc oxide", "Avocado perseose", "Fast acting"],             inStock: true, isSpecialOffer: false },

  // Discounts
  { id: 34, name: "Skincare Starter Kit",          brand: "COSRX",         category: "Discounts",      subcategory: "Kit",         price: 1200, originalPrice: 2200, image: cosrxKit,       rating: 4.8, reviews: 198, badge: "Sale",        description: "Complete beginner skincare routine set.",                benefits: ["5 full-size products", "Beginner friendly", "Value pack"],   inStock: true, isSpecialOffer: true },
  { id: 35, name: "Korean Beauty Essentials Set",  brand: "Innisfree",     category: "Discounts",      subcategory: "Set",         price: 1500, originalPrice: 2800, image: innisfreeSet,   rating: 4.7, reviews: 143, badge: "Hot",         description: "Best-selling K-beauty must-haves bundle.",               benefits: ["6 products", "Fan favorites", "Travel sizes"],               inStock: true, isSpecialOffer: true },
  { id: 36, name: "Hydration Bundle Pack",         brand: "Laneige",       category: "Discounts",      subcategory: "Bundle",      price: 1800, originalPrice: 3200, image: lanigeBundle,   rating: 4.9, reviews: 89,  badge: "Sale",        description: "Ultimate hydration routine in one box.",                 benefits: ["4 products", "24hr hydration", "Bestsellers"],               inStock: true, isSpecialOffer: true },
];
