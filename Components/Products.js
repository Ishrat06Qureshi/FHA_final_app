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
     const  { name, sale_price , regular_price  } = this.props
    return (
     <Container>
        
        <Content>
            <Card  style = {{ marginTop:20}}>
            <Badge warning>
            <Text>Sale </Text>
          </Badge>
              <Left>
                
              <CardItem > 
            
                  
                <Image  
                   source={{uri: `${this.props. imageUri}`}}
                   style={{
                    height: 180,
                    width: 200,
                    marginLeft:80,
                    resizeMode: 'cover',
                   
                  }}
                
                />
              
              </CardItem>
              </Left>
              <Right>
                
              <CardItem>
                         <Text style = {{ fontWeight:"bold"}}> { name} </Text>
              </CardItem>
              <CardItem>
                    <Text style = {{ color :"#707070"}}>  was { regular_price } </Text>

              </CardItem>
              <CardItem>
              <Text>  now { sale_price} </Text>
              <Text> Save up to  <Text style = {{ color:"#DA011D"}}> { percentage_Calculator( this.props.sale_price ,this.props.regular_price )} % </Text></Text>
              </CardItem>
              </Right>
              
            </Card>

        </Content>
     </Container>
    );
  }
}



