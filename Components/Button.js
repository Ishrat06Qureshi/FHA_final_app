import React , {  Component } from "react"
import { View , Text ,  TouchableOpacity } from "react-native";
import {
     Button 
 }  from "../Styles/index"

export default class CustomButton extends Component {
  render() {
      return (
           <TouchableOpacity onPress={()=> console.log("onPress")} style = {  Button }>
             
                   <Text style = {{ color:"white" }}> Buy Now </Text>
              
           </TouchableOpacity>
      );
  }
}