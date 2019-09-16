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



    render() {
  
    const {  email , password , checked  , error , credential_error_msg  , validity , notValidate} = this.state
    const { token } = this.props
    console.log("token" , token )
    return(
   <View style ={{ justifyContent:"center" , alignItems:"center"}}>
     
    <View style = {{ flex:1 , justifyContent:"center" }}>
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

// export default Finalogin 




const styles = StyleSheet.create({
   mainContainer:{
    position:"absolute",
    flexDirection:"column",
    width:"100%",
    height:"100%",  
    },
    container:{
    width:"100%",
    height:"100%"
  },
  imageContainer:{
   flex:4,
  },
   logo:{
        height:60,
        width:190,
        marginLeft:50,
        marginTop:50
  },
    formContainer:{
    flex:5,
    flexDirection:"column",
    alignItems:"center",
    left:"5%"
    
  },

   form:{
    flex:4,
    flexDirection:"column",
  },
  fields:{
    flexDirection:"row",
    marginBottom:"3%"
  },
   fieldMainContainer:{
    marginBottom:"1%"
  },
   text:{
    borderColor:"#707070",
    borderWidth:0.25,
    height:"100%",
    width:"80%",
    borderRadius:5,
    paddingLeft: 50,
  },
   image:{
    height:20,
    width:20,
    left:"100%",
    top:"2%"
  },
   button :{
       height:50,
       width:200,
       marginTop:10
     },
      login :{
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#DA011D',
    textAlign:"center" ,
    backgroundColor:"#DA011D"
  },
     login_text :{
       color:'white',
       textAlign: 'center',
       lineHeight:50,
       
     },
     buttonContainer:{
       marginHorizontal:32,
       
     },
      tag:{
    flex:1,
    flexDirection:"row",
    marginTop:20,
    marginLeft:80 
  },
  forgetPasswordContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
 forgetPasswordText:{
   marginRight:50,
   color:"#0080CE",
   marginTop:10
 }
  
})