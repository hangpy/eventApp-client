/** 
 * AlianceEventScroll.js
 * @author 
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView, FlatList, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class AllianceEventScroll extends Component <{}> {

    state = {
        banners: null
    };

    componentWillMount(): void {
        this.setState({
            banners: [
                { key: 'Banner1' },
                { key: 'Banner2' },
                { key: 'Banner3' },
            ],
        });
    }
		
	render() {
		return (
            <View style={styles.section}>
                <View style={[styles.rowDirection, styles.margin]}>
                    <View style={styles.columnDirection}>
                        {/* text part to be fetched later */}
                        <Text style={styles.bannerSectionDescription}>내가 받을 수 있는 다른 혜택이 궁금하세요?</Text>
                        <Text style={styles.bannerSectionTitle}>이달의 제휴 혜택</Text>
                    </View>
                    <Icon name='ios-arrow-forward' size={40} style={styles.margin}/>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {/* banner part to be fetched later */}
                    <FlatList data={this.state.banners}
						  renderItem={
							  (item) => (
								  <View style={styles.bannerContainer}>
									  <Text style={styles.bannerText}>{item.key}</Text>
								  </View>
							  )
						  }
                    />
                </ScrollView>
            </View>
        );
	}
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    section: {
        marginTop: screenHeight * 0.02
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
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: screenHeight * 0.02,
        marginRight: screenWidth * 0.01,
        marginLeft: screenWidth * 0.03,
        marginBottom: screenHeight * 0.02,
        borderRadius: 10,
        backgroundColor: '#5dc055',
        width: screenWidth * 0.9,
        height: screenHeight * 0.25,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    bannerText: {
        fontSize: 15,
        color: '#fff'
    },
    bannerSectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
    },
    bannerSectionDescription: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#000'
    }
});