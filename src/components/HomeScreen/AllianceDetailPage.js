/**
 * AllianceDetailPage
 * @author
 * created on 2019-01-02
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Button, Image, AppRegistry } from 'react-native';
import {Navigation} from "react-native-navigation";

export default class AllianceDetailPage extends Component <{}> {

	state = {
		key: null
	};

	static options(passProps) {
		AllianceDetailPage._passProps = passProps;

		return {
			statusBar: {
				drawBehind: true,
				visible: false
			},
			topBar: {
				visible: false,
				drawBehind: true,
				animate: true,
			},
			bottomTabs: {
				visible: false
			}
		}
	}

	render() {
		return (
		    <View style={styles.container}>
		        <Text>This is page for detail of {AllianceDetailPage._passProps.key}</Text>
				<Button
					onPress={() => Navigation.pop(this.props.componentId)}
					title='Go Back!'
				/>
		    </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});