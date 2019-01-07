import React from 'react';
import { Platform, Text } from 'react-native';

/**
 * This enableFontPatch is for adapting default font type accordingly each device platform.
 * For example, if you use android device and font family, 'Roboto', then this application will
 * show you text as type with Roboto. iOS is also same.
 */
export default function enableFontPatch() {

    const defaultFontFamily = {
        ...Platform.select({
            android: { fontFamily: 'NanumSquareRoundB'  }
        })
    };

    const oldRender = Text.render;
    Text.render = function(...args) {
        const origin = oldRender.call(this, ...args);
        return React.cloneElement(origin, {
            style: [
                origin.props.style,
                defaultFontFamily,
            ],
            allowFontScaling: false
        });
    };
}
