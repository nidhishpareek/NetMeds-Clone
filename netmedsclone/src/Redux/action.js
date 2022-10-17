export const LOADINGSTATE='LOADINGSTATE';
export const ERRORSTATE='ERRORSTATE';
export const SETCART='SETCART';
export const GETPRODUCT="GETPRODUCT"
export const FILTERPRODUCT="FILTERPRODUCT"
export const FILTERUNCHECKPRODUCT="FILTERUNCHECKPRODUCT"


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
