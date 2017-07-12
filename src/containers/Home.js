import React, { Component, PropTypes } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default class Home extends Component {
  static propTypes = {};

  toCounter = () => {
    Actions.counter();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Boilerplate!
        </Text>
        <TouchableOpacity onPress={this.toCounter}>
          <Text style={styles.instructions}>Navigate to Counter</Text>
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
