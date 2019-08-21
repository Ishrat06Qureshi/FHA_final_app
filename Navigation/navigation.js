import React  from "react";
import { createStackNavigator , createAppContainer , createBottomTabNavigator  } from "react-navigation";

import Splash from "../Components/NewSplash";
import Welcome from "../Components/Welcome";
import Finalsignup from "../Components/Finalsignup";
import Finalogin from "../Components/FinalLogin";
import Modal from "../Components/Modal";
import Customerdetails from "../Components/CustomerDetails";
import TabBar from "./tabNavigation";

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
    Finalogin:{
      screen:Finalogin,
      navigationOptions: {
        header: null}
    },
      Finalsignup:{
      screen:Finalsignup,
      navigationOptions: {
        header: null}
    },
    Home:{
      screen: TabBar
    },
    Customerdetails : {
      screen: Customerdetails,
      navigationOptions: {
      header: null} ,
    } , 
   Modal:{
     screen:Modal,
     navigationOptions: {
      header: null}

   }, 
 
    
} , 
{ initialRouteName:"Splash",
defaultNavigationOptions: {
    header: null
}
} )

const AppContainer = createAppContainer( AppStackNavigator)

export default AppContainer