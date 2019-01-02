/**
 * AllianceDetailPage
 * @author
 * created on 2019-01-02
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Button, Image, AppRegistry } from 'react-native';
import {Navigation} from "react-native-navigation";

export default class AllianceDetailPage extends Component <{}> {

	static options(passProps) {
		return {
			topBar: {
				title: {
					text: passProps.key
				},
				backButton: {
					title: 'Back',
					showTitle: false
				},
				background: {
					color: 'black',
					translucent: true,
					blur: true
				}
			}
		}
	}

	render() {
		return (
		    <View style={styles.container}>
		        <Text>This is page for detail of {this.props.title}</Text>
				<Button
					onPress={() => Navigation.pop(this.props.componentId)}
					title='Go Back'
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