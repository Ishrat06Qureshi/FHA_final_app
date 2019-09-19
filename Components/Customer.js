import React , { Component } from "react";
import { View , Image } from "react-native" 
import  Input from "./Input";
import Button from "./Button"
import { disable_Button_Style , disable_Text_Style , enable_Button_Style , enable_Text_Style} from "../Styles"
import validation_functions from "../utils/validation_functions"; 
const Customer = (  props ) => {
 const { handleInputChange , handleNext} = props
 const disable = validation_functions.isFormValid(["email","customerNumber","password" ])
  return( 
  <View style = {{
    flex:1 , 
    justifyContent:"center" ,
    alignItems:"center" }}>
                <Image
                  source = {require("../assets/fastening.png")}
                  style = {{
                    height:135,
                    width:"100%",
                    resizeMode:"contain"
                  }}
                />
               <View style = {{  flex:1 ,  justifyContent:"center"  }}>
                   
                 
                <Input
               label = "CUSTOMER NUMBER (optional)"
               placeHolderText="45321"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "customerNumber" 
               keyBoardType = "phone-pad"
               />  
               <Input
               label = "EMAIL"
               placeHolderText="john22@gmail.com"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange} 
               errorName = "email" 
               />
                 <Input
               label = "PASSWORD"
               placeHolderText="*******"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "password" 
               />  
              <Button 
               onPressMethod  = {handleNext}
               text = "Next"
               buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
               textStyle = { disable ? enable_Text_Style  :disable_Text_Style }
               disable = { disable}
               />
               </View>
  </View>)
}
export default Customer