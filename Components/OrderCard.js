import React , {  Component } from "react";
import { Card, CardItem} from "native-base";
import { Text  , View, FlatList , Animated } from "react-native"
import { bold_Text} from "../Styles";
import OrderHeading from "./orderHeading";
import OrderDetails from "./OrderDetails";
import Modal from "react-native-modal";
import CustomHorizontalText from "./CustomHorizontalText"
import  { 
 
    Entypo,
    AntDesign,
    MaterialIcons
  
} from "@expo/vector-icons"

export default class  OrderCard extends Component   {
    state = {
        viewMore : false,
        animation   : new Animated.Value(),
        expanded    : true,
      };

    closeModal = () => {
        this.setState(({ isModalVisible:false}))
      }
      openModal = () => {
        console.log("open Modal")
        this.setState(({ isModalVisible:true}))
       
      }
      _renderItem = ({item }) => {
        const { orderDetails } = this.props 
      return(<View>
          <Text style = {{ paddingLeft:25}}>{item.description}</Text>
                    <View style = { { paddingLeft:25}}>
                        <CustomHorizontalText
                        label = "Product Code"
                        text = {item.productCode}
                        />
                         <CustomHorizontalText
                        label = "Unit of Measure"
                        text = "foot"
                        />
                          <CustomHorizontalText
                        label = "Quantity"
                        text = {orderDetails.productDetail.find( product => product.productID === item.id ).quantity}
                        />
                    </View>
      </View>)
    }
    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    toggle(){
        console.log(this.state)
        
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    
        this.setState({
            expanded : !this.state.expanded  //Step 2
        });
    
        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();  //Step 5
    }



    
    render() {
        const { 
            // productCode ,
            // productDescription, 
            createdDate, 
            shippingAddress ,
            // quantity,
            poNumber, 
            
           } = this.props.orderDetails
          const { isModalVisible , expanded } = this.state
          return( 
              <Animated.View style = { this.state.animation}>
                  
              <View onLayout={this._setMinHeight.bind(this)}>
                  
                <Card style = {{ borderRadius:15 , height:150}} onLayout={this._setMaxHeight.bind(this)}>
            
                            <View style = {{ flexDirection:"column" }}>
                                <OrderHeading
                                poNumber  = { poNumber}
                                onPressMethod = { this.toggle.bind(this) }
                                label = { expanded ? "View less" : "View more"}
                                />
                                <View style ={{ flexDirection:"row" , paddingLeft:10}}>
                                <MaterialIcons
                                name="date-range"
                                size = {20} 
                                color = "orange"
                                />
                                <View>
                                    
                            
                                <Text style = {{ ...bold_Text , paddingLeft:10}}> Date Of Order </Text>
                            <Text style = {{ paddingLeft:15}}>{createdDate}</Text>
                            </View>
                                </View>
                                
                                <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                                        <Entypo
                                                        name = "address" 
                                                        size = {20} 
                                                        color = "orange"/>
                                            <View>
                                                            
                                                        <Text style = {{ ...bold_Text , paddingLeft:10} }>Shipping Address</Text>
                                                        <Text style = {{ paddingLeft:15}} numberOfLines= {0.5}>{shippingAddress}</Text>
                                        </View> 
                            </View>

                            <View style = {{ flexDirection:"row" , paddingLeft:10}}>
                                        <AntDesign
                                                        name = "shoppingcart" 
                                                        size = {20} 
                                                        color = "orange"/>
                                            <View>
                                                            
                                                        <Text style = {{ ...bold_Text , paddingLeft:10} } >Items </Text>
                                                        
                                        </View> 
                            </View>
                                <FlatList
                                data = { this.props.orderDetails.Product}
                                renderItem = { this._renderItem}
                                />
                            
                            
                            </View>
            </Card>

</View>     
           
</Animated.View>
        )

    }


     
    
}
