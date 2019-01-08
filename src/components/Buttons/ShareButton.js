/** 
 * ShareButton
 * @author 
 * created on 2019-01-08
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class ShareButton extends Component <{}> {

    /**
     * TODO
     * when click this button, Kakao sharing service should pop up
     */
    state = {

    };
		
	render() {
		return (
            <TouchableOpacity style={{
                width: 40,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Icon name={'md-share'} color={'#fff'} size={25}/>
            </TouchableOpacity>
        );
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});