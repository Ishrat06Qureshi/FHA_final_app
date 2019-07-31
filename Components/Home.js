import * as React from 'react';
import Modal from "./Modal"

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text , Input , Item , H3  } from 'native-base';
import { Image , Dimensions } from "react-native"


import { View  , StyleSheet } from "react-native"
import Productshow from "./productShow";
import Customerdetails from "./CustomerDetails";
import Placementdetails from "./PlacementDetails"
import Search from "./Search";
export default class Home extends React.Component {
   state = {
     data :{}
   }
  render() {
    console.log( "data",this.state.data)
    return (
      
    <Container>

      {/* <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>
      <Left>
            <Button transparent>
            <Icon 
            name='menu'
             style={{ color: "white"  }}
             />
            </Button>
          </Left>
              <Body> 
                 <Image 
                  source = { require("../assets/fastening-logo.png")}
                  style = {{ 
                    height:90,
                    width:290 ,
                    justifyContent:"center",
                    alignContent:"center",
                 
                  }}
                 />
              </Body> */}
          {/* <Right>
            <Button transparent>
              <Icon name='cart'
              style={{ color: "white" }}
              />
            </Button>
          </Right> */}
      {/* </Header>

      <Content> */}
    
          {/* <Item rounded style ={{ marginTop:20}}>
          <Icon active name='search' /> 
            <Input placeholder='Rounded Textbox'/>
          </Item> */}
          {/* <Item>
          <Text style = {{ marginTop:35 , fontWeight:"bold"  , justifyContent:"center" , fontSize:15 , textAlign:"center"}}> Hot Deal  </Text>
         
          </Item> */}
          <Search/>
        
          {/* <Productshow/> */}
          {/* <Modal /> */}
          {/* <Customerdetails/> */}
          
          
     
       
        {/* <Placementdetails/> */}
      {/* </Content> */}

    </Container>
     
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
   
  }
});
