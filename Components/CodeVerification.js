import React , { Component} from "react";
import { View , Text } from "react-native";
import { Spinner } from "native-base"
import Input from "./Input";
import { Heading_style} from "../Styles"

export default class CodeVerify extends Component {
    state = {
        code : "",
        isLoading : false
    }

    handleInputChange = ( fieldName , value) => {
        const { code } = this.state
        this.setState(({ [fieldName] : value}) , () => {
            if( code.length === 13 ) 
            {
                this.setState(({ isLoading : true}))
            }
        })
        
        
        
        
        
    
      }

    
    
    render() {
        const { isLoading } = this.state
        return( <View style ={{ justifyContent:"center" , alignItems:"center"}}>
               <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> Code Verification</Text>
            </View>
            { !isLoading ? <View>
                
                <Text> Please enter the Code</Text>
                  
                <Input
                      label = "Code"
                      placeHolderText="7486547915"
                      isSecureTextEntry = { false}
                      onChangeText= { this.handleInputChange} 
                      errorName = "email" 
                      />
               </View>: <Spinner color = "red"/> }
            
            
        </View>)
    }
}