/**
 * SearchButton.js
 * @author hang
 * created on 2019-01-06
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, Alert, TouchableOpacity} from 'react-native';

export default SearchButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {Alert.alert('showing map for searching box')}}>
            <Image source={require('../../image/ios-search-50.png')} style={styles.icon}/>
        </TouchableOpacity>
    )
}

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