import * as React from 'react';
import { Dimensions , Image , Text , View } from 'react-native';
import { Container,  Content, Card, CardItem, Thumbnail,Body  , Left, Right , Button , Icon   } from 'native-base';

const screenWidth = Dimensions.get("window").width;
import { withNavigation } from "react-navigation"

 class Products extends React.Component {
  state = {
    data: {},
  };

 
  render() {
     const  { productCode , description  } = this.props

        
    return (


    <Container>
      <Content>
         <Card style = {{ height: 200}}>
           <View style ={{ flexDirection:"row" }}>
             <CardItem >
                                  <Image  
                    source={  {uri:"https://www.fasteninghouseatlantic.com/wp-content/uploads/2019/02/2997-22-1.png"} }
                    style={{                    
                       height: 120,
                     width: 120,
                    //  marginLeft:80, 
                     resizeMode: 'cover',
                   }}/>

                   <View style ={{ flexDirection:"column"}}>
                   <Text style={{fontWeight: 'bold'}}> Product Description</Text>
                   <Text> { description }</Text>
                   <Text style={{fontWeight: 'bold'}}> Product Code</Text>
               <Text numberOfLines = { 0.5 }> { productCode } </Text>
               <Button transparent onPress = { ( ) => this.props.navigation.navigate("PlacementDetails")}>
                  <Icon name="ios-basket"  style = {{ color:"#FFA500"}} />
                  <Text style = {{ color :"#A9A9A9"}}> Buy Now </Text>
                </Button>
                     </View>   
                   
                   
             </CardItem>
           </View>
         </Card>
      </Content>
    </Container>
    );
  }
}
export default withNavigation(Products)


