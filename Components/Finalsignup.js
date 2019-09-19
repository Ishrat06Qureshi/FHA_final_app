import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity  , KeyboardAvoidingView} from 'react-native';
import axios from "axios";
import { AntDesign , FontAwesome  , EvilIcons} from "@expo/vector-icons"
import { Spinner } from "native-base"
import validation_functions from "../utils/validation_functions";
import URL  from "../urls";
import  Input from "./Input";
import Button from "./Button";
import Company from "./Company";
import Customer from "./Customer";
import Address  from "./AddressComponent"

export default class Finalsignup extends React.Component {

  state = {
    StepOne:true,
    StepTwo:true,
    email:"",
    customerNumber:"",
    password:"",
    companyName:"",
    officeAddress:"",
    contactPersonName:"",
    phoneNumber:"",
    lineOne:"",
    lineTwo:"",
    city:"",
    province:"",
    postalCode:"",
    serverError:"",
    isLoading : false
  }

  

 

 handleInputChange = ( fieldName , value) => {
  this.setState(({ [fieldName] : value}))
  validation_functions.updateValidators( fieldName , value )

}

navigateToLogin = () => {
  console.log("navigation")
    this.props.navigation.navigate("Finalogin")
  }
  

  post = () => {
    const {    email,
      customerNumber,
      password,
      companyName,
      officeAddress,
      contactPersonName,
      phoneNumber , lineOne , lineTwo , city, province , postalCode } = this.state
   
    axios.post("http://13.59.64.244:3000/api/register" , 
    { email , customerNumber , password , companyName , officeAddress:`${lineOne} , ${city} , ${province} , ${postalCode}`  , 
    contactPersonName , phoneNumber  })
    .then(( response ) =>  
    {  console.log(response)
      if(response.data.message === "Done") {
        this.props.navigation.navigate("CodeVerify")
      }
    }
    )
     .catch ( err => this.setState(({ 
       serverError:err.response.data.message})))
    
  }


  handleSignup = () => {
    console.log( "press")
    this.post()
    
  }
  
  JumpStepTwo = () => {
    this.setState(({ StepOne:false})) 
  }

  JumpStepThree = () => {
    this.setState(({ StepTwo:false})) 
  }


  
  render() {

    const {  StepOne , StepTwo } = this.state
      console.log("StepOne" , StepOne)
      console.log("StepTwo" , StepTwo)
    return(
      <View style ={{  flex:1}}>   

      
      
          { StepOne ? 
          <Customer
          handleInputChange = { this.handleInputChange}
          handleNext = { this.JumpStepTwo}
          />:  StepTwo ? 
          
          <Company
          handleInputChange = { this.handleInputChange}
          handleNext = { this.JumpStepThree}
          /> : <Address
          handleInputChange = {this.handleInputChange}
          handleNext = {this.post}
          />
          
             }
             {/* <Customer
              handleInputChange = { this.handleInputChange}
              handleNext = { this.JumpStepTwo}
             /> */}
      
        </View> 
    
    )
  }
}
