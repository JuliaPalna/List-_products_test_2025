import { TypeProduct } from "@/pages/ProductPage";

export const filterLikeProduct = (array: TypeProduct[]): TypeProduct[] => {
  return array.filter((product: TypeProduct) => {
    return product.like && product.like === true;
  });
};
