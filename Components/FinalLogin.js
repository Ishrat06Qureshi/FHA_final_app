import  React , {Component} from 'react';
import {View,  Image  } from 'react-native';
import { Spinner } from "native-base"

import LoginMiddleware from "../Middleware/LoginMiddleware";
import { connect } from "react-redux";
import Input from "./Input"

import Button from "./Button";

// import Loading from "../Redux/Actions/LoadingAction"
import validation_functions from "../utils/validation_functions"; 
import { NavigationEvents } from 'react-navigation';

import { disable_Button_Style ,
  disable_Text_Style , 
  enable_Button_Style ,
   enable_Text_Style} from "../Styles"   
const initialState = {
      email:"",
      password:"",
}


 class Finalogin extends Component {
  constructor (props){
    super(props)
    this.state = {...initialState}
  }
  



   handleLogin = () => {
      const { token , Login ,error }  = this.props 
       const { email , password }  =this.state
    
      Login({email , password} ) 
      if(!error.message.length){
        
          this.props.navigation.navigate("Home")
      }
      


    
       
  }



  

  handleInputChange = ( fieldName , value) => {
    
    this.setState(({ [fieldName] : value.trim()}))
    validation_functions.updateValidators( fieldName , value )

  }

  



    render() {
  
    const disable = validation_functions.isFormValid(["email","password" ])
    const { token } = this.props
    console.log(this.state)
    const { email , password }  = this.state 
    
    return(
      <View style = {{
        flex:1 , 
        justifyContent:"center" ,
        alignItems:"center" }}>
                <NavigationEvents
      onDidBlur={() => this.setState(({...initialState}))}
      />
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
                   value = {email }
                   />
                     <Input
                   label = "PASSWORD"
                   placeHolderText="*******"
                   isSecureTextEntry = { true }
                   onChangeText= { this.handleInputChange}
                   errorName = "password" 
                   value = {password}
                   />  
                  <Button 
                   onPressMethod = { this.handleLogin}
                   text = "Login"
                   buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
                   textStyle = { disable ? enable_Text_Style  :disable_Text_Style }
                   disable = { disable}
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
  console.log("state of redux" , state )
  return({
    token: state.tokenReducer.token,
    error: state.ErrorReducer.error
  })
}
export default connect(mapStateToProps , mapDispatchToProps )(Finalogin)
