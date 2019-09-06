import React , {  Component } from "react"
import { View , Text ,  TouchableOpacity } from "react-native";

export default class Button extends Component {
  render() {
      return (
           <TouchableOpacity onPress={()=> console.log("onPress")}>
               <View style = {{ height:"2%" , width:"2%" , borderColor:"red" , borderRadius:0.5 , backgroundColor:"red"}}>
                   <Text style = {{ color:"white" }}> Buy Now </Text>
               </View>
           </TouchableOpacity>
      );
  }
}