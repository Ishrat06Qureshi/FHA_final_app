import React  , { Component } from "react";
import { View , Text , FlatList , TouchableOpacity  } from "react-native";
import Modal from "react-native-modal";
import OrderCard from "./OrderCard"
import {  Heading_style } from "../Styles";
import { Card } from "native-base"

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

closeModal = () => {
    this.setState(({ isModalVisible:false}))
  }
  openModal = () => {
    console.log("open Modal")
    this.setState(({ isModalVisible:true}))
   
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
      openModal = { this.openModal}
    />
    
    )
}
    render() {
         const {data , isModalVisible } = this.state
         console.log("Modal value" , isModalVisible )
        return( <View style = {{ flex:1 , justifyContent:"center"}}>
            <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Your Orders</Text>
            </View>
             
             
            <FlatList
             data = { data }
             renderItem = { this._renderItem}
             keyExtractor = {(item, index) => item.poNumber}
            />
             {
                 isModalVisible ? <Modal isVisible={ isModalVisible }>
                     <Card>
                         <Text> Ishrat </Text>
                          <TouchableOpacity onPress = { this.closeModal }>

                          <Text> close Modal</Text>
                          </TouchableOpacity>

                         
                         
                         
                         
                         
                     </Card>
                 </Modal>: null
             }
        </View>)
    }
}