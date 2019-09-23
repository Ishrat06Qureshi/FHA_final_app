import React , { Component } from "react";
import { View , Text , ScrollView  , TouchableOpacity } from "react-native";
import {Ionicons , 
    MaterialCommunityIcons,
    Feather} from "@expo/vector-icons";
import {  Heading_style , bold_Text } from "../Styles";
import CustomText from "./CustomText"
 


class Profile extends Component {
    
   render() {
       return( <View>
            <View >
                <Feather  name="user"  size = {35 }  color = "orange" style  = {{justifyContent:"center" , 
                alignSelf:"center" , marginTop:15  }}/>
                <TouchableOpacity onPress = { () => this.props.navigation.navigate("EditProfile")}>
                <MaterialCommunityIcons  name="pencil-circle-outline"  size = {35 }  color = "orange" style  = {{justifyContent:"center" , 
                alignSelf:"center" , marginTop:15  }}/>
                </TouchableOpacity>
                
                
                <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:20 , marginBottom:25}}>
            <Text style = { bold_Text }> A.B Mechanical Company </Text>
            </View>
            <ScrollView>
                
             <CustomText
                label = "Customer Number"
                text = { 12456}
             />
              <CustomText
                label = "Contact Person Name"
                text = "Dev"
             />
              <CustomText
                label = "Email"
                text = "dev@gmail.com"
             />
              <CustomText
                label = "Office Address"
                text = "1 Moore Rd, Dartmouth, NS B3B 1J1, Canada"
             />
              <CustomText
                label = "Phone Number"
                text = "0123456789"
             />

              </ScrollView>
                 </View>
       </View>)
   }
}
export default Profile