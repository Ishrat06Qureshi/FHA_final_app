import React , { Component } from "react";
import { View , Text , Image } from "react-native";
import { Card} from "native-base"
import Input from "./Input";
import CustomText from "./CustomText";
import Button from "./Button";
import validation_functions from "../utils/validation_functions"; 
import { connect } from "react-redux";
import { bold_Text ,
    White_Square_button  , 
    Red_Text ,
     } from "../Styles";

 
 class ProductModal extends Component {
    state = {
        quantity :""
    }
    
    handleInputChange = ( fieldName , value) => {
        this.setState(({ [fieldName] : value}))
        validation_functions.updateValidators( fieldName , value )
    
      }


      handleSave = ( productId , quantity ) => {
        this.props.saveItem({productId, quantity})
      }
    render() {

        const { image , productCode , closeModal , items } = this.props
        
        console.log("items" , items )
        return( <View >
               <Card style = {{ height:"70%" , borderRadius:"25"}}>
                   
               <Image
                 source = {{ uri:image}}
                 style = {{
                     height:200,
                     width:"100%",
                     resizeMode:"contain"
                 }}
               />
               <CustomText
                 label = "Product Code"
                 text = { productCode }
               />
              <Input
               label = "quantity"
               placeHolderText="5"
               isSecureTextEntry = { false}
               onChangeText= { this.handleInputChange}
               errorName = "quantity" 
               /> 

               <View style = {{ justifyContent : "flex-end" , flexDirection:"row"}}>
                  
               <Button
                       buttonStyle = {  White_Square_button }
                       textStyle = { Red_Text }
                       text  = "Ok"
                       onPressMethod = { closeModal}
                      />
               </View>
               </Card>
        </View>)
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return({
     //  Login:( data ) => dispatch(LoginMiddleware(data )) 
       saveItem : ( data ) => dispatch(SaveItem(data))
    })
 }
 
 const mapStateToProps = ( state ) => {
   console.log("state" , state )
   return({
     token: state.tokenReducer.token,
     items:state.orderReducer.items
   })
 }

export default connect(mapStateToProps , mapDispatchToProps )(ProductModal)