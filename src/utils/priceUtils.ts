export function calcDiscount(price: number, originalPrice: number | null): number | null {
  if (!originalPrice) return null;
  return Math.round((1 - price / originalPrice) * 100);
}
