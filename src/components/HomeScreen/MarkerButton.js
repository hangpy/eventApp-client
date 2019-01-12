/**
 * MarkerButton.js
 * @author hang
 * created on 2019-01-06
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';

const MapButton  = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                Alert.alert('showing map for searching with location')
            }}>
            <Image source={require('../../image/ios-marker-50.png')} style={styles.icon}/>
        </TouchableOpacity>
    );
};

export default MapButton

const styles = StyleSheet.create({
	container: {
	    flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 15
    }
});