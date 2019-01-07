/**
 * HotEventBanner.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Image, AppRegistry, FlatList, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { makeSquareRatio, makeMargin, getBoldFont} from '../../styles/Style';

export default class HotEventBanner extends Component <{}> {

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
						<Text style={styles.bannerSectionDescription}>꾸준히 업데이트되는 혜택을 놓치지 마세요!</Text>
						<Text style={[styles.bannerSectionTitle, getBoldFont()]}>아번주 핫 이벤트</Text>
                    </View>
					<Icon name='ios-arrow-forward' size={40} style={styles.margin}/>
                </View>
				<ScrollView horizontal
							showsHorizontalScrollIndicator={false}>
                    {/* banner part to be fetched later */}
					<FlatList horizontal={true}
							  marginRight={10}
							  data={this.state.banners}
							  renderItem={
								  ({item}) => (
									  <View style={[styles.bannerContainer,
										  makeSquareRatio(0.88).sixteenToNine,
										  makeMargin(0.88).marginShowingNext]}>
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
		borderRadius: 10,
        backgroundColor: '#80a9dd',
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
		color: "#000"
	},
	bannerSectionDescription: {
    	fontSize: 14,
		color: '#000'
	}
});