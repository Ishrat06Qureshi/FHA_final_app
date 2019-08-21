import * as React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text , Input , Item , H3 , Spinner , InputGroup } from 'native-base';
import { Image , Dimensions , View  , StyleSheet ,  FlatList} from "react-native"
import Products from "./Products";
// import { encode } from "base-64";
import axios from "axios";
import { connect } from "react-redux"
import { GET_PRODUCTS } from "../Actions/ProductsAction";
import  { LOADING } from "../Actions/LoadingAction"
import productMiddleware from "../Middleware/ProductMiddleware"

class Home extends React.Component {
  state = {
    data : [],
    isLoading:true,
    search:"",
    serverError :""
  } 

  // 
  
  _renderItem = ({item}) => {
  
    return( <Products
      productCode  = { item.productCode}
      description = { item.description} 
    />)
} 

componentDidMount = () => {
//   axios.get("http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0").
//   then(( response ) => {
//    const { data } = response 
//   this.setState(({ 
//      data,
//      isLoading:false,
//   })) 
// }) 
//   .catch( err =>  this.setState (({ serverError : err.response.data })))
//  this.props.dispatch(Loading_Action(true))
// const { dispatch } = this.props;
// productMiddleware( dispatch )
// this.props.ProductFetch()
    const { dispatch } = this.props   
    console.log("dispatch" , dispatch )
   productMiddleware( dispatch )
}
  render() {
     const { isLoading  } = this.props
     const { data } = this.state

     console.log( "isloading", isLoading  )
    return ( 
    
    <Container>
          <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>

            <Body>
              <Text style = {{ color:"white"  , fontWeight:"bold" , textAlign:"center"}}> 
              Fastening House Atlantic </Text>


              </Body>
          </Header>
          <Content>
             {/* <Item style = {{ marginTop:50}} >
                        <Icon active name='ios-search' style = {{ marginLeft:25}}/> 
                          <Input placeholder='Search Product'
                          style = {{ marginLeft:15 , width:80}}
                          value = { this.state.search}
                          onChangeText = { ( search ) => 
                            this.setState(({search})) 
                            // this.fetchData()
                          }
                          onSubmitEditing = {() => this.fetchData()}
                          />
                          <Button onPress = { () => this.fetchData}  Title = "Go"/>

            </Item> */}

              <View>
          
              
            { 
              isLoading ? <Spinner color='red' />  : 
          
              <FlatList
              data={ data}
              ItemSeparatorComponent={() => <View style={{ marginBottom:-450 }} />}
              renderItem={ this._renderItem} />

              }
          
            </View>
          </Content>
    </Container>
    );
  }

}

const mapStateToProps = ( state ) => {
  console.log( state )
  return ({
    isloading: state.Loading 
  })
}

export default connect(mapStateToProps , null  )(Home)


// fetch from the woo commerce API
// fetchData = (  ) => {
  //   const { search } = this.state
  //   this.setState(({ isLoading:true}))
  //   const username = "ck_083aa754e82793e095856bf0ab682d699725def0"
  //   const password  ="cs_0771387d4b8f5bcc2a41f6f20e3f966e57193b0a"
  
  //   fetch(
  //     `https://www.fasteninghouseatlantic.com/wp-json/wc/v3/products?search=${search}`
  
      
      
  //     , {
  //   headers:{
  //     'Authorization':'Basic '+ encode(username + ":" + password),  
  //      },
  //   method:"GET" }).
  //   then(( response ) =>  response.json()).
  //   then(( data) =>   
    
  //   this.setState(({
  //      data,
  //      isLoading:false
      
  //     }))
   
  //     )

  // }

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