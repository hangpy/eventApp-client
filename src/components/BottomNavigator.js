/**
 * BottomNavigator.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./HomeScreen/HomeScreen";
import CouponBoxScreen from "./CouponBoxScreen/CouponBoxScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import SettingScreen from "./SettingScreen/SettingScreen";

export default createBottomTabNavigator({
    /**
     * TODO
     * animation: bottom navigator => adapt animation to each button
     * when click banner or card in home screen, this bottom navigator must be disappeared, which
     * might be implemented as stack navigation.
     */
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '홈',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-home' color={tintColor} size={24}/>)
        }
    },
    CouponBox: {
        screen: CouponBoxScreen,
        navigationOptions: {
            tabBarLabel: '쿠폰함',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-cube' color={tintColor} size={24}/>)
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: '마이 페이지',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-person' color={tintColor} size={24}/>)
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: '설정',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-settings' color={tintColor} size={24}/>)
        }
    }
}, {
    tabBarOptions: {
        showLabel: true, // hide labels
        activeTintColor: '#ff2d55', // active icon color
        inactiveTintColor: '#c5c5c5',  // inactive icon color
        style: {
            backgroundColor: '#ffffff' // TabBar background
        },
        shifting: true
    },
    initialRouteName: 'Home',
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

