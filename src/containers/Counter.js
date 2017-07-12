import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Counter from "../components/Counter";
import * as CounterActions from "../actions/counter";
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  back: {
    margin: 10,
    fontSize: 20
  }
});

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class CounterContainer extends Component {
  static propTypes = {};

  handleBack = () => {
    Actions.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Counter {...this.props} />
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")} />
      </View>
    );
  }
}
