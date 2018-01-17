import React, { PureComponent } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.Text`
  font-size: 20;
  font-weight: 400;
`;

export default class Counter extends PureComponent {
  goBack() {
    if (Actions.counter) {
      Actions.counter();
    }
  }

  render() {
    return (
      <Container>
        <ContentText>
          <Text onPress={this.goBack}>Navigator to Counter</Text>
        </ContentText>
      </Container>
    );
  }
}
