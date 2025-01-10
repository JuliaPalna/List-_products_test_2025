import { isHTMLButtonElement } from "@/scripts/utils";
import { likeProduct, removeProduct } from "@/store/productsListReducer/clices";
import { TypeApiDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { BaseSyntheticEvent } from "react";

export const useProductListView = () => {
  const dispatch = useDispatch<TypeApiDispatch>();

  const handelOnClick = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const buttonCard: HTMLElement | null = event.target.closest("button");
    const productCardId: number = +event.currentTarget.id;

    const isButton = isHTMLButtonElement(buttonCard);

    if (isButton) {
      event.stopPropagation();

      if (buttonCard.id === "buttonLike") {
        dispatch(likeProduct(productCardId));
      }

      if (buttonCard.id === "buttonDelete") {
        dispatch(removeProduct(productCardId));
      }

      return;
    }
  };
  return { handelOnClick };
};
