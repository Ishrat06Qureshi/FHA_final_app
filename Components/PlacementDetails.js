import * as React from "react";
import { Container , Header  , Content, Form , Item , Label , Input, Button , Picker   , Icon   } from "native-base";
import { View , Text } from "react-native"

 const Provinces = [
     { name:"Alberta" , provinceCode:"AB"} ,
     { name:"British Columbia" , provinceCode:"BC"} ,
     { name:"Manitoba" , provinceCode:"MB"} ,
     { name:"New Brunswick" , provinceCode:"NB"} ,
     { name:"Newfoundland and Labrador" , provinceCode:"NL"} ,
     { name:"Northwest Territories" , provinceCode:"NT"} ,
     { name:"Nova Scotia" , provinceCode:"NS"} ,
     { name:"Nunavut" , provinceCode:"NU"} ,
     { name:"Ontario" , provinceCode:"ON"} ,
     { name:"Prince Edward Island" , provinceCode:"PE"} ,
     { name:"Quebec" , provinceCode:"QC"} ,
     { name:"Saskatchewan" , provinceCode:"SK"} ,
     { name:"Yukon Territory" , provinceCode:"AYT"} ,  ]



export default class Placementdetails extends React.Component {
    state = {
        streetAddress:"",
        town:"",
        province: undefined,
        postCode:"",
        selected2: undefined

    }
    // onValueChange2 = ( province) => {
    //     console.log( "province",province )
    //     this.setState(({ province }))
    // }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    render() {
         console.log( this.state.selected2)
        return( 
        <Container>
          
            <Content>
            <Form>
             <Item inlineLabel>
                 <Label> Street Address </Label>
              <Input onChangeText = { ( streetAddress) => this.state(({ streetAddress}))}/>
             </Item>
             <Item inlineLabel>
                 <Label> Town / City  </Label>
              <Input onChangeText = { ( town ) => this.state(({ town}))}/>
             </Item>
              <Item  picker>
                  <Label> Province </Label>
                  <Picker
                mode="dropdown"
               
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                  {/* { Provinces.map(( province ) => {
                      console.log( province.name , province.provinceCode)
                      return( <Picker.Item label= { province.name}  value = { province.value } key= {province.name}/>   
                      )
                  })} */}
                  <Picker.Item label = {`${Provinces[0].name }`} value = {  `${Provinces[0].value }`}></Picker.Item>
                  <Picker.Item label = {Provinces[1].name } value = { Provinces[1].value }></Picker.Item>
                  <Picker.Item label = {Provinces[2].name } value = { Provinces[2].value }></Picker.Item>
                  <Picker.Item label = {Provinces[0].name } value = { Provinces[0].value }></Picker.Item>
              </Picker>

              </Item>
               
             <Item inlineLabel>
                 <Label> postCode/ZIP </Label>
              <Input onChangeText = { ( postCode) => this.state(({ postCode }))}/>
             </Item>
            {/* <Button> <Text> submit </Text> </Button> */}
          </Form>
          
            </Content>
          </Container>
          
    //     <Container>
    //     <Header />
    //     <Content>
    //       <Form>
    //         <Item picker>
    //           <Picker
    //             mode="dropdown"
               
    //             style={{ width: undefined }}
    //             placeholder="Select your SIM"
    //             placeholderStyle={{ color: "#bfc6ea" }}
    //             placeholderIconColor="#007aff"
    //             selectedValue={this.state.selected2}
    //             onValueChange={this.onValueChange2.bind(this)}
    //           >
    //             <Picker.Item label="Wallet" value="key0" />
    //             <Picker.Item label="ATM Card" value="key1" />
    //             <Picker.Item label="Debit Card" value="key2" />
    //             <Picker.Item label="Credit Card" value="key3" />
    //             <Picker.Item label="Net Banking" value="key4" />
    //           </Picker>
    //         </Item>
    //       </Form>
    //     </Content>
    //   </Container>
          )
    }
}