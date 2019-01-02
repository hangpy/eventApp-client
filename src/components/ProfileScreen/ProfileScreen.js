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
                style={styles.container}>
                <AccountCard/>
                <AuthCard/>
                <HistoryCard/>
		    </ScrollView>
        );
	}
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF4'
    },
});