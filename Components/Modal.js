import * as React from 'react'; 
import { View , Text , TouchableOpacity , Image , Dimensions , ScrollView } from "react-native"
 import { Container , Header , Left , Right , Body , Card , CardItem  , Content , Button } from "native-base"
 import HTML from 'react-native-render-html';
 import Table  from "./Table";

 const screenWidth = Dimensions.get("window").width



export default  class Modal extends React.Component {

  NavigateToBuy = () =>{ 
    // this.props.navigation.navigate("Billingdetails")
    console.log( this.props)
  
  }
    render()
    {  
         const { imageUri} = this.props 
         const html = `<p>The Milwaukee M18&#x2122; Stick Light includes two light settings with its three powerful LEDs. The high setting delivers 300 Lumens for highest coverage and light output, while the Low setting delivers 150 Lumens useful for interior work where a very bright light is not required. Manufactured for the worksite and maximum productivity, the stick light includes a replaceable, impact resistant lens that is designed to stand up to the roughest work situations, and two multi-position stainless steel hooks for use allowing your hands to be free. For additional utility, a 45º pivoting head enables 180º of versatile coverage.<br />
         Technical Details<br />
         Part Number 2352-20<br />
         Item Weight 1.35 pounds<br />
         Product Dimensions 12.8 x 6.9 x 3.5 inches<br />
         Item model number GIDDS2-2490386<br />
         Batteries 1 Lithium ion batteries required.<br />
         Color Red<br />
         Style Modern<br />
         Material N/A<br />
         Shape N/A<br />
         Power Source battery-powered<br />
         Voltage 18 volts<br />
         Item Package Quantity 1<br />
         Type of Bulb LED<br />
         Measurement System Metric<br />
         Special Features Not Dimmable<br />
         Included Components M18 LED Stick Light<br />
         Batteries Included? No<br />
         Batteries Required? Yes<br />
         Battery Cell Type Lithium Ion</p>`
        return (
            <ScrollView>
                
         <Container>

             <Content>

                 <Card>
                     <CardItem>
                            
                     <Image 
                   source={{uri: `${ imageUri}`}}
                   style={{
                    height: 180,
                    width: 200,
                    marginLeft:80,
                    resizeMode: 'cover',
                  }}/>
                  <Text> M18 RADIUS LIGHT </Text>
                  <Text>  Regular Price </Text>
                  <Text>  selling  Price </Text>
                     </CardItem>
                 </Card>
                  
                   <View style = {{ marginTop:25 , backgroundColor : "#f0f0f0" , marginTop: 25 }}>
                       
                   <TouchableOpacity style = {{ borderColor:'#DA011D' ,
                    borderWidth:0.5 , width: Dimensions.get("window").width ,
                     marginBottom:25 , height:50  , 
                     backgroundColor:"#DA011D"}}
                     onPress = { this.NavigateToBuy}>
                       <Text style = {{ lineHeight:50 , color : "white" , textAlign:"center"}} > Buy now  </Text>
                   </TouchableOpacity>

                   
                   <TouchableOpacity  style = {{  borderColor:"#DA011D" , 
                    borderWidth:0.5  , 
                    marginBottom:25 , 
                    width:Dimensions.get("window").width ,
                     height:50 ,
}}>
                       <Text style = {{ lineHeight:50 ,  color:"#707070" , textAlign:"center"}}> Add to cart </Text>
                   </TouchableOpacity>
                   
                   </View>
                    
                      <Card>

                      <Text style = {{ fontWeight:"100"}}> About this Item </Text>
                          <Table  tableData = {{
                             manufacturer : "milwaukee ",
                             productID:"1240",
                             sellingsku:"2734-40",
                             avaliability:"instock"
                          }}/>
                      
                        <HTML html={ html } />

                      </Card>

                       
                       

                       
                      
                      

                         
                   
             </Content>
         </Container>
         </ScrollView>
        )
    }
}  