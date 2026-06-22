const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json() as Promise<unknown>;
};
