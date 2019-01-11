/**
 * AllianceDetailPage
 * @author
 * created on 2019-01-02
 */

import React, { Component } from 'react';
import {Platform, View, StyleSheet, Text, Button, Image, AppRegistry,
	ScrollView, StatusBar, FlatList, ImageBackground, ViewPagerAndroid
} from 'react-native';
import {Navigation} from "react-native-navigation";
import {DeviceScreen, getBoldFont, isAndroid} from "../../styles/Style";

export default class AllianceDetailPage extends Component <{}> {

	/**
	 * TODO
	 * this state must be update by being inherited from parent component
	 */
	state = {
		key: null,
		imageRefs: [
			{key: 1, ref: require('../../image/fire_al.jpg'), color: 'green'},
			{key: 2, ref: require('../../image/flyingball_al.jpg'), color: 'yellow'},
			{key: 3, ref: require('../../image/shrimp_al.jpeg'), color: 'red'}
		],
		detailDescription:
			'동 해물과 백 두산이 마르고 닳도록' +
			'하느님이 보우 하사 우리 나라만세이!' +
			'1. 테스트1\n' +
			'2. 테스트2\n' +
			'3. 테스트3\n' +
			'4. 이것도 되냐!' +
			'' +
			'으아아아아아앙아아아아'
	};

	static options(passProps) {

		/* TODO: should find out the way to store passed props from react native navigation's passProps */
		AllianceDetailPage._passProps = passProps;

		return {
			statusBar: {

			},
			topBar: {
				visible: true,
				elevation: 0,
				drawBehind: true,
				hideOnScroll: true,
				background: {
					color: 'rgba(0, 0, 0, 0.3)',
					// blur: true
					translucent: true
				},
				backButton: {
					showTitle: false,
					color: '#fff'
				},
				noBorder: true,
				title: {
					text: passProps.item.title,
					color: '#fff',
				},
				rightButtons: [
					{
						id: 'wishButton',
						component: {
							name: 'WishButton'
						},
					},
					{
						id: 'shareButton',
						component: {
							name: 'ShareButton'
						},
					}
				],
			},
			bottomTabs: {
				visible: false,
				drawBehind: true
			}
		}
	}

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}
						contentInsetAdjustmentBehavior={'never'}>
				<StatusBar hidden={true}/>
				<View style={styles.container}>
					<View style={{height: DeviceScreen.height*0.4}}>
						<FlatList
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							data={this.state.imageRefs}
							pagingEnabled={true}
							keyExtractor={(item, key) => key.toString()}
							renderItem={({item}) => {
								return(
									<ImageBackground
										source={item.ref}
										style={{backgroundColor: item.color, width: DeviceScreen.width}}
										imageStyle={{resizeMode: 'cover'}}>
										<View style={{width: DeviceScreen.width, height: '100%',  marginTop: isAndroid(Platform.OS)*50, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
											<Text>{item.key}</Text>
										</View>
									</ImageBackground>
								)
							}}
						/>
					</View>
					<View style={{height: 1000, backgroundColor: '#e9ba29', alignItems: 'center', justifyContent: 'flex-start'}}>

						{/* This View is area for description of event */}
						<Text style={[{fontSize: 30, marginTop: 30, color: '#000'}, getBoldFont()]}>상세 내용</Text>
						<Text>
							{this.state.detailDescription}
						</Text>

					</View>
				</View>
			</ScrollView>
        );
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start'
    },
});