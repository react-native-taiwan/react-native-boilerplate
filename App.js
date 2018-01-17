/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import {
  Provider,
} from 'react-redux';
import configureStore from './src/store/configureStore';
import Home from "./src/containers/Home";
import Counter from "./src/containers/Counter";
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene path="home" key="home" component={Home} />
          <Scene path="counter" key="counter" component={Counter} />
        </Scene>
      </Router>
      </Provider>
    );
  }
}
