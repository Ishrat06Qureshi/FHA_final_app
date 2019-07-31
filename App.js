import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';

// // You can import from local files
// import AssetExample from './components/AssetExample';
import Splash from "./Components/NewSplash";
// import Login from "./components/Login";
// import Signup from "./components/Signup"; 

import Home from "./Components/Home"
import { createStackNavigator , createAppContainer , createBottomTabNavigator , createSwitchNavigator  } from "react-navigation";
import Welcome from "./Components/Welcome";
// import NewLogin from "./components/NewLogin";
// import Test from "./components/test";
// import Newsignup from "./components/newSignup";

import Finalsignup from "./Components/Finalsignup";
import Finalogin from "./Components/FinalLogin";
import Modal from "./Components/Modal";
import Search from "./Components/Search";
import Customerdetails from "./Components/CustomerDetails";

 class App extends React.Component {
  render() {

  
    return (
   
   <SwitchNavigator/>
    
    );
  }
}                          
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
            screen:TabNavigator,
            // navigationOptions: {
            //   header: null }
          },
          Customerdetails : {
            screen: Customerdetails,
            navigationOptions: {
            header: null} ,
          } , 
         
  
  } , 
{ initialRouteName:"Home",
      defaultNavigationOptions: {
          header: null
    }
} )


export default createAppContainer(AppStackNavigator)