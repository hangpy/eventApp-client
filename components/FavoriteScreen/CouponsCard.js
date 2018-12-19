/**
 * CouponsCard.js
 * @author hangpy
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import {makeMargin, makeRadius, makeWidth} from "../styles/Style";

export default class CouponsCard extends Component <{}> {

	render() {
		return (
            <View style={[styles.container,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                makeWidth()]}>
                <View style={styles.titleBox}>
                    <Text style={{color: '#323232', fontSize: 16}}>쿠폰함</Text>
                </View>
                <View style={[styles.couponList]}>

                </View>
                <View style={[styles.buttonBox]}>

                </View>
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    titleBox: {
	    flex:1
    },
    couponList: {

    },
    buttonBox: {
	    flex:1
    }
});