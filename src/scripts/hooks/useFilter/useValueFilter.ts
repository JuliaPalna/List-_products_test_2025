import { IValueFilter } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { togglevalueFilter } from "@/store/valueFilterReducer";
import { TypeRootState } from "@/store";

export const useValueFilter = (): IValueFilter => {
  const valueFilter = useSelector((state: TypeRootState) => state.valueFilter);
  const dispatch = useDispatch();

  const handelValueFilter = (): void => {
    dispatch(togglevalueFilter(valueFilter));
  };

  return {
    valueFilter,
    handelValueFilter,
  };
};
