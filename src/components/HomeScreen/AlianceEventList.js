/** 
 * AlianceEventList.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Dimensions,
} from 'react-native';
import {makeSquareRatio, makeSquareMargin, isAndroid, chooseBetween, getBoldFont} from '../../styles/Style'
import AllianceEventCard from "./AllianceEventCard";

export default class AllianceEventList extends Component <{}> {

    state = {
        banners: null
    };

    componentWillMount(): void {

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
                <FlatList data={this.props.cards}
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