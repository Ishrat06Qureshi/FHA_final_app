import React  from "react";
import { createStackNavigator , createAppContainer , createBottomTabNavigator  } from "react-navigation";

import Splash from "../Components/NewSplash";
import Welcome from "../Components/Welcome";
import Finalsignup from "../Components/Finalsignup";
import Finalogin from "../Components/FinalLogin";
import Modal from "../Components/Modal";
import Customerdetails from "../Components/CustomerDetails";
import TabBar from "./tabNavigation";
import PlacementDetails from "../Components/PlacementDetails"
import Login from "../Components/NewLogin";
import Signup from "../Components/NewSignUp"
const AppStackNavigator = createStackNavigator({
 
    Splash:{
      screen:Splash,
      navigationOptions: {
        header: null},
      
      },
      Welcome:{
      screen:Welcome,
      navigationOptions: {
        header: null}
    },
    NewLogin:{
      screen:Login,
      navigationOptions: {
        header: null}
    },
      Finalsignup:{
      screen:Signup,
      navigationOptions: {
        header: null}
    },
    Home:{
      screen: TabBar
    },
    PlacementDetails : {
      screen: PlacementDetails,
      navigationOptions: {
      header: null} ,
    } , 
   Modal:{
     screen:Modal,
     navigationOptions: {
      header: null}

   }, 
 
    
} , 
{ initialRouteName:"NewLogin",
defaultNavigationOptions: {
    header: null
}
} )

const AppContainer = createAppContainer( AppStackNavigator)

export default AppContainer