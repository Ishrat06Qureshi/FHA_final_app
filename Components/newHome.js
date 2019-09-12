
            
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import List from "./List"
import { Container} from "../Styles/index";
import { ListItem } from 'native-base';


const rods_url = "http://13.59.64.244:3000/api/products?noOfRecords=3&skip=0&search=ROD"
export default class Home extends Component {
  render() {
    return (
        <View style = {{ flex : 1 , backgroundColor:"red"}}>
            
      <ScrollView>
          <View style={ Container }>
           <List url = { rods_url }
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
    