
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import List from "./List";
import Heading from "./heading"
import { Container} from "../Styles/index";
import { RODS_URL , ANCHOR_URL } from "../urls";
import MyCarousal from "./Carousel"


const rods_url = "http://13.59.64.244:3000/api/products?noOfRecords=3&skip=0&search=ROD"
export default class Home extends Component {
  render() {
    return (
        <View style = {{ flex : 1 , 
        // backgroundColor:"#F7F5D9" 
        backgroundColor:"blue"
        }}>
            
      <ScrollView>
          
         
          <View style={{...Container}}>
            <Image
              source = {require("../assets/fastening.png")}
              style ={{
                height:200,
                width:"100%",
                resizeMode:"contain"
              }}
            />
          </View>

          <View style={ {...Container , backgroundColor:"white"}}>
                
                <Heading 
                productCategory = "ROD"
                productLink = {RODS_URL}
                productName = "ROD"
              
                />
                  <List url = { RODS_URL }
                  />
           </View>
           <View style={ {...Container , backgroundColor:"white"}}>
                
                <Heading 
                productCategory = "ANCHORS"
                productLink = {ANCHOR_URL}
                productName = "ANCHOR"
              
                />
                  <List url = { ANCHOR_URL }
                    
                    
                  />
           </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text> 
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text>
          </View>
          <View style={styles.welcome}>
          <Text >Welcome to React Native</Text> 
          </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});
    