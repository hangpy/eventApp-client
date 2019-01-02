/**
 * AllianceEventCard.js
 * @author hangpy
 * created on 2018-12-18
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import { makeMargin, makeSquareRatio, makeRadius, DeviceScreen } from "../../styles/Style";

export default class AllianceEventCard extends Component <{}> {

	render() {
		return (
		    <View style={[styles.cardContainer,
                makeSquareRatio(0.92).sixteenToNine,
                makeMargin(0.92).marginVertical]}>
		        <View style={[
		            styles.eventImage,
                    makeRadius(undefined, true, true,false,false)]}>
                    {/* Image part to be fetch */}
                    <Text style={{color: '#fff'}}>{this.props.item.key} Image</Text>
                </View>
                <View style={[
                    styles.eventDescription,
                    makeRadius(undefined, false, false,true,true)]}>
                    {/* Description part to be fetch */}
                    <Text>{this.props.item.description}</Text>
                </View>
		    </View>
        );
	}
}

const cornerRadius = 10;
const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        shadowColor: '#1d1d1d',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    },
    eventImage: {
	    flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#9ddd99',
    },
    eventDescription: {
	    flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#fff',
    }
});