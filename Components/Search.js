import * as React from "react";
import { Container , Header  , Content, Form , Item , Label , Input, Button , Picker   , Icon, Body , 
Card   } from "native-base";
import { View , Text , FlatList , TouchableOpacity,Keyboard } from "react-native";
import axios from "axios";
import Products from "./Products";



export default class Search extends React.Component {
    state = {
        data : [],
        activeSuggestion: 0,  
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: '',
        filterList:[],
        selectedValue :"",
        searchedProducts:[]
       
    }

    getProduct = ( productId) => {
      Keyboard.dismiss()
      axios.get(`http://13.59.64.244:3000/api/products/${productId}`).
      then(( response )=>   
      this.setState(({ searchedProducts : response.data})))
      
      .catch( err => console.log("error" , err ))
    }
    componentDidMount = () => {
        axios.get("http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0")
        .then(( serverData ) => {
          const { data} = serverData
          this.setState(({ data }))
        }).catch ( err => console.log( err.response.data))
    }
  
    handleInput = ( userInput ) => {
      // console.log("userInput" , userInput )
      this.setState(({ userInput}) , ( ) => {
    
        this.showSuggestion( )
      }) }


    showSuggestion = (  ) => {
      const { data , userInput  } = this.state
      console.log("userInput" , userInput)
      const filterList = data.filter( entry => 
         entry.productCode.includes( userInput.toLowerCase() ) ||
         entry.description.includes(userInput.toUpperCase()))
         console.log("filter" , filterList)
       if( filterList.length === 0 ) {
         axios.get(`http://13.59.64.244:3000/api/products?noOfRecords=85&skip=0&search=${userInput}`)
         .then(( response ) => 
         this.setState(({
          showSuggestions:true,
          filterList:response.data })))
       }
       else {
        this.setState(({ 
          showSuggestions:true,
          filterList }))

      }
    }
    
    selected = ( item  ) => {
       this.setState(({ 
         userInput: item.productCode,
         showSuggestions:false
        }) , ()=> this.getProduct( item.id))
        
        
    }


   _renderItem  = ({ item }) => {
    return( 
    
     
     
       <TouchableOpacity  onPress = {() => this.selected( item )}>
         <View>
        
              <Text style = {{ color:"#DA011D"}}>
                { item.productCode}
              </Text>
              <Text style = {{ color : "#A9A9A9"}}>
                { item.description }
              </Text>
       
              </View> 
         </TouchableOpacity>)
   } 


    
    render() {
      const { showSuggestions, filterList ,  searchedProducts } = this.state
 
      return(
        <Container>
     
        <Content>
          <Item  style = {{ marginTop: 50}}>
            <Icon active name='search' />
            <Input 
            placeholder='Search Product here'
            onChangeText = { (userInput) => this.handleInput( userInput )}
            value = { this.state.userInput}
     
            />
          </Item>
          <View> 
          { showSuggestions ? 
       
            
          <FlatList
           data = { filterList }
           renderItem = {this._renderItem}
           _keyExtractor =  {(item, index) => item.id }
           keyboardShouldPersistTaps='always'

          /> : null}
           {  searchedProducts.length ?  searchedProducts.map(( item ) => <Products   productCode  = { item.productCode}
      description = { item.description} /> ) 
           : null  }
      </View>

         

          
        </Content>
      </Container>
      )
       
    }
        
    
}

