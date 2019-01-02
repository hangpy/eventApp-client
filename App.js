/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import BottomNavigator from "./src/components/BottomNavigator";
import TopNavigator from "./src/components/TopNavigator";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TopNavigator/>
        <BottomNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  }
});
