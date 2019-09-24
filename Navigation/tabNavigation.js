import React from "react";
import {  createBottomTabNavigator, createMaterialTopTabNavigator  } from "react-navigation";
import {AntDesign , MaterialIcons , Ionicons} from "@expo/vector-icons";

import Home from "../Components/newHome";
import Order from "../Components/Order";
import Logout from "../Components/Logout";
import Search from "../Components/Search";
import Cart from "../Components/Cart";
import EditProfile from "../Components/EditProfile";
import Profile from "../Components/Profile"
import {HomeStack, ProfileStack} from "./StackNavigators"


const ProfileTab = createMaterialTopTabNavigator({
    Profile:{
        screen : ProfileStack ,
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
            <AntDesign name='home' size={25} color={tintColor} /> )})
    }
})

const TabBar = createBottomTabNavigator(
    {
            Home: {
            screen : HomeStack ,
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
            <AntDesign name='home' size={25} color={tintColor} /> )})
            },
            Search:{ 
            screen : Search, 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <AntDesign name='search1' size={25} color={tintColor} /> )})
            },
            Order:{ 
            screen : Cart, 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <MaterialIcons name = 'add-shopping-cart' size={25} color={tintColor} /> )})
            },
            Profile:{ 
                screen : ProfileTab, 
                navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                    <Ionicons name = 'ios-person' size={25} color={tintColor} /> )})
                },
            Logout : {
            screen:Logout , 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <AntDesign name='logout' size={25} color={tintColor} />)})
            }
   } ,
   {
            tabBarOptions: {
            activeTintColor: '#DA011D',
            inactiveTintColor: '#707070',
            style:{ height: 70}
            }
  }
  )

  export default  TabBar