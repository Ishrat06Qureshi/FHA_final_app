import React , { Component } from "react";
import { View , Text  , FlatList } from "react-native";
import { connect } from "react-redux";
import CustomText from "./CustomText";
import { Heading_style , Red_Button , White_Text , 
  disable_Button_Style,
  disable_Text_Style,
  enable_Button_Style ,
   enable_Text_Style} from "../Styles";
import Button from "./Button";
import validation_functions from "../utils/validation_functions"; 
import AddressForm from "./AddressForm";
import axios from "axios"
import { NavigationEvents } from 'react-navigation';

const initialState = {
  orderPlace:false,
  lineOne:"",
  city:"",
  province:"",
  postalCode:"",
}
class Cart extends Component {
  
   state = {...initialState }
    

   handleInputChange = ( fieldName , value) => {
    this.setState(({ [fieldName] : value}))
    validation_functions.updateValidators( fieldName , value )
  
  }
    Proceed= () => {
        this.setState(({ orderPlace: true }))
    }
   
    handleLogin = () => {
      console.log("login")
    }

    placeOrder = () => {
      const { items , userData  } = this.props
      console.log("user data inside place Order" , userData )
      axios.post("http://13.59.64.244:3000/api/order" , {createdBy:userData.userID , shippingAddress:userData.officeAddress , productDetail:items}).
      then(( response) => {
        if ( response.status === 200) {
          alert("Thanks for Ordering FHA will reach you out shortly")
        }
      } ).catch ( err => console.log(err.response.data))
    }
 render() {

  
     const { orderPlace } = this.state
     const disable = validation_functions.isFormValid(["lineOne","city","province" , "postalCode" ])
     const { items } = this.props
   
      return(
       
        
          <View>
             <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
             { orderPlace ? <View>
              <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Place Order</Text>
            </View>
                <AddressForm
                 handleInputChange = { this.handleInputChange}
                />
                 <Button 
                   onPressMethod = { this.placeOrder}
                   text = "Order"
                   buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
                   textStyle = { disable ? enable_Text_Style  :disable_Text_Style }
                   disable = { disable}
                   />
             </View> :   <View>
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
               buttonStyle = { enable_Button_Style}
               textStyle = { enable_Text_Style }
               disable = { true }
               
               />
               </View>
            </View>: <View style = {{ justifyContent:"center" , alignItems:"center"}}>
                <Text> No Products available</Text>
            </View>
          
          
          
          }
           
           
           
           
      </View>  }
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
      items:state.orderReducer.items,
      userData:state.UserDataReducer.UserData
    })
  }
export default connect(mapStateToProps , null )(Cart)