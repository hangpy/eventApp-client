/** 
 * HomeScreen.js
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';

export default class HomeScreen extends Component <{}> {
		
	render() {
		return (
		    <View style={styles.container}>
		        <Text>Home Screen</Text>
		    </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});