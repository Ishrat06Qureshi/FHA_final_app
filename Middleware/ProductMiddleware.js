 import LOADING  from "../Actions/LoadingAction"

 const productMiddleware = ( dispatch ) => {
  console.log("product Middle Ware")
   return (dispatch ) => {
     return ( dispatch( LOADING ( false )))
   }
}
export default  productMiddleware 