/**
 * AdBanner.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import { makeSquareRatio, makeMargin, makeRadius } from '../styles/Style';

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
            /**
             * TODO
             * loading: the banner which stores in AWS should be loaded
             *          find the way to utilize cache for users to have great experience
             * slide issue: each banner or card must find their place by own when
             *              user flip the scrollView
             */
            <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                {/* banner part to be fetched later */}
                <FlatList horizontal={true}
                    marginRight={10}
                    data={this.state.banners}
                    renderItem={
                        ({item}) => (
                            <View style={[
                                styles.bannerContainer,
                                makeSquareRatio(0.88).threeToOne,
                                makeMargin(0.88).marginShowingNext,
                                makeRadius()]}>
                                <Text style={styles.bannerText}>{item.key}</Text>
                            </View>
                        )
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dd3e3a',
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