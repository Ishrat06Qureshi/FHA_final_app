import * as EmailValidator from 'email-validator';

const loginValidation = ( data ) => {
   console.log( data )

   let error = {}
   let msg = ""
 
 if(!data.firstName) {
     msg = "something is wrong with the first Name"
     error["firstName"] = msg
     return error
   }

   if(!data.lastName) {
     msg = "something is wrong with the last Name"
     error["lastName"] = msg
      return error 
   }
 // email validity
   if (!data.email) {
    msg = "email is mandatory"
    error["email"] = msg
     return error

 }
  else if(!EmailValidator.validate(data.email)) {
    msg = "invalid email"
    error["email"] = msg
    return error
    
 }
if(!data.password ) {
  
   msg = "password is mandatory"
    error["password"] = msg
     return error
}
  if(data.phoneNumber ){
    console.log("data phone")
    // if(!data.phoneNumber.length || !data.phoneNumber.isNum || data.phoneNumber.length >11) {
    //   msg = "check your phone number"
    //   error["phoneNumber"] = msg
    // }
  }
return error
  
}

export default loginValidation