/** @format */

import {Platform, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/**
 * index
 * @author
 * created on 2019-01-05
 */



import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Initializing'
            }
        }
    })
});

/**
 * This is for android navigation options
 */
if(Platform.OS === 'android'){
    Navigation.setDefaultOptions({
        statusBar: {
            style: 'dark',
            backgroundColor: '#fff'
        },
        topBar: {
            elevation: 1,
            height: 50,
            hideOnScroll: true,
            drawBehind: true ,
            title: {
                alignment: 'center',
                fontFamily: 'NanumSquareRoundB',
            },
        },
        bottomTabs: {
            // drawBehind: true,
        }
    });
}



// AppRegistry.registerComponent(appName, () => App);

