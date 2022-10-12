export const LOADINGSTATE='LOADINGSTATE';
export const ERRORSTATE='ERRORSTATE';
export const SETCART='SETCART';
export const ALLPRODUCT="ALLPRODUCT"


export const loadingState=()=>({
    type:LOADINGSTATE
})
export const errorState=()=>({
    type:ERRORSTATE
})
export const setCartProduct=(data)=>({
    type:SETCART,
    payload:data
})
export const allProduct=(data)=>({
    type:SETCART,
    payload:data
})