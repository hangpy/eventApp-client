/**
 * Style.js
 * This style chunks suppose several ways to define components' shape with functions
 * @hangpy
 * created on 2018-12-17
 */
import { StyleSheet, Dimensions } from 'react-native';

export const DeviceScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
};

/* parameter is for to be standard for other length in case for any device platform */
export const makeSquareRatio = (widthRatio) => StyleSheet.create({
    fourToThree: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio * 0.75
    },
    sixteenToNine: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio * 0.56
    },
    threeToOne: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio * 0.33
    }
});

export const makeSquareMargin = (widthRatio) => StyleSheet.create({
    marginShowingNextBanner: {
        marginTop: DeviceScreen.height * 0.02,
        marginRight: DeviceScreen.width * (1-widthRatio)/8,
        marginLeft: DeviceScreen.width * (1-widthRatio)/3,
        marginBottom: DeviceScreen.height * 0.02,
    },
    marginForVerticalBanner: {
        marginTop: DeviceScreen.height * 0.02,
        marginRight: DeviceScreen.width * (1-widthRatio)/2,
        marginLeft: DeviceScreen.width * (1-widthRatio)/2,
        marginBottom: DeviceScreen.height * 0.02,
    }
});