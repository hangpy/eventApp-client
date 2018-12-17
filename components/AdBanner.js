/**
 * AdBanner.js* @author
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';

export default class AdBanner extends Component <{}> {

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
            <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                <FlatList horizontal={true}
                    data={this.state.banners}
                    renderItem={
                        (item) => (
                            <View style={styles.bannerContainer}>
                                <Text style={styles.bannerText}>{item.key}</Text>
                            </View>
                        )
                    }
                />
            </ScrollView>
        );
    }
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: screenHeight * 0.02,
        marginRight: screenWidth * 0.01,
        marginLeft: screenWidth * 0.03,
        marginBottom: screenHeight * 0.02,
        borderRadius: 10,
        backgroundColor: '#dd3e3a',
        width: screenWidth * 0.9,
        height: screenHeight * 0.15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    bannerText: {
        fontSize: 15,
        color: '#fff'
    }
});