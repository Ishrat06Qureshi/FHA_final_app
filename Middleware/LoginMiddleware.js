import TokenAction from "../Actions/tokenAction";
import UserDataAction from "../Actions/UserDataAction";
import ErrorAction from "../Actions/errorAction";
import axios from "axios";
import URL from "../urls/urls"



const LoginMiddleware = ( data ) => {
    console.log( data )
    const { email , password } = data
        return ( dispatch ) => {
                        return axios.post(`${URL.Authenticate_URL}` , { email , password } ) 
                        .then(( response ) =>  
                        {   console.log(response )
                            dispatch( TokenAction.TOKEN_SAVE_ACTION(response.data.token))
                            dispatch( UserDataAction.SAVE_USER_DATA_ACTION( response.data.userID))
                        }).catch ( err => {
                            console.log( err)
                        })
                    } 
}

export default LoginMiddleware