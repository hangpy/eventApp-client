/** 
 * HomeScreen.js
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import AdBanner from "./AdBanner";

export default class HomeScreen extends Component <{}> {
		
	render() {
		return (
		    <View style={styles.container}>
                <AdBanner/>
		    </View>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});