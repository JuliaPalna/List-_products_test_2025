import { useContext } from "react";
import { IPageProvider } from "./interface";
import { PagesContext } from "./PageProvider";

export const usePages = (): IPageProvider => {
  const pages = useContext<IPageProvider | null>(PagesContext);

  if(!pages) {
    throw new Error("page not found");
  }

  return pages;
}
