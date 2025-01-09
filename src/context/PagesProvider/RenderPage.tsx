import { ReactNode } from "react";
import { usePages } from "./usePages";
import { FormPages, MainPage, ProductPage, ProductsPage } from "@/pages";

export const RenderPage = (): ReactNode => {
	const { name } = usePages();

	if (name === "/") {
		return <MainPage />;
	}

	if (name === "/products") {
		return <ProductsPage />;
	}

  if (name === "/form") {
		return <FormPages />;
	}

	const productId: string = name.replace("/products/", "");
	
	if(productId) {
		return <ProductPage id={+productId} />;
	}

	return null;
};
