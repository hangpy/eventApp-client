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