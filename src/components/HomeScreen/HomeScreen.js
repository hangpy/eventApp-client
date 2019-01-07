/** 
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView, Button } from 'react-native';
import AdBanner from "./AdBanner";
import HotEventBanner from "./HotEventBanner";
import AllianceEventList from "./AlianceEventList";
import {Navigation} from "react-native-navigation";
import {backgroundColor, isAndroid} from "../../styles/Style";

export default class HomeScreen extends Component <{}> {

    static options(passProps) {
        return {
            statusBar: {
                style: 'dark',
                backgroundColor: '#fff'
            },
            topBar: {
                title: {
                    color: '#000',
                    fontFamily: 'NanumSquareRoundB',
                    component: {
                        name: 'TitleLogo',
                        alignment: 'center',
                    }
                },
                rightButtons:[
                    {
                        id: 'markerButton',
                        component: {
                            name: 'MarkerButton'
                        },
                        // // icon: require('../../image/ios-marker-50.png'),
                        // icon: <Image source={require('../../image/ios-marker-50.png')}/>,
                        // buttonFontSize: 25,
                        // buttonFontWeight: '600',
                        // title: 'map',
                        // disableIconTint: true,
                        // showAsAction: 'always',
                        // testID: 'logoutButton',
                    }
                ],
                leftButtons: [
                    {
                        id: 'searchButton',
                        component: {
                            name: 'SearchButton'
                        }
                    }
                ]
            }
        };
    }
		
	render() {


		return (
		    /* TODO: need to  consider about design for background color */
            <ScrollView  showsVerticalScrollIndicator={false} style={{backgroundColor: '#fafafa'}}>
                <View style={styles.container}>
                    <AdBanner componentId={this.props.componentId}/>
                    <HotEventBanner/>
                    <AllianceEventList componentId={this.props.componentId}/>
                </View>
		    </ScrollView>
        );
	}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: isAndroid(Platform.OS)*60,
    },
});