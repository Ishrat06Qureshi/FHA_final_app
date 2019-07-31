import * as React from 'react';
import {
   View , 
   Text ,
   TouchableOpacity,
   StyleSheet } 
   from "react-native";

   import { Entypo } from "@expo/vector-icons"

   export default class Welcome extends React.Component {
     navigateToLogin = () => {
       console.log("login")
        this.props.navigation.navigate("Finalogin")
     }

     navigateToSignup = () => {
         console.log("sign up")
        this.props.navigation.navigate("Finalsignup")
     }
   render() {
     return(<View  style = {styles.container}>
        <View style = { styles.text_container}>
        <Text style = {styles.topText}> Welcome to FHA </Text>


         <Text style = {styles.bottomText}> Explore Us </Text>
        </View>

        <View style = { styles.button_container }>
          <TouchableOpacity style = { [styles.button , styles.login_button]} onPress = { this.navigateToLogin } >
          <Text style = { styles.login_text}> Log in </Text>
          </TouchableOpacity>

           <TouchableOpacity  style = {[ styles.button  , styles.sign_up ]} onPress = { this.navigateToSignup }>
               <Text style = {styles.sign_up_text}> Sign up</Text>
          </TouchableOpacity>

        </View>
     </View>)
   }
   }

   const styles = StyleSheet.create({
     container:{
       flex:1,
       height:"100%",
       width:"100%",
       backgroundColor:"#fff"
     } ,
     topText:{
       color:	"#707070",
       fontSize:32
     },
     bottomText:{
         color:	"#707070",
         fontSize:25
     },
     text_container:{
        flex:3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:200,
        marginTop:200
     },
     button :{
       height:50,
       width:200,
     },
     login_button :{
    backgroundColor:"#DA011D",
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign:"center",
    marginBottom:15
     },
     button_container :{
        flex:3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:80
     },
     login_text:{
       color:'white',
       textAlign: 'center',
       lineHeight:50
     },
     sign_up :{
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#DA011D',
    textAlign:"center" ,
  },
     sign_up_text :{
       color:'#707070',
       textAlign: 'center',
       lineHeight:50,
       
     }

   })