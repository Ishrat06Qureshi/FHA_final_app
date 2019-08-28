import UserDataAction from "../Actions/UserDataAction";

const UserDataReducer = ( state = {} , action ) => {
  switch(action.type) {
    case UserDataAction.SAVE_USER_DATA:{
        return({
            ...state,
            UserData:action.UserData
        })
    }

    default:
        return state 
  }
}

export default UserDataReducer