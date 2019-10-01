import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import ProfileCard from "./ProfileCard";
import OrderListCard from "./orderListCard"
const ProfileGrid  = () => {
  return(<View style = {{ flex:1, justifyContent:"center" , alignContent:"center" }}>
           <View style = {{ flexDirection:"row" , justifyContent:"space-evenly",  alignItems:"center"}}>
               <ProfileCard/>
               <OrderListCard/>
           </View>
  </View>)
}

export default ProfileGrid