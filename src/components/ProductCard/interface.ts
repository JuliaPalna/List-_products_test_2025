import { TypeProduct } from "@/pages/ProductPage";
import { BaseSyntheticEvent } from "react";

export interface IProductCardProps {
  product: TypeProduct;
  onClick: (event: BaseSyntheticEvent) => void;
}
