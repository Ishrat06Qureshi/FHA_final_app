import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Default value is same as label',
            },
            {
                label: 'Value is different',
                value: true,
            },
            {
                label: 'Color',
                color: 'green',
            },
            {
                disabled: true,
                label: false,
            },
            {
                label: 'Size',
                size: 32,
                value:false
            },
        ],
        showData   : false 
    };

    // update state
    onPress = data => this.setState(( preState) => { return({
        showData:!preState.showData
    })});

    render() {
        console.log("show Data" , this.state.showData)
        let selectedButton = this.state.data.find(e => e.selected == true);
        console.log("check selected button" , selectedButton)
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        console.log(" if nothing is selected selected button" , selectedButton)
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
});