/**
 * CouponsCard.js
 * @author hangpy
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, FlatList, Image, AppRegistry } from 'react-native';
import {makeMargin, makeRadius, makeWidth} from "../../styles/Style";
import CouponTag from "./CouponTag";
import Icon from "react-native-vector-icons/Ionicons";

export default class CouponsCard extends Component <{}> {

    state = {
        coupons: null
    };

    componentWillMount(): void {
        this.setState({
            coupons: [
                {key: 1, title: '플라잉볼', description: '런칭 기념 플라잉볼 10% 할인 쿠폰',
                    image: require('../../image/flyingball.jpg'), discount: '10% 추가할인', deadline: ''},
                {key: 2, title: '새우꺾기', description: '과기대 학생 종강 이벤트',
                    image: require('../../image/shrimp.jpg'), discount: '10% 추가할인', deadline: ''},
                {key: 3, title: '열화철판', description: '과기대 상권 살리기 이벤트',
                    image: require('../../image/fire.jpg'), discount: '20% 할인', deadline: ''},
                {key: 4, title: '신가쯔', description: '2인분 주문 시 돈가스 증정 이벤트',
                    image: require('../../image/pork.jpg'), discount: '돈가스 증정', deadline: ''},
            ]
        })
    }

    render() {
		return (
            <View style={[styles.container,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                makeWidth()]}>
                <View style={styles.titleBox}>
                    <Text style={{color: '#323232', fontSize: 16}}>쿠폰함</Text>
                </View>
                <View style={styles.listTextBox}>
                    <Text style={styles.listText}>받은 쿠폰 리스트</Text>
                </View>
                <View style={[styles.couponList]}>
                    <FlatList
                        data={this.state.coupons}
                        keyExtractor={(item, key) => key.toString()}
                        renderItem={({item})=>(
                            <CouponTag couponData={item}/>
                        )}
                        ItemSeparatorComponent={()=>(
                            <View style={{height: 20}}/>
                        )}/>
                </View>
                <View style={styles.border}/>
                <View style={[styles.buttonBox]}>
                    <Text style={{fontSize: 23, color: '#323232', marginRight: 10}}>지난 쿠폰 보기</Text>
                    <Icon name='ios-arrow-forward' size={28} color={'#323232'} style={{marginRight: 20}}/>
                </View>
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    border: {
        width: '90%',
        borderWidth: 0.4,
        borderColor: '#cecece',
        margin: 20,
        marginTop: 30
    },
    titleBox: {
        flex:1,
        marginTop: 20
    },
    listTextBox: {
	    flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '92%',
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 20
    },
    listText: {
        fontSize: 13,
        color: '#8b8b8b'
    },
    couponList: {
        flex:1
    },
    buttonBox: {
	    flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25
    }
});