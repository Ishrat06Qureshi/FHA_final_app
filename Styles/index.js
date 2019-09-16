import {  Dimensions } from "react-native";
import Primary_Color from "./colors";
const Height  = Dimensions.get("window").height
const red = "#DA011D"
const white = "white"

const cylinderButton = {
      height:50 , 
      width:250,
      borderRadius:25,
      borderColor:red,
      borderWidth:1

}


const button_Text = {
    fontSize:15 , 
    lineHeight:50 , 
    textAlign:"center",
}
export const Red_Button = {
    ...cylinderButton,
    backgroundColor:red
}

export const White_Button = {
    ...cylinderButton,
    backgroundColor:white
}
export const Red_Text = {
    ...button_Text,
    ...bold_Text,
    color:red
}
export const White_Text = {
   ...button_Text,
   ...bold_Text,
    color:white
}
export const red_Color_Button = {
    ...cylinderButton,
    backgroundColor:"#DA011D"
}

export const bold_Text = {
    fontWeight: 'bold'
}
export const item = {
    width:"85%"
}
export const container = {
         flex:1,
         justifyContent:"center",
         alignItems:"center",
}
export const icon_style = {
    color:"#DA011D",
    height:20
}
export const Button = {
    height:"50%",
    width:"80%",
    borderColor: "#DA011D" ,
    backgroundColor: "#DA011D",
    borderWidth:1
}
export const Container = {
    flex:1,
    backgroundColor: "white",
   
}
export const HeadingContainer = {
    flexDirection:"row" , 
    justifyContent:"space-between" ,
     marginBottom:10 ,
      marginTop:25
}


export const Heading_style = {
    ...bold_Text,
    color:"#DA011D" , 
     paddingLeft:12 , 
     fontSize:18
}

export const Heading_Text = {
    marginTop:5,
    color:"#999999"
}
export const label_styles = {
    fontSize:12 , 
    color :"#DA011D" , 
    fontWeight:"bold"
}

export const Input_styles = {
    paddingTop: 10,
           
            paddingBottom: 10,
            paddingLeft: 0,
            color: '#424242',
            borderBottomWidth:0.5,
            borderBottomColor:"#DA011D"
}

export const Image_styles = {
    height:"80%",
    width: "25%",
   resizeMode: 'contain',
}