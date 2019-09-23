import { createDrawerNavigator , createStackNavigator} from "react-navigation"


import Order from "../Components/Order";
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile";
import TabBar from "./tabNavigation"

const ProfileStack  =createStackNavigator({
    Profile:{
        screen:Profile,
        navigationOptions: {
         header: null},
      },
      EditProfile:{
        screen:EditProfile,
        navigationOptions: {
         header: null},
      }

})
const HomeTab = createStackNavigator({
    Home:TabBar,
})
const Sidedrawer = createDrawerNavigator({
    HomeTab,
    Order,
    ProfileStack
    
})

export default Sidedrawer