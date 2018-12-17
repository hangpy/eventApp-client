import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import FavoriteScreen from "./FavoriteScreen";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";





export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '홈',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-home' color={tintColor} size={24}/>)
        }
    },
    Favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: '즐겨찾기',
            tabBarIcon: ({tintColor}) => (<Icon name='ios-bookmark' color={tintColor} size={24}/>)
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
        activeTintColor: '#dd6453', // active icon color
        inactiveTintColor: '#857e7e',  // inactive icon color
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

