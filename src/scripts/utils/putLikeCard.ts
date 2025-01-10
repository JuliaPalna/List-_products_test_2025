import { TypeProduct } from "@/pages/ProductPage";

export const putLikeCard = (
  array: TypeProduct[],
  id: number
): TypeProduct[] => {
  for (const product of array) {
    product.like = product.id === id ? !product.like : product.like;
  }
  return array;
};
