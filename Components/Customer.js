import React , { Component } from "react";
import { View , Image } from "react-native" 
import  Input from "./Input";
import Button from "./Button"
import {Red_Button , White_Text} from "../Styles"
const Customer = (  props ) => {
 const { handleInputChange , handleNext} = props
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
               buttonStyle = {Red_Button}
               textStyle = { White_Text }
               
               />
               </View>
  </View>)
}
export default Customer