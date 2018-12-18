/** 
 * HomeScreen.js
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView } from 'react-native';
import AdBanner from "./AdBanner";
import HotEventBanner from "./HotEventBanner";
import AllianceEventList from "./AlianceEventList";

export default class HomeScreen extends Component <{}> {
		
	render() {
		return (
            <ScrollView  showsVerticalScrollIndicator={false}>
                <AdBanner/>
                <HotEventBanner/>
                <AllianceEventList/>
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