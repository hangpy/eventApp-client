/**
 * AuthCard.js
 * @author
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import {makeMargin, makeRadius, makeSquareRatio, Shadowing} from "../styles/Style";

export default class AuthCard extends Component <{}> {

	render() {
		return (
            <View style={[
                styles.container,
                makeSquareRatio(0.92).sixteenToNine,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                Shadowing]}>
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
});