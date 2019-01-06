/**
 * AllianceEventCard.js
 * @author hangpy
 * created on 2018-12-18
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { makeMargin, makeSquareRatio, makeRadius, DeviceScreen } from "../../styles/Style";
import { Navigation } from "react-native-navigation";

export default class AllianceEventCard extends Component <{}> {

	render() {
		return (
            <TouchableOpacity
                onPress={() => {
                    /**
                     * this.props.commentId must be passed through HomeScreen's componentId by props.
                     * this is most important part of Navigation
                     */
                    Navigation.push(this.props.componentId, {
                        component: {
                            name: 'AllianceDetailPage',
                            passProps: {
                                key: this.props.item.key
                            },
                            options: {

                            }
                        }
                    })
                }}
            >
                <View style={[styles.cardContainer,
                    makeSquareRatio(0.92).sixteenToNine,
                    makeMargin(0.92).marginVertical]}>
                    <ImageBackground source={this.props.item.imageSource}
                                     style={[styles.eventImage, makeRadius(undefined, true, true,false,false)]}
                                     imageStyle={{resizeMode: 'cover'}}>
                        <View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}} >
                            <View style={{flex: 1}}>

                            </View>
                            <View style={{flex:3}}/>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{flex:1, justifyContent: 'center', marginLeft: 10}}>
                                    <Text style={{borderColor: '#fff', borderWidth: 0.8, fontSize: 13, color: '#fff', paddingRight: 10, paddingLeft: 10}}>
                                        {this.props.item.start}  ~  {this.props.item.end}
                                    </Text>
                                </View>
                                <View style={{flex:1}}/>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={[
                        styles.eventDescription,
                        makeRadius(undefined, false, false,true,true)]}>
                        {/* Description part to be fetch */}
                        <Text>{this.props.item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        flexDirection: 'column',
        width: DeviceScreen.width * 0.92,
        overflow: 'hidden',
        // backgroundColor: '#9ddd99',
    },
    eventDescription: {
	    flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#fff',
    }
});