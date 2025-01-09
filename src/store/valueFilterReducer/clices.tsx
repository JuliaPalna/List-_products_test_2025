import { VALUE_FILTER_ENUM } from "@/scripts/hooks";
import { createSlice, Reducer } from "@reduxjs/toolkit";

const valueFilterSlice = createSlice({
  name: "valueFilter",
  initialState: VALUE_FILTER_ENUM.one,
  reducers: {
    togglevalueFilter: (
      state: VALUE_FILTER_ENUM,
      action: {
        payload: VALUE_FILTER_ENUM;
        type: string;
      }
    ): VALUE_FILTER_ENUM => {
      if (action.payload === VALUE_FILTER_ENUM.one) {
        return state
      } else {
        return state = VALUE_FILTER_ENUM.two;
      }
    },
  },
});

export const { togglevalueFilter } = valueFilterSlice.actions;

export const valueFilterReducer: Reducer<VALUE_FILTER_ENUM> =
  valueFilterSlice.reducer;
