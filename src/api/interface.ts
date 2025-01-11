import { TypeProduct } from "@/pages";

export enum REQUEST_STATE {
  idel = "idle",
  pending = "pending",
  success = "success",
  error = "error",
}

interface IdleRequestState {
  status: REQUEST_STATE.idel;
}

interface LoadingRequestState {
  status: REQUEST_STATE.pending;
}

interface SuccessRequestState {
  status: REQUEST_STATE.success;
  data: TypeProduct[];
}

interface ErrorRequestState {
  status: REQUEST_STATE.error;
  error: unknown;
}

export type TypeRequestState =
  | IdleRequestState
  | LoadingRequestState
  | SuccessRequestState
  | ErrorRequestState;
