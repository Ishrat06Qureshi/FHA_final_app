import * as React from "react";
import { Container , Header  , Content, Form , Item , Label , Input, Button , Picker   , Icon, Body , 
Card   } from "native-base";
import { View , Text , FlatList , TouchableOpacity } from "react-native";
import axios from "axios"

export default class Search extends React.Component {
    state = {
        data : [],
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: '',
        filterList:[],
        selectedValue :""
    }
    componentDidMount = () => {
        axios.get("http://13.59.64.244:3000/api/products?noOfRecords=10&skip=0")
        .then(( serverData ) => {
          const { data} = serverData
          this.setState(({ data }))
        }).catch ( err => console.log( err.response.data))
    }
  
    handleInput = ( userInput ) => {
      console.log("userInput" , userInput )
     const { data  } = this.state
      const filterList = data.filter( entry => 
        entry.productCode.includes( userInput.toLowerCase() ) ||
         entry.description.includes(userInput.toUpperCase()))
  
     this.setState(({
       userInput,
       showSuggestions:true,
       filterList
     }))   
    }
    selected = ( item  ) => {
         console.log("touched")
       this.setState(({ 
         userInput: item.productCode,
         showSuggestions:false
        }))
    }


   _renderItem  = ({ item }) => {
    return( 
    
     
     
       <TouchableOpacity  onPress = {() => this.selected( item )}>
         <View>
        
              <Text style = {{ color:"#008081"}}>
                { item.productCode}
              </Text>
              <Text style = {{ color : "#A9A9A9"}}>
                { item.description }
              </Text>
       
              </View> 
         </TouchableOpacity>
 
    
    
    
    )
   } 


    
    render() {
      const { showSuggestions , filterList  } = this.state
      // console.log("showSuggestion",showSuggestions)
      // console.log("serverData",data )
      
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
          <Card>
            
          <FlatList
           data = { filterList }
           renderItem = {this._renderItem}
           _keyExtractor =  {(item, index) => item.id }

          />
          </Card> : null}
      
      </View>

         

          
        </Content>
      </Container>
      )
       
    }
        
    
}

