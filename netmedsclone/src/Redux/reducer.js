import {  ERRORSTATE, FILTERPRODUCT, FILTERUNCHECKPRODUCT, GETPRODUCT, LOADINGSTATE, SETCART } from "./action"

const initState={
    loading:false,
    error:false,
    allProduct:[],
    cart:[],
    filteredProduct:[]
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
        case GETPRODUCT:{
            return {
                ...state,allProduct:payload
            }
        }
        case SETCART:{
            return {
                loading:false,
                error:false,
                cart:[...state.cart,payload],
                allProduct:[...state.allProduct],
                filteredProduct:[...state.filteredProduct]
            }
        }
        case FILTERUNCHECKPRODUCT:{
            return {
                ...state,filteredProduct:payload
            }
        }
        case FILTERPRODUCT:{
            return{
                ...state,filteredProduct:[...state.filteredProduct,...payload]
            }
        }
        default:{
            return state;
        }
    }
}
export default reducer