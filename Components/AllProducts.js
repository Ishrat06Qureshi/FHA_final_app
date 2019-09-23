import React , { Component } from "react";
import { View , Text  , FlatList } from "react-native";
import { Spinner } from "native-base"
import axios from "axios";
import Products from "./Products";
import Heading_style from  "../Styles/index"

export default class AllProducts extends Component {
    state = {
        data : [],
        isLoading:true,
        search:"",    
        serverError :"",
        skippedProducts:0,
        loadingMore:false, 
        dataLength:0,
        activeTab : true,
        details:false
      }



      _renderItem = ({item}) => {
  
        return( 
         
            
        <Products
          productCode  = { item.productCode }
          description = { item.description} 
          uri = {item.imageLink}
        />
        
        )
    }

    fetchData = () => {
        const { skippedProducts } = this.state
        const { productName }=  this.props.navigation.state.params
        console.log( skippedProducts)
        axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=5skip=${skippedProducts}&search=${productName}`).
        then(( response)  =>  this.setState( ( preState ) => {
          console.log( preState.data.length)
          return({
            data:skippedProducts === 0 ? Array.from(response.data) : response.data.length? [...preState.data , ...response.data ]  :[...preState.data],
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

_loader = () => {
    return( 
    <View style = {{marginTop:50}}>
      <Spinner color = "red"/>
    </View>
    )
}

    render() {
        const { data , isLoading , skippedProducts } = this.state
        const { productName }=  this.props.navigation.state.params
        // console.log("Skipped Products" , skippedProducts)
        return( <View>
                  <View style = {{ justifyContent:"center" , alignSelf:"center" , marginTop:50 , marginBottom:25}}>
            <Text style = { Heading_style }> { productName } Products </Text>
            </View>
             
            {
                data.length? <FlatList
                data={ data}
              //   ItemSeparatorComponent={() => <View style={{ marginBottom:-350 }} />}
                renderItem={ this._renderItem}
                onEndReached = { this._handleLoadMore }
                // initialNumToRender={8}  
                onEndReachedThreshold={0.5}
                ListFooterComponent= { this._loader}
                keyExtractor={(item, index) => index}

               
                
         />  : <Spinner color="red"/>
            }
                   
                   
        </View>)
    }
    componentDidMount () {
        this.fetchData()
    } 
} 