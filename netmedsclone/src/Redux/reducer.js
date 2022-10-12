import { ALLPRODUCT, ERRORSTATE, LOADINGSTATE, SETCART } from "./action"

const initState={
    loading:false,
    error:false,
    cart:[],
    product:[]
}
function reducer(state=initState,{type,payload}){
    switch(type){
        case LOADINGSTATE:{
            return {
                loading:true,
                error:false,
                cart:[]
            }
        }
        case ERRORSTATE:{
            return {
                loading:false,
                error:true,
                cart:[]
            }
        }
        case SETCART:{
            return {
                loading:false,
                error:false,
                cart:[...state.cart,payload]
            }
        }
        case ALLPRODUCT:{
            return {
                loading:false,
                error:false,
                cart:[...state.cart],
                product:payload
            }
        }
        default:{
            return state;
        }
    }
}
export default reducer