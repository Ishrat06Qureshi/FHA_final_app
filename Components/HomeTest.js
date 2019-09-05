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
  

  // fetchData = () => {
  //   const { skippedProducts   } = this.state 
  //   console.log("end reached")
  //   axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=${skippedProducts}&search=0`).
  //   then(( response ) => {
  //    const { data } = response 
  //    console.log( "data"  , data.length)
  //     this.setState(( preState ) => {
  //       return( {
  //         dataLength:preState.dataLength+data.length,
  //         data:[...preState.data ,...data],
  //         isLoading:false,
  //         skippedProducts:preState.skippedProducts  + 10,
  //       })
  //     })
  // }).catch( err =>  this.setState (({ serverError : err.response.data })))
  // }
  

  fetchData = () => {
    const { skippedProducts } = this.state

    axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=${skippedProducts}&search=0`).
    then(( response)  =>  this.setState( ( preState ) => {
      return({
        data:skippedProducts === 0 ? Array.from(response.data) : [...preState.data , ...response.data ],
        isLoading : false
      })
    })).catch ( err=> this.setState(({ serverError:err , isLoading:false })))
  }


  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        skippedProducts: prevState.skippedProducts + 10,
        loadingMore: true
      }),
      () => {
        this.fetchData();
      }
    );
  };

   _renderItem = ({item}) => {
  
    return( <Products
      productCode  = { item.productCode}
      description = { item.description} 
    />)
}
  



  // componentDidMount() {
  // //   const { navigation } = this.props;
  // //   this.focusListener = navigation.addListener('didFocus', () => {
  // //   //   console.log("component did Mount")
  // //     // this.fetchData()
  // //     //  axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0`).then(( response ) => {
  // //     //    const { data } =  response
  // //     //    this.setState(({
  // //     //      data,
  // //     //      isLoading:false
  // //     //    }))
  // //     //  })
  // //  this.setState(({ activeTab: true }))
      
  // this.fetchData()
  //   };

     
  componentDidMount () {
    this.fetchData()
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
     
     const {isLoading, data, dataLength , activeTab , skippedProducts , loadingMore  } = this.state
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
          <View>
          

              <View>
          
              
            { 
              isLoading ? <Spinner color='red' />  : 
          
               (
               <View>
                  <FlatList
                      contentContainerStyle={{
                        flex: 1,
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%'
                      }}
                      data={ data}
                      ItemSeparatorComponent={() => <View style={{ marginBottom:-450 }} />}
                      renderItem={ this._renderItem}
                    //   onEndReached = {( {distanceFromEnd})=> {
                    //    if( distanceFromEnd >0)
                    //    console.log(distanceFromEnd)
                    //     {
                    //       this._handleLoadMore()
                    //     } 

                    //   }
                    
                      
                    //    }
                      // onMomentumScrollEnd={  this.fetchData}
                      // initialNumToRender={8}
                      // maxToRenderPerBatch={2}
                      // onEndReachedThreshold={0}
                      // onEndReached = { this.fetchData }
                      // bounces = { false}
                       onEndReached={this._handleLoadMore}
                      onEndReachedThreshold={0.5}
                      ListFooterComponent= {() => {
                         return( loadingMore  ? <Spinner color="red"/> : null) 
                         
                      }}
                      
                      
               />  
               {/* { loadingMore ? <Spinner color = "red"/> : null } */}
               <Text> {skippedProducts}</Text>
               </View> )

              }
          
            </View>
          </View>
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