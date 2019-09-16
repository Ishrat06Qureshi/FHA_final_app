import React , { Component } from "react";
import { View  , KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import  Input from "./Input";
import Button from "./Button"
import {White_Button , Red_Text} from "../Styles"
const Company = (  props ) => {
    
    
 const { handleInputChange , handleNext} = props
 console.log("onpress" , props.handleNext)
  return(
      
  
    
       
    <View style = {{
      flex:1 , 
      justifyContent:"center" ,
      alignItems:"center"
     }}>
             
             
               <View style = {{  justifyContent:"center" }}>
               <Input
               label = "COMPANY NAME"
               placeHolderText="fastening housing atlantic"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "companyName" 
               />  
                <Input
               label = "OFFICE ADDRESS"
               placeHolderText="1 Moore Rd,Canada"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "officeAddress" 
               />  
                 <Input
               label = "CONTACT PERSON NAME"
               placeHolderText="Dev"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "contactPersonName" 
               />  
                 <Input
               label = "PHONE NUMBER"
               placeHolderText="0123456789"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "phoneNumber" 
               />  
              <Button 
               onPressMethod = {handleNext}
               text = "Submit"
               buttonStyle = {White_Button}
               textStyle = { Red_Text}
               
               />
               </View>
                            
            </View>
              
              

    
)
}
export default Company