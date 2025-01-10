import { ReactNode } from "react";
import { usePages } from "./usePages";
import { FormPages, MainPage, ProductPage, ProductListPage } from "@/pages";

export const RenderPage = (): ReactNode => {
  const { name } = usePages();

  switch (name) {
    case "/":
      return <MainPage />;

    case "/products":
      return <ProductListPage />;

    case "/form":
      return <FormPages />;

    case `/products/${+name.replace("/products/", "")}`:
      return <ProductPage id={+name.replace("/products/", "")} />;

    default:
      return <MainPage />;
  }
};
