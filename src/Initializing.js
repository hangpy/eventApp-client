/**
 * Initializing page for loading application
 * @author hangpy
 * created on 2019-01-02
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import { goToApp } from "./navigations";

export default class Initializing extends Component <{}> {

    async componentDidMount() {
        try {
            console.log('[KNOWING] After initializing, going to application...');
            goToApp();
        } catch (err) {
            console.log(err)
        }
    }

	render() {
		return (
		    <View style={styles.container}>
                <Text>
                    Initial Page for loading...
                </Text>
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

