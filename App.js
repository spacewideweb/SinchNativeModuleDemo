/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { NativeModules } from 'react-native';

const SinchManager = NativeModules.SinchManager;
const HOST = "clientapi.sinch.com";
const KEY = "0a16013d-4a8b-4a67-8b2d-73ba2fe2b5bc";
const SECRET = "DwlxAbb2yk6Y4plX94T1Uw==";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    SinchManager.configure(KEY, SECRET, HOST, "testUserid");
    SinchManager.setSupportCalling(true);
    SinchManager.setSupportMessaging(true);
    SinchManager.enableManagedPushNotifications();
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
