import React , { Component } from "react";
import { View , Text  , FlatList } from "react-native";
import { connect } from "react-redux";
import CustomText from "./CustomText";
import { Heading_style , Red_Button , White_Text} from "../Styles";
import Button from "./Button"
class Cart extends Component {

    
    Proceed= () => {
        console.log("Proceed")
    }
   
 render() {
     const { items } = this.props

      return( <View>
           <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Cart Details</Text>
            </View>

            { items.length ?  <View style = {{justifyContent:"center"}}>
            <FlatList
             data = { items }
             renderItem = {Item}
         
            />
            <View style = {{ justifyContent:"center", alignItems:"center"  , marginTop:150}}>
              <Button 
               onPressMethod = {this.Proceed}
               text = "Proceed"
               buttonStyle = {Red_Button}
               textStyle = { White_Text}
               
               />
               </View>
            </View>: <View style = {{ justifyContent:"center" , alignItems:"center"}}>
                <Text> No Products available</Text>
            </View> }
           
           
           
           
      </View>
           
           
      )
 }
}

const Item = ( {item} ) => {
    console.log( "item" , item )
    return( <View style = {{ flex:1 , flexDirection:"row", justifyContent:"center" , alignSelf:"center" , marginLeft:20}}>
        <View style = {{ flex:2}}>
        <CustomText
     label =  "Product Code"
     text = {item.productId}
    />
        </View>
 
   <View style = {{ flex:1}}>
   <CustomText
     label =  "Quantity"
     text = {item.quantity}
    />
   </View>
    
    <View style = {{ flex:1}}>
        
    <CustomText
     label =  "UOM"
     text = {item.UOM}
    />
    </View>
</View>)
}
const mapStateToProps = ( state ) => {
    console.log("state" , state )
    return({
      items:state.orderReducer.items
    })
  }
export default connect(mapStateToProps , null )(Cart)