/**
 * AccountCard.js
 * @author
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, AppRegistry } from 'react-native';
import { makeSquareRatio, makeMargin, Shadowing, makeRadius, DeviceScreen } from "../styles/Style";
import Icon from 'react-native-vector-icons/Ionicons'

export default class AccountCard extends Component <{}> {

	render() {
		return (
		    <View style={[
		    	styles.container,
				makeSquareRatio(0.92).fourToThree,
				makeMargin(0.92).marginVertical,
				makeRadius(),
				Shadowing]}>
				<View style={[styles.profileImageBox, {flex: 6},
                    makeRadius(undefined, true, true,false,false)]}>
					<View>
						<View style={[styles.profileImage]}>
							{/* To be fetch */}
							<Image source={{uri: '/Users/ihangbok/dev/project/eventApp/client/components/styles/profile_ex.jpeg'}}
								   style={{width: '100%', height: '100%'}}/>
						</View>
                        <View style={[styles.camera, Shadowing]}>
                            <Icon name={'ios-camera'} color={'white'} size={DeviceScreen.width*0.92/4/4*0.7}/>
                        </View>
                    </View>
				</View>
				<View style={[styles.nameBox, {flex: 1}]}>
					<Text style={[styles.name]}>
						{/* To be fetch */}
						항벅
					</Text>
				</View>
				<View style={[styles.accountBox, {flex: 2}]}>
					<Icon/>
					<Text style={styles.account}>
						{/* to be fetch */}
						leehangbok2009@hanmail.net
					</Text>
				</View>
				<View style={[styles.editBox, {flex: 1.5}]}>
					<View style={styles.editButton}>
						<Text style={{fontSize: 13, color: '#fff', fontWeight: '300'}}>내 정보 수정</Text>
					</View>
				</View>
				<View style={[styles.unRegisterBox, {flex: 1.5},
                    makeRadius(undefined, false, false,true,true)]}>
					{/* to be touchable and for alarm box to be shown */}
					<Text style={{fontSize: 11, color: '#8b8b8b', marginRight: 15}}>회원탈퇴</Text>
				</View>
		    </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		flexDirection: 'column',
        backgroundColor: '#fff',
    },
	profileImageBox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	},
	profileImage: {
		width: DeviceScreen.width*0.92/4,
		height: DeviceScreen.width*0.92/4,
		borderRadius: DeviceScreen.width*0.92/4/2,
		overflow: 'hidden',
		backgroundColor: '#bfbfbf' //default
	},
	camera: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: '#323232',
		width: DeviceScreen.width*0.92/4/4,
		height: DeviceScreen.width*0.92/4/4,
		borderRadius: DeviceScreen.width*0.92/4/4/2
	},
	nameBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
	},
	name:{
		fontSize: 18,
		fontWeight: '500',
		color: '#404040',
	},
	accountBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
	},
	account: {
		fontSize: 14,
		fontWeight: '300',
		color: '#404040'
	},
	editBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
	},
	editButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF2D55',
		width: '40%',
		margin: 5,
		borderRadius: 5
	},
	unRegisterBox: {
		flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
	}
});