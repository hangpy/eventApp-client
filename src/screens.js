import { Navigation } from 'react-native-navigation';


/**
 * place all screens we want to initialize before creating root navigation
 */
export const registerScreens = () => {
    Navigation.registerComponent('Initializing', () => require('./Initializing').default);
    Navigation.registerComponent('App', () => require('../App').default);
    Navigation.registerComponent('HomeScreen', () => require('./components/HomeScreen/HomeScreen').default);
    Navigation.registerComponent( 'CouponBoxScreen', () => require('./components/CouponBoxScreen/CouponBoxScreen').default);
    Navigation.registerComponent( 'ProfileScreen', () => require('./components/ProfileScreen/ProfileScreen').default);
    Navigation.registerComponent( 'SettingScreen', () => require('./components/SettingScreen/SettingScreen').default);
    Navigation.registerComponent('AllianceDetailPage', () => require('./components/HomeScreen/AllianceDetailPage').default);
    Navigation.registerComponent('TitleLogo', () => require('./components/HomeScreen/TitleLogo').default);
    Navigation.registerComponent('SearchButton', () => require('./components/HomeScreen/SearchButton').default);
    Navigation.registerComponent('MarkerButton', () => require('./components/HomeScreen/MarkerButton').default);
    Navigation.registerComponent('WishButton', () => require('./components/Buttons/WishButton').default);
    Navigation.registerComponent('ShareButton', () => require('./components/Buttons/ShareButton').default);
    Navigation.registerComponent('AdDetailPage', () => require('./components/HomeScreen/AdDetailPage').default);
};
