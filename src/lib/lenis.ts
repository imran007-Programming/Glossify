import Lenis from "lenis";

let instance: Lenis | null = null;

export const lenisStore = {
  set(l: Lenis) { instance = l; },
  clear()       { instance = null; },
  get()         { return instance; },
};
