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

export const Shadowing = {
    shadowColor: '#1d1d1d',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
};


export const makeRadius = (size=10, topLeft=true, topRight=true, bottomRight=true, bottomLeft=true) => {

    if(typeof size !== 'number') {
        console.error("The size parameter must be number type");
        return;
    }
    if(typeof topLeft !== 'boolean' || typeof topRight !== 'boolean' ||
        typeof bottomRight !== 'boolean' || typeof bottomLeft !== 'boolean'){
        console.error("Confirm second to fifth parameters' type, which must be boolean type");
        return;
    } else {
        topLeft = topLeft === true? 1 : 0;
        topRight = topRight === true? 1 : 0;
        bottomRight = bottomRight === true? 1 : 0;
        bottomLeft = bottomLeft === true? 1 : 0;
    }
    return {
        borderTopLeftRadius: topLeft * size,
        borderTopRightRadius: topRight * size,
        borderBottomRightRadius: bottomRight * size,
        borderBottomLeftRadius: bottomLeft * size,
    }
};

/* parameter is for to be standard for other length in case for any device platform */
export const makeSquareRatio = (widthRatio) => StyleSheet.create({
    oneToOne: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio
    },
    fourToThree: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio * 0.75
    },
    fiveToFour: {
        width: DeviceScreen.width * widthRatio,
        height: DeviceScreen.width * widthRatio * 0.8
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

export const makeMargin = (widthRatio) => StyleSheet.create({
    marginShowingNext: {
        marginTop: DeviceScreen.height * 0.02,
        marginRight: DeviceScreen.width * (1-widthRatio)/8,
        marginLeft: DeviceScreen.width * (1-widthRatio)/3,
        marginBottom: DeviceScreen.height * 0.02,
    },
    marginVertical: {
        marginTop: DeviceScreen.height * 0.01,
        marginRight: DeviceScreen.width * (1-widthRatio)/2,
        marginLeft: DeviceScreen.width * (1-widthRatio)/2,
        marginBottom: DeviceScreen.height * 0.01,
    }
});

export const makeWidth = (widthRatio = 0.92) => ({
    width: DeviceScreen.width*widthRatio
});