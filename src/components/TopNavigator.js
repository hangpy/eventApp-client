/**
 * TopNavigator.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import { Header } from "react-native-elements";

export default class TopNavigator extends Component<{}> {

	render() {
		return (
            /**
			 * TODO
             * leftComponent: searching => only showing in Home, Favorite
             * rightComponent: location => only showing in Home
             * centerComponent: title => variable according to screen router
             */
			<Header
				leftComponent={{ icon: 'search', color: '#000' }}
				centerComponent={{ text: 'COODIE', style: { color: '#000' } }}
				rightComponent={{ icon: 'navigation', color: '#000' }}
				backgroundColor={'#fff'}
				containerStyle={{
					shadowColor: '#000',
					shadowOffset: { width: 1, height: 1 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
				}}
			/>
		);
	}
}
