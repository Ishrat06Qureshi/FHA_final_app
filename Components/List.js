import React , { Component } from "react";
import { FlatList , View, Text , Dimensions } from "react-native";
import { Spinner } from "native-base";
import axios from "axios";

const ScreenHeight = Dimensions.get("window").height

import Products from "./Products";
 class List extends Component {
  state = {
      data:[],
      err:""
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
   render() {
       const {  data , err } = this.state
       return (
           <View style = {{ flex:1 , }}>
               {/* { err ? <Text>{err}</Text>: data.length ?  <FlatList
                data = { data }
                renderItem = {( item ) => <Text>{item.productCode}</Text> }
                ListFooterComponent = {() => <Spinner color = "red" />}
               />:<Spinner color = "red"/>} */}
               {/* {
                    data.length ?  <FlatList
                    data = { data }
                    // renderItem = {this._renderItem }
                    renderItem = { ({item}) => <Text>{item.productCode}</Text>}
                   
                   />:<Spinner color = "red"/>}
               } */}
               {
                   data.length?  <FlatList
                   data={ data}
                ItemSeparatorComponent = { () => <View style = {{ marginTop:ScreenHeight*0.0388}}></View>}
                   renderItem={ this._renderItem}
                   
                   keyExtractor={(item, index) => item._id}

                  
                    
            />  : <Spinner color = "red"/>
               }
           </View>
               
       );
   } 
   componentDidMount ( props ) {
       console.log("url", this.props.url)
       axios.get(this.props.url).
       then(( response ) => 
       
        this.setState(({ data: response.data }))
        ).catch ( err => 
            // console.log("err" , err.response.data)
             this.setState(({ err:err.response.data })) 
           
        )
   } 
 }
 export default List