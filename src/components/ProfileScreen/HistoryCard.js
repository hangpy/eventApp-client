/** 
 * HistoryCard.js
 * @author 
 * created on 2018-12-19
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, FlatList, AppRegistry } from 'react-native';
import {chooseBetween, makeMargin, makeRadius, makeSquareRatio, Shadowing} from "../../styles/Style";
import Icon from 'react-native-vector-icons/Ionicons';

export default class HistoryCard extends Component <{}> {

    state = {
        history: null
    };

    componentWillMount(): void {
        // the number of lists to be shown
        const ITEMS_PER_CARD = 5;
        /* TODO: this initialData is the part to be fetch from remote DB in server */
        const initialData = [
            {key: 1, event: '런칭 기념 플라잉볼 10% 할인 쿠폰', date: '2018.12.09'},
            {key: 2, event: '명랑 핫도그 12월 이벤트 쿠폰', date: '2018.12.01'},
            {key: 3, event: '맘스터치 학생회 단체주문 이벤트', date: '2018.11.20'},
            {key: 4, event: '새우꺾기 11.11 하루 특가 이벤트', date: '2018.11.11'},
            {key: 5, event: '내찜닭 생일자 20% 추가 할인 이벤트!', date: '2018.11.10'},
            {key: 6, event: '신가쯔 두배 이벤트', date: '2018.11.1'}
        ];

        // slice as items per card by latest sequence
        const newData = initialData.slice(0, ITEMS_PER_CARD);


        this.setState({
            history: newData
        })
    }

    render() {
		return (
            <View style={[
                styles.container,
                makeSquareRatio(0.92).fiveToFour,
                makeMargin(0.92).marginVertical,
                makeRadius(),
                Shadowing]}>
                {(()=>{
                    // if there is history
                    if(this.state.history) {
                        return(
                            <View style={{flex:1, justifyContent: 'center', width: '100%'}}>
                                <View style={[styles.titleBox, {flex: 0.8}]}>
                                    <Text style={{color: '#323232', fontSize: 16}}>나의 쿠폰 사용 내역</Text>
                                </View>
                                <View style={[styles.historyBox, {flex: 2.4}]}>
                                    <FlatList
                                        data={this.state.history}
                                        keyExtractor={(item, key) => key.toString()}
                                        ItemSeparatorComponent={()=>(
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <View style={{width: '90%', borderWidth: 0.4, borderColor: '#aeaeae'}}/>
                                            </View>
                                        )}
                                        ListHeaderComponent={()=>(
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <View style={{width: '90%', borderWidth: 0.4, borderColor: '#aeaeae'}}/>
                                            </View>
                                        )}
                                        ListFooterComponent={()=>(
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                <View style={{width: '90%', borderWidth: 0.4, borderColor: '#aeaeae'}}/>
                                            </View>
                                        )}
                                        renderItem={({item})=>(
                                            <View style={[styles.historyItem]}>
                                                <Icon style={{margin: 3}} name={'md-pricetag'} color={'#ff2d55'} size={13}/>
                                                <Text style={[{fontSize: 13, color: '#8b8b8b', margin: 3}]}>{item.event}</Text>
                                                <Text style={[{fontSize: 13, color: '#8b8b8b', margin:3, position: 'absolute', right: 0}]}>{item.date}</Text>
                                            </View>
                                        )}
                                    />
                                </View>
                                <View style={[styles.buttonBox, {flex: 0.8}]}>
                                    {/* TODO: to be touchable and connected to stack navigation page for showing history */}
                                    <Text style={{fontSize: 23, color: '#323232', marginRight: 10}}>모두 보기</Text>
                                    <Icon name='ios-arrow-forward' size={28} color={'#323232'} style={{marginRight: 20}}/>
                                </View>
                            </View>
                        )
                    } else {
                        return (
                            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 13, color: '#8b8b8b'}}>아직 쿠폰을 사용한 내역이 없습니다.</Text>
                            </View>
                        )
                    }
                })()}
            </View>
        );
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
		backgroundColor: '#fff',
    },
    titleBox: {
	    justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    historyBox: {
	    justifyContent: 'center',
        width: '100%',
    },
    historyItem:{
	    flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    buttonBox: {
	    flexDirection: 'row',
	    justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    }
});