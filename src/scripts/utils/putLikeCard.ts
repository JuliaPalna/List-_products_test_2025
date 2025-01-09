import { TypeProduct } from "@/pages/ProductPage";

export const putLikeCard = (
  array: TypeProduct[],
  id: number
): TypeProduct[] => {
  return array.map((product: TypeProduct) => {
    if (product.id === id) {
      product.like = !product.like;
    }

    return product;
  });
};
