import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity  , KeyboardAvoidingView} from 'react-native';
import axios from "axios";
import { AntDesign , FontAwesome  , EvilIcons} from "@expo/vector-icons"
import { Spinner } from "native-base"
import validation_functions from "../utils/validation_functions";
import URL  from "../urls";
import  Input from "./Input";
import Button from "./Button";
import Company from "./Company";
import Customer from "./Customer"

export default class Finalsignup extends React.Component {

  state = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phoneNumber:"",
    loading:false,
    error:{},
    serverError : [],
    StepOpen:true,
   

  }

  

 

 handleInputChange = ( fieldName , value) => {
  this.setState(({ [fieldName] : value}))
  validation_functions.updateValidators( fieldName , value )

}

navigateToLogin = () => {
  console.log("navigation")
    this.props.navigation.navigate("Finalogin")
  }
  

  post = () => {
    const { firstName , lastName, email , password , phoneNumber} = this.state
    axios.post(`${URL.Register_URL}` , { firstName,lastName, email, password, fullName:firstName+lastName, phoneNumber })
    .then(( response ) =>  console.log("response" , response ))
     .catch ( err => this.setState(({ serverError:err.response.data})))
    
  }


  handleSignup = () => {
    console.log( "press")
    this.post()
    
  }
  
  handleNext = () => {
    this.setState(({ StepOpen:false})) 
  }
  
  render() {

    const { firstName  , lastName , email , password , error , phoneNumber, loading , 
      isStepOneOpen , isStepTwoOpen , StepOpen} = this.state
    return(
      <View style ={{  flex:1}}>
        {/* <Button/> */}
              {/* <View style = { styles.imageContainer}>
             
              <Image source = {require("../assets/fastening.png")}
              style = {styles.logo}
              />
        
          </View>  */}
          
          { StepOpen ? 
          
          <Company
          handleInputChange = { this.handleInputChange}
          handleNext = { this.handleNext}
       />:
          <Customer
          handleInputChange = { this.handleInputChange}
          handleNext = { this.handleNext}
          />
          
          
         
          
          
          }
      
        </View> 
    
    )
  }
}

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
    flex:1,
    flexDirection:"row",
    marginBottom:"3%"
  },
   fieldMainContainer:{
    marginBottom:"1%"
  },
   text:{
     flex:1,
    borderColor:"#707070",
    borderWidth:0.25,
    height:"100%",
    width:"80%",
    // borderRadius:5,
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
      sign_up :{
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#DA011D',
    textAlign:"center" ,
    backgroundColor:"#DA011D"
  },
     sign_up_text :{
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
    marginLeft:25
    
  },
  
})