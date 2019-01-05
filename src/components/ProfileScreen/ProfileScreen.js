/** 
 * ProfileScreen.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView} from 'react-native';
import AccountCard from "./AccountCard";
import AuthCard from "./AuthCard";
import HistoryCard from "./HistoryCard";
import {isAndroid, backgroundColor} from "../../styles/Style";

export default class ProfileScreen extends Component <{}> {

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: '마이페이지',
                    fontWeight: 'bold'
                },
                visible: true,
                animate: true,
            }
        };
    }
		
	render() {
		return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: backgroundColor}}>
                <View style={styles.container}>
                    <AccountCard/>
                    <AuthCard/>
                    <HistoryCard/>
                </View>
		    </ScrollView>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF4',
        paddingTop: isAndroid(Platform.OS) * 60,
        paddingBottom: 20
    },
});