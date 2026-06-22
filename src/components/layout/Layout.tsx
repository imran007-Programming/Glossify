import type { ReactNode } from "react";
import Navbar from "./Navbar";
import CategoryBar from "./CategoryBar";
import Footer from "./Footer";
import CartDrawer from "../cart/CartDrawer";
import { CartProvider } from "../../context/CartContext";
import { WishlistProvider } from "../../context/WishlistContext";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <WishlistProvider>
      <CartProvider>
        <Navbar />
        <CategoryBar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <Toaster position="top-center" richColors />
      </CartProvider>
    </WishlistProvider>
  );
}
