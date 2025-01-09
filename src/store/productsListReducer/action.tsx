export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const LIKE_PRODUCT = "LIKE_PRODUCT";

export const addProduct = (): {
  type: string;
} => ({
  type: ADD_PRODUCT,
});

export const removeProduct = (): {
  type: string;
} => ({
  type: REMOVE_PRODUCT,
});

export const likeProduct = (): {
  type: string;
} => ({
  type: LIKE_PRODUCT,
});
