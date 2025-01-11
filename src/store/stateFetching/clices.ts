import { REQUEST_STATE, TypeRequestState } from "@/api";
import { TypeProduct } from "@/pages";
import { createSlice, Reducer } from "@reduxjs/toolkit";

const stateFetchingSlice = createSlice({
  name: "stateFetching",
  initialState: {
    status: REQUEST_STATE.idel,
  } as TypeRequestState,
  reducers: {
    toggleStateFetching: (
      state: TypeRequestState,
      action: {
        payload: TypeRequestState;
        type: string;
        data?: TypeProduct[];
        error?: unknown;
      }
    ): TypeRequestState => {
      if (action.payload.status === REQUEST_STATE.error) {
        return (state = {
          status: REQUEST_STATE.error,
          error: action.payload.error,
        });
      } else if (action.payload.status === REQUEST_STATE.pending) {
        return (state = { status: REQUEST_STATE.pending });
      } else if (action.payload.status === REQUEST_STATE.success) {
        return (state = {
          status: REQUEST_STATE.success,
          data: action.payload.data,
        });
      } else if (action.payload.status === undefined) {
        return (state = { status: REQUEST_STATE.idel });
      }

      return state;
    },
  },
});

export const { toggleStateFetching } = stateFetchingSlice.actions;

export const stateFetchingReducer: Reducer<TypeRequestState> =
  stateFetchingSlice.reducer;
