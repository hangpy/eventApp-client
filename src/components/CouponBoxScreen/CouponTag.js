/** 
 * CouponTag.js
 * @author hangpy
 * created on 2018-12-20
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry } from 'react-native';
import {DeviceScreen, getBoldFont, makeRadius, makeSquareRatio} from "../../styles/Style";
import Icon from "react-native-vector-icons/Ionicons";

export default class CouponTag extends Component <{}> {

	state = {
		coupons: null
	};


	render() {

		return (
		    <View style={[styles.container,
				makeRadius()]}>
				<View style={[styles.imageBox]}>
					<Image style={styles.eventImage} source={this.props.couponData.image}/>
				</View>
				<View style={styles.textBox}>
					<View style={[{flex: 1}, styles.textEachBox]}>
						<Icon style={{margin: 3}} name={'md-pricetag'} color={'#ff2d55'} size={13}/>
						<Text style={[{fontSize: 13}, getBoldFont()]}>{this.props.couponData.title}</Text>
					</View>
					<View style={[{flex: 1}, styles.textEachBox]}>
						<Text style={{fontSize: 12, color: '#8b8b8b'}}>{this.props.couponData.description}</Text>
					</View>
					<View style={[{flex: 2}, styles.textEachBox]}>
						<Text style={[{color: "#ff2d55", fontSize: 25}, getBoldFont()]}>{this.props.couponData.discount}</Text>
					</View>
				</View>
		    </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 0.3,
		borderColor: '#aeaeae',
		width: DeviceScreen.width*0.92*0.92,
		height: DeviceScreen.width*0.92*0.92/3.5,
		overflow: 'hidden'
    },
	imageBox: {
		flex: 1.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	eventImage: {
		overflow: 'hidden',
		width: '100%',
		height: '100%'
	},
	textBox: {
		flex: 1.8,
		flexDirection: 'column',
		marginTop: 10,
		marginBottom: 5
	},
	textEachBox: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10
	}
});