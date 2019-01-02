/** 
 * CouponBoxScreen.jss
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView} from 'react-native';
import { makeSquareRatio, makeRadius, makeMargin } from "../../styles/Style";
import StatusCard from "./StatusCard";
import CouponsCard from "./CouponsCard";

export default class CouponBoxScreen extends Component <{}> {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: '쿠폰함',
                    fontWeight: 'bold'
                },
                visible: true,
                animate: true,
                hideOnScroll: true,
            }
        };
    }
		
	render() {
		return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <StatusCard/>
                <CouponsCard/>
            </ScrollView>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF4'
    },
});