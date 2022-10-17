import {  ERRORSTATE, LOADINGSTATE, SETCART, TOGGLEVIEW,SETCARTBYREDUCER,EMPTYCART,REMOVECART  } from "./action"

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
                cart:[...state.cart,payload],
            }
        }
    
        case EMPTYCART:{
            return {
                loading:false,
                error:false,
                cart:[]
            }
        }
        case SETCARTBYREDUCER:{
            // console.log('setcart called', [...state.cart, ...payload])
            return {
                loading:false,
                error:false,
                cart:[...state.cart,...payload]
            }
        }
        case TOGGLEVIEW:{
            // console.log('view Changed')
            return{...state, mobileView: payload}
        }
        case REMOVECART:{
            let updated = state.cart.filter(el => (
                el.id !== payload
            ))
            return{
                loading:true,
                error:false,
                cart: updated
            }
        }
        
        default:{
            return state;
        }
    }
}
export default reducer