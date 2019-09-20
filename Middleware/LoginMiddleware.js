import TokenAction from "../Actions/tokenAction";
import UserDataAction from "../Actions/UserDataAction";
import SaveError from "../Actions/ErrorAction";
import axios from "axios";




const LoginMiddleware = ( data ) => {
    console.log( data )
    const { email , password } = data
        return ( dispatch ) => {
                        return axios.post("http://13.59.64.244:3000/api/authenticate" , { email , password } ) 
                        .then(( response ) =>  
                        {   
                            dispatch( TokenAction.TOKEN_SAVE_ACTION(response.data.token))
                            dispatch( UserDataAction.SAVE_USER_DATA_ACTION( response.data))
                        }).catch ( err => {
                            console.log( err.response.data.message)
                            dispatch( SaveError( {message:err.response.data.message}))
                        })
                    } 
}

export default LoginMiddleware