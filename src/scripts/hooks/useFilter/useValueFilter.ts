import { IValueFilter } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { togglevalueFilter } from "@/store/valueFilterReducer";
import { VALUE_FILTER_ENUM } from "./enum";
import { IRootState } from "@/store";

export const useValueFilter = (): IValueFilter => {
  const valueFilter = useSelector((state: IRootState) => state.valueFilter);
  const dispatch = useDispatch();

  const handelValueFilter = (): void => {
    if (valueFilter === VALUE_FILTER_ENUM.one) {
      dispatch(togglevalueFilter(VALUE_FILTER_ENUM.two));
    } else {
      dispatch(togglevalueFilter(VALUE_FILTER_ENUM.one));
    }
  };

  return {
    valueFilter,
    handelValueFilter,
  };
};
