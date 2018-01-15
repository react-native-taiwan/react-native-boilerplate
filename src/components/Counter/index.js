import React, { PureComponent } from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Immutable from "immutable";
import { Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.Text`
  font-size: 20;
  font-weight: 400;
`;

const CounterText = styled.Text`
  font-size: 16;
  font-weight: 400;
`;

export default class Counter extends PureComponent {
  static propTypes = {
    demo: propTypes.instanceOf(Immutable.Map).isRequired,
    sub: propTypes.func.isRequired,
    less: propTypes.func.isRequired,
  };

  state = {
    count: 0
  };

  render() {
    return (
      <Container>
        <Row>
          <ContentText>Counter</ContentText>
          <CounterText>{this.props.demo.get("count")}</CounterText>
          <Button
            onPress={() => this.props.sub({count: 1})}
            title="+"
          />
          <Button
            onPress={() => this.props.less({count: 1})}
            title="-"
          />
          <ContentText onPress={Actions.pop}>Back</ContentText>
        </Row>
      </Container>
    );
  }
}
