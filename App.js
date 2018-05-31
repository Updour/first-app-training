/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './component/HomeScreen'
import Login from './component/HomeScreen'
import DrawNav from './component/menu/'
export default class App extends Component<Props> {
  render() {
    return (
        <HomeScreen />
    );
  }
}

