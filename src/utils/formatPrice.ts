export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

export const calcDiscount = (original: number, current: number): number =>
  Math.round(((original - current) / original) * 100);
