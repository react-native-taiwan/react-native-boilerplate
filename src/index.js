import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import AppRoutes from "./containers/AppRoutes";
import configureStore from "./configureStore";
import config from './configs';

console.disableYellowBox = config.disableYellowBox;

const store = configureStore();

const RNBoilerplate = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

AppRegistry.registerComponent("RNBoilerplate", () => RNBoilerplate);
