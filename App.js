/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet,
  Text, View, YellowBox,
} from 'react-native';
import { Provider } from 'react-redux';
//
import AppNavigator from './src/Navigator/AppNavigator';
import configureStore from './src/redux/configureStore';
import NavigationService from './src/Navigator/NavigationService';

YellowBox.ignoreWarnings([
  'Warning:',
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);

const store = configureStore();
// AIzaSyCHQiktZJ0YIGHTn8qua12pu0pdPsctn94

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
