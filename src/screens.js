import { Navigation } from 'react-native-navigation';

import Initializing from './Initializing';
import App from '../App';
import HomeScreenContainer from './components/HomeScreen/HomeScreen';
import AllianceDetailPage from './components/HomeScreen/AllianceDetailPage';
import AdDetailPage from './components/HomeScreen/AdDetailPage';
import SearchButton from './components/HomeScreen/SearchButton';
import MarkerButton from './components/HomeScreen/MarkerButton';
import TitleLogo from './components/HomeScreen/TitleLogo';
import CouponBoxScreen from './components/CouponBoxScreen/CouponBoxScreen';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import SettingScreen from './components/SettingScreen/SettingScreen';
import WishButton from './components/Buttons/WishButton';
import ShareButton from './components/Buttons/ShareButton';

/**
 * place all screens we want to initialize before creating root navigation
 */
export const registerScreens = (Provider, store) => {
    Navigation.registerComponentWithRedux('App', () => App, Provider, store);
    Navigation.registerComponentWithRedux('Initializing', () => Initializing, Provider, store);
    Navigation.registerComponentWithRedux('HomeScreen', () => HomeScreenContainer, Provider, store);
    Navigation.registerComponentWithRedux('AllianceDetailPage', () => AllianceDetailPage, Provider, store);
    Navigation.registerComponentWithRedux('AdDetailPage', () => AdDetailPage, Provider, store);
    Navigation.registerComponentWithRedux('SearchButton', () => SearchButton, Provider, store);
    Navigation.registerComponentWithRedux('MarkerButton', () => MarkerButton, Provider, store);
    Navigation.registerComponentWithRedux('TitleLogo', () => TitleLogo, Provider, store);
    Navigation.registerComponentWithRedux( 'CouponBoxScreen', () => CouponBoxScreen, Provider, store);
    Navigation.registerComponentWithRedux( 'ProfileScreen', () => ProfileScreen, Provider, store);
    Navigation.registerComponentWithRedux( 'SettingScreen', () => SettingScreen, Provider, store);
    Navigation.registerComponentWithRedux('WishButton', () => WishButton, Provider, store);
    Navigation.registerComponentWithRedux('ShareButton', () => ShareButton, Provider, store);
};
