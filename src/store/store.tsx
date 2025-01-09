import { configureStore } from "@reduxjs/toolkit";
import { valueFilterReducer } from "./valueFilterReducer/clices";
import { productsListReducer } from "./productsListReducer/clices";

const store = configureStore({
  reducer: {
    valueFilter: valueFilterReducer,
    productsList: productsListReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
