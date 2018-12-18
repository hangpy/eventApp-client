/**
 * AllianceEventCard.js
 * @author
 * created on 2018-12-18
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import { makeSquareMargin, makeSquareRatio, DeviceScreen } from "./styles/Style";

export default class AllianceEventCard extends Component <{}> {

	render() {
		return (
		    <View style={[styles.cardContainer,
                makeSquareRatio(0.92).sixteenToNine,
                makeSquareMargin(0.92).marginForVerticalBanner]}>
		        <View style={styles.eventImage}>
                    {/* Image part to be fetch */}
                    <Text style={{color: '#fff'}}>{this.props.item.key} Image</Text>
                </View>
                <View style={styles.eventDescription}>
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
        borderTopLeftRadius: cornerRadius,
        borderTopRightRadius: cornerRadius,
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#9ddd99',
    },
    eventDescription: {
	    flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: cornerRadius,
        borderBottomRightRadius: cornerRadius,
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#fff',
    }
});