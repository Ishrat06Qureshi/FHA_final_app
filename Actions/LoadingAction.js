import * as actionTypes from "./actionTypes";

const LOADING  = ( isLoading ) => {
    return ({
        type: actionTypes.LOADING,
        isLoading
    })
}
export default LOADING 