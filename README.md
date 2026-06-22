# Glossify — Skincare E-Commerce

A modern, fully responsive skincare e-commerce storefront built with React, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Forms | React Hook Form 7 |
| Animations | Framer Motion 12 |
| Smooth Scroll | Lenis 1 |
| Slider | Swiper 12 |
| Toasts | Sonner 2 |
| Icons | React Icons 5 |

---

## Features

- **Live Search** — debounced product search in the navbar with a results dropdown and loading indicator
- **Product Catalogue** — filterable by category, with animated card entrance effects
- **Product Details** — image gallery, star ratings, trust badges, add to cart / wishlist
- **Shopping Cart** — persistent via `localStorage`, quantity controls, free shipping progress bar, cart drawer
- **Wishlist** — persistent via `localStorage`, toggled from any product card (filled red heart = saved)
- **Checkout** — multi-section form (customer info, shipping address, payment), client-side validation, order success screen
- **Breadcrumb** — consistent page context on Category, Cart, Checkout, and Wishlist pages
- **Responsive Navbar** — separate Desktop (`md+`) and Mobile (`<md`) navbar components; desktop is sticky
- **Category Bar** — horizontally scrollable category chips, sticky under the navbar
- **Smooth Scroll** — Lenis-powered; every route change scrolls back to the top instantly

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── DesktopNavbar.tsx   # Sticky desktop navbar with live search
│   │   ├── MobileNavbar.tsx    # Mobile navbar with hamburger + search panel
│   │   ├── Navbar.tsx          # Composes Desktop + Mobile navbars
│   │   ├── CategoryBar.tsx     # Scrollable category chip bar
│   │   ├── Breadcrumb.tsx      # Page hero + breadcrumb trail
│   │   ├── ScrollToTop.tsx     # Resets scroll on route change
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── cart/
│   │   ├── CartDrawer.tsx
│   │   ├── CartItem.tsx
│   │   └── FreeShippingBar.tsx
│   ├── checkout/
│   │   ├── CustomerInfoSection.tsx
│   │   ├── ShippingAddressSection.tsx
│   │   ├── PaymentSection.tsx
│   │   ├── OrderSummary.tsx
│   │   ├── CheckoutSection.tsx
│   │   ├── CheckoutField.tsx
│   │   ├── PaymentOption.tsx
│   │   └── OrderSuccess.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── StarRating.tsx
│   │   ├── ProductImageGallery.tsx
│   │   ├── ProductTrustBadges.tsx
│   │   └── ProductNotFound.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── hero/Hero.tsx
│   ├── FeaturesCategories/FeaturedCategories.tsx
│   ├── FeaturedProducts/FeaturedProducts.tsx
│   ├── BestSellers/BestSellers.tsx
│   ├── SpecialOffers/SpecialOffers.tsx
│   ├── WhyChooseUs/WhyChooseUs.tsx
│   ├── CustomerReviews/CustomerReviews.tsx
│   └── Newsletter/Newsletter.tsx
├── context/
│   ├── CartContext.tsx          # Cart state + localStorage sync
│   └── WishlistContext.tsx     # Wishlist state + localStorage sync
├── data/
│   ├── products.ts             # Static product catalogue
│   ├── Categories.ts           # Category list with images
│   └── HeroBanner.ts           # Hero slider images
├── hooks/
│   ├── useCart.ts
│   └── useWishlist.ts
├── lib/
│   └── lenis.ts                # Lenis singleton (used by ScrollToTop)
├── pages/
│   ├── HomePage.tsx
│   ├── CategoryPage.tsx
│   ├── ProductDetailsPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── WishlistPage.tsx
│   └── NotFoundPage.tsx
├── types/
│   └── index.ts                # All shared interfaces and types
├── utils/
│   └── priceUtils.ts
└── App.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/category/:categoryName` | Category listing |
| `/product/:name` | Product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |
| `/wishlist` | Wishlist |
| `*` | 404 Not Found |

---

## State Management

Cart and wishlist state are managed via React Context and automatically synced to `localStorage` so they survive page refreshes.

| Context | Persisted | Key |
|---|---|---|
| `CartContext` | Yes | `"cart"` |
| `WishlistContext` | Yes | `"wishlist"` |

---

## Author

**Imran Hasan**
