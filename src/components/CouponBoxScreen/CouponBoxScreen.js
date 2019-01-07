/** 
 * CouponBoxScreen.jss
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView} from 'react-native';
import {makeSquareRatio, makeRadius, makeMargin, isAndroid, backgroundColor} from "../../styles/Style";
import StatusCard from "./StatusCard";
import CouponsCard from "./CouponsCard";

export default class CouponBoxScreen extends Component <{}> {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: '쿠폰함',
                    fontFamily: 'NanumSquareRoundB',
                },
            }
        };
    }
		
	render() {
		return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: backgroundColor}}>
                <View style={styles.container}>
                    <StatusCard/>
                    <CouponsCard/>
                </View>
            </ScrollView>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        paddingTop: isAndroid(Platform.OS)*60,
        paddingBottom: isAndroid(Platform.OS)*20
    },
});