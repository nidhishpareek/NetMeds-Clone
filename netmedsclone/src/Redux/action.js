export const LOADINGSTATE='LOADINGSTATE';
export const ERRORSTATE='ERRORSTATE';
export const SUCCESSSTATE='SUCCESSSTATE';

export const loadingState=()=>({
    type:LOADINGSTATE
})
export const errorState=()=>({
    type:ERRORSTATE
})
export const succesState=(data)=>({
    type:SUCCESSSTATE,
    payload:data
})