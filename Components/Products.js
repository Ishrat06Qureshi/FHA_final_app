import * as React from 'react';
import { Dimensions , Image , Text , View } from 'react-native';
import { Container,  Content, Card, CardItem, Thumbnail,Body  , Left, Right , Button , Icon   } from 'native-base';

const screenWidth = Dimensions.get("window").width
export default class Products extends React.Component {
  state = {
    data: {},
  };
  render() {
     const  { productCode , description } = this.props
    //  console.log("image URI item ", imageUri.images[0].src );

    return (
    //  <Container>
        
    //     <Content>
    //         <Card >
         
    //           {/* <Left>
                
    //           <CardItem > 
            
                //     {/* <Image  
                //     source={  {uri:"https://www.fasteninghouseatlantic.com/wp-content/uploads/2019/02/2997-22-1.png"} }
                //     style={{                    
                //        height: 80,
                //      width: 200,
                //      marginLeft:80, 
                //     //  resizeMode: 'cover',
                //    }}
                
                //  />    */}
             
    //           {/* </CardItem>
    //           </Left>
    //           <Right>
                
    //           <CardItem  listItemPadding={0}>
    //             {/* <CardBody> */}
    //             {/* <Text style = {{ fontWeight:"bold"}}> { productCode } </Text>
    //             {/* </CardBody> */}
                        
                        
    //           {/* </CardItem>
    //           <CardItem> */} */}
    //             {/* <CardBody> */}
    //             {/* <Text style = {{ color :"#707070"}}> { description } </Text> */}
    //             {/* </CardBody> */}
    //           {/* </CardItem>
    //           <CardItem>
    //           <Button style = {{ borderColor:"#DA011D" , borderWidth:0.5 , backgroundColor:"white" }} >
    //               <Text> Buy Now </Text>
    //             </Button>
    //           </CardItem>
    //           </Right>  */}
    //              <View  style = {{ flexD:""}}>
    //                <CardItem></CardItem>
    //                <CardItem></CardItem>

    //              </View>
    //         </Card>

    //     </Content>
    //  </Container>

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
               <Text> { productCode } </Text>
               <Button transparent>
                  <Icon name="ios-basket"  style = {{ color:"#FFA500"}} />
                  <Text style = {{ color :"#A9A9A9"}}> Buy Now </Text>
                </Button>
                     </View>   
                   
                   
             </CardItem>
             {/* <CardItem style = {{ flexDirection:"column" , marginLeft:-25}}>
             <Text> { description }</Text>
               <Text> { productCode } </Text>
            
            
             </CardItem> */}
           </View>
         </Card>
      </Content>
    </Container>
    );
  }
}



