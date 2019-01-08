/** 
 * WishButton
 * @author 
 * created on 2019-01-08
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class WishButton extends Component <{}> {

    /**
     * TODO
     * according to state of isClicked, the icon should be different
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
		        <Icon name={'md-heart-empty'} color={'#fff'} size={25}/>
            </TouchableOpacity>
        );
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});