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

export default class HomeScreen extends Component <{}> {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: '쿠디',
                    fontWeight: 'bold'
                },
                drawBehind: true,
                visible: true,
                animate: true,

            }
        };
    }
		
	render() {
		return (
            <ScrollView  showsVerticalScrollIndicator={false}>
                <AdBanner componentId={this.props.componentId}/>
                <HotEventBanner/>
                <AllianceEventList componentId={this.props.componentId}/>
		    </ScrollView>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});