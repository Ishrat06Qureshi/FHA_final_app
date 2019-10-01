import React from "react";
import { View , Text , TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation"
import { Square_card , White_Text } from "../Styles/index"

const OrderListCard = ( props ) => {
  return(<View style = { Square_card }>
      <TouchableOpacity onPress = { () =>props.navigation.navigate("Profile")}>
          <View style = {{ justifyContent:"center" , alignItems:"center"}}>
              <Octicons name="checklist" size = {45} color =  "white" />
              <Text style = { White_Text }> Order List  </Text>
          </View>
      </TouchableOpacity>
  </View>)
}
export default withNavigation(OrderListCard)