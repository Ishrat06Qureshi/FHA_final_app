import * as React from 'react';
import { Dimensions , Image } from 'react-native';
import { Container,  Content, Card, CardItem,  Text ,  Left, Right   } from 'native-base';
const screenWidth = Dimensions.get("window").width
export default class Products extends React.Component {
  state = {
    data: {},
  };
  render() {
     const  { productCode , description } = this.props
    //  console.log("image URI item ", imageUri.images[0].src );

    return (
     <Container>
        
        <Content>
            <Card >
         
              <Left>
                
              <CardItem > 
            
                    <Image  
                    // source={  {uri: imageUri.images[0].src } }
                    style={{                    
                       height: 80,
                     width: 200,
                     marginLeft:80, 
                     resizeMode: 'cover',
                   
                   }}
                
                 />   
              
              </CardItem>
              </Left>
              <Right>
                
              <CardItem  listItemPadding={0}>
                {/* <CardBody> */}
                <Text style = {{ fontWeight:"bold"}}> { productCode } </Text>
                {/* </CardBody> */}
                        
                        
              </CardItem>
              <CardItem>
                {/* <CardBody> */}
                <Text style = {{ color :"#707070"}}> { description } </Text>
                {/* </CardBody> */}
                  
                  

              </CardItem>
             
              </Right>
              
            </Card>

        </Content>
     </Container>
    );
  }
}



