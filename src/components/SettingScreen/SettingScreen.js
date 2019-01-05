/** 
 * SettingScreen.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry, Alert, ScrollView } from 'react-native';
import SettingsList from 'react-native-settings-list';
import {chooseBetween, isAndroid, backgroundColor} from "../../styles/Style";

export default class SettingScreen extends Component <{}> {

    constructor(){
        super();
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {switchValue: false};
    }

    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: '설정',
                    fontWeight: 'bold'
                },
                visible: true,
                animate: true,
            }
        };
    }

    render() {
        return (
            <ScrollView style={[styles.container,  {backgroundColor:backgroundColor,flex:1, marginTop: 0}]} showsVerticalScrollIndicator={false}>
                <View style={{paddingBottom: chooseBetween(100, 20, Platform.OS)}}>
                    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Header headerText={'서비스 정보'} headerStyle={styles.headerStyle}/>
                        <SettingsList.Item
                            title='쿠디에 대해'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route to Wifi Page')}
                        />
                        <SettingsList.Item
                            title='이용 약관'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route to Blutooth Page')}
                        />
                        <SettingsList.Item
                            title='개인정보 보호 정책'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route To Cellular Page')}
                        />
                        <SettingsList.Item
                            title='제휴 문의'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route To Hotspot Page')}
                        />
                        <SettingsList.Header headerText={'부가 기능 설정'} headerStyle={styles.headerStyle}/>
                        <SettingsList.Item
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='이벤트 정보 푸쉬 허용'
                            titleStyle={styles.titleStyle}
                        />
                        <SettingsList.Item
                            title='저장공간 관리'
                            titleInfo='캐시 삭제'
                            titleStyle={styles.titleStyle}
                            titleInfoStyle={styles.titleInfoStyle}
                            onPress={() => Alert.alert('Route To Control Center Page')}
                        />
                        <SettingsList.Header headerText={'서비스 공유'} headerStyle={styles.headerStyle}/>
                        <SettingsList.Item
                            title='카카오톡으로 앱 추천'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route To General Page')}
                        />
                        <SettingsList.Header headerText={'버전 정보'} headerStyle={styles.headerStyle}/>
                        <SettingsList.Item
                            title='Ver 1.0.0'
                            titleStyle={styles.titleStyle}
                            onPress={() => Alert.alert('Route To General Page')}
                        />
                    </SettingsList>
                </View>
            </ScrollView>
        );
    }
    onValueChange(value){
        this.setState({switchValue: value});
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: isAndroid(Platform.OS)*50,
    },
    titleStyle: {
        fontSize: 15,
        color: '#2f2f2f'
    },
    headerStyle: {
        marginTop: 0,
        paddingTop:15,
        marginLeft: 15,
        color: '#4b4b4b'
    }
});