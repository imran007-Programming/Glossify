import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenisStore } from "../../lib/lenis";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = lenisStore.get();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
