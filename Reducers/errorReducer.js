import ErrorAction from "../Actions/errorAction";
const ErrorReducer = ( state = {} , action ) => {
 switch( action.type) {
     case ErrorAction.Error:{
             return({
                   ...state, 
                   ErrorMessage:action.ErrorMessage
             })
         }

     default:
         return state
 }
}

export default ErrorReducer