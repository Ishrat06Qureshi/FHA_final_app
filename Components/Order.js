import React  , { Component } from "react";
import { View , Text , FlatList } from "react-native";
import OrderCard from "./OrderCard"
import {  Heading_style } from "../Styles"
export default class Order extends Component {
    state = {
        data:[
        {  productCode:"1/2 Kelly Rod" ,
      productDescription:"Kelly Rods" , 
      dateOfOrder:"15-09-19", 
      shippingAddress:"1 Moore Rd, Dartmouth, NS B3B 1J1, Canada" ,
      quantity:"2",
      poNumber:"45522"
        }
    ]
}

_renderItem = ({item}) => {
  
    return( 
     
        
    <OrderCard
      productCode  = { item.productCode }
      productDescription = { item.productDescription} 
      dateOfOrder = { item.dateOfOrder}
      shippingAddress = { item.shippingAddress}
      quantity = {item.quantity}
      poNumber = {item. poNumber}
    />
    
    )
}
    render() {
         const {data } = this.state
        return( <View style = {{ flex:1 , justifyContent:"center"}}>
            <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Your Orders</Text>
            </View>
             
             
            <FlatList
             data = { data }
             renderItem = { this._renderItem}
            />
         
        </View>)
    }
}