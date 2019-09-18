
import { createStackNavigator , createAppContainer , createBottomTabNavigator  } from "react-navigation";



import Splash from "../Components/NewSplash";
import Welcome from "../Components/Welcome";
import Finalsignup from "../Components/Finalsignup";
import Finalogin from "../Components/FinalLogin";
import Modal from "../Components/Modal";
import Customerdetails from "../Components/CustomerDetails";
import TabBar from "./tabNavigation";
import PlacementDetails from "../Components/PlacementDetails"
import AllProducts from "../Components/AllProducts";
import MultiForm from "../Components/multistepForm";
import Signup from "../Components/NewSignUp"
import OrderPlacement from "../Components/OrderPlacement"
import  CodeVerify from "../Components/CodeVerification"



import { fromLeft,fromRight } from 'react-navigation-transitions'
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'Welcome'
    && nextScene.route.routeName === 'Finalsignup') {
    return fromLeft(500);
  } 
  // else if (prevScene
  //   && prevScene.route.routeName === 'ScreenB'
  //   && nextScene.route.routeName === 'ScreenC') {
  //   return zoomOut();
  // }
  return fromRight(500);
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
    NewLogin:{
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
   AllProducts:{
    screen:AllProducts,
    navigationOptions: {
     header: null}

  }, 
  MultiForm:{
    screen:Finalsignup,
    navigationOptions: {
     header: null}

  },
  OrderPlacement:{
    screen:OrderPlacement,
    navigationOptions: {
     header: null}
  },
  CodeVerify:{
    screen:CodeVerify,
    navigationOptions: {
     header: null}
  }
 
    
} , 
{ initialRouteName:"Finalsignup",
  transitionConfig:(nav) => handleCustomTransition(nav),
defaultNavigationOptions: {
    header: null
}
})

const AppContainer = createAppContainer( AppStackNavigator)

export default AppContainer