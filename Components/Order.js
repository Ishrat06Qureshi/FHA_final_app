import React  , { Component } from "react";
import { View , Text , FlatList , TouchableOpacity  } from "react-native";


import OrderCard from "./OrderCard"
import {  Heading_style } from "../Styles";
import { Card } from "native-base";
import axios from "axios"
import { getRequestOptions } from "redux-axios-middleware";

 class Order extends Component {
    state = {
        data:[]
    }
  componentDidMount () {
      axios.get(`http://13.59.64.244:3000/api/userorder/80605804-5762-4e9b-a885-2f87d51e6aed`).
      then(( response) => this.setState(({ data:response.data}))).catch( err => console.log(err.response.data) )
  }



_renderItem = ({item}) => {
  
    return( 
     
        
    <OrderCard
    
      orderDetails = {item}
      
     
      label = "View Details"
      
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
             keyExtractor = {(item, index) => item.poNumber}
            />
            
            
        </View>)
    }
}
export default Order
