import * as actionType from "../Actions/actionTypes";

const GET_PRODUCTS = (state = {}, action) =>{
    switch(action.type){
        case actionType.GET_PRODUCTS:
            console.log("inside reducer")
        return({
            ...state 
        })
        default :
        return state
    }
 }

export  default GET_PRODUCTS