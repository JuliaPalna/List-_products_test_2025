import { ChangeEvent, SetStateAction } from "react";
import { VALUE_FILTER_ENUM } from "./enum";
import { TypeProduct } from "@/pages/ProductPage";

export type TypeEventRadio = ChangeEvent<HTMLInputElement>;

export interface IValueFilter {
  valueFilter: VALUE_FILTER_ENUM;
  handelValueFilter: (event: {
    value: SetStateAction<VALUE_FILTER_ENUM>;
  }) => void;
}

export interface IFilter {
  serchProduct: string;
  filteredProducts: TypeProduct[];
  handleSearchProduct: (event: TypeEventRadio) => void;
}
