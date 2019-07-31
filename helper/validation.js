import * as EmailValidator from 'email-validator';

const validation = ( data ) => {
    console.log( "firstName" , data.firstName)
    console.log( "lastName" , data.lastName)
    console.log("phonr Number" , data.phoneNumber )
   let error = {}
   let msg = ""
 

 // email validity
   if (!data.email) {
    msg = "email is mandatory"
    error["email"] = msg

 }
  else if(!EmailValidator.validate(data.email)) {
    msg = "invalid email"
    error["email"] = msg
   
 }
if(!data.password ) {
  
   msg = "password is mandatory"
    error["password"] = msg

}


if(data.firstName) {
 
   if(!data.firstName.length || !data.firstName.isAlpha) {
     msg = "something is wrong with the first Name"
     error["firstName"] = msg
   }
}

if(data.lastName) {
  
   if(!data.lastName.length || !data.lastName.isAlpha) {
     msg = "something is wrong with the last Name"
     error["lastName"] = msg
   }
}
if( data.phoneNumber ) {
  if(!data.phoneNumber.length || !data.phoneNumber.isNum || data.phoneNumber.length >11) {
    msg = "check your phone number"
    error["phoneNumber"] = msg
  }
}
}