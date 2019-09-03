import  React , {Component} from 'react';
import { Text, View, StyleSheet, ImageBackground , Image  , TextInput , TouchableOpacity , CheckBox } from 'react-native';
import {EvilIcons ,AntDesign} from "@expo/vector-icons";
import validation_functions from "../utils/validation_functions";
import LoginMiddleware from "../Middleware/LoginMiddleware";
import { connect } from "react-redux";

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
                   onChangeText = {( email ) => this.handleInputChange("email" , email)}
                  value = {email}
                
                     />
              </View>

          </View>
           
           { validation_functions.displayValidationErrors("email")}
           <View style = {styles.fieldMainContainer}> 
               <Text>Password:</Text>
                <View style = {styles.fields}>
                   <AntDesign name="eyeo" size={20}   color="#707070" style = {styles.image}/>
                     <TextInput  style ={styles.text}
                     placeholder={'password'}
                  placeholderTextColor={'#707070'}
                   onChangeText = {( password ) => this.handleInputChange("password" , password )}
                  value = { password }
                  secureTextEntry = {true}
                     />
              </View>
          </View>
          { validation_functions.displayValidationErrors("password")}
            

          <View style = {styles.buttonContainer}>
           <TouchableOpacity  style = {[ styles.button  , styles.login ]} 
            onPress = { this.handleSubmit }
            
            >
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