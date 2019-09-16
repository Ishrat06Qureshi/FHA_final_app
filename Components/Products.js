import * as React from 'react';
import {Image , Text , View} from 'react-native';
import { Card, CardItem , Button , Icon   } from 'native-base';
import { withNavigation } from "react-navigation"
import { Image_styles , bold_Text } from "../Styles"
 class Products extends React.Component {
  state = {
    data: {},
  };

 
  render() {
     const  { productCode , description  } = this.props
        
    return ( 
       <View>
         <Card>
           <View style ={{ flexDirection:"row" }}>
             <CardItem>
               
                                  <Image  
                    source={  {uri:"https://i.pinimg.com/736x/95/06/09/95060928183afad6de380ab328701731.jpg"} }
                    style={ Image_styles} 
                   />
                   <View style ={{ flexDirection:"column" , paddingLeft:10}}>
                   <Text style={ bold_Text }> Product Description</Text>
                   <Text> { description }</Text>
                   <Text style={ bold_Text }> Product Code</Text>
               <Text numberOfLines = { 0.5 }> { productCode } </Text>
               <Button  transparent onPress = { ( ) => this.props.navigation.navigate("OrderPlacement" , {productCode})} >
                  <Icon name="ios-basket"  style = {{ color:"#FFA500"}} />
                  <Text style = {{ color :"#A9A9A9"}}> Buy Now </Text>
                </Button>
                     </View>   
                     </CardItem> 
                 </View>  
            
            
           </Card>
           </View>
         
      
   
         
    );
  }
}
export default withNavigation(Products)


