import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

export const goToApp = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            animate: true,
            drawBehind: false,
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'HomeScreen'
                                }
                            },
                        ],
                        options: {
                            bottomTab: {
                                fontSize: 10,
                                text: '홈',
                                icon: require('./image/ios-home-25.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                            },
                        }
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'CouponBoxScreen'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                fontSize: 10,
                                text: '쿠폰함',
                                icon: require('./image/ios-cube-25.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                            }
                        }
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'ProfileScreen'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                fontSize: 10,
                                text: '마이페이지',
                                icon: require('./image/ios-user-25.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                            }
                        }
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'SettingScreen'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                fontSize: 10,
                                text: '설정',
                                icon: require('./image/ios-settings-25.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55'
                            }
                        }
                    }
                }
            ]
        }
    }
});
