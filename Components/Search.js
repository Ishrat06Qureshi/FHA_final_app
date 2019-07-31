import * as React from "react";
import { Container , Header  , Content, Form , Item , Label , Input, Button , Picker   , Icon, Body    } from "native-base";



export default class Search extends React.Component {
    render() {
        return( <Container>
                 <Content>
                   <Item style = {{ marginTop:50}} >
                   <Icon active name='search' style = {{ marginLeft:25}}/> 
                    <Input placeholder='Search Product' style = {{ marginLeft:15 , width:80}}/>
                   </Item>

                 </Content>
             
               

        </Container>)
    }
}