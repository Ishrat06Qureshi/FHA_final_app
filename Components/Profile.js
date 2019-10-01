import React , { Component } from "react";
import { View , Text , ScrollView  , TouchableOpacity } from "react-native";
import {Entypo} from "@expo/vector-icons";
import {   Profile_Heading  } from "../Styles";
import CustomGreyText from "./CustomGreyText"
import { connect } from "react-redux";


class Profile extends Component {
    
   render() {
      const { UserData } = this.props
       return( <View>
            <View>  
               
                <View style = {{ marginTop:20 , marginBottom:25 , flexDirection:"row"  , justifyContent:"space-evenly"}}>
                   <Text style = { Profile_Heading }> {UserData.companyName.toUpperCase()} </Text>
                   <TouchableOpacity onPress = { () => this.props.navigation.navigate("EditProfile")}>
                   <Entypo name="pencil" size = {30} color = "#828282" style = {{ marginTop:5}}/>
                   </TouchableOpacity>
                 
                 
                 </View>
                 
                   
                 
      
            <ScrollView>
                
             <CustomGreyText
                label = "Customer Number"
                text = {UserData.customerNumber}
             />
              <CustomGreyText
                label = "Contact Person Name"
                text = {UserData.contactPersonName}
             />
              <CustomGreyText
                label = "Email"
                text = {UserData.email}
             />
              <CustomGreyText
                label = "Office Address"
                text = {UserData.officeAddress}
             />
              <CustomGreyText
                label = "Phone Number"
                text = {UserData.phoneNumber}
             />
              
             

              </ScrollView>
                 </View>
       </View>)
   }
}
const mapStateToProps = ( state ) => {
   console.log( state )
 return({
   UserData: state.UserDataReducer.UserData })
}
export default connect( mapStateToProps , null )(Profile)