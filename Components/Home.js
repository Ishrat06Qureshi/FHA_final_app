import * as React from 'react';
import Modal from "./Modal"

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text , Input , Item , H3 , Spinner  } from 'native-base';
import { FlatList } from "react-native"
import { Image , Dimensions } from "react-native"


import { View  , StyleSheet } from "react-native"
import Productshow from "./productShow";
import Customerdetails from "./CustomerDetails";
import Placementdetails from "./PlacementDetails"
import Search from "./Search";
import Products from "./Products";
import { encode } from "base-64";

export default class Home extends React.Component {
  state = {
    data : [],
    isLoading:false,
    search:""
  } 

  fetchData = (  value ) => {
    console.log(value)
    this.setState(({ isLoading:true}))
    const username = "ck_083aa754e82793e095856bf0ab682d699725def0"
    const password  ="cs_0771387d4b8f5bcc2a41f6f20e3f966e57193b0a"
  
    fetch(
      `https://www.fasteninghouseatlantic.com/wp-json/wc/v3/products?search=${value}`
  
      
      
      , {
    headers:{
      'Authorization':'Basic '+ encode(username + ":" + password),  
       },
    method:"GET" }).
    then(( response ) =>  response.json()).
    then(( data) =>   
    
    this.setState(({
       data,
       isLoading:false
      
      }))
   
      )

  }
  _renderItem = ({item}) => {
  
    return( <Products
      name  = { item.name}
      regular_price = { item.regular_price}
      sale_price = { item.sale_price}
      description = { item.description} 
      imageUri = { item }
/>)
} 
  render() {
     const { isLoading , data } = this.state
    
    return (
      
    
    
    <Container>
    <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>

      <Body>
        <Text style = {{ color:"white"  , fontWeight:"bold" , textAlign:"center"}}> 
        Fastening House Atlantic </Text>
        </Body>
    </Header>
    <Content>
    <Item style = {{ marginTop:50}} >
                   <Icon active name='ios-search' style = {{ marginLeft:25}}/> 
                    <Input placeholder='Search Product'
                     style = {{ marginLeft:15 , width:80}}
                     value = { this.state.search}
                     onChangeText = { ( search ) => this.setState(({search})) }
                     onSubmitEditing = {() => this.fetchData()}
                    />
                    <Button onPress = { () => this.fetchData}  Title = "Go"/>
                   </Item>
        <View>
       
       { isLoading ? <Spinner color='red' />  : <FlatList
         data = { data  }
      
        renderItem = { this._renderItem}
      
      />}
      </View>
    </Content>
    <Productshow/>
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


// <Container>

    //   <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>
    //   <Left>
    //         <Button transparent>
    //         <Icon 
    //         name='menu'
    //          style={{ color: "white"  }}
    //          />
    //         </Button>
    //       </Left> 
    //           {/* <Body> 
    //              <Image 
    //               source = { require("../assets/fastening-logo.png")}
    //               style = {{ 
    //                 height:90,
    //                 width:290 ,
    //                 justifyContent:"center",
    //                 alignContent:"center",
                 
    //               }}
    //              />
    //           </Body> */} */}
    //      <Right>
    //         <Button transparent>
    //           <Icon name='cart'
    //           style={{ color: "white" }}
    //           />
    //         </Button>
    //       </Right> 
    //   </Header>

    //   <Content> 
    
          /* <Item rounded style ={{ marginTop:20}}>
          <Icon active name='search' /> 
            <Input placeholder='Rounded Textbox'/>
          </Item> */
          /* <Item>
          <Text style = {{ marginTop:35 , fontWeight:"bold"  , justifyContent:"center" , fontSize:15 , textAlign:"center"}}> Hot Deal  </Text>
         
          </Item> */
          /* <Search/> */
        
          /* <Productshow/> */
          /* <Modal /> */
          /* <Customerdetails/> */
          
          
     
       
        /* <Placementdetails/> */
        /* <Item style = {{ marginTop:50}} >
                   <Icon active name='search' style = {{ marginLeft:25}}/> 
                    <Input placeholder='Search Product' style = {{ marginLeft:15 , width:80}}/>
                   </Item>
      </Content>

    



    </Container> */