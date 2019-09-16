import React , {  Component } from "react"
import { View , Text ,  TouchableOpacity } from "react-native";
import {Red_Button , White_Text} from "../Styles"

const Button  = ( props ) => {
   const { onPressMethod  , text , buttonStyle, textStyle } = props 
  return ( <TouchableOpacity style = { buttonStyle} onPress = { onPressMethod}>
     <Text style ={ textStyle } > {text}</Text> 
   </TouchableOpacity> )

}
export default Button