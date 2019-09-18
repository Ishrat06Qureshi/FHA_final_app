import  React , {Component} from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity , CheckBox } from 'react-native';
import {EvilIcons ,AntDesign} from "@expo/vector-icons";

import LoginMiddleware from "../Middleware/LoginMiddleware";
import { connect } from "react-redux";
import Input from "./Input"
import Customer from './Customer';
import Company from "./Company";
import Button from "./Button";
import {Red_Button , White_Text} from "../Styles"
// import Loading from "../Redux/Actions/LoadingAction"
import validation_functions from "../utils/validation_functions"; 
import axios from "axios"




 class Finalogin extends Component {
  constructor (props){
    super(props)
    this.state = {
      email:"",
      password:"",
      notValidate:true
    }
  }
  



   handleLogin = () => {
       const { email , password } = this.state
      axios.post("http://13.59.64.244:3000/api/authenticate", { email , password }).then(( response ) => 
       {
         if( response.status == 200) {
          this.props.navigation.navigate("Home")
         }
       }).catch ( err => console.log(err.response.data.message))
      
       
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



    render() {
  
    const {  email , password , checked  , error , credential_error_msg  , validity , notValidate} = this.state
    const { token } = this.props
    console.log("token" , token )
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
                   onPress = {this.handleLogin}
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
     Login:( data ) => dispatch(LoginMiddleware(data )) 
   })
}

const mapStateToProps = ( state ) => {
  console.log("state" , state )
  return({
    token: state.tokenReducer.token
  })
}
export default connect(mapStateToProps , mapDispatchToProps )(Finalogin)
