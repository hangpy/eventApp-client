/**
 * StatusCard.js
 * @author hangpy
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import {makeMargin, makeRadius, makeSquareRatio, Shadowing} from "../../styles/Style";
// import enableFontPatch from '../../styles/enableFontPatch';
// enableFontPatch();

export default class StatusCard extends Component <{}> {

    state = {
        status: {
            nCoupons: null,
            nExpireToday: null,
            nAlliances: null
        }
    };

    componentWillMount(): void {
        this.setState({
            status: {
                nCoupons: 4,
                nExpireToday: 1,
                nAlliances: 2
            }
        });
    }

    render() {
		return (
            <View style={[styles.container,
                makeSquareRatio(0.92).sixteenToNine,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                Shadowing]}>
                <View style={[styles.titleBox, {flex: 1}]}>
                    <Text style={{color: '#323232', fontSize: 16}}>내 쿠폰함 현황</Text>
                </View>
                <View style={[styles.statusBox, {flex: 4}]}>
                    <View style={[styles.statusEachBox]}>
                        <Text style={styles.statusNumber}>{this.state.status.nCoupons}</Text>
                        <Text style={styles.statusDescription}> 담은 쿠폰 수 </Text>
                    </View>
                    <View style={styles.border}/>
                    <View style={[styles.statusEachBox]}>
                        <Text style={styles.statusNumber}>{this.state.status.nExpireToday}</Text>
                        <Text style={styles.statusDescription}> 오늘 마감 </Text>
                    </View>
                    <View style={styles.border}/>
                    <View style={[styles.statusEachBox]}>
                        <Text style={styles.statusNumber}>{this.state.status.nAlliances}</Text>
                        <Text style={styles.statusDescription}> 쩨휴 찜 </Text>
                    </View>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    statusBox: {
	    flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statusEachBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusNumber: {
        flex: 3,
        fontSize: 70,
        color: '#FF6B87',
        paddingTop: 20
    },
    statusDescription: {
        flex: 1,
        fontSize: 13,
        color: '#8b8b8b',

    },
    border: {
	    height: '90%',
	    borderWidth: 0.3,
        borderColor: '#aeaeae',
        marginBottom: '10%'
    }
});