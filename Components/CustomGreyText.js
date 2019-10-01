import React from "react";
import { View , Text } from "react-native";
import { grey_Custom_text } from "../Styles";
const CustomGreyText = ( props ) => {
    const { label , text} = props
   return( <View>
          <Text style = { grey_Custom_text }> {label}</Text>
          
          <Text style = {{ paddingLeft:35 , color:"#828282"}}> { text }</Text>
   </View>)
}

export default CustomGreyText