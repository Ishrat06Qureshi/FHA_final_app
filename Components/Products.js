import * as React from 'react';
import { View, StyleSheet, Image  ,TouchableOpacity , Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text , Badge, Left, Right  , CardBody } from 'native-base';

percentage_Calculator = ( sale_price , regular_price  ) => {
    const result =   ( ( regular_price-sale_price)/ regular_price ) * 100  
    return Math.round( result )
}


const screenWidth = Dimensions.get("window").width
export default class Products extends React.Component {
  state = {
    data: {},
  };
  render() {
     const  { name, sale_price , regular_price , imageUri } = this.props
    //  console.log("image URI item ", imageUri.images[0].src );

    return (
     <Container>
        
        <Content>
            <Card  style = {{ marginTop:20}}>
         
              <Left>
                
              <CardItem > 
            
                   
                  {/* <Image  
                    source={  {uri: data.src } }
                    style={{                    
                       height: 180,
                     width: 200,
                     marginLeft:80, 
                     resizeMode: 'cover',
                   
                   }}
                
                 />  */}
              
              </CardItem>
              </Left>
              <Right>
                
              <CardItem>
                         <Text style = {{ fontWeight:"bold"}}> { name} </Text>
              </CardItem>
              <CardItem>
                    <Text style = {{ color :"#707070"}}> { regular_price } </Text>

              </CardItem>
             
              </Right>
              
            </Card>

        </Content>
     </Container>
    );
  }
}



