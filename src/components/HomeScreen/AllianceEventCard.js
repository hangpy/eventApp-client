/**
 * AllianceEventCard.js
 * @author hangpy
 * created on 2018-12-18
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import {makeMargin, makeSquareRatio, makeRadius, DeviceScreen, chooseBetween, getBoldFont} from "../../styles/Style";
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
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style={{alignSelf: 'flex-start', borderColor: '#fff', borderWidth: 0.8,marginLeft: 10}}>
                                    <Text style={{ fontSize: 13,color: '#fff', paddingRight: 10, paddingLeft: 10}}>
                                        기간한정  {this.props.item.start} ~ {this.props.item.end}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={[
                        styles.eventDescription,
                        makeRadius(undefined, false, false,true,true)]}>
                        <View style={{flex:1.8, flexDirection: 'column', flexWrap: 'wrap',paddingLeft: 10}}>
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Text adjustsFontSizeToFit style={[{fontSize: 18, color: '#000'}, getBoldFont()]}>
                                    {this.props.item.title}
                                </Text>
                                <View style={{flex:1, marginTop: 3}}>
                                    <Text adjustsFontSizeToFit style={{fontSize: 12, marginLeft: 5}}>
                                        {this.props.item.subTitle}
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:1, justifyContent: 'center'}}>
                                <Text adjustsFontSizeToFit style={{fontSize: 11}}>
                                    {this.props.item.location} | {this.props.item.subLocation}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:1.2, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text adjustsFontSizeToFit style={{color: '#ff2d55', fontSize: 50, fontFamily: 'NanumSquareRoundB'}}>
                                    {this.props.item.amount}
                                </Text>
                                <Text adjustsFontSizeToFit style={{color: '#ff2d55', fontSize: 20, marginTop: 15, marginLeft: 1}}>{this.props.item.unit}</Text>
                                <Text adjustsFontSizeToFit style={[{color: '#000', fontSize: 25, marginTop: 15, marginRight: 10}, getBoldFont()]}>{this.props.item.eventType}</Text>
                            </View>
                            {/*<View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 20,  marginTop: 15}}>*/}
                                {/**/}
                            {/*</View>*/}
                        </View>
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
        borderColor: '#5c5c5c',
        borderLeftWidth: chooseBetween(0.5, 0, Platform.OS),
        borderRightWidth: chooseBetween(0.5, 0, Platform.OS),
        borderTopWidth: chooseBetween(0.5, 0, Platform.OS)
        // backgroundColor: '#9ddd99',
    },
    eventDescription: {
	    flex: 0.3,
        flexDirection: 'row',
        width: DeviceScreen.width * 0.92,
        backgroundColor: '#fff',
        borderColor: '#5c5c5c',
        borderLeftWidth: chooseBetween(0.5, 0, Platform.OS),
        borderRightWidth: chooseBetween(0.5, 0, Platform.OS),
        borderBottomWidth: chooseBetween(0.5, 0, Platform.OS)
    }
});