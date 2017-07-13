import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, Platform, Alert, Text } from "react-native";
import { connect } from "react-redux";
import { Router, Scene, ActionConst, Actions } from "react-native-router-flux";
import COLORS from "../configs/color";

import Home from "./Home";
import Counter from "./Counter";

const RouterWithRedux = connect()(Router);

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: COLORS.white
  },
  leftButtonIconStyle: {
    tintColor: COLORS.black
  }
});

@connect(state => state, dispatch => ({ dispatch }))
export default class AppRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenes: null
    };
  }

  componentDidMount() {
    this.setState({
      scenes: Actions.create(
        <Scene key="root">
          <Scene key="home" component={Home} initial />
          <Scene key="counter" component={Counter} />
        </Scene>
      )
    });
  }

  getSceneStyle = (props, computedProps) => {
    const style = {
      flex: 1,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null
    };
    if (computedProps.isActive) {
      style.marginTop = computedProps.hideNavBar ? 0 : 64;
      // if (Platform.OS === 'ios') {
      //   style.paddingBottom = computedProps.hideTabBar ? 0 : 56;
      // } else {
      //   style.paddingBottom = computedProps.hideTabBar ? 0 : 50;
      // }
    }
    return style;
  };

  render() {
    if (this.state.scenes) {
      return (
        <RouterWithRedux
          getSceneStyle={this.getSceneStyle}
          navigationBarStyle={styles.navigationBarStyle}
          leftButtonIconStyle={styles.leftButtonIconStyle}
          scenes={this.state.scenes}
        />
      );
    }
    return null;
  }
}
