import React from "react";
import { View , Text } from "react-native";
import { Card } from "native-base";
import  { 
 
    Entypo,
    AntDesign,
    
FontAwesome
  
} from "@expo/vector-icons"

const OrderDetails = ( props ) => {

    const { 
        productCode ,
        productDescription, 
        dateOfOrder, 
        shippingAddress ,
        quantity,
        poNumber, 
        openModal } = props
    return(
   <View style = { { flex:1  }}>
     <Card style = {{ borderRadius:15 , height:200}}>
          
          <View style = {{ flexDirection:"column" }}>
                    <OrderHeading
                    poNumber  = { poNumber}
                    onPressMethod = { openModal }
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
                        <FontAwesome
                                        name = "balance-scale" 
                                        size = {20} 
                                        color = "orange"/>
                        <View>           
                        <Text style = {{ ...bold_Text , paddingLeft:10} } numberOfLines= {0.5}>Quantity</Text>
                        <Text style = {{ paddingLeft:15}}>{shippingAddress}</Text>
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
         

    </View> )
}

export default OrderDetails 