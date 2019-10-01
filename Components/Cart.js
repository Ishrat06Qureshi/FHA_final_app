import React , { Component } from "react";
import { View , Text  , FlatList , Alert  } from "react-native";
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
import Input from "./Input";
import DeleteItem from "../Actions/EmptyOrder"

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
    this.setState(({ [fieldName] : value.trim()}))
    validation_functions.updateValidators( fieldName , value )
  
  }
    Proceed= () => {
        this.setState(({ orderPlace: true }))
    }
   
    handleLogin = () => {
      console.log("login")
    }

    placeOrder = () => {
      const { items , userData , DeleteItem  } = this.props
      console.log("user data inside place Order" , userData )
      axios.post("http://13.59.64.244:3000/api/order" , {createdBy:userData.userID , shippingAddress:userData.officeAddress , productDetail:items}).
      then(( response) => {
        if ( response.status === 200) {
          DeleteItem()
          Alert.alert(
            'Order confirmation',
            'FHA will shortly contact you',
            [
              
              
              {text: 'OK', onPress: () => this.props   .navigation.navigate("Home")},
            ],
            {cancelable: false},
          );
        }
      } ).catch ( err => console.log(err.response.data))
    }
 render() {

  
     const { orderPlace ,
        lineOne,
     city,
     province,
     postalCode } = this.state
     const disable = validation_functions.isFormValid(["lineOne","city","province" , "postalCode" ])
     const { items } = this.props
    console.log( lineOne , city , province , postalCode )
      return(
       
        
          <View>
             <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
             { orderPlace ? <View>
              <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Place Order</Text>
            </View>
            <View style = {{  justifyContent:"center" }}>
             
             <Input
      label = "Line 1"
      placeHolderText=""
      isSecureTextEntry = { false}
      onChangeText= { this.handleInputChange}
      errorName = "lineOne" 
      keyBoardType = "default"
      value = { lineOne }
      />  
      
        <Input
      label = "City"
      placeHolderText="Toronto"
      isSecureTextEntry = { false}
      onChangeText= { this.handleInputChange}
      errorName = "city" 
      keyBoardType = "default"
      value = { city }
      />  
  
          <Input
            label = "Province"
            placeHolderText="Alberta"
            isSecureTextEntry = { false}
            onChangeText= { this.handleInputChange}
            errorName = "province" 
            keyBoardType = "default"
            value = { province }
            />  
              <Input
            label = "Postal Code"
            placeHolderText="M4B 1B3"
            isSecureTextEntry = { false}
            onChangeText= { this.handleInputChange}
            errorName = "postalCode" 
            keyBoardType = "default"
            value = { postalCode }
            />  
            
               
               
            <Button 
             onPressMethod = { this.placeOrder }
             text = "Submit"
             buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
             textStyle = { disable ? enable_Text_Style  :disable_Text_Style}
             disable = { disable}
             />
            </View>
                
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

  const mapDispatchToProps = ( dispatch  ) => {

    return({
      DeleteItem : (  ) => dispatch(DeleteItem())
   
    })
  } 
export default connect(mapStateToProps , mapDispatchToProps  )(Cart)