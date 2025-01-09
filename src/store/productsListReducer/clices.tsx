import { TypeProduct } from "@/pages";
import { putLikeCard, removeElementFromArray } from "@/scripts/utils";
import { createSlice, Reducer } from "@reduxjs/toolkit";

const productsListSlice = createSlice({
  name: "productsList",
  initialState: [] as TypeProduct[],
  reducers: {
    addProduct: (
      state: TypeProduct[],
      action: {
        payload: TypeProduct | TypeProduct[];
        type: string;
      }
    ): TypeProduct[] => {
      if (Array.isArray(action.payload)) {
        action.payload.forEach((item: TypeProduct) => state.push(item));
        return state;
      } else if (action.payload === undefined) {
        return state;
      } else {
        return (state = [...state, action.payload]);
      }
    },

    removeProduct: (
      state: TypeProduct[],
      action: {
        payload: number;
        type: string;
      }
    ): TypeProduct[] | never[] => {
      return (state = removeElementFromArray(state, action.payload));
    },

    likeProduct: (
      state: TypeProduct[],
      action: {
        payload: number;
        type: string;
      }
    ): TypeProduct[] => {
      return (state = putLikeCard(state, action.payload));
    },
  },
});

export const { addProduct, removeProduct, likeProduct } =
  productsListSlice.actions;

export const productsListReducer: Reducer<never[] | TypeProduct[]> =
  productsListSlice.reducer;
