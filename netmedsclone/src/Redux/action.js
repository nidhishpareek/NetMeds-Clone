export const LOADINGSTATE = "LOADINGSTATE";
export const ERRORSTATE = "ERRORSTATE";
export const SETCART = "SETCART";
export const TOGGLEVIEW = "TOGGLEVIEW";
export const SETCARTBYREDUCER = "SETCARTBYREDUCER";
export const EMPTYCART = "EMPTYCART";
export const REMOVECART = "REMOVECART"
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
export const EmptyCart = () => ({
  type: SETCARTBYREDUCER,
});
export const removeCartRedux = (data) => ({
  type: REMOVECART,
  payload: data
})
export const getAllProducts=(data)=>({
    type:GETPRODUCT,
    payload:data
})

export const filterProduct=(data)=>({
    type:FILTERPRODUCT,
    payload:data
})
export const filterUncheckProduct=(data)=>({
    type:FILTERUNCHECKPRODUCT,
    payload:data
})
