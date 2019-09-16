import React , {  Component } from "react";
import { Card, CardItem, View} from "native-base";
import { Text } from "react-native"
import { bold_Text} from "../Styles";
import OrderHeading from "./orderHeading";
import  { 
    MaterialIcons ,
    FontAwesome,
    Entypo,
    AntDesign,
    Ionicons,
    MaterialCommunityIcons
} from "@expo/vector-icons"

onPress = () => {
    console.log("pressed")
}
const OrderCard  = ( props ) => {
  const { 
      productCode ,
      productDescription, 
      dateOfOrder, 
      shippingAddress ,
      quantity,
      poNumber} = props


      return( <View>
          <Card style = {{ borderRadius:15 , height:200}}>
          
          <View style = {{ flexDirection:"column" }}>
              <OrderHeading
               poNumber  = { poNumber}
               onPress = { onPress }
              />
              <View style ={{ flexDirection:"row" , paddingLeft:10}}>
              <AntDesign
              name="barcode"
              size = {20} 
              color = "orange"
              />
              <View>
                  
             
              <Text style = {{ ...bold_Text , paddingLeft:10}}>product Code</Text>
             <Text style = {{ paddingLeft:15}}>{productCode}</Text>
             </View>
              </View>
              
              <View style = {{ flexDirection:"row" , paddingLeft:10}}>
              <Entypo
                              name = "address" 
                              size = {20} 
                              color = "orange"/>
               <View>
                               
              <Text style = {{ ...bold_Text , paddingLeft:10} } numberOfLines= {0.5}>shipping Address</Text>
             <Text style = {{ paddingLeft:15}}>{shippingAddress}</Text>
             </View> 
             </View>
              
          </View>
          </Card>
         
         
      </View>)
}

export default OrderCard