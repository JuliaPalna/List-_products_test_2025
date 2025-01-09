import { usePages } from "@/context/PagesProvider";
import { useEffect } from "react";
import { VALUE_FILTER_ENUM } from "./enum";
import { filterLikeProduct } from "@/scripts/utils";
import { IFilter, TypeEventRadio } from "./interface";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { TypeProduct } from "@/pages";

export const useFilter = (): IFilter => {
  const history = useSelector((state: IRootState) => state.productsList);

  const { setSearchParam, search } = usePages();

  const handleSearchProduct = (event: TypeEventRadio) => {
    const { value } = event.target;
    setSearchParam("searchProduct", value);
  };

  const serchProduct: string =
    new URLSearchParams(search).get("searchProduct") || "";

  const filteredProducts: TypeProduct[] =
    serchProduct === VALUE_FILTER_ENUM.one
      ? history
      : filterLikeProduct(history);

  useEffect(() => {
    setSearchParam("searchProduct", VALUE_FILTER_ENUM.one);
  }, []);

  return {
    serchProduct,
    filteredProducts,
    handleSearchProduct,
  };
};
