import { TypeProduct } from "@/pages/ProductPage";

export const removeElementFromArray = (
  array: TypeProduct[],
  id: number
): TypeProduct[] => {
  return array.filter((product: TypeProduct) => product.id !== id);
};
