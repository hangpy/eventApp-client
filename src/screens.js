import { Navigation } from 'react-native-navigation';

const registerScreens = () => {
    Navigation.registerComponent('HomeScreen', () => require('./components/HomeScreen/HomeScreen').default);
    Navigation.registerComponent( '')
}