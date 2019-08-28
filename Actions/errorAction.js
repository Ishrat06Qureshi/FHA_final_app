class ErrorAction {
  static Error = "Error"

  static ErrorAction = ( ErrorMessage ) => {
     return({
         type: this.Error,
         ErrorMessage
     })
  }
}
export default ErrorAction 