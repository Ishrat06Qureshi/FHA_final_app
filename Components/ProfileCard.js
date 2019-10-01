import React from "react";
import { View , Text , TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation"
import { Square_card  , White_Text} from "../Styles/index"

const ProfileCard = ( props ) => {

  return(<View style = { Square_card }>
      <TouchableOpacity onPress = { () =>props.navigation.navigate("ProfileStack")}>
          <View style = {{ justifyContent:"center" , alignItems:"center"}}>
              <MaterialIcons name="person-pin" size = {45} color =  "white" />
              <Text style = { White_Text }> Profile data </Text>
          </View>
      </TouchableOpacity>
  </View>)
}
export default withNavigation(ProfileCard)