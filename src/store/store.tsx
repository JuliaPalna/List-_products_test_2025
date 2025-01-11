import { configureStore } from "@reduxjs/toolkit";
import { valueFilterReducer } from "./valueFilterReducer/clices";
import { productsListReducer } from "./productsListReducer/clices";
import { stateFetchingReducer } from "./stateFetching/clices";

const store = configureStore({
  reducer: {
    valueFilter: valueFilterReducer,
    productsList: productsListReducer,
    stateFetching: stateFetchingReducer
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeApiDispatch = typeof store.dispatch;

export default store;
