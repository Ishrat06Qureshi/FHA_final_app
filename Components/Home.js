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
import LoadingAction from "../Actions/LoadingAction";
import { withNavigation } from "react-navigation"
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';

let TabActive = true 


class Home extends React.Component {
  constructor ( props ) {
  super( props )
  this.onEndReachedCalledDuringMomentum = true
      this.state = {
        data : [],
        isLoading:true,
        search:"",    
        serverError :"",
        skippedProducts:0,
        loadingMore:false, 
        dataLength:0,
        activeTab : true 
      }
  }

  

  // 
  

  fetchData = () => {
    const { skippedProducts   } = this.state 
    console.log("end reached")
    axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=${skippedProducts}&search=0`).
    then(( response ) => {
     const { data } = response 
     console.log( "data"  , data.length)
      this.setState(( preState ) => {
        return( {
          dataLength:preState.dataLength+data.length,
          data:[...preState.data ,...data],
          isLoading:false,
          skippedProducts:preState.skippedProducts  + 10,
        })
      })
  }).catch( err =>  this.setState (({ serverError : err.response.data })))
  }
  
   _renderItem = ({item}) => {
  
    return( <Products
      productCode  = { item.productCode}
      description = { item.description} 
    />)
}
  



  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
    //   console.log("component did Mount")
      // this.fetchData()
      //  axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0`).then(( response ) => {
      //    const { data } =  response
      //    this.setState(({
      //      data,
      //      isLoading:false
      //    }))
      //  })
   this.setState(({ activeTab: true }))
      
    });

     
    
    
    
  }

   didBlurSubscription = this.props.navigation.addListener(
    'didBlur', () => this.setState(({  activeTab:false }))
  );
  
  // Remove the listener when you are done


  componentWillUnmount () {
    didBlurSubscription.remove();
  }
componentWillReceiveProps ( nextProps ) {
 console.log("nextProps" , nextProps )
} 
  render() {
     
     const {isLoading, data, dataLength , activeTab   } = this.state
     const { loadingState } = this.props

     console.log("Tab status", activeTab )
    return ( 
    
    <Container>
          <Header style = {{ backgroundColor:"#DA011D" , height:120 , width: Dimensions.get("window").width}}>

            <Body>
              <Text style = {{ color:"white"  , fontWeight:"bold" , textAlign:"center"}}> 
              Fastening House Atlantic </Text>


              </Body>
          </Header>
          <Content>
          

              <View>
          
              
            { 
              isLoading ? <Spinner color='red' />  : 
          
               (
               <View>
                  <FlatList
                      data={ data}
                      ItemSeparatorComponent={() => <View style={{ marginBottom:-450 }} />}
                      renderItem={ this._renderItem}
                      onEndReached = {()=> 
                        this.fetchData()
                       }
                      initialNumToRender={8}
                      maxToRenderPerBatch={2}
                      onEndReachedThreshold={0.01}
                      
               />  
               {/* { loadingMore ? <Spinner color = "red"/> : null } */}
               <Text> { dataLength}</Text>
               </View> )

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
    loadingState: state.loadingReducer.loadingState
  })
}

  const mapDispatchToProps  = ( dispatch ) => {
    return({
      LoadingOn: () => { dispatch(LoadingAction.LOADING_ON_ACTION( true ))},
      LoadingOff: () => { dispatch(LoadingAction.LOADING_OFF_ACTION( false ))}
    })
  }

export default withNavigation(connect(mapStateToProps , mapDispatchToProps  )(Home))


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