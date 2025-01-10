import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/productsListReducer/clices";
import { fetchApiData, REQUEST_STATE, TypeRequestState } from "@/api";
import { URL } from "@/constants";
import { TypeApiDispatch } from "@/store";

export const useFetchProductList = () => {
  const dispatch = useDispatch<TypeApiDispatch>();
  const [state, setState] = useState<TypeRequestState>({ status: REQUEST_STATE.idel });

  useEffect(() => {
    if (state.status === REQUEST_STATE.pending) {
      fetchApiData(URL)
        .then((data) => {
          setState({ status: REQUEST_STATE.success, data: data });
          dispatch(addProduct(data));
        })
        .catch((error) => {
          console.log(error)
          setState({ status: REQUEST_STATE.error, error });
        });
    }
  }, [state]);

  const refetch = () => {
    setState({ status: REQUEST_STATE.pending });
  };

  return {
    state,
    refetch,
  };
};
