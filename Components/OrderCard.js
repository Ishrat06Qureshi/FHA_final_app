import React , {  Component } from "react";
import { Card, CardItem, View} from "native-base";
import { Text } from "react-native"
import { bold_Text} from "../Styles";
import OrderHeading from "./orderHeading";
import OrderDetails from "./OrderDetails";
import Modal from "react-native-modal";
import  { 
 
    Entypo,
    AntDesign,
  
} from "@expo/vector-icons"

onPress = () => {
    console.log("pressed")
}
export default class  OrderCard extends Component   {
    state = {
        isModalVisible: false
      };

    closeModal = () => {
        this.setState(({ isModalVisible:false}))
      }
      openModal = () => {
        console.log("open Modal")
        this.setState(({ isModalVisible:true}))
       
      }
    render() {
        const { 
            productCode ,
            productDescription, 
            dateOfOrder, 
            shippingAddress ,
            quantity,
            poNumber, 

           } = this.props
          const { isModalVisible } = this.state
          return( <View>
            <Card style = {{ borderRadius:15 , height:200}}>
            
            <View style = {{ flexDirection:"column" }}>
                <OrderHeading
                 poNumber  = { poNumber}
                 onPressMethod = { this.openModal }
                 label = "view details"
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

            {
                 isModalVisible ? 
                 <View style = {{ flex:1}}>
                 <Modal isVisible={ isModalVisible }>
                     <OrderDetails
                        closeModal = { this.closeModal}
                        shippingAddress  = { shippingAddress}
                        dateOfOrder = { dateOfOrder}
                        poNumber = { poNumber}
                        productCode = {productCode}
                        quantity = {quantity}
                        UOM = "foot"
                     />
                         
                         
                         
                         
                         
                     
                 </Modal>
                 </View>: null
             }
           
           
        </View>)

    }


     
    
}
