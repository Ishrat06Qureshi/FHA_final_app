import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { bold_Text } from "../Styles"

import {HeadingContainer ,  Heading_Text} from "../Styles"
const OrderHeading  = (props ) => {
    const {  poNumber , onPress} = props
   return (
    <View style= {HeadingContainer}>
    <Text style = { {...bold_Text ,paddingLeft:20} }>
       PO Number {poNumber}
         </Text>
      <TouchableOpacity onPress = { onPress }>
      <Text style = { Heading_Text }> View Details </Text>
      </TouchableOpacity>
  </View>
   )
}

export default OrderHeading