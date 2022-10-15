export const LOADINGSTATE='LOADINGSTATE';
export const ERRORSTATE='ERRORSTATE';
export const SETCART='SETCART';


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
