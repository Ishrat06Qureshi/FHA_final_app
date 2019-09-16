import React , { Component } from "react";
import { View , Text  , FlatList } from "react-native";
import { Spinner } from "native-base"
import axios from "axios";
import Products from "./Products";

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
          history = { this.props.history}
        />
        
        )
    }

    fetchData = () => {
        const { skippedProducts } = this.state
        const { productName }=  this.props.navigation.state.params
        axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=10&skip=${skippedProducts}&search=${productName}`).
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
            skippedProducts: prevState.skippedProducts + 5,
            loadingMore: true
          }),
          () => {
            this.fetchData();
          }
        );
      };

_loader = () => {
    return( <Spinner color = "red"/>)
}

    render() {
        const { data , isLoading } = this.state
        console.log("Data" , data)
        return( <View>
            {
                data.length? <FlatList
                data={ data}
              //   ItemSeparatorComponent={() => <View style={{ marginBottom:-350 }} />}
                renderItem={ this._renderItem}
                onEndReached = { this._handleLoadMore }
                initialNumToRender={8}  
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