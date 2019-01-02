/**
 * AuthCard.js
 * @author
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import {DeviceScreen, makeMargin, makeRadius, makeSquareRatio, Shadowing} from "../../styles/Style";
import Icon from "react-native-vector-icons/Ionicons";

export default class AuthCard extends Component <{}> {

	render() {

	    /* TODO: This variable must be fetched from remote reference in server */
	    const isAuthenticated = false;

		return (
		    /**
		     * TODO
		     * This card must be shown differently according to situation authenticated
             * So, when this card is mounted, client side must check if it is authenticated or not
             * as a reference of DB in remote server.
             *
             * And then, if reference value is true, you should fetch regarding data.
		     */
            <View style={[
                styles.container,
                makeSquareRatio(0.92).sixteenToNine,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                Shadowing]}>
                {(() => {
                    if(isAuthenticated) {
                        return (
                            /* TODO: show brief auth information and button to be connected student card mimic image */
                            <View>
                                <Text>Brief Information about auth</Text>
                            </View>
                        )
                    } else {
                        return (
                            /* TODO: to be touchable with feedback, which will be connected authentication stack navigation view */
                            <View>
                                <View style={[styles.authButtonBox, {flex: 2}]}>
                                    <View style={[styles.authButton]}>
                                        <Icon name={'ios-add'} color={'#8b8b8b'} size={DeviceScreen.width*0.92/4 * 0.6}/>
                                    </View>
                                </View>
                                <View style={[styles.descriptionBox, {flex:1}]}>
                                    <Text style={styles.description}>아직 학교를 인증하시 않았습니다</Text>
                                    <Text style={styles.description}>학교 인증을 진행하시고 더 많은 혜택을 누랴보세요!</Text>
                                </View>
                            </View>
                        )
                    }
                })()}
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    authButtonBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    authButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DeviceScreen.width*0.92/4,
        height: DeviceScreen.width*0.92/4,
        borderRadius: DeviceScreen.width*0.92/4/2,
        borderWidth: 1,
        borderColor: '#8b8b8b',
        borderStyle: 'dashed'
    },
    descriptionBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
	    fontSize: 12,
        color: '#8b8b8b'
    }
});