import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";

export const goToApp = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            animate: true,
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
                                fontSize: 12,
                                text: '홈',
                                icon: require('./image/ios-home.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',

                                // icon: <Icon name='ios-home' size={24}/>
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
                                fontSize: 12,
                                text: '쿠폰함',
                                icon: require('./image/ios-cube.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                                // icon: <Icon name='ios-cube' size={24}/>
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
                                fontSize: 12,
                                text: '마이페이지',
                                icon: require('./image/ios-user.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                                // icon: <Icon name='ios-person' size={24}/>
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
                                fontSize: 12,
                                text: '설정',
                                icon: require('./image/ios-setting.png'),
                                selectedIconColor: '#ff2d55',
                                selectedTextColor: '#ff2d55',
                                // icon: <Icon name='ios-settings' size={24}/>
                            }
                        }
                    }
                }
            ]
        }
    }
});
