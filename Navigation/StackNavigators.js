import { createStackNavigator} from "react-navigation"

import Home from "../Components/newHome";
import AllProducts from "../Components/AllProducts";
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile"

export const HomeStack = createStackNavigator({
    Home : {
        screen: Home,
        navigationOptions: {
        header: null} ,
    },
    AllProducts : {
        screen: AllProducts,
        navigationOptions: {
        header: null} ,
    }
})

const ProfileViewStack = createStackNavigator({
    Profile : {
        screen: Profile,
        navigationOptions: {
        header: null} ,
    },
    EditProfile : {
        screen: EditProfile,
        navigationOptions: {
        header: null} ,
    }
})
export const ProfileStack = createStackNavigator({
    Profile:{
        screen:ProfileViewStack,
        navigationOptions: {
            header: null} ,
    }
})