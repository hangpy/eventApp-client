/**
 * TopNavigator.js
 * @author
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import { Header } from "react-native-elements";

export default class TopNavigator extends Component <{}> {

	render() {
		return (
			<Header
				leftComponent={{ icon: 'search', color: '#000' }}
				centerComponent={{ text: 'COODIE', style: { color: '#000', fontWeight: 'bold' } }}
				rightComponent={{ icon: 'navigation', color: '#000' }}
				backgroundColor={'#fff'}
				containerStyle={{
					shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
				}}
			/>
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