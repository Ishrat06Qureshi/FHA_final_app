import React  , { Component } from "react";
import { View   } from "react-native";


export default class Order extends Component {
    
    render() {
          return( <View>
           
        </View>)
    }

    componentDidMount(){
     this.props.navigation.navigate("Welcome")
    }
}