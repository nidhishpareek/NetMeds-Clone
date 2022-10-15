import {  ERRORSTATE, LOADINGSTATE, SETCART, TOGGLEVIEW } from "./action"

const initState={
    loading:false, 
    error:false,
    cart:[],
    mobileView:false,
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
        case TOGGLEVIEW:{
            console.log('view altered')
            return{...state, mobileView: payload}
        }
        
        default:{
            return state;
        }
    }
}
export default reducer