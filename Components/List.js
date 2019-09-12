import React , { Component } from "react";
import { FlatList , View, Text } from "react-native";
import { Spinner } from "native-base";
 class List extends Component {
  state = {
      data:[],
      err:""
  }
   render() {
       const {  data , err } = this.state
       return (
           <View>
               { err ? <Text>{err}</Text>: data.length ?  <FlatList
                data = { data }
                renderItem = {( item ) => <Text>{item.productCode}</Text> }
                ListFooterComponent = {() => <Spinner color = "red" />}
               />:<Spinner color = "red"/>}
           </View>
               
       );
   } 
   componentDidMount ( props ) {
       console.log("url", this.props.url)
       fetch("http://13.59.64.244:3000/api/products?noOfRecords=3&skip=0&search=ROD").
       then(( response ) => 
       console.log("response" , response.data)
        // this.setState(({ data: response.data }))
        ).catch ( err => 
            //  this.setState(({ err:err.response.data })) 
            console.log("err" , err )
        )
   } 
 }
 export default List