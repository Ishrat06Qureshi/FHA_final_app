import React from "react";
import {  createBottomTabNavigator  } from "react-navigation";
import {AntDesign , MaterialIcons} from "@expo/vector-icons";

import Home from "../Components/Home";
import Order from "../Components/Order";
import Logout from "../Components/Logout";
import Search from "../Components/Search";

const TabBar = createBottomTabNavigator(
    {
            Home: {
            screen : Home ,
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
            <AntDesign name='home' size={25} color={tintColor} /> )})
            },
            Search:{ 
            screen : Search , 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <AntDesign name='search1' size={25} color={tintColor} /> )})
            },
            Order:{ 
            screen : Order , 
            navigationOptions : () => ({  tabBarIcon: ({tintColor}) => (
                <MaterialIcons name = 'add-shopping-cart' size={25} color={tintColor} /> )})
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

  export default TabBar 