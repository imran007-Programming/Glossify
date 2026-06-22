import { useMemo } from 'react';
import { products } from '../data/products';

export const useProducts = (category?: string, search?: string) => {
  return useMemo(() => {
    let list = products;
    if (category) list = list.filter((p) => p.category === category);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [category, search]);
};
