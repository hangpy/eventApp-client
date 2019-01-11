/** 
 * AlianceEventList.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {
    Platform,
    View,
    StyleSheet,
    Text,
    Image,
    AppRegistry,
    ScrollView,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {makeSquareRatio, makeSquareMargin, isAndroid, chooseBetween, getBoldFont} from '../../styles/Style'
import { Navigation } from "react-native-navigation";
import AllianceEventCard from "./AllianceEventCard";

export default class AllianceEventList extends Component <{}> {

    state = {
        banners: null
    };

    componentWillMount(): void {
        this.setState({
            banners: [
                { key: '1', title: '새우꺾기', subTitle: '입안 가득 새우의 담백한 맛', imageSource: require('../../image/shrimp_al.jpeg'), location: '공릉동',
                    subLocation: '공릉역 5분거리', amount: '10', unit: '%', eventType:'OFF', studentLimit: true, start: '2018.09.03', end: '2018.12.23' },
                { key: '2', title: '플라잉볼', subTitle: '계란 요리의 진수', imageSource: require('../../image/flyingball_al.jpg'), location: '공릉동',
                    subLocation: '공릉동 철길 거리', amount: '10', unit: '%', eventType:'OFF', studentLimit: true, start: '2018.08.03', end: '2018.12.29' },
                { key: '3', title: '열화철판', subTitle: '곱창 맛 하나로 성공한집', imageSource: require('../../image/fire_al.jpg'), location: '공릉동',
                    subLocation: '서울과학기술대학교 삼거리', amount: '20', unit: '%', eventType:'OFF', studentLimit: true, start: '2018.11.10', end: '2019.01.05' },
            ],
        });
    }

	render() {
		return (
            /**
             * TODO
             * loading: each card's image and description should be loaded when users
             *          turn on this app, in which we may find a good way to utilize cache
             *          to provide users with good experience
             * slide issue: each banner or card must find their place by own when
             *              user flip the scrollView
             */
            <View style={styles.section}>
                <View style={[styles.rowDirection, styles.margin]}>
                    <View style={styles.columnDirection}>
                        {/* text part to be fetched later */}
                        <Text style={styles.bannerSectionDescription}>내가 받을 수 있는 다른 혜택이 궁금하세요?</Text>
                        <Text style={[styles.bannerSectionTitle, getBoldFont()]}>이달의 제휴 혜택</Text>
                    </View>
                    {/*<Icon name='ios-arrow-forward' size={60} style={styles.margin}/>*/}
                </View>
                {/* banner part to be fetched later */}
                <FlatList data={this.state.banners}
                      renderItem={
                          // must embrace parameter with {, }
                          ({item}) => (
                              <AllianceEventCard
                                  item={item}
                                  componentId={this.props.componentId}
                              />
                          )
                      }
                />
            </View>
        );
	}
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    section: {
        marginTop: screenHeight * 0.02,
    },
    rowDirection: {
        flex: 1,
        flexDirection: 'row',
    },
    columnDirection: {
        flex: 1,
        flexDirection: 'column'
    },
    margin: {
        marginLeft: screenWidth * 0.05,
        marginRight: screenWidth * 0.01
    },
    bannerText: {
        fontSize: 15,
        color: '#fff'
    },
    bannerSectionTitle: {
        fontSize: 35,
        color: "#000"
    },
    bannerSectionDescription: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#000'
    }
});