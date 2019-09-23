import { combineReducers } from "redux";

import loadingReducer from "./LoadingReducer";
import UserDataReducer from "./userDataReducer";
import tokenReducer  from "./tokenReducer";
import orderReducer  from "./OrderReducer"
import ErrorReducer from "./errorReducer"
 const rootReducer = combineReducers ({
     loadingReducer,
     UserDataReducer,
     tokenReducer,
     orderReducer,
     ErrorReducer
})

export default rootReducer