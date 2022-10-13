import { ERRORSTATE, LOADINGSTATE, SUCCESSSTATE } from "./action"

const initState={
    loading:false,
    error:false,
    cart:[]
}
function reducer(state=initState,{type,payload}){
    switch(type){
        case LOADINGSTATE:{
            return {...state.loading=false}
        }
        case ERRORSTATE:{
            return {...state.error=false}
        }
        case SUCCESSSTATE:{
            return {...state.cart=payload}//doubt
        }
        default:{
            return state;
        }
    }
}
export default reducer