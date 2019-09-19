import React , { Component } from "react";
import { View  , Image } from "react-native";

import  Input from "./Input";
import Button from "./Button";
import { disable_Button_Style ,
   disable_Text_Style , 
   enable_Button_Style ,
    enable_Text_Style} from "../Styles"

    import validation_functions from "../utils/validation_functions"; 
const Company = (  props ) => {
    
    
 const { handleInputChange , handleNext} = props
 
 const disable = validation_functions.isFormValid(["companyName","contactPersonName","phoneNumber" ])
  return(
      
  
    
       
    <View style = {{
      flex:1 , 
      justifyContent:"center" ,
      alignItems:"center"
     }}>
             

             <Image
                  source = {require("../assets/fastening.png")}
                  style = {{
                    height:135,
                    width:"100%",
                    resizeMode:"contain"
                  }}
                />
             
               <View style = {{  justifyContent:"center" }}>
               <Input
               label = "COMPANY NAME"
               placeHolderText="fastening housing atlantic"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "companyName" 
               keyBoardType = "default"
               />  
                 
                 <Input
               label = "CONTACT PERSON NAME"
               placeHolderText="Dev"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "contactPersonName" 
               keyBoardType = "default"
               />  
                 <Input
               label = "PHONE NUMBER"
               placeHolderText="0123456789"
               isSecureTextEntry = { false}
               onChangeText= { handleInputChange}
               errorName = "phoneNumber" 
               keyBoardType = "phone-pad"
               />  
              <Button 
               onPressMethod = {handleNext}
               text = "Submit"
               buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
               textStyle = { disable ? enable_Text_Style  :disable_Text_Style}
               disable = { disable }
               />
               </View>
                            
            </View>
              
              

    
)
}
export default Company