import "react-native";
import React from "react";
import Counter from "../Counter";
import sinon from "sinon";
import { Actions } from "react-native-router-flux";
import { shallow, mount } from "enzyme";

it("should count Button onPress Event", () => {
  const tree = shallow(<Counter />);
  expect(tree.state().count).toBe(0);
  tree.find("Button").first().simulate("press")
  expect(tree.state().count).toBe(1);
  tree.find("Button").at(1).simulate("press");
  expect(tree.state().count).toBe(0);
});

it("should test ContentText text", () => {
  const tree = mount(<Counter />);
  expect(tree.find("Text").at(0).text()).toBe("Counter");
  expect(tree.find("Text").at(4).text()).toBe("+");
  expect(tree.find("Text").at(6).text()).toBe("-");
})