/** 
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, Image, AppRegistry, ScrollView, Button } from 'react-native';
import AdBanner from "./AdBanner";
import HotEventBanner from "./HotEventBanner";
import AllianceEventList from "./AlianceEventList";
import {Navigation} from "react-native-navigation";
import {backgroundColor, isAndroid} from "../../styles/Style";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {increment} from '../../modules/counter';

class HomeScreen extends Component <{}> {
    static options(passProps) {
        return {
            statusBar: {
                style: 'dark',
                backgroundColor: '#fff',
            },
            topBar: {
                // drawBehind: true,
                // hideOnScroll: true,
                title: {
                    color: '#000',
                    fontFamily: 'NanumSquareRoundB',
                    component: {
                        name: 'TitleLogo',
                        alignment: 'center',
                    }
                },
                rightButtons:[
                    {
                        id: 'markerButton',
                        component: {
                            name: 'MarkerButton'
                        },
                        // // icon: require('../../image/ios-marker-50.png'),
                        // icon: <Image source={require('../../image/ios-marker-50.png')}/>,
                        // buttonFontSize: 25,
                        // buttonFontWeight: '600',
                        // title: 'map',
                        // disableIconTint: true,
                        // showAsAction: 'always',
                        // testID: 'logoutButton',
                    }
                ],
                leftButtons: [
                    {
                        id: 'searchButton',
                        component: {
                            name: 'SearchButton'
                        }
                    }
                ]
            }
        };
    }

	render() {

		return (
		    /* TODO: need to  consider about design for background color */
            <ScrollView  showsVerticalScrollIndicator={false} style={{backgroundColor: '#fafafa'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#000'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Redux Test [ 삭제 예정 ] </Text>
                    <Button title={'더하기'} onPress={this.props.onIncrement} color={'blue'}/>
                    <Text style={{flex:1, justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold'}}>initial state: {this.props.number}</Text>
                </View>
                <View style={styles.container}>
                    <AdBanner componentId={this.props.componentId}/>
                    <HotEventBanner/>
                    <AllianceEventList componentId={this.props.componentId}/>
                </View>
		    </ScrollView>
        );
	}
}

// function to connect store's initial state to current component;'s props
const mapStateToProps = (state) => ({
    number: state.getIn(['counter', 'number']),
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => {
        console.log('get in mapDispatchToProps');
        return dispatch(increment(2))
    },
});

HomeScreen.propsType = {
    number: PropTypes.number,
    onIncrement: PropTypes.func,
};

HomeScreen.defaultProps = {
    onIncrement: () => console.warn('onIncrement not defined')
};

const HomeScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: isAndroid(Platform.OS)*60,
    },
});

export default HomeScreenContainer;