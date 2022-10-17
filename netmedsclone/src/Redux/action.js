export const LOADINGSTATE = "LOADINGSTATE";
export const ERRORSTATE = "ERRORSTATE";
export const SETCART = "SETCART";
export const TOGGLEVIEW = "TOGGLEVIEW";
export const SETCARTBYREDUCER = "SETCARTBYREDUCER";
export const loadingState = () => ({
  type: LOADINGSTATE,
});
export const errorState = () => ({
  type: ERRORSTATE,
});
export const setCartProduct = (data) => ({
  type: SETCART,
  payload: data,
});
export const toggleView = (data) => ({
  type: TOGGLEVIEW,
  payload: data,
});
export const setCartProductRReducer = (data) => ({
  type: SETCARTBYREDUCER,
  payload: data
});
