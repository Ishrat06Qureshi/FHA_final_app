import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity , CheckBox } from 'react-native';
import {EvilIcons ,AntDesign} from "@expo/vector-icons";
import validation from '../helper/validation';
export default class Finalogin extends React.Component {

  state = {
    email:"",
    password:"",
    checked:false
  }


check_credentials = ( ) => {
    const { email , password } = this.state
     if( email === "Admin123@gmail.com" && password === "1234") {
        return true
     } 
     return false
  }
  resetState = () => {
   this.setState(({
      email:"",
      password:"",
      credential_error_msg:"",
      error:{}
    }))
  console.log("reseting the app")
 }

 resetError = ( name ,  field ) => {
   console.log( "name " , name , "field" , field )
 this.setState(({
  [name]:field,
  error:{},
  credential_error_msg:""
 }))
 }

   handleLoginSubmit = () => {
     const { email , password  } = this.state
      const data = { email , password}
      const error =  validation(data)
      if( Object.keys(error).length  ) {
         console.log( error )
        return this.setState(({ error }))
      }

    if( this.check_credentials() ) {
       console.log("after checking credentials", this.check_credentials())
             this.resetState()
            this.props.navigation.navigate("Home")        
            return 
    } 
   else {
     return this.setState(({ credential_error_msg : " credential error "}))
   }
  }



  navigateToLogin = () => {
    this.props.navigation.navigate("Finalsignup")
  }
  render() {

    const {  email , password , checked  , error , credential_error_msg } = this.state
  
    return(<View style  = { styles.mainContainer}>

      <View style = { styles.imageContainer}>
            <ImageBackground source = { require("../assets/login-bg-01.png")}
            style = { styles.container}>
            <Image source = {require("../assets/fastening-logo.png")}
            style = {styles.logo}
            />
        </ImageBackground>
        </View>
      <View style = {styles.formContainer}>
          <View style = {styles.form} >

             


           <View style = {styles.fieldMainContainer}> 
               <Text>Email:</Text>
                <View style = {styles.fields}>
                   <EvilIcons name="envelope" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'Email address'}
                  placeholderTextColor={'#707070'}
                   onChangeText = {( email ) => this.resetError("email" , email)}
                  value = {email}
                
                     />
              </View>

          </View>
           {  error && error.email ? alert(`${ error.email}`) : null}
           <View style = {styles.fieldMainContainer}> 
               <Text>Password:</Text>
                <View style = {styles.fields}>
                   <AntDesign name="eyeo" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'password'}
                  placeholderTextColor={'#707070'}
                   onChangeText = {( password ) => this.resetError("password" , password )}
                  value = { password }
                  secureTextEntry = {true}
                     />
              </View>
          </View>
             {  error && error.password ? alert(`${ error.password}`) : null}
          <View style = {styles.buttonContainer}>
           <TouchableOpacity  style = {[ styles.button  , styles.login ]}   onPress = { this.handleLoginSubmit } >
               <Text style = {styles.login_text}> Log in</Text>
          </TouchableOpacity>
       </View>

       <View style = {styles.forgetPasswordContainer}>
         <View style = { styles.checkbox}>
         <CheckBox
         title=" Remember me"
         checked = {checked}
         />
         </View>

         <View style = {styles.rememberMe}>
          <TouchableOpacity>
            <Text style = { styles.forgetPasswordText}> forget Password</Text>
          </TouchableOpacity>
         </View>
       </View>

       {  credential_error_msg? alert(`${credential_error_msg}`) : null}

        <View style={ styles.tag}>
         <Text style = {{ color:"#707070"}}> New User?</Text>
         <TouchableOpacity onPress = {this.navigateToLogin}> 
         <Text>Sign up </Text></TouchableOpacity>
          
        </View>
        </View>
      
      </View>


    
    </View>)
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