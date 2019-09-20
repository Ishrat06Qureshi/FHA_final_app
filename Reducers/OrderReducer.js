import * as actionTypes from "../Actions/actionTypes";


const initialOrderState = {
    items:[]
}
const orderReducer = ( state = initialOrderState, action ) => {
 switch(action.type) {
     case actionTypes.SAVE_ITEMS : {
         return({
             ...state,
             items: [...state.items,action.item]
         })
     }
     case actionTypes.EMPTY_ITEMS : {
        return({
            ...state,
            items: []
        })
    }
     default:
         return state 
 }
}
export default orderReducer 