import  React , {Component} from 'react';
import { View,  Image , TouchableOpacity , Text  } from 'react-native';


import LoginMiddleware from "../Middleware/LoginMiddleware";
import { connect } from "react-redux";
import Input from "./Input"
import Customer from './Customer';
import Company from "./Company";
import Button from "./Button";
import {Red_Button , White_Text} from "../Styles"
// import Loading from "../Redux/Actions/LoadingAction"
import validation_functions from "../utils/validation_functions"; 
import SaveItem from "../Actions/OrderAction"

 class Finalogin extends Component {
  constructor (props){
    super(props)
    this.state = {
      email:"",
      password:"",
      notValidate:true
    }
  }
 



   handleSubmit = () => {

     
  // console.log("validity")
  //  const status =  validation_functions.isFormValid()
  //  console.log( "status",status )
  //   // return ( status ? this.setState(({ validity:true })): null)
    
  // this.props.navigation.navigate("Home")  
  // const { email,password } = this.state
  // const data = {
  // email,
  // password
  // }
  // this.props.Login( data )
  // const status = validation_functions.isFormValid()
  // console.log("status", status )

     const validEmail = validation_functions.showError("email")
     const validPassword = validation_functions.showError("password")
     const formValidity = validation_functions.isFormValid(["email" , "password"])
     console.log("Email validity" , validEmail)
     console.log("password validity" , validPassword)
     console.log("form validity" , formValidity)
  }



  navigateToLogin = () => {
    this.props.navigation.navigate("Finalsignup")
  }

  handleInputChange = ( fieldName , value) => {
    this.setState(({ [fieldName] : value}))
    validation_functions.updateValidators( fieldName , value )

  }

  handleNext = () => {
    console.log("good")
  }
  callRedux  = () => {
    // const { dispatch } = this.props
    // dispatch(Loading(true))

  }
  
  // componentWillReceiveProps( nextProps ) {
  //   console.log("next Props", nextProps )
  // }

  handleSave = ( productId , quantity ) => {
    this.props.saveItem({productId, quantity})
  }

    render() {
  
    
    const { token , saveItem  , items } = this.props
    console.log("items" , items )
    return(
      <View style = {{
        flex:1 , 
        justifyContent:"center" ,
        alignItems:"center" }}>
                    <Image
                      source = {require("../assets/fastening.png")}
                      style = {{
                        height:135,
                        width:"100%",
                        resizeMode:"contain"
                      }}
                    />
                   <View style = {{  flex:1 ,  justifyContent:"center"  }}>
                       
                      <TouchableOpacity onPress = {() =>this.handleSave("1122554897", "5")}>
                        <Text> set Item </Text>
                      </TouchableOpacity>
                    
                   <Input
                   label = "EMAIL"
                   placeHolderText="john22@gmail.com"
                   isSecureTextEntry = { false}
                   onChangeText= { this.handleInputChange} 
                   errorName = "email" 
                   />
                     <Input
                   label = "PASSWORD"
                   placeHolderText="*******"
                   isSecureTextEntry = { false}
                   onChangeText= { this.handleInputChange}
                   errorName = "password" 
                   />  
                  <Button 
                   onPress = {this.handleNext}
                   text = "Login"
                   buttonStyle = {Red_Button}
                   textStyle = { White_Text }
                   
                   />
                   </View>
      </View>
    
   
   
    
    )
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
export default connect(mapStateToProps , mapDispatchToProps )(Finalogin)





