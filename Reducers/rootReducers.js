import { combineReducers } from "redux";
import GET_PRODUCTS from "../Reducers/GET_PRODUCTS";
import loadingReducer from "./LoadingReducer";
import UserDataReducer from "./userDataReducer";
import tokenReducer  from "./tokenReducer";
import orderReducer  from "./OrderReducer"

 const rootReducer = combineReducers ({
     loadingReducer,
     UserDataReducer,
     tokenReducer,
     orderReducer
})

export default rootReducer