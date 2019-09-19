import React from "react";
import { View , Text } from "react-native";
import Input from "./Input"
const AddressForm = ( props ) => {
  const { handleInputChange} = props 
    return(<View style = {{  justifyContent:"center" }}>
    <Input
    label = "Line 1"
    placeHolderText=""
    isSecureTextEntry = { false}
    onChangeText= { handleInputChange}
    errorName = "lineOne" 
    keyBoardType = "default"
    />  
      {/* <Input
    label = "Line 2"
    placeHolderText=""
    isSecureTextEntry = { false}
    onChangeText= { handleInputChange}
    errorName = "lineTwo" 
    keyBoardType = "default"
    />   */}
      <Input
    label = "City"
    placeHolderText="Toronto"
    isSecureTextEntry = { false}
    onChangeText= { handleInputChange}
    errorName = "city" 
    keyBoardType = "default"
    />  
  <View style = {{ flexDirection:"row" , justifyContent:"space-between"}}>
        <Input
          label = "Province"
          placeHolderText="Alberta"
          isSecureTextEntry = { false}
          onChangeText= { handleInputChange}
          errorName = "province" 
          keyBoardType = "default"
          />  
            <Input
          label = "Postal Code"
          placeHolderText="M4B 1B3"
          isSecureTextEntry = { false}
          onChangeText= { handleInputChange}
          errorName = "postalCode" 
          keyBoardType = "default"
          />  
   </View>
   </View>
)
}

export default AddressForm 