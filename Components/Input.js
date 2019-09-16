import React , { Component } from "react";
import { View , Text , TextInput} from "react-native";
import { label_styles , Input_styles} from "../Styles";
import validation_functions from "../utils/validation_functions"; 

const Input = ( props ) => {
     const { 
         label ,
         placeHolderText , 
         isSecureTextEntry ,
        //   keyBoardType ,
           onChangeText  , 
           errorName} = props
           console.log("props",props)
   return( <View style = {{ alignContent:"center"}}>
          <Text style = { label_styles}>
              {label}
          </Text>
          <TextInput
          placeholder = {placeHolderText}
          placeholderTextColor = "#999999"
          secureTextEntry = { isSecureTextEntry }
          underlineColorAndroid="transparent"
          onChangeText = {( value ) => onChangeText( errorName , value) }
        //   keyboardType = { keyBoardType}
          style = { Input_styles }
           
          />
           {validation_functions.displayValidationErrors(errorName)}
          
   </View>)
}
export default Input 