import React from "react";
import { View , Image  } from "react-native";
import Input from "./Input"
import Button from "./Button"
import { disable_Button_Style ,
  disable_Text_Style , 
  enable_Button_Style ,
   enable_Text_Style} from "../Styles"
import validation_functions from "../utils/validation_functions"; 
const Address = ( props ) => {
    const { handleInputChange , handleNext } = props 
    const disable = validation_functions.isFormValid(["lineOne","city","province" , "postalCode" ])
return(
  <View style = {{
    flex:1 , 
    justifyContent:"center" ,
    alignItems:"center"
   }}>
            <Image
                  source = {require("../assets/fastening.png")}
                  style = {{
                    height:135,
                    width:"100%",
                    resizeMode:"contain"
                  }}
                />
           
             <View style = {{  justifyContent:"center" }}>
                      <Input
                      label = "Line 1"
                      placeHolderText=""
                      isSecureTextEntry = { false}
                      onChangeText= { handleInputChange}
                      errorName = "lineOne" 
                      keyBoardType = "default"
                      />  
                        <Input
                      label = "Line 2"
                      placeHolderText=""
                      isSecureTextEntry = { false}
                      onChangeText= { handleInputChange}
                      errorName = "lineTwo" 
                      keyBoardType = "default"
                      />  
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
           
             
          <Button 
           onPressMethod = { handleNext }
           text = "Submit"
           buttonStyle = {disable ? enable_Button_Style : disable_Button_Style}
           textStyle = { disable ? enable_Text_Style  :disable_Text_Style}
           disable = { disable}
           />
          </View>
          </View>
         
        )
}

export default Address 