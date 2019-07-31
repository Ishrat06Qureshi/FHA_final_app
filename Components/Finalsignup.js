import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity  , KeyboardAvoidingView} from 'react-native';


import { AntDesign , FontAwesome  , EvilIcons} from "@expo/vector-icons"
import loginValidation from '../helper/signupValidation';
export default class Finalsignup extends React.Component {

  state = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    error:{}
  }


  resetError = ( name , value) => {
    console.log("name" , name , "value" , value)
     this.setState(({
       [name] : value,
       error:{}
     }))
  }

resetState = () => {
   this.setState(({
      email:"",
      password:"",
      firstName:"",
      lastName:"",
      error:{}
    }))
  console.log("reseting the app")
 }


navigateToLogin = () => {
    this.props.navigation.navigate("Finalogin")
  }
  handleSignup = () => {
    const { firstName , lastName , email  , password } = this.state
    const data = {
      firstName,
      lastName,
      email,
      password
    }
  console.log( "inside the handle Sign up " , data )
    const error = loginValidation(data)
    console.log( error )
    if (Object.keys( error).length) {
      return this.setState(({ error }))
    }
    this.resetState()
    this.navigateToLogin()
  }
  
  
  render() {

    const { firstName  , lastName , email , password , error } = this.state
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
               <Text>Name:</Text>
                <View style = {styles.fields}>
                   <AntDesign name="user" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'first name'}
                  placeholderTextColor={'#707070'}
                  onChangeText = {(firstName ) => this.resetError( "firstName" , firstName)  }
                 />
              </View>
          </View>
           {  error && error.firstName ? alert(`${ error.firstName}`) : null}
           
           <View style = {styles.fieldMainContainer}> 
               <Text>lastName:</Text>
                <View style = {styles.fields}>
                   <AntDesign name="user" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'last name'}
                  onChangeText = { (lastName) =>  this.resetError("lastName" , lastName )}
                  value = { lastName}
                     />
              </View>
          </View>
            {  error && error.lastName ? alert(`${ error.lastName}`) : null}

           <View style = {styles.fieldMainContainer}> 
               <Text>Email:</Text>
                <View style = {styles.fields}>
                   <EvilIcons name="envelope" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'Email address'}
                  placeholderTextColor={'#707070'}
                onChangeText = { (email) =>  this.resetError("email" , email )}
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
               onChangeText = { (password  ) =>  this.resetError("password" , password )}
                  value = {password}
                  secureTextEntry = {true}
                     />
              </View>
          </View>
           {  error && error.password ? alert(`${ error.password}`) : null}
     
          <View style = {styles.buttonContainer}>
           <TouchableOpacity  style = {[ styles.button  , styles.sign_up ]}  onPress = { this.handleSignup} >
               <Text style = {styles.sign_up_text}> Sign up</Text>
          </TouchableOpacity>
       </View>
        <View style={ styles.tag}>
         <Text style = {{ color:"#707070"}}> Already have an account?</Text>
         <TouchableOpacity onPress = {this.navigateToLogin}> 
         <Text>Sign in </Text></TouchableOpacity>
          
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