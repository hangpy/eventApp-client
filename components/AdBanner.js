/**
 * AdBanner.js* @author
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import { makeSquareRatio, makeSquareMargin } from  './styles/Style';

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
                {/* banner part to be fetched later */}
                <FlatList horizontal={true}
                    marginRight={10}
                    data={this.state.banners}
                    renderItem={
                        (item) => (
                            <View style={[
                                styles.bannerContainer,
                                makeSquareRatio(0.88).threeToOne,
                                makeSquareMargin(0.88).marginShowingNextBanner]}>
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
        borderRadius: 10,
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