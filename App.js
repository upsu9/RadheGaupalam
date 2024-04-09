import React, { Component } from 'react'
import { Text, View, StyleSheet,SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import AuthNavigator from './src/navigations/AuthNavigator';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

export class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F9FbFc',
    flex: 1,
  }
});

export default App;
