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
    StepOpen:true,
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
      phoneNumber} = this.state
   
    axios.post("http://13.59.64.244:3000/api/register" , { email , customerNumber , password , companyName , officeAddress , contactPersonName , phoneNumber  })
    .then(( response ) =>  
    {
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
  
  handleNext = () => {
    this.setState(({ StepOpen:false})) 
  }
  
  render() {

    const {    email,
    customerNumber,
    password,
    companyName,
    officeAddress,
    contactPersonName,
    phoneNumber, StepOpen} = this.state
      console.log("information" , email, customerNumber,password,companyName,officeAddress,contactPersonName , phoneNumber )
    return(
      <View style ={{  flex:1}}>    
      <Address
      handleInputChange = {this.handleInputChange}
      handleNext = {this.handleNext}
      />
          {/* { StepOpen ? 
          <Customer
          handleInputChange = { this.handleInputChange}
          handleNext = { this.handleNext}
          />:  
          
          <Company
          handleInputChange = { this.handleInputChange}
          handleNext = { this.post}
          />
          
             } */}
      
        </View> 
    
    )
  }
}
